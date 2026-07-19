"use client"

import { ResponsiveContainer, XAxis, Tooltip, Area, AreaChart } from "recharts"

export default function SingleLineChart({ children, data }: any) {
	return (
		<>
			<div className="flex items-center justify-between pb-3 ">{children}</div>
			<ResponsiveContainer width="100%" height={400}>
				<AreaChart data={data} margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
					<defs>
						<linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="var(--area)" stopOpacity={1} />
							<stop offset="30%" stopColor="var(--area)" stopOpacity={0.3} />
							<stop offset="100%" stopColor="var(--area)" stopOpacity={0.05} />
						</linearGradient>
					</defs>

					<XAxis dataKey="year" interval="preserveStartEnd" minTickGap={25} stroke="var(--axis)" />

					<Tooltip
						formatter={(value) =>
							Number(value).toLocaleString("en-US", {
								notation: "compact",
								compactDisplay: "short",
							})
						}
						contentStyle={{
							backgroundColor: "var(--tooltip-background)",
							border: "1px solid var(--custom-border)",
						}}
						labelStyle={{
							color: "var(--foreground)",
						}}
						itemStyle={{
							color: "var(--foreground)",
						}}
					/>
					<Area
						type="monotone"
						dataKey="value"
						stroke="var(--line)"
						strokeWidth={2}
						dot={false}
						fill="url(#gradient)"
						isAnimationActive={false}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</>
	)
}
