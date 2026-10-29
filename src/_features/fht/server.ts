import "server-only"

import { getEnvURL } from "@/lib/server/environment"
import { handleGet } from "@/lib/server/data-fetchers/fetch-handler"
import type { FhtApiChartData, FhtEventLabel } from "@/_features/fht/types"

export async function getFhtEventLabels(): Promise<FhtEventLabel[]> {
	const baseUrl = getEnvURL()
	const response = await handleGet(`${baseUrl}/fht/events/get-event-labels-with-codes`)

	return response.json()
}

export async function getFhtEventCodes(): Promise<string[]> {
	const baseUrl = getEnvURL()
	const response = await handleGet(`${baseUrl}/fht/events/get-event-codes`)

	return response.json()
}

export async function getFhtChartData(code: string): Promise<FhtApiChartData> {
	const baseUrl = getEnvURL()

	const url = `${baseUrl}/fht/events/get-event-data/${code}`
	const response = await handleGet(url)

	const data: FhtApiChartData = await response.json()

	return data
}
