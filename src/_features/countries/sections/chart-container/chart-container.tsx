import { ChartMetadata, RenderDataConfig } from "@/_features/countries/sections/chart-container/types"
import Text from "@/components/elements/Text"
import ChartSection from "@/_features/countries/sections/chart-container/components/ChartSection"
import SectionCard from "@/components/elements/SectionCard"
import { CHART_CATEGORIES, CHART_DATA } from "@/_features/countries/configs/config"
import { CHARTSCONFIG } from "@/_features/countries/configs/full_charts.config"

interface ChartContainerProps {
	countryData: Record<string, { year: string; value: number }[]>
}

export default function ChartContainer({ countryData }: ChartContainerProps) {
	const renderConfig: RenderDataConfig[] = CHARTSCONFIG.map((info: ChartMetadata, index: number) => ({
		...info,
		chartData: countryData[CHART_DATA[index]],
	}))

	const filteredConfig = renderConfig
		.filter((item) => Array.isArray(item.chartData) && item.chartData.length > 0)
		.map((item) => ({
			...item,
			chartData: item.chartData?.slice().reverse(),
		}))

	return (
		<>
			{CHART_CATEGORIES.map((category) => {
				const config = filteredConfig.filter((item) => item.category === category.toLowerCase())
				return (
					<SectionCard key={category}>
						<Text as="h2">{category}</Text>
						<ChartSection configs={config} />
					</SectionCard>
				)
			})}
		</>
	)
}
