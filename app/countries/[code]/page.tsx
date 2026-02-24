import findCountryName from "@/_utils/country"
import DesktopEventSidebar from "@/components/DesktopEventSidebar"
import Main from "@/components/Main"
import MainContent from "@/components/MainContent"
import CountryDataChartsContainer from "@/countries/[code]/CountryDataChartsContainer"
import Loading from "@/countries/[code]/loading"
import { Suspense } from "react"

export default async function Countries({ params }: { params: Promise<{ code: string }> }) {
	const countryName = findCountryName((await params).code)

	const countryCode = (await params).code
	return (
		<div className="flex w-full h-full ">
			<DesktopEventSidebar type="events" />
			<Main>
				<MainContent>
					<Suspense fallback={<Loading />}>
						<CountryDataChartsContainer countryCode={countryCode} />
					</Suspense>
				</MainContent>
			</Main>
		</div>
	)
}
