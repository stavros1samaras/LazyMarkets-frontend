import { getFhtEventLabels } from "@/_features/fht/server"
import Main from "@/components/elements/Main"
import SectionCard from "@/components/elements/SectionCard"
import Text from "@/components/elements/Text"
import RouteSelector from "@/components/RouteSelector"
import type { ReactNode } from "react"

interface FhtLayoutProps {
	children: ReactNode
}

export default async function FhtLayout({ children }: FhtLayoutProps) {
	const eventLabelsWithCode = await getFhtEventLabels()

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
				<RouteSelector
					items={eventLabelsWithCode}
					placeholder="Select a market event"
					className="w-full md:max-w-140 bg-background border-ring text-foreground"
				/>
			</SectionCard>
			{children}
		</Main>
	)
}
