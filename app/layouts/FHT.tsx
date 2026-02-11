import type { Route } from ".react-router/types/app/layouts/+types/FHT"
import { useParams } from "react-router"
import { ChartCardContainer } from "~/components/ChartCardContainer"
import Main from "~/components/Main"
import MobileEventSelector from "~/components/MobileEventSelector"
import DesktopEventSidebar from "~/components/DesktopEventSidebar"
import { chartDataModule } from "~/modules/.server/fht"
import CurrenciesCommoditiesUSChart from "~/routes/FHT/CurrenciesCommoditiesUSChart"
import EnergyCommoditiesChart from "~/routes/FHT/EnergyCommoditiesChart"
import EUIndicesChart from "~/routes/FHT/EUIndicesChart"
import IndicesUSChart from "~/routes/FHT/IndicesUSChart"
import PreciousMetalsChart from "~/routes/FHT/MetalsCommoditiesChart"
import USBondsChart from "~/routes/FHT/USBondsChart"
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

	const earlySigns = loaderData.earlySigns
	const eventDate = loaderData.date
	const phaseConclusion = loaderData.phaseConclusion
	const indicesUSdata = loaderData.indicesUS
	const indicesEUdata = loaderData.indicesEU
	const bondsUSdata = loaderData.bondsUS
	const energydata = loaderData.energy
	const metalsdata = loaderData.metals
	const currenciesUS = loaderData.currenciesUS

	return (
		<>
			<div key={eventCode} className="flex w-full h-full">
				<aside>
					<DesktopEventSidebar type="events" />
				</aside>
				<Main>
					<ChartCardContainer className="w-auto mb-4 md:hidden">
						<MobileEventSelector />
					</ChartCardContainer>
					<ChartCardContainer className="w-auto mb-4">
						<section className="select-text">
							<h1 className={titleStyle}>
								{title} {eventDate}
							</h1>
							<p>{description}</p>
						</section>
					</ChartCardContainer>
					<section className="grid grid-cols-1 xl:grid-cols-2 gap-4">
						<ChartCardContainer className="w-auto">
							<IndicesUSChart
								indicesUSdata={indicesUSdata}
								eventDate={eventDate}
								earlySigns={earlySigns}
								phaseConclusion={phaseConclusion}
							>
								<h3 className={`${titleStyle}`}>US Indices</h3>
							</IndicesUSChart>
						</ChartCardContainer>

						<ChartCardContainer>
							<EUIndicesChart
								indicesEUdata={indicesEUdata}
								eventDate={eventDate}
								earlySigns={earlySigns}
								phaseConclusion={phaseConclusion}
							>
								<h3 className={`${titleStyle}`}>EU Indices</h3>
							</EUIndicesChart>
						</ChartCardContainer>

						<ChartCardContainer>
							<USBondsChart
								bondsUSdata={bondsUSdata}
								eventDate={eventDate}
								earlySigns={earlySigns}
								phaseConclusion={phaseConclusion}
							>
								<h3 className={`${titleStyle}`}>US Bonds</h3>
							</USBondsChart>
						</ChartCardContainer>

						<ChartCardContainer>
							<EnergyCommoditiesChart
								energydata={energydata}
								eventDate={eventDate}
								earlySigns={earlySigns}
								phaseConclusion={phaseConclusion}
							>
								<h3 className={`${titleStyle}`}>Energy</h3>
							</EnergyCommoditiesChart>
						</ChartCardContainer>

						<ChartCardContainer>
							<PreciousMetalsChart
								metalsData={metalsdata}
								eventDate={eventDate}
								earlySigns={earlySigns}
								phaseConclusion={phaseConclusion}
							>
								<h3 className={`${titleStyle}`}>Metals</h3>
							</PreciousMetalsChart>
						</ChartCardContainer>

						<ChartCardContainer>
							<CurrenciesCommoditiesUSChart
								forexData={currenciesUS}
								eventDate={eventDate}
								earlySigns={earlySigns}
								phaseConclusion={phaseConclusion}
							>
								<h3 className={`${titleStyle}`}>Forex</h3>
							</CurrenciesCommoditiesUSChart>
						</ChartCardContainer>
					</section>
				</Main>
			</div>
		</>
	)
}
