---
name: react-rendering-performance
description: "Use when improving React rendering performance or choosing between useMemo, useCallback, useDeferredValue, useTransition, React.memo, and browser APIs such as IntersectionObserver. Covers expensive calculations, heavy UI updates, responsive search, lazy mounting, and avoiding unnecessary renders."
---

# React Rendering Performance

Use these React APIs to address measured or clearly identified rendering bottlenecks. Prefer keeping code simple unless caching or scheduling work provides a meaningful benefit.

## Choose the Right Tool

| Need                                                             | Tool                   |
| ---------------------------------------------------------------- | ---------------------- |
| Cache an expensive computed value between renders                | `useMemo`              |
| Keep a callback reference stable, typically for a memoized child | `useCallback`          |
| Let rendering that depends on a value lag behind urgent updates  | `useDeferredValue`     |
| Mark a state update as non-urgent and expose its pending state   | `useTransition`        |
| Skip rendering a component when its props have not changed       | `React.memo`           |
| Defer mounting content until it nears the viewport               | `IntersectionObserver` |
| Wait for activity to pause before calling a function             | Debouncer              |

## Performance Hooks

### `useMemo`

Caches the result of a computation until a dependency changes.

```jsx
const filtered = useMemo(() => {
	return products.filter((product) => product.price > 100)
}, [products])
```

Use it for sufficiently expensive calculations, not as a default wrapper around every computation.

### `useCallback`

Caches a function reference until its dependencies change.

```jsx
const handleClick = useCallback(() => {
	console.log("click")
}, [])
```

It is most useful when a stable callback is passed to a child that relies on referential equality, such as a component wrapped in `React.memo`.

### `useDeferredValue`

Allows non-urgent rendering driven by a value to lag while urgent updates remain responsive.

```jsx
const deferredSearch = useDeferredValue(search)
```

For example, use a deferred search value to drive filtering and rendering of a large list while the input itself updates immediately. This is not a debounce: it does not wait for a fixed duration.

### `useTransition`

Marks a state update as non-urgent and provides a pending indicator.

```jsx
const [isPending, startTransition] = useTransition()

startTransition(() => {
	setSelectedCountry(country)
})
```

Use it when an update triggers heavy rendering that should not block urgent interactions. Use `isPending` to present an appropriate pending state when useful.

## React Performance API

### `React.memo`

Memoizes a component so React can skip rendering it when its props are unchanged.

```jsx
const Chart = React.memo(function Chart({ data }) {
	// ...
})
```

Memoization is effective only when the component receives stable props and avoiding its render is beneficial. Measure or identify the bottleneck before adding it.

## Browser APIs

Use browser APIs when the optimization depends on browser capabilities, such as delaying expensive content until it approaches the viewport. Keep browser-only work in client components or hooks.

### `IntersectionObserver`

`IntersectionObserver` asynchronously watches a DOM element relative to the viewport. In an effect or hook, create the observer with a callback, call `observe(element)`, and disconnect it during cleanup. Check `entry.isIntersecting` in the callback to detect when the element enters the viewport. A positive `rootMargin` can trigger before it becomes visible; for example, `"100px"` starts loading shortly ahead of the viewport.

```tsx
const observer = new IntersectionObserver(
	([entry]) => {
		if (entry.isIntersecting) {
			setVisible(true)
			observer.disconnect()
		}
	},
	{ rootMargin: "100px" }
)

observer.observe(element)
return () => observer.disconnect()
```

#### Project example: `ChartObserver`

`ChartObserver` applies this pattern to defer mounting chart content until its wrapper approaches the viewport. Use it around expensive chart content:

```tsx
<ChartObserver>
	<MarketChart />
</ChartObserver>
```

The component also uses `content-visibility: auto` and an intrinsic size hint to skip offscreen rendering while reserving space.

## Custom Functions

### Debouncer

A debouncer delays invoking a function until a specified period has passed without another call. It is a good option when interacting with an external source, such as an API: for example, wait until the user pauses typing before sending a search request, reducing unnecessary calls. Unlike `useDeferredValue`, a debouncer waits for a time interval before invoking the function.

## Workflow

1. Identify which interaction or component is slow and what work repeats.
2. Match the problem to the tool in the table; do not combine APIs without a specific need.
3. Keep dependency lists complete and preserve the existing behavior.
4. Check that the relevant interaction remains responsive and that the optimization actually reduces unnecessary work.
