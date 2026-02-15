import { useState } from "react"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts"
import ChartRangeControl from "./ChartRangeControl"
import { blue, green, light_blue } from "~/styles/tailwindClasses"
import { sortByDate } from "~/utilities/dates"
import { commonLineProps, INDICES_US, INDICES_US_ENC, INDICES_US_LOWER } from "~/constants/fht"

export default function IndicesUS({ indicesUSdata, eventDate, children }: any) {
	// Raw data
	const rawData: any = {}
	INDICES_US_LOWER.forEach((indice: any, index) => {
		const encIndex = INDICES_US_ENC[index]
		rawData[indice] = indicesUSdata[encIndex][0].data
	})
	// Chart data
	const base = rawData.gspc
	let chartData: any = []
	base.forEach((data: any, generalIndex: number) => {
		const tempData: any = {}
		tempData.date = data.date
		INDICES_US.forEach((indice: any, index) => {
			const indexLower = INDICES_US_LOWER[index]
			tempData[indice] = rawData[indexLower][generalIndex].close
		})
		chartData.push(tempData)
	})
	chartData = sortByDate(chartData, INDICES_US, eventDate)

	const [currentChartData, setcurrentChartData] = useState(chartData)
	const [percentagePressed, tooglePercentage] = useState<boolean>(false)

	const DJILineProps = { dataKey: "DJI", stroke: blue } as const
	const IXICLineProps = { dataKey: "IXIC", stroke: light_blue } as const
	const GSPCLineProps = { dataKey: "GSPC", stroke: green } as const

	const xTicks = [
		currentChartData[0]?.date,
		currentChartData[Math.floor((currentChartData.length - 1) / 2)]?.date,
		currentChartData[currentChartData.length - 1]?.date,
	]

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
					<XAxis dataKey="date" ticks={xTicks} />
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

					<Line {...commonLineProps} {...DJILineProps} />
					<Line {...commonLineProps} {...IXICLineProps} />
					<Line {...commonLineProps} {...GSPCLineProps} />
				</LineChart>
			</ResponsiveContainer>
		</>
	)
}
