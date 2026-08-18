---
name: shadcn-styling
description: >-
  Use this skill whenever building, modifying, or styling UI components
  involving shadcn/ui or Tailwind CSS.
---

# Shadcn Component Styling Guidelines

When working with or styling shadcn/ui components, always strictly adhere to these rules:

## Rules & Constraints
1. **Never Refactor Base Shadcn Components**:
   - Do NOT edit, rewrite, or modify the underlying source files in `components/ui/`.
   - Preserve all original component logic, slot props, and primitive implementations.

2. **Style Exclusively via `className`**:
   - Apply any custom styles, color overrides, dimensions, or layout adjustments **only** via the `className` prop at the call site.
   - Use Tailwind CSS utility classes and the `cn()` helper function for combining classes.

## Example

### ❌ Incorrect (Modifying internal component code)
Editing `components/ui/button.tsx` to hardcode new margins or background colors.

### ✅ Correct (Passing styles via `className`)
```tsx
import { Button } from "@/components/ui/button";

export function MyButton() {
  return (
    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-sm">
      Submit
    </Button>
  );
}
```