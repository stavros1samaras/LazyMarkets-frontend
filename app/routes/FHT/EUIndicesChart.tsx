import { useState } from "react"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts"
import ChartRangeControl from "./ChartRangeControl"
import { indicesEU } from "~/constants/fht"
import { sortByDate } from "~/utilities/dates"

export default function EUIndicesChart({ indicesEUdata, earlySigns, eventDate, phaseConclusion, children }: any) {
	const ftse = indicesEUdata["%5EFTSE"][0].data
	const fchi = indicesEUdata["%5EFCHI"][0].data
	const gdaxi = indicesEUdata["%5EGDAXI"][0].data
	// const n100 = indicesEUdata["%5EN100"][0].data;

	const baseSeries = ftse

	let chartData = baseSeries.map((point: any, i: number) => ({
		date: point.date,
		FTSE: ftse[i].close,
		FCHI: fchi[i].close,
		GDAXI: gdaxi[i].close,
		// N100: n100[i].close,
	}))

	chartData = sortByDate(chartData, indicesEU, earlySigns, eventDate, phaseConclusion)

	const [currentChartData, setcurrentChartData] = useState(chartData)
	const [percentagePressed, tooglePercentage] = useState<boolean>(false)

	return (
		<>
			<div className="flex items-center justify-between">
				<div>{children}</div>

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
						<YAxis width={50} />
					)}
					<Tooltip />
					<Legend />

					<ReferenceLine x={eventDate} stroke="red" strokeWidth={1} />

					<ReferenceLine x={earlySigns} stroke="red" strokeWidth={1} />

					<ReferenceLine x={phaseConclusion} stroke="red" strokeWidth={1} />

					<Line type="monotone" dataKey="FTSE" dot={false} isAnimationActive={false} connectNulls />
					<Line type="monotone" dataKey="FCHI" dot={false} isAnimationActive={false} connectNulls />
					<Line type="monotone" dataKey="GDAXI" dot={false} isAnimationActive={false} connectNulls />
					<Line type="monotone" dataKey="N100" dot={false} isAnimationActive={false} connectNulls />
				</LineChart>
			</ResponsiveContainer>
		</>
	)
}
