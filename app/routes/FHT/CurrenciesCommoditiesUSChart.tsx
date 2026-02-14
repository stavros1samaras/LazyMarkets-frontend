import { useState } from "react"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts"
import ChartRangeControl from "./ChartRangeControl"
import { forexCurrencies } from "~/constants/fht"
import { sortByDate } from "~/utilities/dates"

export default function CurrenciesCommoditiesUSChart({ forexData, earlySigns, eventDate, phaseConclusion, children }: any) {
	const eur = forexData["EUR%3DX"][0].data
	const rub = forexData["RUB%3DX"][0].data
	const cny = forexData["CNY%3DX"][0].data

	const baseSeries = eur

	let chartData = baseSeries.map((point: any, i: number) => ({
		date: point.date,
		EUR: eur[i].close,
		RUB: rub[i].close,
		CNY: cny[i].close,
	}))

	chartData = sortByDate(chartData, forexCurrencies, earlySigns, eventDate, phaseConclusion)

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
							<YAxis yAxisId="left" />
							<YAxis yAxisId="right" orientation="right" />
						</>
					)}

					<Tooltip />
					<Legend />

					<ReferenceLine x={eventDate} yAxisId="left" stroke="red" strokeWidth={1} />
					<ReferenceLine x={earlySigns} yAxisId="left" stroke="red" strokeWidth={1} />
					<ReferenceLine x={phaseConclusion} yAxisId="left" stroke="red" strokeWidth={1} />

					{percentagePressed ? (
						<>
							<Line type="monotone" dataKey="EUR" dot={false} stroke="#1f77b4" isAnimationActive={false} connectNulls />
							<Line type="monotone" dataKey="CNY" dot={false} stroke="#2ca02c" isAnimationActive={false} connectNulls />
							<Line type="monotone" dataKey="RUB" dot={false} stroke="#ff7f0e" isAnimationActive={false} connectNulls />
						</>
					) : (
						<>
							<Line
								type="monotone"
								dataKey="EUR"
								dot={false}
								stroke="#1f77b4"
								yAxisId="left"
								isAnimationActive={false}
								connectNulls
							/>
							<Line
								type="monotone"
								dataKey="CNY"
								dot={false}
								stroke="#2ca02c"
								yAxisId="left"
								isAnimationActive={false}
								connectNulls
							/>
							<Line
								type="monotone"
								dataKey="RUB"
								dot={false}
								stroke="#ff7f0e"
								yAxisId="right"
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
