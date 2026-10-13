import { ChartMetadata, RenderDataConfig } from "@/_features/countries/sections/chart-container/types"
import Text from "@/components/elements/Text"
import HoverIcon from "@/components/HoverIcon"
import { Span } from "@/components/elements/Span"
import { Info } from "lucide-react"
import { ComponentType } from "react"
import { ExportButton } from "@/_features/countries/sections/xlsx.CSR"
import { ChartDataProvider, ChartObserver, ChartLifecycle } from "@/components/charts/ChartLogicApi"
import { Chart, ChartHeader, ChartContent } from "@/components/charts/ChartUiApi"
import { IndexChart } from "@/_features/countries/sections/chart-container/components/IndexChart"
import { ChartDisplayContext } from "@/_features/countries/sections/ChartDisplay.provider"
import SectionCard from "@/components/elements/SectionCard"
import { CHART_CATEGORIES, CHART_DATA } from "@/_features/countries/config"
import { CHARTSCONFIG } from "@/_features/countries/sections/chart-container/config"

interface ChartContainerProps {
	countryData: Record<string, { year: string; value: number }[]>
}

export default function CategoriesContainer({ countryData }: ChartContainerProps) {
	const renderConfig = CHARTSCONFIG.map((info, index) => ({
		...info,
		chartData: countryData[CHART_DATA[index]],
	})) satisfies RenderDataConfig[]

	const filteredConfig = renderConfig
		.filter((item) => Array.isArray(item.chartData) && item.chartData.length > 0)
		.map((item) => ({
			...item,
			chartData: item.chartData?.slice().reverse(),
		}))

	return (
		<>
			{CHART_CATEGORIES.map((category) => {
				const config = filteredConfig.filter((item) => item.category === category)
				return (
					<SectionCard key={category}>
						<Text as="h2">{category}</Text>
						<IndexContainer configs={config} />
					</SectionCard>
				)
			})}
		</>
	)
}

function IndexContainer({ configs }: { configs: RenderDataConfig[] }) {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4">
			{configs.map((config, index) => {
				const Budge: ComponentType = config.badge

				const lastValue = config.chartData[config.chartData.length - 1].value.toLocaleString("en-US", {
					notation: "compact",
					compactDisplay: "short",
				})

				return (
					<Chart key={index}>
						<ChartDataProvider data={config.chartData}>
							<ChartHeader>
								<Span className="gap-2">
									<Text as="h3" className="font-semibold leading-none">
										{config.chartTitle}
									</Text>
									<HoverIcon description={config.description} className="h-5 size-auto">
										<Info className="size-4 lg:size-5 text-foreground" />
									</HoverIcon>
									<Budge />
								</Span>
								<Span className="gap-2">
									<ExportButton title={config.chartTitle} />
									<Text as="h3" className="font-semibold leading-none">
										{lastValue}
									</Text>
								</Span>
							</ChartHeader>
							<ChartContent>
								<ChartLifecycle context={ChartDisplayContext}>
									<ChartObserver>
										<IndexChart />
									</ChartObserver>
								</ChartLifecycle>
							</ChartContent>
						</ChartDataProvider>
					</Chart>
				)
			})}
		</section>
	)
}
