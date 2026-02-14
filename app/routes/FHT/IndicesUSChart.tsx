import { useState } from "react"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts"
import ChartRangeControl from "./ChartRangeControl"
import { blue, green, light_blue } from "~/styles/tailwindClasses"
import { sortByDate } from "~/utilities/dates"
import { commonLineProps, indicesUS } from "~/constants/fht"

export default function IndicesUSChart({ indicesUSdata, earlySigns, eventDate, children }: any) {
	const gspc = indicesUSdata["%5EGSPC"][0].data
	const dji = indicesUSdata["%5EDJI"][0].data
	const ixic = indicesUSdata["%5EIXIC"][0].data

	const baseSeries = gspc

	let chartData = baseSeries.map((point: any, i: number) => ({
		date: point.date,
		GSPC: gspc[i].close,
		DJI: dji[i].close,
		IXIC: ixic[i].close,
	}))

	chartData = sortByDate(chartData, indicesUS, eventDate)

	const [currentChartData, setcurrentChartData] = useState(chartData)
	const [percentagePressed, tooglePercentage] = useState<boolean>(false)

	const DJILineProps = { dataKey: "DJI", stroke: blue } as const
	const IXICLineProps = { dataKey: "IXIC", stroke: light_blue } as const
	const GSPCLineProps = { dataKey: "GSPC", stroke: green } as const

	return (
		<>
			<div className="flex items-center justify-between pb-3">
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
				<LineChart data={currentChartData} margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
					<XAxis dataKey="date" interval={50} textAnchor="end" height={20} />
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

					<ReferenceLine x={earlySigns} stroke="red" strokeWidth={1} />

					<Line {...commonLineProps} {...DJILineProps} />
					<Line {...commonLineProps} {...IXICLineProps} />
					<Line {...commonLineProps} {...GSPCLineProps} />
				</LineChart>
			</ResponsiveContainer>
		</>
	)
}
