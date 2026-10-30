"use client"

import { useContext, type Context } from "react"
import { Line, ReferenceLine } from "recharts"
import { SingleSeriesChart } from "@/components/charts/SingleSeriesChart"
import type { FhtChartDataState } from "@/_features/fht/sections/chart-container/contexts"
import type { AxisTick } from "recharts/types/util/types"

interface FhtIndexChartProps {
	dataContext: Context<FhtChartDataState>
	eventDate: string
}

export function FhtIndexChart({ dataContext, eventDate }: FhtIndexChartProps) {
	const { state } = useContext(dataContext)

	const ticks = [
		state[0].date,
		state[Math.floor(state.length * 0.25)].date,
		state[Math.floor(state.length * 0.5)].date,
		state[Math.floor(state.length * 0.75)].date,
	] as AxisTick[]

	return (
		<SingleSeriesChart data={state} xKey="date" yKey="close" ticks={ticks}>
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
