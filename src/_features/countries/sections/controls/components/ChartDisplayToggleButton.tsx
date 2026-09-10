"use client"

import { Button } from "@/components/ui/button"
import { ChartColumnBig, ChartLine } from "lucide-react"
import { cn } from "@/lib/utils"
import { useContext } from "react"
import { ChartDisplayContext } from "@/providers/ChartDisplayProvider"

interface ChartDisplayToggleButtonProps {
	className?: string
}

export default function ChartDisplayToggleButton({ className }: ChartDisplayToggleButtonProps) {
	const { display, toggleDisplay } = useContext(ChartDisplayContext)

	return (
		<Button
			size="icon"
			variant="secondary"
			className={cn(className)}
			aria-label={display == "bar" ? "Switch to area chart" : "Switch to bar chart"}
			aria-description="Toggles the chart between area and bar display."
			onClick={toggleDisplay}
		>
			{display == "bar" ? <ChartColumnBig /> : <ChartLine />}
		</Button>
	)
}
