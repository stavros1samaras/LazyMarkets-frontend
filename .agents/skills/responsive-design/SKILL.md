---
name: responsive-design
description: >-
  Use this skill whenever building or reviewing responsive UI in this project,
  including mobile-first layouts, splitting components by device type, and
  rendering mobile vs desktop variants via the x-device-type user-agent header.
---

# Responsive Design Guidelines for LazyMarkets

This project follows a **mobile-first** strategy with server-side device
detection. Apply these rules when authoring or reviewing responsive layouts and
components.

## 1. Mobile-First by Default

- Design and style for small screens first, then enhance upward with responsive
  Tailwind utilities (`sm:`, `md:`, `lg:`, `xl:`).
- Prefer a single component that adapts with Tailwind responsive classes
  whenever the desktop and mobile versions share the same structure and logic.

## 2. Split When Layout or Functionality Diverges

If a component needs a **completely different layout or functionality** between
devices (not just spacing or visibility tweaks), do **not** cram both into one
component with conditional branches. Instead:

- Create **one component for mobile** and **one for desktop**.
- Render the correct one based on the device type detected from the request
  headers.

### How device detection works in this project

The `x-device-type` request header is set once, server-side, in
[`src/proxy.ts`](../../../../src/proxy.ts) using Next.js `userAgent()`:

```ts
import { NextRequest, NextResponse } from "next/server"
import { userAgent } from "next/server"

export function proxy(request: NextRequest) {
	const { device } = userAgent(request)
	const requestHeaders = new Headers(request.headers)
	requestHeaders.set("x-device-type", device?.type ?? "desktop")
	return NextResponse.next({ request: { headers: requestHeaders } })
}
```

### Reading the header in a Server Component

In any Server Component, read the header with `headers()` from `next/headers`
and branch on its value:

```tsx
import { headers } from "next/headers"
import DesktopSidebar from "./sidebar/DesktopSidebar"
import MobileCountryBar from "./MobileCountryBar"

export default async function Navigation() {
	const headersList = await headers()
	const ua = headersList.get("x-device-type")

	return ua == "desktop" ? <DesktopSidebar /> : <MobileCountryBar />
}
```

> **Note on tablets:** `userAgent()` can return `"mobile"`, `"tablet"`, or
> `"desktop"` for `device.type`. The check above renders the **mobile** variant
> for anything that is not exactly `"desktop"`, so tablets fall through to the
> mobile component. If you need a distinct tablet experience, add an explicit
> branch for `ua == "tablet"`.

### Decision Checklist — Split vs. CSS

Use this to decide which approach to take:

- [ ] Does the component differ **only** in spacing, visibility, or ordering?
      → **One component + Tailwind responsive classes** (`sm:`, `md:`, `lg:`, `xl:`).
- [ ] Does it need a **different DOM structure** (e.g. sidebar vs. bottom bar)?
      → **Split** into mobile + desktop components.
- [ ] Does it need **different data, behavior, or interactions** per device?
      → **Split** into mobile + desktop components.
- [ ] Is the divergence **major enough** that conditional JSX would hurt
      readability? → **Split** into mobile + desktop components.

### ✅ Pattern summary

| Situation                                              | Approach                                                         |
| ------------------------------------------------------ | ---------------------------------------------------------------- |
| Same structure, minor visual differences               | One component + Tailwind responsive classes                      |
| Completely different layout / functionality per device | Separate mobile + desktop components, render via `x-device-type` |

Keep the device-split components co-located (e.g. `mobile/` and `desktop/`
subfolders or sibling files) so the relationship is obvious.
