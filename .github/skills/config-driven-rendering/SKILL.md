---
name: config-driven-rendering
description: >-
  Use this skill whenever creating, extending, or reviewing config-driven
  rendering in this project — where a static `config.ts` array (holding titles,
  labels, data, or component references) drives what a renderer component
  outputs. Triggers on `config.ts` files, `ComponentType`/`React.ElementType`
  fields, `as const satisfies` data, and renderers that `.map()` over a config.
---

# Config-Driven Rendering for LazyMarkets

## What is this pattern?

**Config-driven rendering** separates _what_ is rendered from _how_ it is
rendered. Instead of hand-writing each card, field, or list item, you:

1. Define a **type** that describes one item of content (`types.ts`).
2. Declare a **static config array** of those items (`config.ts`) — titles,
   labels, descriptions, and optionally **component references** for special
   rendering.
3. Write **one renderer component** that `.map()`s over the config and renders
   every item with the same layout.

Adding a new item means adding one entry to the config — **no new JSX, no
repeated composition**. This keeps the UI scalable and the content
maintainable.

### The three roles

| Role     | File (convention) | Responsibility                               |
| -------- | ----------------- | -------------------------------------------- |
| Type     | `types.ts`        | The shape of one config item                 |
| Config   | `config.ts`       | Static, typed array of items (the "content") |
| Renderer | `*.tsx`           | Maps over the config and renders each item   |

### Two ways configs carry "special rendering"

- **Component reference** — a field typed as `ComponentType` /
  `React.ElementType` that holds a component to render per item (e.g. a badge,
  an icon, a form field). The renderer instantiates it: `const C = item.component; <C />`.
- **Discriminator / data field** — a plain value (e.g. `category`, `variant`)
  the renderer uses to branch or group items.

## General example

A dashboard that renders a grid of stat cards. Each card needs a title, a
description, and an icon — and different cards use different icons.

```ts
// types.ts
import { ComponentType } from "react"

export interface StatCardConfig {
	title: string
	description: string
	icon: ComponentType<{ className?: string }>
	variant: "primary" | "secondary"
}
```

```ts
// config.ts
import { StatCardConfig } from "./types"
import { DollarSign, TrendingUp, Users } from "lucide-react"

export const STAT_CARDS: StatCardConfig[] = [
	{ title: "Revenue", description: "Total revenue this quarter", icon: DollarSign, variant: "primary" },
	{ title: "Active Users", description: "Users active in the last 30 days", icon: Users, variant: "secondary" },
	{ title: "Growth", description: "Month-over-month growth", icon: TrendingUp, variant: "primary" },
]
```

```tsx
// stat-cards.tsx
import { STAT_CARDS } from "./config"

export default function StatCards() {
	return (
		<section className="grid grid-cols-1 md:grid-cols-3 gap-4">
			{STAT_CARDS.map((card) => {
				const Icon = card.icon
				return (
					<Card key={card.title}>
						<CardHeader>
							<Icon className="size-5" />
							<CardTitle>{card.title}</CardTitle>
							<CardDescription>{card.description}</CardDescription>
						</CardHeader>
					</Card>
				)
			})}
		</section>
	)
}
```

To add a fourth card you add **one object** to `STAT_CARDS` — the renderer
stays untouched.

## Project examples

### 1. Chart cards — `CHARTSCONFIG` + `ChartSection` (flagship)

The richest example. A config of chart metadata drives a grid of chart cards,
and each card's **badge component** is chosen per item.

**Type** — `src/_features/countries/sections/chart-container/types.ts`:

```ts
import { ComponentType } from "react"

export type ChartCategory = "economy" | "trade" | "labor" | "demographics" | "social"

export interface ChartMetadata {
	chartTitle: string
	description: string
	badge: ComponentType // <-- component reference for special rendering
	category: ChartCategory
}
```

**Config** — `src/_features/countries/config.ts` (abridged):

