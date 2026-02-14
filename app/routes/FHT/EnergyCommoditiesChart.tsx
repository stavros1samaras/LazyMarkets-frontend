import { useState } from "react"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts"
import ChartRangeControl from "./ChartRangeControl"
import { commonLineProps, energyCommodities } from "~/constants/fht"
import { sortByDate } from "~/utilities/dates"
import { blue, green, light_blue } from "~/styles/tailwindClasses"

export default function EnergyCommoditiesChart({ energydata, earlySigns, eventDate, phaseConclusion, children }: any) {
	const cl = energydata["CL%3DF"][0].data
	const ng = energydata["NG%3DF"][0].data
	const bz = energydata["BZ%3DF"][0].data

	const baseSeries = cl

	let chartData = baseSeries.map((point: any, i: number) => ({
		date: point.date,
		WTI: cl[i].close,
		NG: ng[i].close,
		Brent: bz[i].close,
	}))

	chartData = sortByDate(chartData, energyCommodities, eventDate)

	const [currentChartData, setcurrentChartData] = useState(chartData)
	const [percentagePressed, tooglePercentage] = useState<boolean>(false)

	const WTILineProps = { dataKey: "WTI", stroke: blue } as const
	const NGLineProps = { dataKey: "NG", stroke: green } as const
	const BrentLineProps = { dataKey: "Brent", stroke: light_blue } as const

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
							<YAxis width={29} yAxisId="left" orientation="left" stroke="#8884d8" />
							<YAxis yAxisId="right" orientation="right" stroke={green} />
						</>
					)}

					<Tooltip />
					<Legend />

					<ReferenceLine x={eventDate} yAxisId="left" stroke="red" strokeWidth={1} />

					{percentagePressed ? (
						<>
							<Line {...commonLineProps} {...WTILineProps} />
							<Line {...commonLineProps} {...NGLineProps} />
							<Line {...commonLineProps} {...BrentLineProps} />
						</>
					) : (
						<>
							<Line {...commonLineProps} yAxisId="left" {...WTILineProps} />
							<Line {...commonLineProps} yAxisId="right" {...NGLineProps} />
							<Line {...commonLineProps} yAxisId="left" {...BrentLineProps} />
						</>
					)}
				</LineChart>
			</ResponsiveContainer>
		</>
	)
}
