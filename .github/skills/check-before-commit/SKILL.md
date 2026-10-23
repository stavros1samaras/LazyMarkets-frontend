---
name: check-before-commit
description: "Use before committing to check the files you name (or the current file/selection) against the project's typescript, tailwind, and translation skills, then apply the fixes directly to those files. Triggers on 'check before commit', 'pre-commit check', 'is this compliant', 'lint my changes for conventions'."
disable-model-invocation: true
argument-hint: "File(s) to check (e.g. 'src/app/not-found.tsx src/components/elements/Text.tsx'); omit to check the current file or selection"
---

# Check Before Commit

Run a compliance pass over the files the developer names, and **fix what the findings
require inside those files**. This is a check-and-fix task — findings in the target files
are applied immediately, not just listed. A `<Text>` string that has no locale key is also
fixed, in the four `public/locales/*` files (see "Apply the fixes").

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

**typescript** (`.agents/skills/typescript/SKILL.md`)

- `interface` for component prop types, domain models, and multi-field object shapes that
  may grow or be extended/merged.
- Exception: a small component that is not extended and has two or fewer props gets an
  inline type — do not create an `interface` for it.
- `type` for tuples, unions, primitive aliases, and function type aliases.
- `type` is mandatory (not a preference) for mapped types, conditional types, utility-type
  compositions (`Partial<T>`, `Record<K, V>`), unions/intersections of object types, and
  call-signature types used in unions.
- Static arrays in a config or constants file are declared `as const`, combined with
  `satisfies <Shape>[]` when the items must conform to a declared shape. A widened
  `const X: Shape[] = [...]` is a finding — it collapses the literal types consumers derive
  from the config.
- `@typescript-eslint/consistent-type-definitions` may enforce the `interface` default; it
  cannot express the `type`-required cases above, so do not "fix" them into `interface`.

**tailwind** (`.agents/skills/tailwind/SKILL.md`)

- CSS-first v4: no `tailwind.config.js` and no `theme.extend` — new tokens belong in the
  `@theme inline` CSS variables in `globals.css`.
- Semantic color tokens only — never raw values (`bg-[#161f2c]`, `text-white`) and never a
  `dark:` variant that hardcodes a color over a token; `dark:` is for layout/behavioural
  tweaks the tokens cannot express.
- Class order: display → display sub-properties (justify/items/gap/grid-cols) → position →
  transforms → sizing → margins → padding → background/colors → borders/radius →
  shadows/opacity → typography → transitions/animations → state variants last, with
  responsive variants (`sm:`…`xl:`) adjacent to their base utility.
- Long class lists may be broken across lines; short ones stay on a single line.
- Custom CSS classes come first, before the Tailwind utilities.
- `cn()` for conditional/merged classes; a consumer `className` merges last so it wins. Long
  class strings repeated across elements are extracted to a `const` before `return()` (not
  trivial ones).
- Mobile-first; prefer flex/grid over fixed widths and shared wrappers over ad-hoc padding.
- Never edit `src/components/ui/*` (shadcn primitives) — style at the call site.

**translation** (`.agents/skills/translation/SKILL.md`)

- Every string a user reads is rendered by `<Text>` (or `RevealText`). Only plain string
  children are translated, so mixed content gets one `<Text as="span">` per string.
- A rendered `{t("…")}` is a defect — rewrite it as `<Text>…</Text>`, client components
  included. `t()` is allowed only in (a) plain-string attributes `<Text>` cannot fill
  (`placeholder`, `aria-label`, `title`, `alt`) and (b) non-rendering logic
  (`i18n.changeLanguage`, `i18n.language`).
- The English copy is the key and must exist in all four of
  `public/locales/{en,el,de,fr}/translation.json`, at the same position, never `en` only.
- Config-driven content keeps its English string in the config and renders it as
  `<Text>{item.label}</Text>`.
- Flat keys containing `.`/`,` are valid (i18next `ignoreJSONStructure`) — do not nest them.
- Never translate data: chart values, tickers, emails, URLs, cookie values, `metadata`.
- i18n lives only in `src/_features/_translation/`: no new providers/helpers/locale state
  elsewhere, no `?lang=`, `localStorage`, locale routing, second i18next instance or
  `i18next-browser-languagedetector`, and `LOCALES` must not contain `en`.

## 3. Apply the fixes

- Edit the target files. The one sanctioned exception is
  `public/locales/{en,el,de,fr}/translation.json` when a `<Text>` string has no key — the
  translation skill requires the key in all four files. Never modify anything else.
- Make the smallest change that resolves the finding. Do not reformat, reorder, restyle,
  rename, or restructure anything the three skills do not flag.
- Rewriting a rendered `{t("Copy")}` into `<Text>Copy</Text>` is an in-file fix — apply it.
  `<Text>` calls `t()` with the same key, so no locale file changes. If that leaves
  `useTranslation`/`t` unused in the file, remove the now-unused import as part of the same
  fix; if `t` is still needed for an attribute, keep it.
- A `<Text>` string missing from the locales is fixed too: add it to all four files at the
  same position, key = the English copy, value = the English copy in `en` and the existing
  translation in `el`/`de`/`fr` where one exists. Never invent `el`/`de`/`fr` copy — keep the
  English value there and flag it in the summary. Then run the parity check.
- When a finding can only be fixed outside the targets — touching `src/components/ui/*`,
  moving a component into `_features/<feature>/`, or changing any other file — **do not**
  edit it. Record it under **Needs your call** with the exact change and the file it
  belongs in.
- Findings that belong to other project rules — semantic HTML and heading order,
  Server/Client Component defaults, `any` usage, path aliases, the `Span`/`Div` primitives —
  get one line in **Not changed deliberately** and are left alone; this pass covers the
  three skills only.

## 4. Verify

- Run `npx tsc --noEmit` and `npm run lint`. Report only failures your edits introduced;
  pre-existing warnings are listed as-is, not fixed.
- If you touched any `public/locales/**` file, also run
  `node .agents/skills/translation/scripts/check-locales.mjs`, and run it again after the
  last locale edit. If that script is not present in the checkout, assert parity yourself:
  the four files must expose exactly the same key set.

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
