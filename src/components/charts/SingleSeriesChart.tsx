"use client"

import { ResponsiveContainer, XAxis, YAxis, Tooltip, AreaChart } from "recharts"
import { useContext, type Context, type ReactNode } from "react"
import { formatCompact } from "@/lib/formatters"

export interface SingleSeriesChartProps<T> {
	dataContext: Context<T[]>
	xKey: keyof T & string
	yKey: keyof T & string
	height?: number
	formatValue?: (value: number) => string
	children: ReactNode
}

export function SingleSeriesChart<T>({
	dataContext,
	xKey,
	yKey,
	height = 200,
	formatValue = formatCompact,
	children,
}: SingleSeriesChartProps<T>) {
	const data = useContext(dataContext)

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
