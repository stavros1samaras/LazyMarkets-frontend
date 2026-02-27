import findCountryName from "@/_utils/country"
import { getGeminiResponse } from "@/_utils/server/data-fetchers/ai"
import Ai from "@/components/Ai"
import { CardContainer } from "@/components/CardContainer"

import DesktopEventSidebar from "@/components/DesktopEventSidebar"
import Main from "@/components/Main"
import MainContent from "@/components/MainContent"
import CountryDataChartsContainer from "@/countries/[code]/CountryDataChartsContainer"
import Loading from "@/countries/[code]/loading"
import { Suspense } from "react"

export default async function Countries({ params }: { params: Promise<{ code: string }> }) {
	const countryName = findCountryName((await params).code)

	const countryCode = (await params).code

	const aiData = getGeminiResponse(countryCode)

	return (
		<div className="flex w-full h-full ">
			<DesktopEventSidebar type="events" />
			<Main>
				<CardContainer className="w-auto mb-4" withSection={true}>
					<Ai aiData={aiData} />
				</CardContainer>
				<MainContent>
					<Suspense fallback={<Loading />}>
						<CountryDataChartsContainer countryCode={countryCode} />
					</Suspense>
				</MainContent>
			</Main>
		</div>
	)
}
