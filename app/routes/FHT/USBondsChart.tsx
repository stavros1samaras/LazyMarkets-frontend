import { useState } from "react"
import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ReferenceLine,
} from "recharts"
import ChartRangeControl from "./ChartRangeControl"
import { bondsUS } from "~/constants/fht"
import { sortByDate } from "~/utilities/client/dates"

interface USBondsChartProps {
	bondsUSdata: Record<string, any>
}

export default function USBondsChart({
	bondsUSdata,
	earlySigns,
	eventDate,
	phaseConclusion,
	children,
}: any) {
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

	chartData = sortByDate(chartData, bondsUS, earlySigns, eventDate, phaseConclusion)

	const [currentChartData, setcurrentChartData] = useState(chartData)

	return (
		<>
			<div className="flex items-center justify-between">
				<span>{children}</span>
				<ChartRangeControl
					chartData={chartData}
					eventDate={eventDate}
					setcurrentChartData={setcurrentChartData}
				/>
			</div>

			<ResponsiveContainer width="100%" height={400}>
				<LineChart data={currentChartData}>
					<XAxis dataKey="date" interval={50} textAnchor="start" />
					<YAxis domain={["dataMin", "dataMax"]} />
					<Tooltip />
					<Legend />

					<ReferenceLine
						x={eventDate}
						stroke="red"
						strokeWidth={1}
						label={{ value: "Event", position: "top" }}
					/>

					<ReferenceLine
						x={earlySigns}
						stroke="red"
						strokeWidth={1}
						label={{ value: "Event", position: "top" }}
					/>

					<ReferenceLine
						x={phaseConclusion}
						stroke="red"
						strokeWidth={1}
						label={{ value: "Event", position: "top" }}
					/>

					<Line type="monotone" dataKey="IRX" dot={false} isAnimationActive={false} connectNulls />
					<Line type="monotone" dataKey="FVX" dot={false} isAnimationActive={false} connectNulls />
					<Line type="monotone" dataKey="TNX" dot={false} isAnimationActive={false} connectNulls />
					<Line type="monotone" dataKey="TYX" dot={false} isAnimationActive={false} connectNulls />
				</LineChart>
			</ResponsiveContainer>
		</>
	)
}
