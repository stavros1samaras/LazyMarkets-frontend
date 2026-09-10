---
name: accessibility
description: >-
  Write and review semantically-structured UI for LazyMarkets. THE FIRST RULE IS
  SEMANTIC HTML — use native landmarks, headings, buttons, links, lists, and
  form controls before anything else. Trigger on terms like "semantic html",
  "semantic markup", "landmarks", "heading", "a11y", "accessible", "screen
  reader", "role", or structuring a component/page with meaningful HTML.
---

# Semantic HTML for LazyMarkets

THE FIRST RULE OF ACCESSIBLE UI IS SEMANTIC HTML. Get the markup right before
anything else — native elements carry implicit role, keyboard behaviour,
focus, and screen-reader announcement for free. **ARIA patches gaps in HTML
semantics; it never replaces them.**

## Why Semantics Matter

Correct elements mean browsers, assistive tech, SEO crawlers, and future
devs all interpret the page identically. Wrong-but-"styled-like-it" markup
breaks keyboards, breaks narration, and lies about structure.

## Choosing Elements — Priority Order

Pick the highest-value native element that fits:

1. **Landmarks** — `<nav>`, `<main>`, `<aside>`, `<footer>`, `<header>`,
   `<section>`, `<article>`, `<form>`.
2. **Interactive natives** — `<button>`, `<a href>`, `<input>`, `<select>`,
   `<textarea>`, `<details>/<summary>`, `<dialog>`.
3. **Structural** — `<ul>/<ol>/<li>`, `<table>`, `<figure>`, `<dl>`,
   `<blockquote>`, `<hr>`.
4. **Fallback** — ARIA `role=` only when no native element expresses the
   meaning … and reconsider twice before settling.

## Map Onto Our Primitives

We already ship semantic element primitives — lean on them:

| Element primitive | Renders     | Use for                                        |
| ----------------- | ----------- | ---------------------------------------------- |
| `Main`            | `<main>`    | Unique page content (**exactly one per page**) |
| `Header`          | `<header>`  | Top banner region                              |
| `SectionCard`     | `<section>` | Grouped thematic content (give it a heading)   |
| Nav (via ui)      | `<nav>`     | Navigation regions                             |
| Footer            | `<footer>`  | Site footer                                    |

Exactly **one** `<main>` per page. Repeated independently-distributable units →
`<article>`; themed groupings → `<section>` with a descriptive heading.

## Heading Hierarchy

Headings draw the outline screen readers narrate and power jump-nav.

- Exactly **one `h1`** per page stating the page subject.
- Cascade logically: `h1` → `h2` → `h3`… never skip levels.
- Headings denote **structure**, not visual weight — style bigness with
  typography/Tailwind, not by inflating the heading tag.
- Major `<section>`s deserve a heading so AT users can orient.
- Decoratives shouldn't masquerade as headings.

### ❌ Skipped level / styled-span-as-heading

```tsx
<h1>Countries Overview</h1>
<p>Intro copy</p>
<span className="text-2xl font-bold">GDP Analysis</span> {/* span ≠ heading */}
<h4>Detail row</h4> {/* jumped straight to h4 */}
```

### ✅ Proper cascade

```tsx
<h1>Countries Overview</h1>
<p>Intro copy</p>
<h2>GDP Analysis</h2>
<h3>Top Economies</h3>
<ul><li>United States</li></ul>
```

## Interactions Belong On Natives

Anything that responds to a click must be a genuine `<button>` (or `<a href>`
when it navigates) — never a decorated `<div>`/`<span>`:

- Grants keyboard focus natively (Tab reaches it; Space/Enter activate it).
- Announced as "button" to screen readers.
- Supplies `:focus`/`:focus-visible` affordances for free.

❌ Mouse-only div trap:

```tsx
<div onClick={() => expand()} className="cursor-pointer">
	Expand
</div>
```

✅ Pointer + keyboard parity:

```tsx
<button type="button" onClick={() => expand()} className="cursor-pointer">
	Expand
</button>
```

Notes:

- Lists of repeating rows → real `<ul>/<ol>` + `<li>`, not stacked divs.
- Tables of figures → real `<table>` with `<th>` headers, not grid-of-divs.
- Link-looking navigation targets → `<a href>`, respecting router link
  components underneath.

## Keyboard Accessibility

Whatever a mouse can operate, a keyboard must be able to reach and trigger.

- Logical Tab order forwards (Shift+Tab backwards) mirrors visual/DOM order —
  don't scatter focus jumps arbitrarily.
- Preserve a visible focus indicator (`:focus-visible`) on every focusable
  element; never blanket-disable outlines.
- Widgets operated with arrow keys (dropdown menus, selects, slider thumbs)
  keep a single Tab stop via roving `tabIndex` — only the active descendant
  holds `tabIndex={0}`, siblings sit at `{-1}`.
- Escape closes popups/overlays/menus; reopen-with-Escape and restore focus to
  the originating control on close.
- Modal overlays trap Tab cycling internally and return focus to the trigger
  on dismissal — our shadcn Dialog/Menu/Popover already do this, so prefer
  them over hand-built floats.

## ARIA — `aria-label`

Give every interactive/informational element an accessible name. Where no
visible text conveys it, attach `aria-label` directly on the element.

Typical spots in our UIs:

- **Icon-only buttons** — a lone Lucide icon has no intrinsic name; label the
  action it triggers.
