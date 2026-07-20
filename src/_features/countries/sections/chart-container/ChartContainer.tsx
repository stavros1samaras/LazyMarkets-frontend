import { titleStyle } from "@/styles/tailwindClasses"
import { CardContainer } from "../../../../components/CardContainer"
import HoverIcon from "../../../../components/HoverIcon"
import Text from "../../../../components/elements/Text"
import { Info } from "lucide-react"
import SingleLineChart from "@/components/charts/SingleLineChart"
import { CHART_DATA, CHARTSCONFIG } from "@/_features/countries/config"
import { ChartMetadata, RenderDataConfig } from "@/_features/countries/types"
import { getCountryData } from "@/_features/countries/modules/country"
import { Span } from "@/components/elements/Span"
import ChartBadge from "@/components/ChartBadge"

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
			{filteredConfig.map((config, index) => {
				return (
					<CardContainer key={index} className="bg-component-background">
						<SingleLineChart data={config.chartData}>
							<Span className="gap-2">
								<Text as="h3" className={`${titleStyle}  leading-none `}>
									{config.chartTitle}
								</Text>
								<ChartBadge type={config.badge} />
								<HoverIcon description={config.description} className="h-5 translate-y-[1.59px] size-auto">
									<Info className="size-5 text-neutral" />
								</HoverIcon>
							</Span>
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
