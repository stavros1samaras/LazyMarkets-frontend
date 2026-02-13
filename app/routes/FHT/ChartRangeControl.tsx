import { Percent } from "lucide-react"
import { useEffect, useRef, useState, type MouseEvent } from "react"
import { ChartTabs } from "~/components/ChartTabs"
import { Toggle } from "~/components/ui/toggle"
import { baseDaysMap } from "~/constants/fht"
import { normalizeFromStart } from "~/utilities/fht"

export default function ChartRangeControl({
	chartData,
	eventDate,
	setcurrentChartData,
	percentagePressed,
	tooglePercentage,
}: any) {
	const sliceFromEvent = (days: number, forward: boolean): void => {
		const eventIndex = chartData.findIndex((item: any) => item.date === eventDate)

		const start = forward ? eventIndex : Math.max(eventIndex - days, 0)
		const end = Math.min(eventIndex + days + 1, chartData.length)

		let sliced = chartData.slice(start, end)

		if (forward) {
			sliced = normalizeFromStart(sliced)
		}

		setcurrentChartData(sliced)
	}

	const findRange = (e: any): void => {
		const value = e.target.value
		let days = baseDaysMap[value]

		const forward = percentagePressed

		if (forward) {
			days *= 2
		}

		sliceFromEvent(days, forward)
	}

	const activatePercentage = (): void => {
		tooglePercentage((prev: any) => !prev)
	}

	const tabRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		tabRef.current?.click()
	}, [percentagePressed])

	return (
		<>
			<span className="flex items-center">
				<Toggle
					pressed={percentagePressed}
					value="test"
					onClick={activatePercentage}
					className="mr-1 sm:mr-2 p-0 "
					size="default"
					variant="outline"
				>
					<div>
						<Percent color="#5c5c5c" strokeWidth={1.55} className="w-555 h-55 group-aria-pressed/toggle:fill-foreground" />
					</div>
				</Toggle>
				<ChartTabs key={percentagePressed ? "percent" : "normal"}>
					<button value={"1w"} onClick={findRange} className="hidden sm:block text-[#5c5c5c] text-base font-normal">
						1w
					</button>
					<button value={"2w"} onClick={findRange} className="hidden sm:block text-[#5c5c5c] text-base font-normal">
						2w
					</button>
					<button value={"3w"} onClick={findRange} className="text-[#5c5c5c] text-base font-normal">
						3w
					</button>
					<button value={"1m"} onClick={findRange} className="text-[#5c5c5c] text-base font-normal">
						1m
					</button>
					<button value={"2m"} onClick={findRange} className="text-[#5c5c5c] text-base font-normal">
						2m
					</button>
					<button value={"3m"} onClick={findRange} className="text-[#5c5c5c] text-base font-normal">
						3m
					</button>
					<button value={"6m"} ref={tabRef} onClick={findRange} className="text-[#5c5c5c] text-base font-normal">
						6m
					</button>
					<button value={"1y"} onClick={findRange} className="hidden sm:block text-[#5c5c5c] text-base font-normal">
						1y
					</button>
				</ChartTabs>
			</span>
		</>
	)
}
