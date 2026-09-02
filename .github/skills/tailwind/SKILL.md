---
name: tailwind
description: >-
  Use this skill whenever writing or reviewing Tailwind CSS (v4) classes in
  this project, including responsive layouts, dark/light theming, semantic
  color tokens, and the cn() helper.
---

# Tailwind CSS (v4) Guidelines for LazyMarkets

This project uses **Tailwind CSS v4** with a CSS-first configuration (no
`tailwind.config.js`). Styling is driven by CSS variables and the `@theme`
block in `src/app/globals.css`. Always follow these rules when authoring or
reviewing Tailwind classes.

## 1. Configuration Model (v4)

- Tailwind is imported once via `@import "tailwindcss";` in `globals.css`.
- Theme tokens (colors, radius, borders) are declared in the `@theme inline`
  block, which maps CSS variables to Tailwind utility names (e.g.
  `--color-background` → `bg-background`).
- Do **not** add a `tailwind.config.js` or `theme.extend` object. Extend the
  design system by editing the CSS variables in `globals.css` instead.

## 2. Use Semantic Color Tokens (Never Hardcode)

Always prefer the project's semantic tokens over raw color values so the UI
stays theme-aware. Available tokens (use with `bg-`, `text-`, `border-`,
`ring-`, `fill-`, etc.):

| Token                                | Purpose                          |
| ------------------------------------ | -------------------------------- |
| `background` / `foreground`          | Page & base text                 |
| `card` / `card-foreground`           | Card surfaces                    |
| `popover` / `popover-foreground`     | Popovers, dropdowns              |
| `muted` / `muted-foreground`         | Subtle surfaces & secondary text |
| `primary` / `primary-foreground`     | Primary actions                  |
| `secondary` / `secondary-foreground` | Secondary actions                |
| `accent` / `accent-foreground`       | Highlighted surfaces             |
| `destructive`                        | Destructive actions / errors     |
| `border` / `ring`                    | Borders & focus rings            |
| `main`                               | Brand accent (extra)             |
| `neutral`                            | Neutral surface (extra)          |

### ❌ Incorrect (hardcoded color)

```tsx
<div className="bg-[#161f2c] text-white">...</div>
```

### ✅ Correct (semantic token)

```tsx
<div className="bg-background text-foreground">...</div>
```

## 3. Dark / Light Mode Awareness

- Theme switching is handled by `next-themes` (class strategy, `.dark` on
  `<html>`). All tokens already have light and dark values in `globals.css`.
- Never write `dark:` variants that override semantic tokens with hardcoded
  colors — the tokens already adapt. Only use `dark:` for layout/behavioral
  tweaks that the tokens can't express.
- Verify components remain legible in **both** modes using the theme toggle.

### ❌ Incorrect

```tsx
<div className="bg-white dark:bg-zinc-900">...</div>
```

### ✅ Correct

```tsx
<div className="bg-background">...</div>
```

## 4. Combine Classes with `cn()`

Use the `cn()` helper (`clsx` + `tailwind-merge`) for conditional and merged
classes. It is imported from `@/lib/utils`. `tailwind-merge` resolves
conflicting utilities (e.g. `px-2` + `px-4` → `px-4`).

When a component accepts a `className` prop, **always** merge it through `cn()`
and pass it **last** so consumer-supplied classes win over the component's
internal defaults.

```tsx
import { cn } from "@/lib/utils"

// Internal defaults first, consumer className last
function Card({ className }: { className?: string }) {
	return <div className={cn("rounded-lg border border-border bg-card", className)} />
}
```

## 5. Responsive & Layout Conventions

- Use mobile-first breakpoints (`sm:`, `md:`, `lg:`, `xl:`).
- Prefer flexbox/grid utilities over fixed widths.
- Use `container`/max-width wrappers from shared layout components
  (`PageLayout`, `Card`/`CardContent`) rather than ad-hoc padding on every page.

## 6. Path Aliases

When importing helpers or components, use the configured aliases:
`@/components/*`, `@/lib/*`, `@/utils/*`, `@/_features/*`.

## 7. shadcn/ui Base Components

This skill complements `shadcn-styling`. Never edit files in
`src/components/ui/` directly — style them only via `className` at the call
site using the tokens above.

## 8. Class Ordering Convention

Write Tailwind classes in a consistent, predictable order so styles are easy
to scan and review. Follow this sequence:

1. **Display** — `flex`, `grid`, `block`, `hidden`, `inline-flex`, etc.
2. **Display sub-properties** — `justify-*`, `items-*`, `gap-*`, `grid-cols-*`, etc.
3. **Position** — `relative`, `absolute`, `fixed`, `top-*`, `bottom-*`, `left-*`, `right-*`, `inset-*`, `z-*`.
4. **Transforms** — `translate-*`, `rotate-*`, `scale-*`.
5. **Sizing** — `w-*`, `h-*`, `min-w-*`, `max-h-*`, `size-*`.
6. **Margins** — `m-*`, `mx-*`, `mt-*`, `my-*`.
7. **Padding** — `p-*`, `px-*`, `pt-*`, `py-*`.
8. **Background & colors** — `bg-*`, `fill-*`, `stroke-*`.
9. **Borders & radius** — `border`, `border-*`, `rounded-*`.
10. **Shadows & opacity** — `shadow-*`, `opacity-*`.
11. **Typography** — `font-*`, `text-*`, `leading-*`, `tracking-*`.
12. **Transitions & animations** — `transition-*`, `ease-*`, `duration-*`, `animate-*`.
13. **State variants** — Interactive/state variants (`hover:*`, `focus:*`, `active:*`, `dark:*`) go **last**.
14. **Responsive variants** (`sm:*`, `md:*`, `lg:*`, `xl:*`) must stay **adjacent to their base utility** — e.g. `text-base md:text-2xl font-semibold` is correct, whereas `text-base font-semibold md:text-2xl` is wrong (the responsive class is separated from its base).

