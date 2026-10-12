import ChartContainer from "../../../_features/countries/sections/chart-container/chart-container"
import Controls from "@/_features/countries/sections/controls/controls"
import { getCountryData } from "@/_features/countries/sections/chart-container/server"
import { ChartDisplayProvider } from "@/_features/countries/sections/ChartDisplay.provider"
import { CountryDataProvider } from "@/_features/countries/sections/CountryData.provider"
import { cacheLife } from "next/cache"

export default async function Countries(props: PageProps<"/countries/[code]">) {
	"use cache"
	cacheLife("days")

	const { code } = await props.params
	const countryData = await getCountryData(code)

	return (
		<CountryDataProvider value={countryData}>
			<ChartDisplayProvider>
				<Controls />
				<ChartContainer countryData={countryData} />
			</ChartDisplayProvider>
		</CountryDataProvider>
	)
}
