import { Card, CardContent } from "../../../../components/ui/card"
import HoverIcon from "../../../../components/HoverIcon"
import { Title } from "../../../../components/elements/Text"
import { Info } from "lucide-react"
import SingleLineChart from "@/components/charts/SingleLineChart"
import { CHART_DATA, CHARTSCONFIG } from "@/_features/countries/config"
import { ChartMetadata, RenderDataConfig } from "@/_features/countries/sections/chart-container/types"
import { getCountryData } from "@/_features/countries/sections/chart-container/server"
import { ComponentType } from "react"
import ExportButton from "@/_features/countries/sections/chart-container/ExportButton"

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
					<Card key={index} className="w-auto">
						<CardContent className="p-3">
							<SingleLineChart data={config.chartData}>
								<span className="flex items-center gap-2">
									<Title as="h3">{config.chartTitle}</Title>
									<Budge />
									<HoverIcon description={config.description} className="h-5 size-auto">
										<Info className="size-4 lg:size-5 text-foreground" />
									</HoverIcon>
								</span>
								<span className="flex items-center gap-2">
									<ExportButton data={config.chartData} title={config.chartTitle} />
									<Title as="h4">{lastValue}</Title>
								</span>
							</SingleLineChart>
						</CardContent>
					</Card>
				)
			})}
		</>
	)
}
