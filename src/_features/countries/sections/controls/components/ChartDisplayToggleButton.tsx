"use client"

import { Button } from "@/components/ui/button"
import { ChartColumnBig, ChartLine } from "lucide-react"
import { cn } from "@/lib/utils"
import { useContext } from "react"
import { ChartDisplayContext } from "@/_features/countries/sections/contexts"

interface ChartDisplayToggleButtonProps {
	className?: string
}

export default function ChartDisplayToggleButton({ className }: ChartDisplayToggleButtonProps) {
	const { state, setState } = useContext(ChartDisplayContext)

	return (
		<Button
			size="icon"
			variant="secondary"
			className={cn(className)}
			aria-label={state == "bar" ? "Switch to area chart" : "Switch to bar chart"}
			aria-description="Toggles the chart between area and bar display."
			onClick={() => setState((current) => (current === "area" ? "bar" : "area"))}
		>
			{state == "bar" ? <ChartColumnBig /> : <ChartLine />}
		</Button>
	)
}
