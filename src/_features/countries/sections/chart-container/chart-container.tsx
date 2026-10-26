import { RenderDataConfig } from "@/_features/countries/sections/chart-container/types"
import Text from "@/components/elements/Text"
import HoverIcon from "@/components/HoverIcon"
import { Span } from "@/components/elements/Span"
import { Info } from "lucide-react"
import { ComponentType } from "react"
import { ExportButton } from "@/_features/countries/sections/xlsx.CSR"
import { ChartObserver, ChartLifecycle } from "@/components/charts/ChartLogicApi"
import { ChartData } from "@/_features/countries/sections/chart-container/contexts"
import { SimpleProvider as ChartDataProvider } from "@/providers/GenericProviders"
import { Chart, ChartHeader, ChartContent } from "@/components/charts/ChartUiApi"
import { CountryIndexChart } from "@/_features/countries/sections/chart-container/components/CountryIndexChart"
import { ChartDisplayContext } from "@/_features/countries/sections/contexts"
import SectionCard from "@/components/elements/SectionCard"
import { CHART_CATEGORIES, INDICES } from "@/_features/countries/config"
import { CHARTS_METADATA } from "@/_features/countries/sections/chart-container/config"
import { CountryApiData } from "@/_features/countries/types"
import { formatCompact } from "@/lib/formatters"

export default function CategoriesContainer({ countryData }: { countryData: CountryApiData }) {
	const filteredConfig = CHARTS_METADATA.map((chartMetadata, index) => ({
		// combine config's chart metadata with country's data
		...chartMetadata,
		chartData: countryData[INDICES[index]],
	}))
		.filter((item) => Array.isArray(item.chartData) && item.chartData.length > 0)
		// keep only entries that actually have data
		.map((item) => ({
			// reverse the chartData so the newest data is first
			...item,
			chartData: item.chartData.slice().reverse(),
		})) satisfies RenderDataConfig[]

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

				const lastValue = formatCompact(config.chartData[config.chartData.length - 1].value)

				return (
					<Chart key={index}>
						<ChartDataProvider context={ChartData} value={config.chartData}>
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
										<CountryIndexChart dataContext={ChartData} displayContext={ChartDisplayContext} />
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
