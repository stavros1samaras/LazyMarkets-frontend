import { handleGet } from "./fetch-handler"
import type { HTTP_TRANSACTION } from "~/types/httpTransaction"
import { getBaseUrl } from "./environment"
import {
	CurrenciesUS_ENC,
	Energy_ENC,
	EUindices_ENC,
	Metals_ENC,
	USbonds_ENC,
	USindices_ENC,
} from "~/constants/fht"

const baseUrl: string = getBaseUrl() as string

export async function indicesUS(year: string) {
	const results: Record<string, any> = {}

	for (const index of USindices_ENC) {
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

	for (const index of EUindices_ENC) {
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

	for (const index of USbonds_ENC) {
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

	for (const index of Energy_ENC) {
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

	for (const index of Metals_ENC) {
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

	for (const index of CurrenciesUS_ENC) {
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
