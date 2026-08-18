# LazyMarkets - Project Guidelines & Rules

Welcome to **LazyMarkets** (`frontend-next`), a Next.js web application for financial market analysis (Fundamental, Technical, Sentiment, and Global Economic data).

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [Next.js](https://nextjs.org/) (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4, CSS Variables, `next-themes` (Dark/Light mode support)
- **UI Components & Icons**: [shadcn/ui](https://ui.shadcn.com/) (New York style), [Lucide React](https://lucide.dev/), [Sonner](https://sonner.emilkowal.ski/) (toasts)
- **Charts & Data**: [Recharts](https://recharts.org/), [SheetJS (xlsx)](https://sheetjs.com/)
- **Forms & Validation**: `react-hook-form`

---

## 📁 Architecture & Directory Structure

- `src/app/`: Next.js App Router layouts, routes, and route handlers.
  - Route modules: `/fundamental`, `/technical`, `/sentiment`, `/countries`, `/contact`.
- `src/_features/`: Feature-scoped business logic, components, and hooks (e.g., `_features/countries`, `_features/eu-votes`, `_features/contact`).
- `src/components/`:
  - `src/components/ui/`: Base shadcn/ui primitive components.
  - `src/components/navigation/`: Header, sidebar, and layout navigation elements.
  - Shared, reusable domain-agnostic components.
- `src/contexts/`: React context providers (e.g., `NextThemeProvider`).
- `src/lib/` & `src/utils/`: Helper utilities, including `cn()` (`clsx` + `tailwind-merge`).
- `src/types.ts`: Global TypeScript definitions.

---

## 📐 Development Guidelines & Rules

### 1. Component & React Conventions
- **Server vs. Client Components**: By default, keep components as Server Components. Add `"use client"` only when components need state (`useState`, `useEffect`), custom hooks, event listeners, or browser APIs.
- **Path Aliases**: Always use configured TypeScript path aliases:
  - `@/components/*`
  - `@/lib/*`
  - `@/utils/*`
  - `@/hooks/*`
  - `@/contexts/*`
  - `@/_features/*`

### 2. shadcn/ui & Styling Rules
- **Base Components Integrity**: **Never** modify source code inside `src/components/ui/` directly.
- **Custom Styling**: Always customize appearance via the `className` prop at the call site using Tailwind CSS utility classes and `cn()`.
- **Theme Awareness**: Ensure all UI elements look crisp and legible in both light and dark modes using Tailwind semantic color tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, etc.).

### 3. TypeScript & Code Quality
- **Strict Typing**: Avoid `any`. Define clear interfaces or types for API responses, props, and financial data structures.
- **Modular Code**: Place domain/feature-specific components and helper hooks in `src/_features/<feature>/` rather than polluting top-level folders.
- **Error Handling**: Implement graceful error boundaries and fallback states (using Next.js `error.tsx` / `loading.tsx` or inline skeletons) for asynchronous data fetches.
