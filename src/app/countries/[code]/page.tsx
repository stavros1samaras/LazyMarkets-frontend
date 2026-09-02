import ChartContainer from "../../../_features/countries/sections/chart-container/chart-container"
import Controls from "@/_features/countries/sections/controls/controls"
import { getCountryData } from "@/_features/countries/sections/chart-container/server"
import { ChartDisplayProvider } from "@/contexts/ChartDisplayProvider"

export default async function Countries({ params }: { params: Promise<{ code: string }> }) {
	const countryCode = (await params).code
	const countryData = await getCountryData(countryCode)

	return (
		<>
			<ChartDisplayProvider>
				<Controls />
				<ChartContainer countryData={countryData} />
			</ChartDisplayProvider>
		</>
	)
}
