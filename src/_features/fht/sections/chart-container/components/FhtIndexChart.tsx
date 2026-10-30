"use client"

import { useContext, type Context } from "react"
import { Line, ReferenceLine } from "recharts"
import { SingleSeriesChart } from "@/components/charts/SingleSeriesChart"
import type { FhtChartDataState } from "@/_features/fht/sections/chart-container/contexts"

interface FhtIndexChartProps {
	dataContext: Context<FhtChartDataState>
	eventDate: string
}

export function FhtIndexChart({ dataContext, eventDate }: FhtIndexChartProps) {
	const { state } = useContext(dataContext)

	return (
		<SingleSeriesChart data={state} xKey="date" yKey="close">
			<ReferenceLine x={eventDate} stroke="var(--destructive)" strokeWidth={1} />

			<Line
				type="monotone"
				dataKey="close"
				stroke="var(--line)"
				strokeWidth={2}
				dot={false}
				isAnimationActive="auto"
				animationDuration={200}
				animationEasing="linear"
			/>
		</SingleSeriesChart>
	)
}
