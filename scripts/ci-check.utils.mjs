/**
 * Helpers for scripts/ci-check.mjs — process, port and env plumbing plus the dev-server
 * hand-over. Nothing in here knows about the check pipeline itself.
 */

import { spawn, spawnSync } from "node:child_process"
import { existsSync, mkdirSync, openSync, readFileSync } from "node:fs"
import { join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import process from "node:process"

export const ROOT = resolve(fileURLToPath(new URL("..", import.meta.url)))

/** The one URL Playwright ever drives (baseURL + webServer in playwright.config.ts). */
export const BASE_URL = "http://localhost:3000"

const PORT = 3000

/** Restarted after the run, so the check leaves your dev server as it found it. */
const DEV_COMMAND = "npm run dev"
const DEV_LOG = join(ROOT, ".next", "dev-server.log")

/** Injected as CI secrets; locally these come from .env (NODE_ENV=production during `next build`). */
const REQUIRED_ENV = ["REMOTE_API_URL", "API_KEY"]

/** Highest precedence first, matching Next.js' own env loading order. */
const ENV_FILES = [".env.production.local", ".env.local", ".env.production", ".env"]

const useColor = Boolean(process.stdout.isTTY) && !process.env.NO_COLOR
const paint = (code, text) => (useColor ? `\u001b[${code}m${text}\u001b[0m` : text)

/** Shared with the main script, so every line of output is styled the same way. */
export const c = {
    bold: (text) => paint("1", text),
    dim: (text) => paint("2", text),
    cyan: (text) => paint("36", text),
    green: (text) => paint("32", text),
    red: (text) => paint("31", text),
    yellow: (text) => paint("33", text),
}

/** PIDs stopped by the "port" step — a non-empty list means a dev server is owed back. */
const stoppedPids = []
let devServerStarted = false

/** The handed-over `npm run dev`, so Ctrl+C can take its process tree down with us. */
let foregroundChild = null

export function formatDuration(ms) {
    return ms < 1000 ? `${ms}ms` : `${(ms / 1000).toFixed(1)}s`
}

/** Warns when the secrets needed by the production build are absent. */
export function reportMissingEnv() {
    const declaredOnDisk = readDeclaredEnvNames()
    const missing = REQUIRED_ENV.filter((name) => !process.env[name] && !declaredOnDisk.has(name))
    if (missing.length === 0) return

    console.warn(c.yellow(`Warning: ${missing.join(", ")} not found in the shell env or any .env file.`))
    console.warn(c.dim("\tThe production build/start reads these; CI gets them from repository secrets."))
}

/** Names declared in .env files. Values are never read, so secrets are never logged. */
function readDeclaredEnvNames() {
    const names = new Set()

    for (const file of ENV_FILES) {
        const path = join(ROOT, file)
        if (!existsSync(path)) continue

        for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
            const trimmed = line.trim()
            if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue
            names.add(trimmed.slice(0, trimmed.indexOf("=")).trim())
        }
    }

    return names
}

const sleep = (ms) => new Promise((done) => setTimeout(done, ms))

/** True while something answers — a timeout still means the port accepted a connection. */
async function isSomethingListening(url = BASE_URL) {
    try {
        await fetch(url, { signal: AbortSignal.timeout(1000) })
        return true
    } catch (error) {
        return error instanceof Error && error.name === "TimeoutError"
    }
}

/** Playwright only releases the port a moment after it exits, so give it a beat. */
async function waitForFreePort(timeoutMs) {
    const deadline = Date.now() + timeoutMs

    while (Date.now() < deadline) {
        if (!(await isSomethingListening())) return true
        await sleep(250)
    }

    return !(await isSomethingListening())
}

/** PIDs listening on :3000 (Windows `netstat`, elsewhere `lsof`). */
function findPortOwners() {
    if (process.platform === "win32") {
        const result = spawnSync("netstat -ano -p TCP", { cwd: ROOT, shell: true, encoding: "utf8" })
        const pids = new Set()

        for (const line of (result.stdout ?? "").split(/\r?\n/)) {
            const match = line.match(/^\s*TCP\s+\S+:3000\s+\S+\s+LISTENING\s+(\d+)/i)
            if (match) pids.add(match[1])
        }

        return [...pids]
    }

    const result = spawnSync(`lsof -ti tcp:${PORT}`, { cwd: ROOT, shell: true, encoding: "utf8" })
    return (result.stdout ?? "").split(/\s+/).filter(Boolean)
}

