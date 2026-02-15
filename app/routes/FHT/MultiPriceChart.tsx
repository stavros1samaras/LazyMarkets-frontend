import { useState } from "react"
import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Legend, ReferenceLine, Line } from "recharts"
import { assetColor, commonLineProps } from "~/constants/fht"
import ChartRangeControl from "~/routes/FHT/ChartRangeControl"
import { sortByDate } from "~/utilities/dates"

export default function MultiPriceChart({
	serverData,
	assetsUpper,
	assetsLower,
	assetsEnc,
	eventDate,
	specialProps,
	children,
}: any) {
	// Raw data
	const rawData: any = {}
	assetsLower.forEach((indice: any, index: string | number) => {
		const encIndex = assetsEnc[index]
		rawData[indice] = serverData[encIndex][0].data
	})

	console.log(rawData)
	// Chart data

	const base = rawData[Object.keys(rawData)[0]]
	let chartData: any = []
	base.forEach((data: any, generalIndex: number) => {
		const tempData: any = {}
		tempData.date = data.date
		assetsUpper.forEach((indice: any, index: string | number) => {
			const indexLower = assetsLower[index]
			tempData[indice] = rawData[indexLower][generalIndex].close
		})
		chartData.push(tempData)
	})
	chartData = sortByDate(chartData, assetsUpper, eventDate)

	const [currentChartData, setcurrentChartData] = useState(chartData)
	const [percentagePressed, tooglePercentage] = useState<boolean>(false)

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
						<YAxis width={"auto"} {...specialProps?.yAxis} />
					)}
					<Tooltip />
					<Legend />

					<ReferenceLine x={eventDate} stroke="red" strokeWidth={1} />
					{assetsUpper.map((asset: any) => {
						const color = assetColor[asset]
						return <Line {...commonLineProps} dataKey={asset} stroke={color} />
					})}
				</LineChart>
			</ResponsiveContainer>
		</>
	)
}
