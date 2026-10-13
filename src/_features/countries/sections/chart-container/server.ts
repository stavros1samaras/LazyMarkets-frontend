import "server-only"

import { getEnvURL } from "@/lib/server/environment"
import { handleGet } from "@/lib/server/data-fetchers/fetch-handler"
import { CountryApiData } from "@/_features/countries/types"

export async function getCountryData(code: string): Promise<CountryApiData> {
	const baseUrl: string = getEnvURL() as string
	const url = `${baseUrl}/api/db/country/get-country-data/${code}`

	const response = await handleGet(url)

	const data: CountryApiData = await response.json()

	return data
}
