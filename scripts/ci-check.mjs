#!/usr/bin/env node
/**
 * Pre-commit check for LazyMarkets (frontend-next).
 *
 * Steps, in this order:
 *   1. npx eslint .
 *   2. npx playwright install [--with-deps] chromium
 *   3. free :3000 — stop whatever holds it (your dev server), to hand it back at the end
 *   4. npm run build
 *   5. npx playwright test with CI=true, so Playwright boots the production build
 *      itself via `npm run start` instead of relying on a dev server
 *
 * Your dev server is handed back afterwards — in this very terminal when it is
 * interactive (VS Code's included), so the `next dev` output stays visible.
 *
 * Exit code 0 means every step passed, so the `main` CI job should pass too.
 * There are no options — `npm run check` is the whole interface.
 * Port/process/env plumbing and the dev-server hand-over live in ci-check.utils.mjs.
 */

import { spawnSync } from "node:child_process"
import process from "node:process"

import {
    BASE_URL,
    ROOT,
    buildEnv,
    c,
    cleanupAfterSignal,
    formatDuration,
    freePort,
    handBackDevServer,
    reportMissingEnv,
} from "./ci-check.utils.mjs"

/**
 * The steps, in order. `run` replaces the spawned command for steps that need real
 * logic, and `env` layers extra variables over an otherwise CI-less environment.
 */
const STEPS = [
    {
        id: "lint",
        label: "Lint",
        command: "npx eslint .",
    },
    {
        id: "browsers",
        label: "Install Playwright Chromium",
        command: `npx playwright install ${process.platform === "linux" ? "--with-deps " : ""}chromium`,
    },
    {
        id: "port",
        label: "Free :3000",
        command: "stop whatever holds :3000",
        run: freePort,
    },
    {
        id: "build",
        label: "Build",
        command: "npm run build",
    },
    {
        id: "test",
        label: "Playwright tests",
        command: "npx playwright test",
        // CI is what makes Playwright boot `npm run start` and keep `forbidOnly: true` on.
        env: { CI: "true" },
    },
]

async function runStep(step) {
    process.stdout.write(`\n${c.cyan("▶")} ${c.bold(step.label)} ${c.dim(`— ${step.command}`)}\n\n`)

    const startedAt = Date.now()

    if (step.run) {
        try {
            await step.run()
        } catch (error) {
            console.log(c.red(`\t${error instanceof Error ? error.message : String(error)}`))
            return { step, durationMs: Date.now() - startedAt, failed: true, status: null, signal: null, note: "see above" }
        }

        return { step, durationMs: Date.now() - startedAt, failed: false, status: 0, signal: null }
    }

    const result = spawnSync(step.command, { cwd: ROOT, env: buildEnv(step), shell: true, stdio: "inherit" })
    const durationMs = Date.now() - startedAt

    if (result.error) throw new Error(`${step.command} could not be started: ${result.error.message}`)

    return { step, durationMs, failed: result.status !== 0, status: result.status, signal: result.signal }
}

function printSummary(results, totalMs) {
    const width = Math.max(...STEPS.map((step) => step.label.length))
    const line = c.dim("─".repeat(width + 22))

    console.log(`\n${line}`)

    for (const step of STEPS) {
        const result = results.find((entry) => entry.step.id === step.id)
        const label = step.label.padEnd(width)

        if (result) {
            const mark = result.failed ? c.red("✖") : c.green("✔")
            const note = result.failed
                ? c.red(result.note ?? `exit ${result.status ?? result.signal}`)
                : c.dim(formatDuration(result.durationMs))
            console.log(`${mark} ${label}  ${note}`)
        } else {
            console.log(`${c.dim("•")} ${c.dim(label)}  ${c.dim("not run")}`)
        }
    }

    console.log(line)

    const failure = results.find((entry) => entry.failed)
    if (failure) {
        console.log(c.red(`\n✖ "${failure.step.label}" failed — fix the error above, then re-run.\n`))
        return false
    }

    console.log(c.green(`\n✔ All checks passed in ${formatDuration(totalMs)} — safe to commit to main.\n`))
    return true
}

async function main() {
    console.log(c.bold("\nLazyMarkets — pre-commit check"))
    console.log(c.dim(`Steps: ${STEPS.map((step) => step.id).join(" → ")}`))
    console.log(c.dim(`Tests run against the production build on ${BASE_URL} (CI=true)`))

    reportMissingEnv()

    const startedAt = Date.now()
    const results = []
    let thrown = null

    try {
        for (const step of STEPS) {
            const result = await runStep(step)
            results.push(result)
            if (result.failed) break
        }
    } catch (error) {
        thrown = error
    }

    // Printed before the hand-over, because that call only returns when the dev server stops.
    if (!printSummary(results, Date.now() - startedAt)) process.exitCode = 1
    if (thrown) throw thrown

    await handBackDevServer()
}

/** Cancelling mid-run must not leave your dev server down — that is the whole reason we stop it. */
for (const signal of ["SIGINT", "SIGTERM"]) {
    process.on(signal, () => {
        cleanupAfterSignal()
        process.exit(signal === "SIGINT" ? 130 : 143)
    })
}

await main().catch((error) => {
    console.error(`\n${c.red("✖")} ${error instanceof Error ? error.message : String(error)}\n`)
    process.exitCode = 1
})
