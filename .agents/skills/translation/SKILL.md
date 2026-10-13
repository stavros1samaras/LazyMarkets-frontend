---
name: translation
description: >-
  Use this skill for anything touching user-facing copy in this project —
  wrapping text in the Text component, adding or repairing translation keys,
  i18next / react-i18next strings, the `_translation` feature, the `locale`
  cookie, adding a language (el, de, fr), or hunting hardcoded English.
  Triggers on "translate this", "wrap this in Text", "missing translation
  key", "hardcoded string", "check the locales".
---

# Translation (i18n) for LazyMarkets

Everything about translation lives in **three places and nowhere else**:

1. **`src/_features/_translation/`** — the entire i18n layer.
2. **`src/components/elements/Text.tsx`** — the only component that translates.
3. **`public/locales/{en,el,de,fr}/translation.json`** — the strings.

The locale lives in a **cookie**, never in the URL, so every route stays one
canonical URL and `metadata` stays English.

Never add i18n code, providers, helpers, or locale state anywhere else.

## When to Use

- Adding or changing any user-facing string.
- Checking a file for text that is not wrapped in `Text`, or for strings that
  are missing from the locale files.
- Adding a new language to the app.
- Debugging text that won't translate, or `[object Object]` in the DOM.
- Touching anything under `src/_features/_translation/`.

## Architecture — the only source of truth

| File                                                     | Responsibility                                                                                                                                                                                            |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/_features/_translation/i18n.js`                     | i18next instance. **Statically imports `en`** and sets `fallbackLng: "en"`.                                                                                                                               |
| `src/_features/_translation/config.ts`                   | `LOCALES` — the lazy-loaded, non-English locales (`el`, `de`, `fr`). `en` is intentionally **not** here.                                                                                                  |
| `src/_features/_translation/server.ts`                   | `getLanguage()` — reads the `locale` cookie server-side, returns `{ locale, translationResource }`.                                                                                                       |
| `src/_features/_translation/I18n.provider.tsx`           | Client `I18nextProvider`; `addResourceBundle` when missing, then `changeLanguage`.                                                                                                                        |
| `src/_features/_translation/hooks.ts`                    | `useDocumentLanguage(language)` — keeps `<html lang>` in sync.                                                                                                                                            |
| `src/_features/_translation/types.ts`                    | `TranslationResource`, `LocaleConfig`.                                                                                                                                                                    |
| **`src/components/elements/Text.tsx`**                   | **The only translating component.** `Text` calls `t()` on its string children; `RevealText` (same file) does the same for a single string. Its props: `as` (`h1`-`h4`, `p`, `span`, `div`) and `asChild`. |
| `public/locales/<code>/translation.json`                 | The strings: `en`, `el`, `de`, `fr`. Served statically; non-`en` files are fetched on demand.                                                                                                             |
| `src/app/layout.tsx`                                     | Calls `getLanguage()` in an async RSC and wraps the tree in `I18nProvider`.                                                                                                                               |
| `public/scripts/locale_cookie.js`                        | `beforeInteractive` script; sets `<html lang>` from the cookie before hydration.                                                                                                                          |
| `.../_navigation/NavigationButtons/LanguageDropdown.tsx` | Writes the `locale` cookie, lazy-fetches the bundle, calls `changeLanguage`.                                                                                                                              |

Data flow: `LanguageDropdown` writes `locale=<code>` → server `getLanguage()`
reads it → `I18nProvider` loads the bundle → `<Text>` / `t()` render it.

**Bundled check:** [scripts/check-locales.mjs](./scripts/check-locales.mjs) —
`node .agents/skills/translation/scripts/check-locales.mjs`. Asserts every
locale exposes exactly the `en` key set. Exits 1 on drift; run it after any
locale-file edit.

## Rules

1. **Everything the user reads is wrapped in `<Text>`.** Headings, labels,
   buttons, paragraphs, toasts, empty states — no exceptions. Raw JSX text and
   bare `{t("…")}` calls inside a component are defects.
2. **Every string inside `<Text>` must be a key in all four locale files.**
   `Text` passes its string child straight to `t()`, so a missing key renders
   the raw English in every locale.
3. **If a key is missing, add it to all four files** —
   `public/locales/{en,el,de,fr}/translation.json` — same key, same position.
   Never leave a string that exists in only some of them.
4. **The English copy is the key.** `"Population": "Population"` in `en`,
   `"Population": "Πληθυσμός"` in `el`. Not an invented id like
   `home.hero.title`.
5. **`t()` is allowed for one case only**: an element attribute that `<Text>`
   physically cannot fill (see below). Everything rendered on screen goes
   through `<Text>`.
6. **Never translate data.** Chart values, tickers, emails, URLs, cookie
   values and `metadata` stay untranslated.
7. Flat keys are fine: 42 existing keys contain `.`/`,` (i18next resolves them
   via `ignoreJSONStructure`); don't "fix" them into nested objects.

## Rendering copy — `<Text>` only

| Context                                    | How                                                                                       |
| ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| Any user-facing text                       | `<Text>English copy</Text>` — `Text` calls `t()` on the string child for you.             |
| Headings / inline text                     | `<Text as="h2">…</Text>`, `<Text as="span">…</Text>`                                      |
| Server Component (no provider inside it)   | Render `<Text>` — it is a client component, the RSC → client translation bridge.          |
| Config-driven content (`config.ts` arrays) | Keep the English string in the config and render it with `<Text>{item.label}</Text>`.     |
| Mixed text + elements                      | One `<Text>` per string — only **string** children are translated; elements pass through. |

`RevealText` (same file) translates too, but expects a **single string**.

### The one exception: element attributes

`<Text>` renders an element, so it can never fill an attribute that needs a
plain string. For those — and only those — call `t()`:

```tsx
<Input placeholder={t("Search countries")} />
<Button aria-label={t("Open the menu")}>
	<Menu />
