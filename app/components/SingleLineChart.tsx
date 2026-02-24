"use client"

import { ResponsiveContainer, XAxis, Tooltip, Area, AreaChart } from "recharts"

export default function SingleLineChart({ children, data }: any) {
	// const xTicks = [data[0]?.year, data[Math.floor((data.length - 1) / 2)]?.year, data[data.length - 2]?.year]

	return (
		<>
			<div>{children}</div>
			<ResponsiveContainer width="100%" height={400}>
				<AreaChart data={data} margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
					<XAxis dataKey="year" />
					{/* <YAxis width="auto" /> */}
					<Tooltip />
					<Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} />
				</AreaChart>
			</ResponsiveContainer>
		</>
	)
}
