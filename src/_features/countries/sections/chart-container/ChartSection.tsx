import { Card, CardContent } from "../../../../components/ui/card"
import HoverIcon from "../../../../components/HoverIcon"
import { Title } from "../../../../components/elements/Text"
import { Info } from "lucide-react"
import SingleLineChart from "@/components/charts/SingleLineChart"
import { RenderDataConfig } from "@/_features/countries/sections/chart-container/types"
import { ComponentType } from "react"
import ExportButton from "@/_features/countries/sections/chart-container/ExportButton"

export default function ChartSection({ configs }: { configs: RenderDataConfig[] }) {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4">
			{configs.map((config, index) => {
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
		</section>
	)
}