```ts
import { ChartAbsoluteBadge, ChartPercentageBadge } from "@/_features/countries/sections/chart-container/components/Badges"

export const CHARTSCONFIG: ChartMetadata[] = [
	{
		chartTitle: "GDP",
		description: "Total value of goods and services produced by a country.",
		badge: ChartAbsoluteBadge,
		category: "economy",
	},
	{
		chartTitle: "GDP Growth Rate",
		description: "Percentage increase of GDP from the previous year.",
		badge: ChartPercentageBadge,
		category: "economy",
	},
	// ... one entry per indicator
]
```

**Renderer** — `src/_features/countries/sections/chart-container/components/ChartSection.tsx`:

```tsx
export default function ChartSection({ configs }: { configs: RenderDataConfig[] }) {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4">
			{configs.map((config, index) => {
				const Budge: ComponentType = config.badge // instantiate the per-item component
				return (
					<Card key={index} className="w-auto">
						<CardContent className="p-3">
							<SingleLineChart data={config.chartData}>
								<Span className="gap-2">
									<Text as="h3" className="font-semibold leading-none">
										{config.chartTitle}
									</Text>
									<Budge />
									<HoverIcon description={config.description} className="h-5 size-auto">
										<Info className="size-4 lg:size-5 text-foreground" />
									</HoverIcon>
								</Span>
								{/* ... */}
							</SingleLineChart>
						</CardContent>
					</Card>
				)
			})}
		</section>
	)
}
```

**Container** — `src/_features/countries/sections/chart-container/chart-container.tsx`
merges the static config with runtime data and groups by category:

```tsx
const renderConfig: RenderDataConfig[] = CHARTSCONFIG.map((info: ChartMetadata, index: number) => ({
	...info,
	chartData: countryData[CHART_DATA[index]],
}))

// group by category, then render one ChartSection per category
```

**Supporting configs** in the same `config.ts`:

- `CHART_DATA` — `as const` array of data keys, index-aligned with `CHARTSCONFIG` so the container can merge runtime data.
- `CHART_CATEGORIES` — display names used to group charts (and drive the XLSX export in `DownloadButton.tsx`).
- `COUNTRIES` — see example 4.

### 2. Form fields — `config` + `contact-form`

The `component` field picks **which field component** renders each item
(`InputField` vs `TextareaField`).

**Type** — `src/_features/contact/sections/contact-form/types.ts`:

```ts
export type InputConfig = {
	component: React.ElementType // <-- which component renders this item
	id: string
	type?: string
	DomInputName: keyof FormInputs
	label: string
	placeholder: string
	description: string
	rules: any
}
```

**Config** — `src/_features/contact/sections/contact-form/config.ts` (abridged):

```ts
export const config: InputConfig[] = [
	{
		component: InputField,
		id: "form-rhf-demo-title",
		type: "text",
		DomInputName: "name",
		label: "Name",
		placeholder: "Your name",
		description: "Enter your full name so we know who we are speaking with.",
		rules: { required: "This field is required", minLength: { value: 3, message: "Name must be at least 3 characters" } },
	},
	{
		component: TextareaField,
		id: "form-rhf-demo-description",
		DomInputName: "message",
		label: "Message",
		placeholder: "Write your message here...",
		description: "Please provide as much detail as possible so we can better assist you.",
		rules: { required: "Message is required" },
	},
]
```

**Renderer** — `src/_features/contact/sections/contact-form/contact-form.tsx`:

```tsx
{
	config.map((inputInfo, index) => (
		<inputInfo.component
			key={index}
			id={inputInfo.id}
			type={inputInfo.type}
			DomInputName={inputInfo.DomInputName}
			label={inputInfo.label}
			placeholder={inputInfo.placeholder}
			description={inputInfo.description}
			rules={inputInfo.rules}
		/>
	))
}
```

> **Note:** `rules: any` in `types.ts` is loose. Prefer typing it as
> `RegisterOptions<FormInputs>` from `react-hook-form` so validation rules stay
> type-checked.

