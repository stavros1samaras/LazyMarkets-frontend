import { Card, CardContent } from "../../../../../components/ui/card"
import HoverIcon from "../../../../../components/HoverIcon"
import Text from "../../../../../components/elements/Text"
import { Span } from "../../../../../components/elements/Span"
import { Info } from "lucide-react"
import SingleLineChart from "@/components/charts/SingleLineChart"
import { RenderDataConfig } from "../types"
import { ComponentType } from "react"
import ExportButton from "./ExportButton"

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
								<Span className="gap-2">
									<Text as="h3" className="font-semibold leading-none">
										{config.chartTitle}
									</Text>
									<Budge />
									<HoverIcon description={config.description} className="h-5 size-auto">
										<Info className="size-4 lg:size-5 text-foreground" />
									</HoverIcon>
								</Span>
								<Span className="gap-2">
									<ExportButton data={config.chartData} title={config.chartTitle} />
									<Text as="h3" className="font-semibold leading-none">
										{lastValue}
									</Text>
								</Span>
							</SingleLineChart>
						</CardContent>
					</Card>
				)
			})}
		</section>
	)
}
