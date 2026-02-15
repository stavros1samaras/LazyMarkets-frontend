import { handleGet } from "./fetch-handler"
import type { HTTP_TRANSACTION } from "~/types/httpTransaction"
import { getBaseUrl } from "./environment"
import { FOREX_ENC, ENERGY_ENC, INDICES_EU_ENC, METALS_ENC, BONDS_US_ENC, INDICES_US_ENC } from "~/constants/fht"

const baseUrl: string = getBaseUrl() as string

export async function indicesUS(year: string) {
	const results: Record<string, any> = {}

	for (const index of INDICES_US_ENC) {
		const url = `${baseUrl}/api/db/prices/get-ticker-one-year/${index}/${year}`

		const transaction: HTTP_TRANSACTION = await handleGet(url)

		if (!transaction.success) {
			throw new Error(`Request failed for ${index} with status: ${transaction.response.status}`)
		}

		const data = await transaction.response.json()

		results[index] = data
	}

	return results
}

export async function indicesEU(year: string) {
	const results: Record<string, any> = {}

	for (const index of INDICES_EU_ENC) {
		const url = `${baseUrl}/api/db/prices/get-ticker-one-year/${index}/${year}`

		const transaction: HTTP_TRANSACTION = await handleGet(url)

		if (!transaction.success) {
			throw new Error(`Request failed for ${index} with status: ${transaction.response.status}`)
		}

		const data = await transaction.response.json()

		results[index] = data
	}

	return results
}

export async function bondsUS(year: string) {
	const results: Record<string, any> = {}

	for (const index of BONDS_US_ENC) {
		const url = `${baseUrl}/api/db/prices/get-ticker-one-year/${index}/${year}`

		const transaction: HTTP_TRANSACTION = await handleGet(url)

		if (!transaction.success) {
			throw new Error(`Request failed for ${index} with status: ${transaction.response.status}`)
		}

		const data = await transaction.response.json()

		results[index] = data
	}

	return results
}

export async function energy(year: string) {
	const results: Record<string, any> = {}

	for (const index of ENERGY_ENC) {
		const url = `${baseUrl}/api/db/prices/get-ticker-one-year/${index}/${year}`

		const transaction: HTTP_TRANSACTION = await handleGet(url)

		if (!transaction.success) {
			throw new Error(`Request failed for ${index} with status: ${transaction.response.status}`)
		}

		const data = await transaction.response.json()

		results[index] = data
	}

	return results
}

export async function metals(year: string) {
	const results: Record<string, any> = {}

	for (const index of METALS_ENC) {
		const url = `${baseUrl}/api/db/prices/get-ticker-one-year/${index}/${year}`

		const transaction: HTTP_TRANSACTION = await handleGet(url)

		if (!transaction.success) {
			throw new Error(`Request failed for ${index} with status: ${transaction.response.status}`)
		}

		const data = await transaction.response.json()

		results[index] = data
	}

	return results
}

export async function currenciesUS(year: string) {
	const results: Record<string, any> = {}

	for (const index of FOREX_ENC) {
		const url = `${baseUrl}/api/db/prices/get-ticker-one-year/${index}/${year}`

		const transaction: HTTP_TRANSACTION = await handleGet(url)

		if (!transaction.success) {
			throw new Error(`Request failed for ${index} with status: ${transaction.response.status}`)
		}

		const data = await transaction.response.json()

		results[index] = data
	}

	return results
}
