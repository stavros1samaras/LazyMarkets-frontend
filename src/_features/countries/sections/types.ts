import type { ChartDisplayContext } from "@/_features/countries/sections/contexts"

export type ChartDisplayContextType = {
	display: Display
	setDisplay: React.Dispatch<React.SetStateAction<Display>>
}

export type Display = "area" | "bar"

export type ChartDisplayContextValue = React.ContextType<typeof ChartDisplayContext>