</Button>
```

What a user **reads on the page** is still `<Text>`: no `<p>{t("…")}</p>`, no
`<span>{t("…")}</span>`. `useTranslation()` remains fine in a client component
for `i18n` itself (language switching — see `LanguageDropdown.tsx`); that is not
`t()` and does not render copy.

## Procedure A — Add or change a UI string

1. Wrap the copy in `<Text>` (or `RevealText`).
2. The English copy **is** the key. Look it up in
   `public/locales/en/translation.json`.
3. **If the key is missing, add it to all four files** — `en`, `el`, `de`,
   `fr` — at the same position, with an identical key. The `en` value is the
   copy itself. Use a real `el`/`de`/`fr` translation when you have one;
   otherwise put the English copy and flag it for the developer — never invent
   a translation.
4. Verify — run the [key-parity check](./scripts/check-locales.mjs)
   (`node .agents/skills/translation/scripts/check-locales.mjs`), then work the
   checklist below.

> Renaming English copy means renaming the key in **all four** files. Search
> `public/locales/**` for the old string before editing usage sites.

## Procedure B — Add a new locale (e.g. `it`)

1. Add `public/locales/it/translation.json` — copy `en` and translate the
   values, keeping keys and order identical.
2. Add the entry to `LOCALES` in `src/_features/_translation/config.ts`:
   ```ts
   { code: "it", loadTranslations: async () => (await import("../../../public/locales/it/translation.json")).default }
   ```
3. Add a `<SelectItem value="it">IT</SelectItem>` in `LanguageDropdown.tsx`.
4. Verify — run the [key-parity check](./scripts/check-locales.mjs), then switch
   to the new language in the header dropdown.

## Procedure C — Check a file for translation compliance

1. Every user-facing string in the file must sit inside `<Text>` or
   `RevealText`. Report unwrapped text and bare `{t("…")}` in JSX as defects.
2. For every `<Text>` string child, confirm the **exact** string exists as a key
   in all four locale files (mind `&apos;` and joined lines — JSX collapses them
   to a single space).
3. Add every missing key to all four files (Procedure A, step 3).
4. The only `t()` allowed outside `<Text>` is an element attribute.
5. Finish with the key-parity check.

## Verification Checklist

- [ ] Every user-facing string in the touched files sits inside `<Text>` or
      `RevealText`.
- [ ] Every `<Text>` string exists as a key in all four locale files.
- [ ] `node .agents/skills/translation/scripts/check-locales.mjs` passes
      (identical key set across locales).
- [ ] No `t()` outside `<Text>` except an element attribute.
- [ ] Switching language in the header dropdown updates the string.
- [ ] `<html lang>` matches the selected locale (`useDocumentLanguage`).
- [ ] No `[object Object]` in the DOM (a sign that a non-string child was
      passed to `t()`).
- [ ] `npx tsc --noEmit` / `npm run lint` clean.

## Anti-Patterns

- `{t("Search")}` rendered as a child (`<p>{t("…")}</p>`, `<span>{t("…")}</span>`)
  — wrap it: `<Text>Search</Text>`.
- Bare JSX text with no `<Text>` wrapper — that string is never translated.
- A `<Text>` string that is not a key in one or more locale files — the raw
  English leaks into every other language.
- Adding a key to `en` only and shipping the untranslated fallback.
- Wrapping mixed content in `<Text>` and expecting all of it to translate —
  **only string children are passed to `t()`**; element children pass through
  untouched. Translate each string in its own `<Text as="span">` instead.
- Adding `en` to `LOCALES` (it is bundled in `i18n.js`) or replacing the
  static `en` import.
- Building locale routing, a `?lang=` param, `localStorage`, or React context
  for language — the cookie + `_translation` feature is the contract.
- Introducing `i18next-browser-languagedetector` or a second i18next instance.
- Creating i18n helpers, providers, or locale state outside
  `src/_features/_translation/`.
