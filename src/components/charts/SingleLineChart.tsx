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
							<stop offset="0%" stopColor="#555fba" stopOpacity={1} />
							<stop offset="50%" stopColor="#555fba" stopOpacity={0.3} />
							<stop offset="100%" stopColor="#555fba" stopOpacity={0.05} />
						</linearGradient>
					</defs>

					<XAxis dataKey="year" />
					<Tooltip />
					<Area
						type="monotone"
						dataKey="value"
						stroke="#3b82f6"
						strokeWidth={0}
						dot={false}
						fill="url(#gradient)"
						isAnimationActive={false}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</>
	)
}