### Example (correct order)

```tsx
<div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 relative top-0 z-10 w-full max-w-5xl lg:max-w-6xl min-h-48 mx-auto mt-6 p-6 md:px-8 bg-card border border-border rounded-xl shadow-lg opacity-100 text-base md:text-lg font-medium text-foreground leading-relaxed tracking-wide transition-all ease-in-out duration-300 hover:bg-accent hover:shadow-xl">
	Content
</div>
```

### ❌ Incorrect (scattered order)

```tsx
<div className="px-8 hover:bg-accent text-base flex shadow-lg md:px-10 rounded-xl w-full gap-4 font-medium relative border border-border mt-6 lg:max-w-6xl items-center bg-card max-w-5xl leading-relaxed transition-all z-10 min-h-48 mx-auto opacity-100 flex-col hover:shadow-xl">
	Content
</div>
```

## 9. Breaking Long Class Lists

When a component or element has a **long** `className`, you may break the
classes across multiple lines to keep them readable. Group related categories
from rule 8 together — for example, put **Display**, **Display
sub-properties**, and **Position** on one line, and **Sizing**, **Margins**,
and **Padding** on another.

Only do this when the class list is genuinely long. For short or
medium-length class strings, keep everything on a single line.

### Example (long className, grouped across lines)

```tsx
<div
	className="flex items-center justify-between relative top-0 z-10
		w-full h-12 mx-auto px-4
		border border-border bg-card shadow-sm
		text-sm transition-colors hover:bg-accent"
/>
```

### Example (very long className, strict one-category-group-per-line)

When a component is packed with classes, break it strictly so each group from
rule 8 sits on its own line: **Display** + sub-properties, then **Position**,
then **Transforms**, then **Sizing** + **Margins** + **Padding**, then
**Borders** + **Background** + **Shadows**, then **Typography** +
**Transitions**, and finally **state variants**.

```tsx
<div
	className="flex items-center justify-between gap-2
		relative top-0 left-0 z-20
		translate-y-0 rotate-0
		w-full h-16 mx-auto my-2 px-4 py-2
		border border-border rounded-lg bg-card shadow-sm
		text-sm font-medium text-foreground transition-colors
		hover:bg-accent focus:ring-2 focus:ring-ring md:h-20"
/>
```

### ❌ Incorrect (over-splitting a short className)

```tsx
<div
	className="flex
		items-center
		justify-between
		px-4"
/>
```

## 10. Put Custom CSS Classes First

When a `className` mixes a custom CSS class (a class defined in your own
stylesheets, e.g. `customCssClass`) with Tailwind utility classes, always put
the **custom CSS class first**, before the Tailwind utilities. This applies to
plain `className` strings and to `cn()` calls alike.

### ✅ Correct (custom class first)

```tsx
<div className="customCssClass flex items-center gap-2 rounded-lg" />

<div className={cn("customCssClass flex items-center gap-2 rounded-lg", className)} />
```

### ❌ Incorrect (custom class buried among utilities)

```tsx
<div className="flex items-center gap-2 customCssClass rounded-lg" />

<div className={cn("flex items-center gap-2 customCssClass rounded-lg", className)} />
```

## 11. Extract Repeated Class Strings into a `const`

When a component has multiple elements or child components that reuse the **same
long** class string, define that string once in a `const` variable **before the
`return()`**, then pass the variable through `cn()`. This keeps the JSX clean
and avoids duplication.

Only do this for **long** class strings. Do **not** extract trivial ones like
`className="flex"` or `className="px-4"` — inline those directly.

### ✅ Correct (shared long class string extracted)

```tsx
export function StatsPanel() {
	const panelClass =
		"flex flex-col gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:bg-accent"

	return (
		<section>
			<div className={cn(panelClass)}>
				<span>Total Revenue</span>
				<span>$48,200</span>
			</div>
			<div className={cn(panelClass)}>
				<span>Active Users</span>
				<span>1,284</span>
			</div>
			<div className={cn(panelClass)}>
				<span>Open Tickets</span>
				<span>37</span>
			</div>
		</section>
	)
}
```

### ❌ Incorrect (long class string duplicated inline)

```tsx
export function StatsPanel() {
	return (
		<section>
			<div className="flex flex-col gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:bg-accent">
				<span>Total Revenue</span>
				<span>$48,200</span>
			</div>
			<div className="flex flex-col gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:bg-accent">
				<span>Active Users</span>
				<span>1,284</span>
			</div>
			<div className="flex flex-col gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:bg-accent">
				<span>Open Tickets</span>
				<span>37</span>
			</div>
		</section>
	)
}
```

### ✅ Correct (fewer classes, still worth extracting)

```tsx
export function TagRow() {
	const tagClass = "inline-flex items-center gap-1 rounded-full border border-border bg-muted px-3 py-1 text-xs"

	return (
		<div>
			<span className={cn(tagClass)}>React</span>
			<span className={cn(tagClass)}>Next.js</span>
			<span className={cn(tagClass)}>Tailwind</span>
		</div>
	)
}
```

### ❌ Incorrect (same shorter class string duplicated inline)

```tsx
export function TagRow() {
	return (
		<div>
			<span className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-3 py-1 text-xs">React</span>
			<span className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-3 py-1 text-xs">Next.js</span>
			<span className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-3 py-1 text-xs">
				Tailwind
			</span>
		</div>
	)
}
```
