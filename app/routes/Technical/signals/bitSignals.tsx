import { useEffect, useState } from "react"

import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	ReferenceDot,
} from "recharts"

interface props {
	areaData: any
	ticketPair1: any
	ticketPair2: any
}

export default function BitSignals({ areaData, ticketPair1, ticketPair2 }: props) {
	const pair1 = ticketPair1.signals
	const pair2 = ticketPair2.signals

	const [chartAreaData, setChartAreaData] = useState<any>([])
	const [chartDotsData, setChartDotsData] = useState<any>([])

	useEffect(() => {
		setChartAreaData(areaData)
		setChartDotsData(ticketPair1.signals)
	}, [])

	const selectIndicatorsPair = (indicatorsPair: string): void => {
		if (indicatorsPair === "rsi-williams") {
			setChartDotsData(pair1)
		} else if (indicatorsPair === "pair2") {
			setChartDotsData(pair2)
		}
	}

	return (
		<div>
			<label htmlFor="pet-select">Choose a ticket:</label>
			<select
				name="ticket"
				onChange={(e) => {
					selectIndicatorsPair(e.target.value)
				}}
			>
				<option selected value="rsi-williams">
					rsi-williams
				</option>
				<option value="pair2">pair2</option>
			</select>
			<ResponsiveContainer width="100%" height={400}>
				<AreaChart
					width={500}
					height={400}
					data={chartAreaData}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="Date" />
					<YAxis />
					<Tooltip />
					<Area type="monotone" dataKey="close" stroke="#8884d8" fill="#8884d8" />

					{chartDotsData.map((indicator: any, index: any) => {
						return (
							<ReferenceDot
								key={index}
								x={indicator.Date}
								y={indicator.signal}
								r={3}
								fill="#f4a506ff"
								stroke="#9b4f91ff"
							></ReferenceDot>
						)
					})}
				</AreaChart>
			</ResponsiveContainer>
		</div>
	)
}