- **Close/X glyphs** — spell out "Close" rather than leaving a naked ✕.
- **Ambiguous repeats** — disambiguate identical visuals (multiple gear/edit
  icons) with contextual labels.
- **Non-text media** — audio players, video embeds lacking captions.

```tsx
{
	/* Without a label a screen reader hears silence for this icon button */
}
;<button type="button" onClick={toggle}>
	<Sun />
</button>

{
	/* With aria-label it announces "Toggle theme" */
}
;<button type="button" aria-label="Toggle theme" onClick={toggle}>
	<Sun />
</button>
```

Guardrails:

- Reserve `aria-label` for when visible text is absent — if neighbouring text
  already describes the control, prefer associating it (`aria-labelledby`) or
  letting the inner text speak instead of duplicating a label.
- Pair decorative icons inside a labelled button with `aria-hidden="true"` +
  `pointer-events-none` so the graphic isn't narrated twice.
- Match the label to spoken English phrasing ("Edit country GDP", not cryptic
  abbreviations).

### `aria-description`

When `aria-label` alone isn't enough to convey meaning, add a supplementary
description with `aria-description`. It provides extra detail that the name
(`aria-label`) can't fit without being wordy.

Use cases:

- **Buttons whose action isn't self-evident** — a label says _what_;
  `aria-description` says _why_ or _what happens_.
- **Elements with keyboard hints** — surface non-obvious shortcuts a sighted
  user might discover via hover but a screen-reader user cannot.
- **Content with extended context** — a brief name plus a deeper description
  for complex regions (data cards, chart containers, form groups).

```tsx
{
	/* Label names the action; description adds detail a screen reader can relay */
}
;<button
	type="button"
	aria-label="Copy URL"
	aria-description="Copies the current page URL to your clipboard and shows a confirmation toast."
	onClick={copyUrl}
>
	<Copy />
</button>
```

Guardrails:

- Never duplicate `aria-label` verbatim — add distinct supplementary info
  only.
- Keep descriptions under two sentences; if longer content is needed, link to
  a visible explanation or use `aria-describedby` pointing at on-page text.
- Treat `aria-description` as an enhancement, not a replacement for a clear
  label.

### `aria-hidden`

Hide elements from the accessibility tree entirely. Use it when an element is
purely decorative or redundant — it should **not** be narrated by screen readers.

When to apply:

- **Decorative icons** inside a button that already carries an
  `aria-label` — prevent double-narration ("sun, toggle theme" → just "toggle
  theme").
- **Repetitive visual fluff** — divider icons, ornamental borders, hover
  reveals whose info is expressed elsewhere.
- **Duplicate content** — the same text rendered twice for visual layout (e.g.
  a visible heading and an identical `aria-label`); hide one with
  `aria-hidden="true"`.

```tsx
{
	/* Label on button; icon is decorative — hide from AT */
}
;<button type="button" aria-label="Toggle theme" onClick={toggle}>
	<Sun className="h-4 w-4" aria-hidden="true" />
</button>

{
	/* This entire wrapper is decorative; hide the container too */
}
;<div aria-hidden="true" className="pointer-events-none opacity-40">
	<Sparkles />
	<span className="sr-only">—</span>
</div>
```

Guardrails:

- Never `aria-hidden="true"` on an element that is the **only** carrier of
  meaningful information — screen readers will miss it entirely.
- Avoid `aria-hidden="true"` on a focusable element (`tabIndex ≥ 0`);
  it becomes a hidden focus trap that sighted users can tab to but AT can't
  read.
- If toggling visibility (show/hide), remove `aria-hidden` when shown and
  restore it when hidden — don't leave stale state.

## Visual Accessibility

Ensure everyone can perceive and understand the content regardless of
eyesight, colour vision, or motion sensitivity.

- **Colour contrast** — body text on any background must meet at least
  **4.5 : 1** (large text ≥ 3 : 1). UI graphics and icon-only elements
  targeting **3 : 1**. Our semantic tokens (`text-foreground`,
  `text-muted-foreground`, `border-border`) are pre-tuned; spot-check muted
  text on subtle backgrounds.
- **Never rely on colour alone** — a green badge meaning "gain" or a red one
  meaning "loss" excludes colour-blind users. Pair hue with a symbol, icon,
  or text label (↑ / ↓, "+"/"−", descriptive words).
- **Text must reflow** — content must remain readable when zoomed to 200 %
  without horizontal scrolling. Avoid fixed pixel widths on text containers;
  let `max-w-*` and flex/grid handle wrapping.
- **`prefers-reduced-motion`** — respect the OS setting. Disable or strip
  heavy animations (parallax, spinning loaders, auto-advancing carousels) when
  `@media (prefers-reduced-motion: reduce)` matches. Keep micro-interactions
  that aid comprehension (fade-in for new data, short easing).
- **Touch targets** — interactive controls must have at least a **44 × 44
  px** hit area on touch devices. Tailwind's `size-*` / `p-*` utilities make
  this easy; don't undersize icon-only buttons.

## Structural Sanity Checks

While composing JSX, mentally replay the bare-HTML skeleton:

- Would removing every class/style still yield comprehensible structure?
- Could someone skim the doc outline (single `<main>`, ordered headings,
  nested lists/tables) blindfolded?
- Am I nesting validly (`<p>` inside `<p>`, orphaned `<li>`)?
