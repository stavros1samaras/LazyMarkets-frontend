/**
 * Formats a number in compact short form, e.g. `1234567` -> `1.2M`.
 */
export function formatCompact(value: number) {
	return value.toLocaleString("en-US", {
		notation: "compact",
		compactDisplay: "short",
	})
}
