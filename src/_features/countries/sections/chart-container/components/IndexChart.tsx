"use client"

import { ResponsiveContainer, XAxis, Tooltip, Area, AreaChart, YAxis, Bar } from "recharts"
import { useContext } from "react"
import { ChartData } from "@/components/charts/ChartData.provider"
import { ChartDisplayContext } from "@/_features/countries/sections/ChartDisplay.provider"

export function IndexChart() {
	const data = useContext(ChartData)
	const { display } = useContext(ChartDisplayContext)

	return (
		<ResponsiveContainer width="100%" height={200}>
			<AreaChart data={data} margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
				<defs>
					<linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="var(--area)" stopOpacity={1} />
						<stop offset="30%" stopColor="var(--area)" stopOpacity={0.3} />
						<stop offset="100%" stopColor="var(--area)" stopOpacity={0.05} />
					</linearGradient>
				</defs>

				{display === "area" ? (
					<Area
						type="monotone"
						dataKey="value"
						stroke="var(--line)"
						strokeWidth={2}
						dot={false}
						fill="url(#gradient)"
						isAnimationActive="auto"
						animationDuration={200}
						animationEasing="linear"
					/>
				) : (
					<Bar dataKey="value" fill="var(--line)" isAnimationActive="auto" animationDuration={150} barSize={8} />
				)}

				<XAxis
					dataKey="year"
					interval="preserveStartEnd"
					tick={{
						fontSize: 12,
						dy: 7,
					}}
					minTickGap={10}
					stroke="var(--axis)"
				/>

				<YAxis
					dataKey="value"
					orientation="left"
					stroke="var(--axis)"
					tick={{
						fontSize: 12,
					}}
					tickFormatter={(value) =>
						Number(value).toLocaleString("en-US", {
							notation: "compact",
							compactDisplay: "short",
						})
					}
					width="auto"
					axisLine={false}
					tickLine={false}
				/>

				<Tooltip
					formatter={(value) =>
						Number(value).toLocaleString("en-US", {
							notation: "compact",
							compactDisplay: "short",
						})
					}
					contentStyle={{
						backgroundColor: "var(--tooltip-background)",
						border: "1px solid var(--border)",
					}}
					labelStyle={{
						color: "var(--foreground)",
					}}
					itemStyle={{
						color: "var(--foreground)",
					}}
					isAnimationActive="auto"
					animationDuration={200}
				/>
			</AreaChart>
		</ResponsiveContainer>
	)
}

export function SingleLineChartSeries({ display = "area" }: { display?: any }) {
	return display == "area" ? (
		<Area
			type="monotone"
			dataKey="value"
			stroke="var(--line)"
			strokeWidth={2}
			dot={false}
			fill="url(#gradient)"
			isAnimationActive="auto"
			animationDuration={200}
			animationEasing="linear"
		/>
	) : (
		<Bar dataKey="value" fill="var(--line)" isAnimationActive="auto" animationDuration={150} barSize={8} />
	)
}
