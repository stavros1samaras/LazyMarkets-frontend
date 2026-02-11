import { Suspense, useEffect, useRef, useState } from "react"
// import { fetchTickerPriceGraph } from '~/routes/resources/fetchTickerPriceGraph';
import { findPreviousMonthDate, findPreviousYearDate } from "~/utilities/dates"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot, Legend } from "recharts"
import type { Ticker } from "~/archive/types/tickers"
import type { date } from "~/types/date"
import { MAX_START_DATE, MAX_INTERVAL, ONE_MONTH_INTERVAL, ONE_YEAR_INTERVAL } from "~/archive/constants"
import { useFetcher, useLoaderData, useParams } from "react-router"
// import React from "react";
import * as React from "react"
import { Tabs } from "@base-ui-components/react/tabs"

interface props {
	chartData: any
	loaderData?: any
}

export function GraphTabs({ month, oneYear, max }: any) {
	const rootClasses = "rounded-md border border-gray-200"

	const listClasses = "relative z-0 flex gap-1 px-1 shadow-[inset_0_-1px] shadow-gray-200"

	const tabClasses =
		"flex h-8 items-center justify-center border-0 px-2 text-sm font-medium break-keep whitespace-nowrap text-gray-600 outline-none select-none before:inset-x-0 before:inset-y-1 before:rounded-sm before:-outline-offset-1 before:outline-blue-800 hover:text-gray-900 focus-visible:relative focus-visible:before:absolute focus-visible:before:outline focus-visible:before:outline-2 data-[selected]:text-gray-900"

	const indicatorClasses =
		"absolute top-1/2 left-0 z-[-1] h-6 w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] -translate-y-1/2 rounded-sm bg-gray-100 transition-all duration-200 ease-in-out"

	const tabs = [
		{ value: "1 month", label: "1 month", onClick: month },
		{ value: "1 year", label: "1 year", onClick: oneYear },
		{ value: "max", label: "max", onClick: max },
	]

	return (
		<Tabs.Root className={rootClasses} defaultValue="overview">
			<Tabs.List className={listClasses}>
				{tabs.map(({ value, label, onClick }) => (
					<Tabs.Tab key={value} className={tabClasses} value={value}>
						<button onClick={onClick}>{label}</button>
					</Tabs.Tab>
				))}
				<Tabs.Indicator className={indicatorClasses} />
			</Tabs.List>
		</Tabs.Root>
	)
}

export default function PriceChart({ chartData }: any) {
	let { symbol } = useParams()
	const symbolAsked: string = symbol as string

	const [currentChartData, setcurrentChartData] = useState(chartData)
	const [datesPerPeriod, setDatesPerPeriod] = useState<number>(100)

	let oneYearRangeRef = useRef<any>(null)
	let oneMonthRangeRef = useRef<any>(chartData)
	let maxRangeRef = useRef<any>(null)

	const fetcher = useFetcher()

	const [pendingRef, setPendingRef] = useState<null | { ref: any; period: number }>(null)

	useEffect(() => {
		// when i refactor the modules to the last version i think
		// i would pendingRef.ref.current = fetcherData with no problem
		// but i will leave it as it is for now
		if (fetcher.state === "idle" && fetcher.data && pendingRef) {
			let fetcherData = fetcher.data
			pendingRef.ref.current = fetcherData.pricePoints
			setcurrentChartData(fetcherData.pricePoints)
			setDatesPerPeriod(pendingRef.period)
			setPendingRef(null)
		}
	}, [fetcher.state, fetcher.data])

	const oneMonth = () => {
		if (oneMonthRangeRef.current === null) {
			const previousMonthDate: date = { ...findPreviousMonthDate() }
			const ticker: Ticker = { symbol: symbolAsked, startDate: previousMonthDate.startDate }
			setPendingRef({ ref: oneMonthRangeRef, period: ONE_MONTH_INTERVAL })
			fetcher.load(`/se/technical/overview/${ticker.symbol}?start=${ticker.startDate}`)
		} else {
			setcurrentChartData(oneMonthRangeRef.current)
			setDatesPerPeriod(ONE_MONTH_INTERVAL)
		}
	}
	const oneYearDate = () => {
		if (oneYearRangeRef.current === null) {
			const previousYearDate: date = { ...findPreviousYearDate() }
			const ticker: Ticker = { symbol: symbolAsked, startDate: previousYearDate.startDate }
			setPendingRef({ ref: oneYearRangeRef, period: ONE_YEAR_INTERVAL })
			// fetcher.load(`/fetchTickerPricePoints/${ticker.symbol}?start=${ticker.startDate}`);
			fetcher.load(`/se/technical/overview/${ticker.symbol}?start=${ticker.startDate}`)
		} else {
			setcurrentChartData(oneYearRangeRef.current)
			setDatesPerPeriod(ONE_YEAR_INTERVAL)
		}
	}

	const maxPeriod = () => {
		if (maxRangeRef.current === null) {
			const ticker: Ticker = { symbol: symbolAsked, startDate: MAX_START_DATE }
			setPendingRef({ ref: maxRangeRef, period: MAX_INTERVAL })
			fetcher.load(`/se/technical/overview/${ticker.symbol}?start=${ticker.startDate}`)
		} else {
			setcurrentChartData(maxRangeRef.current)
			setDatesPerPeriod(MAX_INTERVAL)
		}
	}

	return (
		<>
			<GraphTabs month={oneMonth} oneYear={oneYearDate} max={maxPeriod} />

			<ResponsiveContainer width="100%" height={300}>
				<AreaChart
					width={500}
					height={400}
					data={currentChartData}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}
				>
					<CartesianGrid strokeDasharray="100 100" vertical={false} />
					<XAxis
						dataKey="Date"
						interval={datesPerPeriod}
						tickFormatter={(date, index) => {
							if (index === 0) return ""
							return date.split("T")[0]
						}}
					/>
					<YAxis />

					<Tooltip />
					<Area
						type="monotone"
						dataKey="close"
						isAnimationActive={false}
						stroke="#004bedff"
						fill="#8884d8"
						name="Bitcoin Price"
					/>
					<Legend verticalAlign="top" align="right" />
				</AreaChart>
			</ResponsiveContainer>
		</>
	)
}
