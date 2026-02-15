import { useState } from "react"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts"
import ChartRangeControl from "./ChartRangeControl"
import { commonLineProps, INDICES_EU } from "~/constants/fht"
import { sortByDate } from "~/utilities/dates"
import { blue, green, light_blue, LM_color } from "~/styles/tailwindClasses"

export default function EUIndices({ indicesEUdata, eventDate, children }: any) {
	const ftse = indicesEUdata["%5EFTSE"][0].data
	const fchi = indicesEUdata["%5EFCHI"][0].data
	const gdaxi = indicesEUdata["%5EGDAXI"][0].data
	const n100 = indicesEUdata["%5EN100"][0].data

	const baseSeries = ftse

	let chartData = baseSeries.map((point: any, i: number) => ({
		date: point.date,
		FTSE: ftse[i].close,
		FCHI: fchi[i].close,
		GDAXI: gdaxi[i].close,
		N100: n100[i].close,
	}))

	chartData = sortByDate(chartData, INDICES_EU, eventDate)

	const [currentChartData, setcurrentChartData] = useState(chartData)
	const [percentagePressed, tooglePercentage] = useState<boolean>(false)

	const FTSELineProps = { dataKey: "FTSE", stroke: blue } as const
	const FCHILineProps = { dataKey: "FCHI", stroke: green } as const
	const GDAXILineProps = { dataKey: "GDAXI", stroke: light_blue } as const

	const xTicks = [
		currentChartData[0]?.date,
		currentChartData[Math.floor((currentChartData.length - 1) / 2)]?.date,
		currentChartData[currentChartData.length - 1]?.date,
	]

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
					<XAxis dataKey="date" ticks={xTicks} />{" "}
					{percentagePressed ? (
						<YAxis
							width={"auto"}
							domain={[(dataMin: number) => dataMin * 0.9, (dataMax: number) => dataMax * 1.1]}
							tickFormatter={(value) => value.toFixed(2)}
						/>
					) : (
						<YAxis width={"auto"} />
					)}
					<Tooltip />
					<Legend />
					<ReferenceLine x={eventDate} stroke="red" strokeWidth={1} />
					<Line {...commonLineProps} {...FTSELineProps} />
					<Line {...commonLineProps} {...FCHILineProps} />
					<Line {...commonLineProps} {...GDAXILineProps} />
					<Line type="monotone" dataKey="N100" stroke={LM_color} dot={false} isAnimationActive={false} connectNulls />
				</LineChart>
			</ResponsiveContainer>
		</>
	)
}
