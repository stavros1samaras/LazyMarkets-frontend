import Main from "@/components/elements/Main"
import SectionCard from "@/components/elements/SectionCard"
import Text from "@/components/elements/Text"
import { getFhtEventLabels } from "@/_features/fht/dal"
import type { FhtEventLabel } from "@/_features/fht/types"
import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"
import RouteSelector from "@/components/RouteSelector"

export default async function Layout(props: LayoutProps<"/fht">) {
	const eventLabelsWithCode = getFhtEventLabels()

	return (
		<Main className="flex flex-col flex-1 gap-4 2xl:mx-70">
			<SectionCard>
				<Text as="h1" className="leading-none">
					Financial History Timeline
				</Text>
				<Text>
					Explore how major historical events affected financial markets through interactive price charts for global indices,
					bonds, commodities, and currencies.
				</Text>
				<Suspense fallback={<Skeleton className="h-9 w-full md:max-w-140" />}>
					<EventDetails eventLabelsWithCode={eventLabelsWithCode} />
				</Suspense>
			</SectionCard>
			{props.children}
		</Main>
	)
}

interface EventDetailsProps {
	eventLabelsWithCode: Promise<FhtEventLabel[]>
}

async function EventDetails({ eventLabelsWithCode }: EventDetailsProps) {
	const labels = await eventLabelsWithCode

	return (
		<RouteSelector
			items={labels}
			placeholder="Select a market event"
			className="w-full md:max-w-140 bg-background border-ring text-foreground"
		/>
	)
}
