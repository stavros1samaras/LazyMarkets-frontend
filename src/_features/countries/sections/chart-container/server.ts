"use server"
import { HTTP_TRANSACTION } from "@/types"
import { getEnvURL } from "@/lib/server/environment"
import { handleGet } from "@/lib/server/data-fetchers/fetch-handler"

export async function getCountryData(code: any) {
	const baseUrl: string = getEnvURL() as string
	const url = `${baseUrl}/api/db/country/get-country-data/${code}`

	const transaction: HTTP_TRANSACTION = (await handleGet(url)) as HTTP_TRANSACTION

	const data = await transaction.response.json()

	return data
}
