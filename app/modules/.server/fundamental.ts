import type { Ticker } from "~/archive/types/tickers"
import { getQuote, getInsights, getRecommendations } from "~/archive/utils/.server/fundamental"
import { createTicker, fetchTickerPricePoints } from "~/archive/utils/.server/tickers"

/**
 * OVERVIEW *******************************************************************************
 */
export async function overviewModule(params: any, request: Request): Promise<any> {
	const requestURL = new URL(request.url)

	const result: any = {}

	const requestUtility = requestURL.searchParams.get("requestUtility")
	// init render
	if (requestUtility == null) {
		result.pricePoints = await pricePoints(params, request)
		result.quote = await quote(params, request)
		result.insights = await insights(params, request)
		result.recommendations = await recommendations(params, request)
		return result
	}
	// specific render
	else if (requestUtility == "something") {
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
	return pricePoints
}

export async function quote(params: any, request: Request) {
	const ticker: Ticker = createTicker(params)
	return await getQuote(ticker)
}

export async function insights(params: any, request: Request): Promise<any> {
	const ticker: Ticker = createTicker(params)
	return await getInsights(ticker)
}

export async function recommendations(params: any, request: Request): Promise<any> {
	const ticker: Ticker = createTicker(params)
	return await getRecommendations(ticker)
}

/**
 * OVERVIEW *******************************************************************************
 */
