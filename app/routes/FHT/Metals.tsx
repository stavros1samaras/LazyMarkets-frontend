import { useState } from "react"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine, ReferenceArea } from "recharts"
import ChartRangeControl from "./ChartRangeControl"
import { commonLineProps, preciousMetals } from "~/constants/fht"
import { sortByDate } from "~/utilities/dates"
import { brown, gray, taupe, yellow } from "~/styles/tailwindClasses"

export default function Metals({ metalsData, eventDate, children }: any) {
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

	chartData = sortByDate(chartData, preciousMetals, eventDate)

	const [currentChartData, setcurrentChartData] = useState(chartData)
	const [percentagePressed, tooglePercentage] = useState<boolean>(false)

	const goldLineProps = { dataKey: "Gold", stroke: yellow } as const
	const silverLineProps = { dataKey: "Silver", stroke: gray } as const
	const copperLineProps = { dataKey: "Copper", stroke: brown } as const

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
						<>
							<YAxis width={"auto"} yAxisId="left" orientation="left" stroke={yellow} />
							<YAxis width={"auto"} yAxisId="right" orientation="right" stroke={taupe} />
						</>
					)}

					<Tooltip />
					<Legend />

					<ReferenceLine x={eventDate} yAxisId="left" stroke="red" strokeWidth={1} />
					{/* <ReferenceArea x1="03-04-25" x2="08-04-25" yAxisId="left" fill="red" fillOpacity={0.1} /> */}

					{percentagePressed ? (
						<>
							<Line {...commonLineProps} {...goldLineProps} />
							<Line {...commonLineProps} {...silverLineProps} />
							<Line {...commonLineProps} {...copperLineProps} />
						</>
					) : (
						<>
							<Line {...commonLineProps} yAxisId="left" {...goldLineProps} />
							<Line {...commonLineProps} yAxisId="right" {...silverLineProps} />
							<Line {...commonLineProps} yAxisId="right" {...copperLineProps} />
						</>
					)}
				</LineChart>
			</ResponsiveContainer>
		</>
	)
}
