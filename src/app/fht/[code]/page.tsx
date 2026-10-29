import { getFhtChartData, getFhtEventLabels } from "@/_features/fht/server"
import SectionCard from "@/components/elements/SectionCard"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Text from "@/components/elements/Text"

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
		<SectionCard>
			<Text as="h2" className="leading-none">
				{chartData.label}
			</Text>
			<Text className="text-foreground">{chartData.description}</Text>
		</SectionCard>
	)
}
