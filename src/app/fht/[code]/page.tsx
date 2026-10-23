import MarketEventSelector from "@/_features/fht/MarketEventSelector"
import { getEventDescription, getEventName } from "@/_features/fht/common"
import Main from "@/components/elements/Main"
import SectionCard from "@/components/elements/SectionCard"
import Text from "@/components/elements/Text"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "FHT",
	description: "Financial history timeline — development build of the FHT experience.",
	robots: { index: false, follow: false },
}

export default async function Page(props: PageProps<"/fht/[code]">) {
	const { code } = await props.params

	const title = getEventName(code)
	const description = getEventDescription(code)

	return (
		<Main className="flex flex-col flex-1 gap-4 mx-100">
			<SectionCard>
				<Text as="h1" className="leading-none">
					{title}
				</Text>
				<Text className="text-foreground">{description}</Text>
				<MarketEventSelector className="w-full md:max-w-140 bg-background border-ring text-foreground" />
			</SectionCard>
		</Main>
	)
}
