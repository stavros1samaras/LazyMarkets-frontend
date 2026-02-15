import type { Route } from ".react-router/types/app/layouts/+types/FHT"
import { useParams } from "react-router"
import { CardContainer } from "~/components/CardContainer"
import DesktopEventSidebar from "~/components/DesktopEventSidebar"
import Main from "~/components/Main"
import MainContent from "~/components/MainContent"
import MobileEventSelector from "~/components/MobileEventSelector"
import Text from "~/components/Text"
import { chartDataModule } from "~/modules/.server/fht"
import Currencies from "~/routes/FHT/Currencies"
import Energy from "~/routes/FHT/Energy"
import EUIndices from "~/routes/FHT/EUIndices"
import IndicesUS from "~/routes/FHT/IndicesUS"
import Metals from "~/routes/FHT/Metals"
import USBonds from "~/routes/FHT/USBonds"
import { titleStyle } from "~/styles/tailwindClasses"
import { getDescriptionFromEvent, getTitleFromEvent } from "~/utilities/event"

export async function loader({ params, request }: Route.LoaderArgs) {
	const data = await chartDataModule({ params, request })
	return data
}

export async function clientLoader({ serverLoader, params }: Route.ClientLoaderArgs) {
	const cache = await caches.open("FHT")
	const CACHE_KEY = new Request(`${location.origin}/${params.eventCode}`)

	const cachedResponse = await cache.match(CACHE_KEY)
	if (cachedResponse) {
		const data = await cachedResponse.json()
		console.log("cached data")
		return data
	}

	const serverData = await serverLoader()

	await cache.put(CACHE_KEY, new Response(JSON.stringify(serverData)))

	console.log("server data")
	return serverData
}

export default function FHT({ loaderData }: Route.ComponentProps) {
	const { eventCode } = useParams()

	const title = getTitleFromEvent(eventCode as string)
	const description = getDescriptionFromEvent(eventCode as string)

	const eventDate = loaderData.date
	const indicesUSdata = loaderData.indicesUS
	const indicesEUdata = loaderData.indicesEU
	const bondsUSdata = loaderData.bondsUS
	const energydata = loaderData.energy
	const metalsdata = loaderData.metals
	const currenciesUS = loaderData.currenciesUS

	return (
		<div key={eventCode} className="flex w-full h-full">
			<DesktopEventSidebar type="events" />
			<Main>
				<CardContainer className="w-auto mb-4 md:hidden">
					<MobileEventSelector />
				</CardContainer>
				<CardContainer className="w-auto mb-4" withSection={true}>
					<Text as="h1" className={titleStyle}>
						{title} {eventDate}
					</Text>
					<p>{description}</p>
				</CardContainer>
				<MainContent>
					<CardContainer className="w-auto">
						<IndicesUS indicesUSdata={indicesUSdata} eventDate={eventDate}>
							<Text as="h3" className={`${titleStyle}`}>
								US Indices
							</Text>
						</IndicesUS>
					</CardContainer>
					<CardContainer>
						<EUIndices indicesEUdata={indicesEUdata} eventDate={eventDate}>
							<Text as="h3" className={`${titleStyle}`}>
								EU Indices
							</Text>
						</EUIndices>
					</CardContainer>
					<CardContainer>
						<USBonds bondsUSdata={bondsUSdata} eventDate={eventDate}>
							<Text as="h3" className={`${titleStyle}`}>
								US Bonds
							</Text>
						</USBonds>
					</CardContainer>
					<CardContainer>
						<Energy energydata={energydata} eventDate={eventDate}>
							<Text as="h3" className={`${titleStyle}`}>
								Energy
							</Text>
						</Energy>
					</CardContainer>
					<CardContainer>
						<Metals metalsData={metalsdata} eventDate={eventDate}>
							<Text as="h3" className={`${titleStyle}`}>
								Metals
							</Text>
						</Metals>
					</CardContainer>
					<CardContainer>
						<Currencies forexData={currenciesUS} eventDate={eventDate}>
							<Text as="h3" className={`${titleStyle}`}>
								Forex
							</Text>
						</Currencies>
					</CardContainer>
				</MainContent>
			</Main>
		</div>
	)
}
