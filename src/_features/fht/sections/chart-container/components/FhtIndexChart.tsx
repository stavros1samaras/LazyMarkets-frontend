"use client"

import type { Context } from "react"
import { Line, ReferenceLine } from "recharts"
import { SingleSeriesChart } from "@/components/charts/SingleSeriesChart"
import type { FhtPricePoint } from "@/_features/fht/types"

interface FhtIndexChartProps {
	dataContext: Context<FhtPricePoint[]>
	eventDate: string
}

export function FhtIndexChart({ dataContext, eventDate }: FhtIndexChartProps) {
	return (
		<SingleSeriesChart dataContext={dataContext} xKey="date" yKey="close">
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
