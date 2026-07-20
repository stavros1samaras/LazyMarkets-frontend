import DesktopSidebar from "../../../_features/countries/sections/navigation/DesktopSidebar"
import Main, { MainContent } from "../../../components/elements/Main"
import ChartContainer from "../../../_features/countries/sections/chart-container/ChartContainer"
import Loading from "./loading"
import { Suspense } from "react"

export default async function Countries({ params }: { params: Promise<{ code: string }> }) {
	const countryCode = (await params).code

	return (
		<div className="flex w-full h-full ">
			<DesktopSidebar />
			<Main>
				<MainContent>
					<Suspense fallback={<Loading />}>
						<ChartContainer countryCode={countryCode} />
					</Suspense>
				</MainContent>
			</Main>
		</div>
	)
}
