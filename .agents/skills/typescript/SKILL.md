---
name: typescript
description: >-
  Use this skill whenever writing or reviewing TypeScript types, interfaces, or
  component prop types in this project, including when to prefer `interface`
  versus `type`.
---

# TypeScript Type Conventions for LazyMarkets

This project follows a consistent convention for declaring TypeScript shapes.
Apply these rules when authoring or reviewing type definitions, interfaces, and
component prop types.

## 1. Prefer `interface` for Complex Types

Use `interface` for object-like shapes that are likely to grow or be extended,
and especially for **component prop types**:

- Component props (`Props`, `XxxProps`)
- Domain models and data structures with multiple fields
- Any shape you may later extend via `extends` or declaration merging

### ✅ Correct (interface for props / complex objects)

```tsx
interface ButtonProps {
	label: string
	onClick: () => void
	disabled?: boolean
}

interface CountryData {
	code: string
	name: string
	indicators: Indicator[]
}
```

## 2. Prefer `type` for Simple Types

Use `type` for simple, atomic, or structural aliases that are not object
hierarchies — including **tuples** and unions:

- Tuples (e.g. `[number, number]`)
- Unions (`type Status = "idle" | "loading" | "error"`)
- Primitive aliases (`type ID = string`)
- Function type aliases

### ✅ Correct (type for tuples / simple shapes)

```ts
type Point = [number, number]

type Status = "idle" | "loading" | "error"

type Handler = (value: string) => void
```

## 3. Exceptions — When `type` Is Required

Even for object-like shapes, you **must** use `type` (not `interface`) in these
cases, because `interface` cannot express them:

- **Mapped types**: `type ReadonlyUser = { readonly [K in keyof User]: User[K] };`
- **Conditional types**: `type Awaited<T> = T extends Promise<infer U> ? U : T;`
- **Utility-type compositions**: `type PartialUser = Partial<User>;`,
  `type Codes = Record<string, string>;`
- **Function types / call signatures used in unions**: `type Handler = (v: string) => void;`
- **Union or intersection of object types**: `type Admin = User & { role: string };`

In these situations the `type` keyword is mandatory — the preference for
`interface` above applies only to plain, declarable object shapes.

## 4. Quick Reference

| Shape                                | Use               |
| ------------------------------------ | ----------------- |
| Component prop types                 | `interface`       |
| Complex / multi-field object models  | `interface`       |
| Tuples                               | `type`            |
| Unions, primitives, function aliases | `type`            |
| Mapped / conditional / utility types | `type` (required) |

Keep the choice consistent across the codebase so reviews stay predictable.

## 5. Optional Enforcement

To auto-enforce the convention, enable
[`@typescript-eslint/consistent-type-definitions`](https://typescript-eslint.io/rules/consistent-type-definitions/)
in `eslint.config.mjs` with `"interface"` as the default. Note that this rule
does not cover the `type`-required exceptions above (those are handled by the
language itself), so it complements rather than conflicts with Section 3.
