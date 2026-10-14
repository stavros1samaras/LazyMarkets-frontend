import type { ChartDisplayContext } from "@/_features/countries/sections/ChartDisplay.provider"

export type ChartDisplayContextType = {
	display: Display
	toggleDisplay: () => void
}

export type Display = "area" | "bar"

export type ChartDisplayContextValue = React.ContextType<typeof ChartDisplayContext>
