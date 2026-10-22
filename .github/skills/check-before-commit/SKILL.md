---
name: check-before-commit
description: "Use before committing to check the files you name (or the current file/selection) against the project's typescript, tailwind, and translation skills, then apply the fixes directly to those files. Triggers on 'check before commit', 'pre-commit check', 'is this compliant', 'lint my changes for conventions'."
disable-model-invocation: true
argument-hint: "File(s) to check (e.g. 'src/app/not-found.tsx src/components/elements/Text.tsx'); omit to check the current file or selection"
---
# Check Before Commit

Run a compliance pass over the files the developer names, and **fix what the findings
require inside those files**. This is a check-and-fix task — findings in the target files
are applied immediately, not just listed.

## Targets

- If the request names file paths, those files are the **only** targets.
- Otherwise use the currently open file, or the current selection when it is non-empty.
- If neither yields a target, ask which file(s) to check — do not guess or widen the scope.

## 1. Load the skills first (mandatory)

Read these three skill files before judging anything:

- `.agents/skills/typescript/SKILL.md`
- `.agents/skills/tailwind/SKILL.md`
- `.agents/skills/translation/SKILL.md`

Reading them is the sanctioned exception to the `.agents/` rule — read-only, never edit
anything under `.agents/`. Judge against what those files say, not against your own
recollection of these conventions.

## 2. Check each target

Consult the skill files for the full rules; the checks below are the pass to run.

**typescript** — `interface` for props and complex object shapes, `type` for unions,
tuples, mapped/conditional types and utility compositions, inline types for tiny
components; no `any`; `@/*` path aliases; `"use client"` present only when the component
actually needs state, handlers, or browser APIs.

**tailwind** — semantic color tokens only (never raw color values); class order per the
skill; responsive variants adjacent to their base utility; `cn()` for merged or
conditional classes; never edit `src/components/ui/*` (shadcn primitives — report instead).

**translation** — no hardcoded user-facing English: **every string a user reads is rendered by
`<Text>` (or `RevealText`)**. A `t("…")` call inside JSX is a finding — including in a client
component — and is replaced with `<Text>`. `t()` is allowed in exactly two places: (a)
plain-string attributes that `<Text>` cannot reach (`placeholder`, `aria-label`, `title`,
`alt`), and (b) non-rendering logic (`i18n.changeLanguage`, `i18n.language`). Only plain
string children of `<Text>` are translated, so each string gets its own `<Text as="span">`.
Keys are the English copy and must exist in all four of
`public/locales/{en,el,de,fr}/translation.json`.

## 3. Apply the fixes

- Edit **only** the target files. Never modify any other file.
- Make the smallest change that resolves the finding. Do not reformat, reorder, restyle,
  rename, or restructure anything the three skills do not flag.
- Rewriting a rendered `{t("Copy")}` into `<Text>Copy</Text>` is an in-file fix — apply it.
  `<Text>` calls `t()` with the same key, so no locale file changes. If that leaves
  `useTranslation`/`t` unused in the file, remove the now-unused import as part of the same
  fix; if `t` is still needed for an attribute, keep it.
- When a finding can only be fixed outside the targets — adding a key to
  `public/locales/*`, touching `src/components/ui/*`, moving a component into
  `_features/<feature>/` — **do not** edit it. Record it under **Needs your call** with the
  exact change and the file it belongs in. Never invent `el`/`de`/`fr` copy.
- Findings that belong to other project rules (semantic HTML, responsive layout, Server
  Component defaults) get one line in **Not changed deliberately** and are left alone —
  this pass covers the three skills only.

## 4. Verify

- Run `npx tsc --noEmit` and `npm run lint`. Report only failures your edits introduced;
  pre-existing warnings are listed as-is, not fixed.
- If you touched any `public/locales/**` file, also run
  `node .agents/skills/translation/scripts/check-locales.mjs`.

## Output format

1. **Summary** — files checked, findings fixed, findings needing a decision.
2. **Findings table** — `File:line | Skill | Issue | Action (fixed / needs your call)`.
3. **Not changed deliberately** — one line each.
4. **Needs your call** — the exact change plus the file it belongs in (only when the fix
   falls outside the targets).

## Guardrails

- Never commit, stage, branch, or push — this runs _before_ the commit, not instead of it.
- No new dependencies, no `package.json` edits, no config changes.
- Do not run state-changing terminal commands; verification commands only.
- If a target file is already compliant, say so plainly and change nothing.
