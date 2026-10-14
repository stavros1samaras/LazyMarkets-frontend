import CategoriesContainer from "../../../_features/countries/sections/chart-container/chart-container"
import Controls from "@/_features/countries/sections/controls/controls"
import { getCountryData } from "@/_features/countries/sections/chart-container/server"
import { SimpleProvider as CountryDataProvider, StateProvider as ChartDisplayProvider } from "@/providers/GenericProviders"
import { ChartDisplayContext, CountryDataContext } from "@/_features/countries/sections/contexts"
import { cacheLife } from "next/cache"
import { COUNTRIES } from "@/_features/countries/config"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
	return COUNTRIES.map((country) => ({
		code: country.code,
	}))
}

export default async function Countries(props: PageProps<"/countries/[code]">) {
	"use cache"
	cacheLife("days")

	const { code } = await props.params
	if (!COUNTRIES.some((country) => country.code === code)) {
		notFound()
	}
	const countryData = await getCountryData(code)

	return (
		<CountryDataProvider context={CountryDataContext} value={countryData}>
			<ChartDisplayProvider context={ChartDisplayContext} value="area">
				<Controls />
				<CategoriesContainer countryData={countryData} />
			</ChartDisplayProvider>
		</CountryDataProvider>
	)
}
