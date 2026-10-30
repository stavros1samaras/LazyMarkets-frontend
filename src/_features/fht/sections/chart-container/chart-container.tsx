import type { FhtApiChartData, FhtTickerData } from "@/_features/fht/types"
import { getFhtAssetCategories } from "@/_features/fht/dal"
import { resolveEventDate } from "@/_features/fht/dateFormatter"
import { Chart, ChartContent, ChartHeader } from "@/components/charts/ChartUiApi"
import { ChartObserver } from "@/components/charts/ChartLogicApi"
import SectionCard from "@/components/elements/SectionCard"
import Text from "@/components/elements/Text"
import { Span } from "@/components/elements/Span"
import { FhtChartData } from "@/_features/fht/sections/chart-container/contexts"
import { FhtIndexChart } from "@/_features/fht/sections/chart-container/components/FhtIndexChart"
import { formatCompact } from "@/lib/formatters"
import { StateProvider as ChartDataProvider } from "@/providers/GenericProviders"

export default async function ChartContainer({ chartData }: { chartData: FhtApiChartData }) {
	const indices = chartData.data.filter((ticker) => ticker.data.length > 0)
	const categories = await getFhtAssetCategories()

	return (
		<>
			{categories.map((category) => {
				const categoryIndices = indices.filter((ticker) => ticker.category === category)

				return (
					<SectionCard key={category}>
						<Text as="h2">{category}</Text>
						<IndexContainer indices={categoryIndices} eventDate={chartData.date} />
					</SectionCard>
				)
			})}
		</>
	)
}

interface IndexContainerProps {
	indices: FhtTickerData[]
	eventDate: string
}

function IndexContainer({ indices, eventDate }: IndexContainerProps) {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4">
			{indices.map((index) => {
				const lastValue = formatCompact(index.data[index.data.length - 1].close)
				const referenceDate = resolveEventDate(index.data, eventDate)

				return (
					<Chart key={index.name}>
						<ChartDataProvider context={FhtChartData} value={index.data}>
							<ChartHeader>
								<Span className="gap-2">
									<Text as="h3" className="font-semibold leading-none">
										{index.name}
									</Text>
								</Span>
								<Span className="gap-2">
									<Text as="h3" className="font-semibold leading-none">
										{lastValue}
									</Text>
								</Span>
							</ChartHeader>
							<ChartContent>
								<ChartObserver>
									<FhtIndexChart dataContext={FhtChartData} eventDate={referenceDate} />
								</ChartObserver>
							</ChartContent>
						</ChartDataProvider>
					</Chart>
				)
			})}
		</section>
	)
}
