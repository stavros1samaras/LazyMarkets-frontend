import type { Ticker } from "~/types/tickers"
import { currentDate, findPreviousMonthDate } from "../dates"
import { BASE_URL, DEFAULT_INTERVAL } from "~/constants"
import { handleGet } from "./fetch-handler"
import type { HTTP_TRANSACTION } from "~/types/httpTransaction"

export const createTicker = (userTicker: Ticker): Ticker => {
	let ticker: Ticker = { ...userTicker }
	if (!ticker.startDate) {
		ticker.startDate = findPreviousMonthDate().startDate as string
	}
	if (!ticker.endDate || ticker.endDate == "undefined") {
		ticker.endDate = currentDate()
	}
	if (!ticker.interval || ticker.interval == "undefined") {
		ticker.interval = DEFAULT_INTERVAL
	}
	return ticker
}

export async function fetchTickerPricePoints(userTicker: Ticker) {
	const ticker: Ticker = createTicker(userTicker)

	const url: string = `${BASE_URL}/ta/data/prices?ticker=${ticker.symbol}&start=${ticker.startDate}&end=${ticker.endDate}&interval=${ticker.interval}`

	try {
		const transaction: HTTP_TRANSACTION = await handleGet(url)

		if (!transaction.success) {
			throw new Error(`Request failed with status: ${transaction.response.status}`)
		}

		const data = await transaction.response.json()
		return data[ticker.symbol]
	} catch (error: any) {
		console.error(error.message)
	}
}