### 3. Developer cards — `devsInfo` + `developers-info`

The simplest form: **pure data config** with a fixed-layout renderer. No
component references needed.

**Type** — `src/_features/contact/sections/developers-info/types.ts`:

```ts
export type DeveloperInfo = {
	name: string
	email: string
	title: string
	description: string
	linkedin: string
	github: string
}
```

**Config** — `src/_features/contact/sections/developers-info/config.ts`:

```ts
export const devsInfo: DeveloperInfo[] = [
	{
		name: "Samaras Stavros",
		email: "samaras_st@yahoo.gr",
		title: "Frontend Developer",
		description: "Have a question or need help? Send us a message and we will get back to you.",
		linkedin: "https://www.linkedin.com/in/samaras-stavros",
		github: "https://github.com/samaras-stavros",
	},
	// ... one entry per developer
]
```

**Renderer** — `src/_features/contact/sections/developers-info/developers-info.tsx`
maps over `devsInfo` and renders a `Card` per developer with a fixed layout.

### 4. Countries list — `COUNTRIES` + `as const satisfies`

A config used both as **data** and as a **type source**. `as const satisfies`
keeps the literal values while still checking them against an interface, and
`typeof` derives precise types from the config.

**Config** — `src/_features/countries/config.ts`:

```ts
export const COUNTRIES = [
	{ code: "NO", name: "Norway" },
	{ code: "SE", name: "Sweden" },
	// ...
] as const satisfies Countries[]
```

**Derived types** — `src/_features/countries/sections/navigation/types.ts`:

```ts
export type CountriesInfo = typeof COUNTRIES
export type CountryCode = CountriesInfo[number]["code"]
export type CountryName = CountriesInfo[number]["name"]
```

**Consumers** — `DesktopSidebar.tsx` and `CountrySelector.tsx` both `.map()`
over `COUNTRIES` to render the country list / select options.

## When to use this pattern

Use it when you have **repeated, structurally identical UI** driven by static
content:

- A grid/list of cards that share a layout but differ in title, description, icon, badge, etc.
- A set of form fields that share a wrapper but differ in type/validation.
- Any list where adding an item should not require writing new JSX.

## When NOT to use it

- **One-off, unique layouts** — if items render completely differently, a
  config adds indirection without benefit.
- **Dynamic, server-fetched content** — configs are for _static_ content. If
  the data comes from an API, keep the config for metadata and merge the data
  in a container (as `chart-container.tsx` does), or fetch directly.
- **Over-engineering** — if there are only 2–3 items that never grow, plain
  JSX is clearer.

## Rules & conventions

- **Location** — follow `AGENTS.md`: configs live in
  `_features/<feature>/configs/` (or `config.ts` at the feature root), types in
  `_features/<feature>/types/` (or `types.ts`). **Co-locate**: if a config is
  used by a single section only, keep it inside that section's folder.
- **Type the config** — always annotate the array with its item type
  (`CHARTSCONFIG: ChartMetadata[]`, `config: InputConfig[]`). No `any` for
  config shapes.
- **Component references** — type them as `ComponentType` (no props) or
  `React.ElementType` (props spread from config). Instantiate with a local
  capitalized variable: `const C = item.component; <C />`.
- **`as const satisfies`** — use for literal data you also want to derive types
  from (`COUNTRIES`). It validates against the interface _and_ keeps literals.
- **Keys** — use a stable unique field from the config as the React `key`
  (e.g. `chartTitle`, `id`) rather than the array index when possible.
- **No barrel files** — import the config directly from its file
  (`@/_features/countries/config`), never via an `index.ts` re-export.
- **Renderer stays generic** — the renderer should not know about specific
  items; it only knows the config type. New items = new config entries only.
- **Merge, don't duplicate** — when config needs runtime data, merge in a
  container component (see `chart-container.tsx`) instead of duplicating config
  fields.
