import type { Ticker } from "~/types/tickers"
import { fetchTickerPricePoints } from "~/utilities/.server/tickers"

export async function overviewModule(params: any, request: Request): Promise<any> {
	const requestURL = new URL(request.url)

	const result: any = {}

	const requestUtility = requestURL.searchParams.get("requestUtility")
	if (requestUtility == null) {
		result.pricePoints = await pricePoints(params, request)
		return result
	} else if (requestUtility == "indexes") {
		console.log(requestUtility)
	}
	return await pricePoints(params, request)
}

export async function pricePoints(params: any, request: Request) {
	const requestURL = new URL(request.url)
	// const requestURL = new URL("http://localhost:5173/se/technical/overview/BTC-USD?start=2023-01-02");
	// const requestURL = new URL("http://localhost:5173/se/technical/overview/BTC-USD?start=2024-12-06");

	const start: string = requestURL.searchParams.get("start") as string
	const ticker: Ticker = { symbol: params.symbol }

	if (start != null) {
		ticker.startDate = start
	}

	let pricePoints = await fetchTickerPricePoints(ticker)
	//test if loader can return 2 properties
	let options = [1, 2, 3, 4, 5]
	return pricePoints
}

export async function generalIndexesScore(params: any, request: Request) {}
