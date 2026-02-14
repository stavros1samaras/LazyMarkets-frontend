import { useState } from "react"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts"
import ChartRangeControl from "./ChartRangeControl"
import { bondsUS, commonLineProps } from "~/constants/fht"
import { sortByDate } from "~/utilities/dates"
import { blue, green, light_blue, LM_color } from "~/styles/tailwindClasses"

export default function USBondsChart({ bondsUSdata, eventDate, children }: any) {
	const irx = bondsUSdata["%5EIRX"][0].data
	const fvx = bondsUSdata["%5EFVX"][0].data
	const tnx = bondsUSdata["%5ETNX"][0].data
	const tyx = bondsUSdata["%5ETYX"][0].data

	const baseSeries = irx

	let chartData = baseSeries.map((point: any, i: number) => ({
		date: point.date,
		IRX: irx[i].close,
		FVX: fvx[i].close,
		TNX: tnx[i].close,
		TYX: tyx[i].close,
	}))

	chartData = sortByDate(chartData, bondsUS, eventDate)

	const [currentChartData, setcurrentChartData] = useState(chartData)
	const [percentagePressed, tooglePercentage] = useState<boolean>(false)

	const IRXLineProps = { dataKey: "IRX", stroke: blue } as const
	const FVXCLineProps = { dataKey: "FVX", stroke: light_blue } as const
	const TNXCLineProps = { dataKey: "TNX", stroke: green } as const
	const TYXCLineProps = { dataKey: "TYX", stroke: LM_color } as const

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
							width={"auto"}
							domain={[(dataMin: number) => dataMin * 0.9, (dataMax: number) => dataMax * 1.1]}
							tickFormatter={(value) => value.toFixed(2)}
						/>
					) : (
						<YAxis width={"auto"} domain={["dataMin", "dataMax"]} />
					)}
					<Tooltip />
					<Legend />
					<ReferenceLine x={eventDate} stroke="red" strokeWidth={1} />
					<Line {...commonLineProps} {...IRXLineProps} />
					<Line {...commonLineProps} {...FVXCLineProps} />
					<Line {...commonLineProps} {...TNXCLineProps} />
					<Line {...commonLineProps} {...TYXCLineProps} />
				</LineChart>
			</ResponsiveContainer>
		</>
	)
}
