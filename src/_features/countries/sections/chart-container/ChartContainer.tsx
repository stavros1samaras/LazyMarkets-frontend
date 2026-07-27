import { CardContainer } from "../../../../components/CardContainer"
import HoverIcon from "../../../../components/HoverIcon"
import { Title } from "../../../../components/elements/Text"
import { Info } from "lucide-react"
import SingleLineChart from "@/components/charts/SingleLineChart"
import { CHART_DATA, CHARTSCONFIG } from "@/_features/countries/config"
import { ChartMetadata, RenderDataConfig } from "@/_features/countries/types"
import { getCountryData } from "@/_features/countries/modules/country"
import { Span } from "@/components/elements/Span"
import { ComponentType } from "react"

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
				const Budge: ComponentType = config.badge

				const lastValue = config.chartData[config.chartData.length - 1].value.toLocaleString("en-US", {
					notation: "compact",
					compactDisplay: "short",
				})

				return (
					<CardContainer key={index}>
						<SingleLineChart data={config.chartData}>
							<Span className="gap-2">
								<Title as="h3">{config.chartTitle}</Title>
								<Budge />
								<HoverIcon description={config.description} className="h-5 translate-y-[1.59px] size-auto">
									<Info className="size-5 text-neutral" />
								</HoverIcon>
							</Span>
							<Title as="h4">{lastValue}</Title>
						</SingleLineChart>
					</CardContainer>
				)
			})}
		</>
	)
}
