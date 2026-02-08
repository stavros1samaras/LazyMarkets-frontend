import { ChartTabs } from "~/components/ChartTabs"

type ChartRangeControlProps = {
	chartData: any[]
	eventDate: string
	setcurrentChartData: (data: any[]) => void
	children?: React.PropsWithChildren
}

export default function ChartRangeControl({
	chartData,
	eventDate,
	setcurrentChartData,
	children,
}: ChartRangeControlProps) {
	const sliceByRange = (daysBefore: number, daysAfter: number) => {
		const eventIndex = chartData.findIndex((item: any) => item.date === eventDate)

		const start = Math.max(eventIndex - daysBefore, 0)
		const end = Math.min(eventIndex + daysAfter + 1, chartData.length)

		setcurrentChartData(chartData.slice(start, end))
	}

	const setOriginalRange = () => {
		setcurrentChartData(chartData)
	}

	return (
		<>
			<ChartTabs>
				<span onClick={() => sliceByRange(3, 3)} className="text-[#5c5c5c] text-base font-normal">
					1w
				</span>
				<span onClick={() => sliceByRange(7, 7)} className="text-[#5c5c5c] text-base font-normal">
					2w
				</span>
				<span onClick={() => sliceByRange(11, 11)} className="text-[#5c5c5c] text-base font-normal">
					3w
				</span>
				<span onClick={() => sliceByRange(14, 14)} className="text-[#5c5c5c] text-base font-normal">
					1m
				</span>
				<span onClick={() => sliceByRange(30, 30)} className="text-[#5c5c5c] text-base font-normal">
					2m
				</span>
				<span onClick={() => sliceByRange(45, 45)} className="text-[#5c5c5c] text-base font-normal">
					3m
				</span>
				<span onClick={() => sliceByRange(90, 90)} className="text-[#5c5c5c] text-base font-normal">
					6m
				</span>
				<span
					onClick={setOriginalRange}
					className="hidden sm:block text-[#5c5c5c] text-base font-normal"
				>
					1y
				</span>
			</ChartTabs>
		</>
	)
}
