"use client"

import { createContext, useState } from "react"

export const ChartDisplayContext = createContext({
	display: "area",
	toggleDisplay: () => {},
})

export type ChartDisplayContextValue = React.ContextType<typeof ChartDisplayContext>

export function ChartDisplayProvider({ children }: { children: React.ReactNode }) {
	const [display, setDisplay] = useState("area")

	const toggleDisplay = () => {
		setDisplay((current) => (current === "area" ? "bar" : "area"))
	}

	return <ChartDisplayContext value={{ display, toggleDisplay }}>{children}</ChartDisplayContext>
}
