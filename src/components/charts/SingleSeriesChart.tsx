"use client"

import { ResponsiveContainer, XAxis, YAxis, Tooltip, AreaChart } from "recharts"
import type { ReactNode } from "react"
import { formatCompact } from "@/lib/formatters"

export interface SingleSeriesChartProps<T> {
	data: T[]
	xKey: keyof T & string
	yKey: keyof T & string
	height?: number
	formatValue?: (value: number) => string
	children: ReactNode
}

/**
 * Renders a single-series area chart from the data it is given.
 * @remarks
 * Stateless and presentation-only: it holds no state and reads no context.
 * The caller owns the data and passes it in through `data`.
 * Its parent is responsible for holding any chart state and providing it.
 */
export function SingleSeriesChart<T>({
	data,
	xKey,
	yKey,
	height = 200,
	formatValue = formatCompact,
	children,
}: SingleSeriesChartProps<T>) {
	return (
		<ResponsiveContainer width="100%" height={height}>
			<AreaChart data={data} margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
				{children}

				<XAxis dataKey={xKey} interval="preserveStartEnd" tick={{ fontSize: 12, dy: 7 }} minTickGap={10} stroke="var(--axis)" />

				<YAxis
					dataKey={yKey}
					orientation="left"
					stroke="var(--axis)"
					tick={{ fontSize: 12 }}
					tickFormatter={(value) => formatValue(Number(value))}
					width="auto"
					axisLine={false}
					tickLine={false}
				/>

				<Tooltip
					formatter={(value) => formatValue(Number(value))}
					contentStyle={{
						backgroundColor: "var(--tooltip-background)",
						border: "1px solid var(--border)",
					}}
					labelStyle={{ color: "var(--foreground)" }}
					itemStyle={{ color: "var(--foreground)" }}
					isAnimationActive="auto"
					animationDuration={200}
				/>
			</AreaChart>
		</ResponsiveContainer>
	)
}
