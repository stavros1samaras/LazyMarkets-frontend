import Main from "@/components/elements/Main"
import SectionCard from "@/components/elements/SectionCard"
import Text from "@/components/elements/Text"
import { getFhtEventCodes, getFhtEventLabels } from "@/_features/fht/dal"
import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"
import RouteSelector from "@/components/RouteSelector"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getEventLabelByCode } from "@/_features/fht/server"

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

export default async function Layout(props: LayoutProps<"/fht/[code]">) {
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
					<EventDetails params={props.params} />
				</Suspense>
			</SectionCard>
			{props.children}
		</Main>
	)
}

interface EventDetailsProps {
	params: Promise<{ code: string }>
}

async function EventDetails({ params }: EventDetailsProps) {
	const { code } = await params
	const eventsCodes = await getFhtEventCodes()

	if (!eventsCodes.includes(code)) {
		notFound()
	}

	const eventLabelsWithCode = await getFhtEventLabels()

	return (
		<RouteSelector
			items={eventLabelsWithCode}
			placeholder="Select a market event"
			className="w-full md:max-w-140 bg-background border-ring text-foreground"
		/>
	)
}
