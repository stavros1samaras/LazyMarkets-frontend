import "server-only"

import { getEnvURL } from "@/lib/server/environment"
import { handleGet } from "@/lib/server/data-fetchers/fetch-handler"

export async function getCountryData(code: string) {
	const baseUrl: string = getEnvURL() as string
	const url = `${baseUrl}/api/db/country/get-country-data/${code}`

	const response = await handleGet(url)

	const data = await response.json()

	return data
}
