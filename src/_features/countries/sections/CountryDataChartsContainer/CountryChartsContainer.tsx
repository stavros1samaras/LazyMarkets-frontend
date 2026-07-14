import { titleStyle } from "@/styles/tailwindClasses"
import { getCoutries } from "../../../../utils/server/data-fetchers/country"
import { CardContainer } from "../../../../components/CardContainer"
import HoverIcon from "../../../../components/HoverIcon"
import Text from "../../../../components/elements/Text"
import { Info } from "lucide-react"
import SingleLineChart from "@/components/charts/SingleLineChart"
import { Badge } from "@/components/ui/badge"
import { CHART_DATA, CHARTSCONFIG } from "@/_features/countries/config"
import { ChartMetadata, RenderDataConfig } from "@/_features/countries/types"

export default async function CountryDataChartsContainer({ countryCode }: { countryCode: string }) {
	const data = await getCoutries(countryCode)
	const formattedData = data.data

	const renderConfig: RenderDataConfig[] = CHARTSCONFIG.map((info: ChartMetadata, index: number) => ({
		...info,
		chartData: formattedData[CHART_DATA[index]],
	}))

	const filteredConfig = renderConfig
		.filter((item) => Array.isArray(item.chartData) && item.chartData.length > 0)
		.map((item) => ({
			...item,
			chartData: item.chartData?.slice().reverse(),
		}))

	return (
		<>
			{filteredConfig.map((config, index) => {
				return (
					<CardContainer key={index}>
						<SingleLineChart data={config.chartData}>
							<span className="flex items-center">
								<Text as="h3" className={`${titleStyle} self-center mr-2`}>
									{config.chartTitle}
								</Text>
								{config.valueType == "percentage" ? <Badge>%</Badge> : <Badge>A</Badge>}
								<HoverIcon description={config.description}>
									<Info className="size-6" />
								</HoverIcon>
							</span>
							<Text className={`${titleStyle}`}>
								{config.chartData[config.chartData.length - 1].value.toLocaleString("en-US", {
									notation: "compact",
									compactDisplay: "short",
								})}
							</Text>
						</SingleLineChart>
					</CardContainer>
				)
			})}
		</>
	)
}
