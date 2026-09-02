import { CardContent, CardHeader } from "../../../../components/ui/card"
import { CHART_CATEGORIES, CHART_DATA, CHARTSCONFIG } from "@/_features/countries/config"
import { ChartMetadata, RenderDataConfig } from "@/_features/countries/sections/chart-container/types"
import { getCountryData } from "@/_features/countries/sections/chart-container/server"
import Text from "@/components/elements/Text"
import ChartSection from "@/_features/countries/sections/chart-container/ChartSection"
import SectionCard from "@/components/elements/SectionCard"

export default async function ChartContainer({ countryCode }: { countryCode: string }) {
	const countryData = await getCountryData(countryCode)

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
					<SectionCard key={category} className="gap-2 pt-2 pb-4 ">
						<CardHeader className="px-3 lg:px-6">
							<Text as="h2">{category}</Text>
						</CardHeader>
						<CardContent className="px-3 lg:px-6">
							<ChartSection configs={config} />
						</CardContent>
					</SectionCard>
				)
			})}
		</>
	)
}
