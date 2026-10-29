import { getFhtChartData, getFhtEventLabels } from "@/_features/fht/server"
import Main from "@/components/elements/Main"
import SectionCard from "@/components/elements/SectionCard"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Text from "@/components/elements/Text"
import RouteSelector from "@/components/RouteSelector"

export const metadata: Metadata = {
	title: "FHT",
	description: "Financial history timeline — development build of the FHT experience.",
	robots: { index: false, follow: false },
}

export default async function Page(props: PageProps<"/fht/[code]">) {
	const { code } = await props.params

	const [chartData, eventLabelsWithCode] = await Promise.all([getFhtChartData(code), getFhtEventLabels()])

	if (!eventLabelsWithCode.some((event) => event.code === code)) {
		notFound()
	}
	return (
		<Main className="flex flex-col flex-1 gap-4 2xl:mx-70">
			<SectionCard>
				<Text as="h1" className="leading-none">
					{chartData.label}
				</Text>
				<Text className="text-foreground">{chartData.description}</Text>
				<RouteSelector
					items={eventLabelsWithCode}
					placeholder="Select a market event"
					className="w-full md:max-w-140 bg-background border-ring text-foreground"
				/>
			</SectionCard>
		</Main>
	)
}
