import { useState } from "react"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts"
import ChartRangeControl from "./ChartRangeControl"
import { commonLineProps, forexCurrencies } from "~/constants/fht"
import { sortByDate } from "~/utilities/dates"
import { blue } from "~/styles/tailwindClasses"

export default function CurrenciesCommoditiesUSChart({ forexData, earlySigns, eventDate, phaseConclusion, children }: any) {
	const eur = forexData["EUR%3DX"][0].data

	const baseSeries = eur

	let chartData = baseSeries.map((point: any, i: number) => ({
		date: point.date,
		EUR: eur[i].close,
	}))

	chartData = sortByDate(chartData, forexCurrencies, eventDate)

	const [currentChartData, setcurrentChartData] = useState(chartData)
	const [percentagePressed, tooglePercentage] = useState<boolean>(false)

	const EURLineProps = { dataKey: "EUR", stroke: blue } as const

	const xTicks = [
		currentChartData[0]?.date,
		currentChartData[Math.floor((currentChartData.length - 1) / 2)]?.date,
		currentChartData[currentChartData.length - 1]?.date,
	]

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
					<XAxis dataKey="date" ticks={xTicks} />

					{percentagePressed ? (
						<YAxis
							width={50}
							domain={[(dataMin: number) => dataMin * 0.9, (dataMax: number) => dataMax * 1.1]}
							tickFormatter={(value) => value.toFixed(2)}
						/>
					) : (
						<>
							<YAxis />
						</>
					)}

					<Tooltip />
					<Legend />

					<ReferenceLine x={eventDate} yAxisId="left" stroke="red" strokeWidth={1} />

					<Line {...commonLineProps} {...EURLineProps} />
				</LineChart>
			</ResponsiveContainer>
		</>
	)
}
