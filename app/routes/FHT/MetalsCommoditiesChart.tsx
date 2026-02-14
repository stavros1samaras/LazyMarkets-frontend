import { useState } from "react"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts"
import ChartRangeControl from "./ChartRangeControl"
import { preciousMetals } from "~/constants/fht"
import { sortByDate } from "~/utilities/dates"
import { brown, gray, taupe, yellow } from "~/styles/tailwindClasses"

export default function PreciousMetalsChart({ metalsData, earlySigns, eventDate, phaseConclusion, children }: any) {
	const gold = metalsData["GC%3DF"][0].data
	const silver = metalsData["SI%3DF"][0].data
	const copper = metalsData["HG%3DF"][0].data

	const baseSeries = gold

	let chartData = baseSeries.map((point: any, i: number) => ({
		date: point.date,
		Gold: gold[i].close,
		Silver: silver[i].close,
		Copper: copper[i].close,
	}))

	chartData = sortByDate(chartData, preciousMetals, earlySigns, eventDate, phaseConclusion)

	const [currentChartData, setcurrentChartData] = useState(chartData)
	const [percentagePressed, tooglePercentage] = useState<boolean>(false)

	return (
		<>
			<div className="flex items-center justify-between">
				<span>{children}</span>
				<ChartRangeControl
					chartData={chartData}
					eventDate={eventDate}
					setcurrentChartData={setcurrentChartData}
					percentagePressed={percentagePressed}
					tooglePercentage={tooglePercentage}
				/>
			</div>
			<ResponsiveContainer width="100%" height={400}>
				<LineChart data={currentChartData}>
					<XAxis dataKey="date" interval={50} textAnchor="start" />

					{percentagePressed ? (
						<YAxis
							width={50}
							domain={[(dataMin: number) => dataMin * 0.9, (dataMax: number) => dataMax * 1.1]}
							tickFormatter={(value) => value.toFixed(2)}
						/>
					) : (
						<>
							<YAxis yAxisId="left" orientation="left" stroke={yellow} />
							<YAxis yAxisId="right" orientation="right" stroke={taupe} />
						</>
					)}

					<Tooltip />
					<Legend />

					<ReferenceLine x={eventDate} yAxisId="left" stroke="red" strokeWidth={1} />
					<ReferenceLine x={earlySigns} yAxisId="left" stroke="red" strokeWidth={1} />
					<ReferenceLine x={phaseConclusion} yAxisId="left" stroke="red" strokeWidth={1} />

					{percentagePressed ? (
						<>
							<Line type="monotone" dataKey="Gold" dot={false} stroke={yellow} isAnimationActive={false} connectNulls />
							<Line type="monotone" dataKey="Silver" dot={false} stroke={gray} isAnimationActive={false} connectNulls />
							<Line type="monotone" dataKey="Copper" dot={false} stroke={brown} isAnimationActive={false} connectNulls />
						</>
					) : (
						<>
							<Line
								yAxisId="left"
								type="monotone"
								dataKey="Gold"
								dot={false}
								stroke={yellow}
								isAnimationActive={false}
								connectNulls
							/>

							<Line
								yAxisId="right"
								type="monotone"
								dataKey="Silver"
								dot={false}
								stroke={gray}
								isAnimationActive={false}
								connectNulls
							/>

							<Line
								yAxisId="right"
								type="monotone"
								dataKey="Copper"
								dot={false}
								stroke={brown}
								isAnimationActive={false}
								connectNulls
							/>
						</>
					)}
				</LineChart>
			</ResponsiveContainer>
		</>
	)
}
