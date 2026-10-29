import { getFhtChartData } from "@/_features/fht/dal"
import SectionCard from "@/components/elements/SectionCard"
import Text from "@/components/elements/Text"

export default async function Page(props: PageProps<"/fht/[code]">) {
	const { code } = await props.params

	const chartData = await getFhtChartData(code)

	return (
		<SectionCard>
			<Text as="h2" className="leading-none">
				{chartData.label}
			</Text>
			<Text className="text-foreground">{chartData.description}</Text>
		</SectionCard>
	)
}
