import { getFhtChartData, getFhtEventCodes, getFhtEventLabels } from "@/_features/fht/dal"
import { getEventLabelByCode } from "@/_features/fht/server"
import ChartContainer from "@/_features/fht/sections/chart-container/chart-container"
import SectionCard from "@/components/elements/SectionCard"
import Text from "@/components/elements/Text"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

export async function generateMetadata(props: PageProps<"/fht/[code]">): Promise<Metadata> {
	const { code } = await props.params
	const eventsCodes = await getFhtEventCodes()

	if (!eventsCodes.includes(code)) {
		return { title: "Not found" }
	}

	const eventLabelsWithCode = await getFhtEventLabels()
	const eventLabel = getEventLabelByCode(eventLabelsWithCode, code)

	return {
		title: eventLabel,
		description: `Financial history timeline for ${eventLabel}.`,
	}
}

export async function generateStaticParams() {
	return (await getFhtEventCodes()).map((eventCode) => ({ code: eventCode }))
}

export default async function Page(props: PageProps<"/fht/[code]">) {
	const { code } = await props.params
	const eventsCodes = await getFhtEventCodes()

	if (!eventsCodes.includes(code)) {
		notFound()
	}

	const chartData = await getFhtChartData(code)

	return (
		<>
			<SectionCard>
				<Text as="h2" className="leading-none">
					{chartData.label}
				</Text>
				<Text className="text-foreground">{chartData.description}</Text>
			</SectionCard>

			<ChartContainer chartData={chartData} />
		</>
	)
}
