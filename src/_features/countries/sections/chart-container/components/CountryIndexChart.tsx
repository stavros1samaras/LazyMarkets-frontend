"use client"

import { useContext, useId, type Context } from "react"
import { Area, Bar } from "recharts"
import { SingleSeriesChart } from "@/components/charts/SingleSeriesChart"
import type { ChartData } from "@/_features/countries/types"
import type { ChartDisplayContextValue } from "@/_features/countries/sections/types"

export function CountryIndexChart({
	dataContext,
	displayContext,
}: {
	dataContext: Context<ChartData[]>
	displayContext: Context<ChartDisplayContextValue>
}) {
	const display = useContext(displayContext)
	const data = useContext(dataContext)
	const gradientId = `gradient-${useId().replace(/[^\w-]/g, "")}`

	return (
		<SingleSeriesChart data={data} xKey="year" yKey="value" interval="preserveStartEnd">
			{display.state === "area" ? (
				<>
					<defs>
						<linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="var(--area)" stopOpacity={1} />
							<stop offset="30%" stopColor="var(--area)" stopOpacity={0.3} />
							<stop offset="100%" stopColor="var(--area)" stopOpacity={0.05} />
						</linearGradient>
					</defs>

					<Area
						type="monotone"
						dataKey="value"
						stroke="var(--line)"
						strokeWidth={2}
						dot={false}
						fill={`url(#${gradientId})`}
						isAnimationActive="auto"
						animationDuration={200}
						animationEasing="linear"
					/>
				</>
			) : (
				<Bar dataKey="value" fill="var(--line)" isAnimationActive="auto" animationDuration={150} barSize={8} />
			)}
		</SingleSeriesChart>
	)
}
