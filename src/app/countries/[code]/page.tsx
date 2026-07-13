import DesktopEventSidebar from "../../../_features/countries/navigation/DesktopEventSidebar"
import Main, { MainContent } from "../../../components/elements/Main"
import CountryDataChartsContainer from "./CountryDataChartsContainer/CountryChartsContainer"
import Loading from "./loading"
import { Suspense } from "react"

export default async function Countries({ params }: { params: Promise<{ code: string }> }) {
	const countryCode = (await params).code

	// const aiData = getGeminiResponse()

	return (
		<div className="flex w-full h-full ">
			<DesktopEventSidebar type="events" />
			<Main>
				{/* <CardContainer className="w-auto mb-4" withSection={true}>
					<Ai aiData={aiData} />
				</CardContainer> */}
				<MainContent>
					<Suspense fallback={<Loading />}>
						<CountryDataChartsContainer countryCode={countryCode} />
					</Suspense>
				</MainContent>
			</Main>
		</div>
	)
}
