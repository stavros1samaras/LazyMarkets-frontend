"use client"

import { ResponsiveContainer, XAxis, Tooltip, Area, AreaChart, YAxis, Bar } from "recharts"

import { Div } from "@/components/elements/Div"
import { useContext, useEffect, useRef, useState } from "react"
import { ChartDisplayContext } from "@/providers/ChartDisplayProvider"

export default function SingleLineChart({ children, data }: any) {
	const { display } = useContext(ChartDisplayContext)

	return (
		<div className="animate-in fade-in duration-500">
			<Div className="justify-between gap-0 pb-3">{children}</Div>

			<SingleLineChartContent key={display} data={data}>
				<SingleLineChartSeries display={display} />
			</SingleLineChartContent>
		</div>
	)
}

function SingleLineChartContent({ children, data }: any) {
	const ref = useRef<HTMLDivElement>(null)

	const { visible } = useObserverMount(ref)

	return (
		<div ref={ref} className="min-h-50 [content-visibility:auto] [contain-intrinsic-size:200px]">
			{visible && (
				<ResponsiveContainer width="100%" height={200}>
					<AreaChart
						data={data}
						margin={{
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
						}}
					>
						<defs>
							<linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
								<stop offset="0%" stopColor="var(--area)" stopOpacity={1} />
								<stop offset="30%" stopColor="var(--area)" stopOpacity={0.3} />
								<stop offset="100%" stopColor="var(--area)" stopOpacity={0.05} />
							</linearGradient>
						</defs>

						{children}

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
			)}
		</div>
	)
}

function SingleLineChartSeries({ display }: any) {
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

function useObserverMount(ref: any) {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const element = ref.current

		if (!element) return

		const observer = new IntersectionObserver(
			(entries, observer) => {
				const entry = entries[0]

				if (entry.isIntersecting) {
					setVisible(true)
					observer.disconnect()
				}
			},
			{
				rootMargin: "100px",
			}
		)

		observer.observe(element)

		return () => observer.disconnect()
	}, [])

	return { visible }
}
