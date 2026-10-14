"use client"

import { createContext, useState } from "react"
import type { ChartDisplayContextType, Display } from "@/_features/countries/sections/types"

export const ChartDisplayContext = createContext<ChartDisplayContextType>({
	display: "area",
	toggleDisplay: () => {},
})

export function ChartDisplayProvider({ children }: { children: React.ReactNode }) {
	const [display, setDisplay] = useState<Display>("area")

	const toggleDisplay = () => {
		setDisplay((current) => (current === "area" ? "bar" : "area"))
	}

	return <ChartDisplayContext value={{ display, toggleDisplay }}>{children}</ChartDisplayContext>
}