/** Best-effort process name, only so the log line says what was stopped. */
function describeProcess(pid) {
    if (process.platform !== "win32") return `PID ${pid}`

    const result = spawnSync(`tasklist /FI "PID eq ${pid}" /FO CSV /NH`, { cwd: ROOT, shell: true, encoding: "utf8" })
    const name = (result.stdout ?? "").match(/"([^"]+)"/)?.[1]

    return name ? `${name} (PID ${pid})` : `PID ${pid}`
}

/** Windows kills the whole tree — `next dev` leaves workers behind. */
function stopProcess(pid) {
    const command = process.platform === "win32" ? `taskkill /PID ${pid} /T /F` : `kill -9 ${pid}`
    return spawnSync(command, { cwd: ROOT, shell: true, stdio: "ignore" }).status === 0
}

/** Same, phrased for a human reading the output. */
function stopHint(pid) {
    return process.platform === "win32" ? `taskkill /PID ${pid} /T /F` : `kill ${pid}`
}

/** Synchronous last resort for the signal handler: whatever still holds :3000 goes. */
function forceReleasePort() {
    for (const pid of findPortOwners()) stopProcess(pid)
}

/**
 * CI makes Playwright boot the production server itself, and it refuses to share the
 * port — so your dev server has to go first. It is restarted once the run is over.
 */
export async function freePort() {
    const owners = findPortOwners()

    if (owners.length === 0) {
        console.log(c.dim(`\tNothing on ${BASE_URL} — starting fresh.`))
        return
    }

    for (const pid of owners) {
        console.log(c.dim(`\tStopping ${describeProcess(pid)} — it holds ${BASE_URL}`))
        if (!stopProcess(pid)) throw new Error(`Could not stop PID ${pid}.`)

        stoppedPids.push(pid)
    }

    if (!(await waitForFreePort(8000))) throw new Error(`Port ${PORT} is still in use.`)
}

/** Same env as the steps, minus CI — a dev server must not think it is CI. */
function devEnv() {
    const env = { ...process.env }
    delete env.CI

    return env
}

/** Steps run CI-less; the test step opts in via `env`, which is what makes it production. */
export function buildEnv(step) {
    const env = { ...process.env }
    delete env.CI

    return { ...env, ...step.env }
}

/** Fallback for a piped shell: detached, output to a file, so it outlives this script. */
function startDetachedDevServer() {
    if (devServerStarted) return
    devServerStarted = true

    mkdirSync(join(ROOT, ".next"), { recursive: true })
    const log = openSync(DEV_LOG, "a")
    const child = spawn(DEV_COMMAND, { cwd: ROOT, env: devEnv(), detached: true, shell: true, stdio: ["ignore", log, log], windowsHide: true })
    child.unref()

    console.log(c.dim(`\n↻ ${DEV_COMMAND} back up on :${PORT} — detached, PID ${child.pid}`))
    console.log(c.dim(`  stop it: ${stopHint(child.pid)} — no terminal attached, so its output is suppressed`))
}

/** Runs a command in the current terminal and resolves once it exits. */
function runInForeground(command) {
    return new Promise((done) => {
        const child = spawn(command, { cwd: ROOT, env: devEnv(), shell: true, stdio: "inherit" })
        foregroundChild = child

        child.on("exit", (code, signal) => {
            foregroundChild = null
            done(signal ? `signal ${signal}` : code)
        })
    })
}

/**
 * Gives the dev server back once the results are printed. In an interactive terminal
 * (VS Code's included) it takes over that terminal, so `next dev` output, HMR errors and
 * Ctrl+C behave exactly as if you had run it yourself; a piped shell gets the detached
 * fallback instead, since there would be no terminal to keep the output visible.
 */
export async function handBackDevServer() {
    if (stoppedPids.length === 0) return

    if (!(await waitForFreePort(5000))) console.warn(c.yellow(`Warning: ${BASE_URL} is still busy — the dev server may pick another port.`))

    if (!process.stdout.isTTY) {
        startDetachedDevServer()
        return
    }

    devServerStarted = true
    console.log(c.dim(`\n▶ handing this terminal to \`${DEV_COMMAND}\` — press Ctrl+C to stop it\n`))
    console.log(c.dim(`${DEV_COMMAND} exited (${await runInForeground(DEV_COMMAND)})`))
}

/**
 * Runs from the main script's signal handler. Ctrl+C in the handed-over terminal reaches us
 * first: npm's own signal forwarding is unreliable on Windows, so the dev tree is killed here
 * or it survives as an orphan holding :3000. The port sweep also clears the Playwright
 * production server when the signal lands mid-test.
 */
export function cleanupAfterSignal() {
    if (foregroundChild) stopProcess(foregroundChild.pid)
    forceReleasePort()

    if (!foregroundChild && stoppedPids.length && !devServerStarted) startDetachedDevServer()
}
