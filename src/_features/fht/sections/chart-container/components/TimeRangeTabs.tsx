"use client"

import { useContext, useRef } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FhtChartData } from "@/_features/fht/sections/chart-container/contexts"
import { filterAroundDays } from "@/_features/fht/dateFormatter"

interface TimeRangeTabsProps {
	referenceDate: string
}

export function TimeRangeTabs({ referenceDate }: TimeRangeTabsProps) {
	const { state, setState } = useContext(FhtChartData)
	// Keep the unfiltered series so switching ranges doesn't slice an already sliced array.
	const fullData = useRef(state)

	function applyRange(days: number) {
		const range = filterAroundDays(fullData.current, referenceDate, days)

		if (range.length === 0) return

		setState(range)
	}

	return (
		<Tabs defaultValue="1y" className="">
			<TabsList className="group-data-[orientation=horizontal]/tabs:h-8 px-2 py-1 bg-background">
				<TabsTrigger
					value="1mo"
					className="px-2 py-0.5 dark:data-[state=active]:bg-secondary dark:data-[state=active]:text-primary-foreground"
					onClick={() => applyRange(15)}
				>
					1mo
				</TabsTrigger>
				<TabsTrigger
					value="3mo"
					className="px-2 py-0.5 dark:data-[state=active]:bg-secondary dark:data-[state=active]:text-primary-foreground"
					onClick={() => applyRange(45)}
				>
					3mo
				</TabsTrigger>
				<TabsTrigger
					value="6mo"
					className="px-2 py-0.5 dark:data-[state=active]:bg-secondary dark:data-[state=active]:text-primary-foreground"
					onClick={() => applyRange(90)}
				>
					6mo
				</TabsTrigger>
				<TabsTrigger
					value="1y"
					className="px-2 py-0.5 dark:data-[state=active]:bg-secondary dark:data-[state=active]:text-primary-foreground"
					onClick={() => applyRange(180)}
				>
					1y
				</TabsTrigger>
			</TabsList>
		</Tabs>
	)
}
