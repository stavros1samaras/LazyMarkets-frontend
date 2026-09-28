import HoverIcon from "../../../../../components/HoverIcon"
import Text from "../../../../../components/elements/Text"
import { Span } from "../../../../../components/elements/Span"
import { Info } from "lucide-react"
import { RenderDataConfig } from "../types"
import { ComponentType } from "react"
import ExportButton from "./ExportButton"
import { ChartDataProvider, ChartObserver } from "@/components/charts/ChartLogicApi"
import { ChartLifecycle } from "@/_features/countries/sections/chart-container/components/ChartLifecycle"
import { Chart, ChartHeader, ChartContent } from "@/components/charts/ChartUiApi"
import { IndexChart } from "./IndexChart"
import { ChartDisplayContext } from "@/_features/countries/sections/ChartDisplay.provider"

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
