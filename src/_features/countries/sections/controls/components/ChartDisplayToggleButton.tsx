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
		<Button size="icon" variant="outline" className={cn(className)} onClick={toggleDisplay}>
			{display == "bar" ? <ChartColumnBig /> : <ChartLine />}
		</Button>
	)
}
