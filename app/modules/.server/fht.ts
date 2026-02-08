import { MARKET_EVENTS } from "~/constants"
import {
	bondsUS,
	currenciesUS,
	energy,
	indicesEU,
	indicesUS,
	metals,
} from "~/utilities/.server/fht"
import {
	getDateFromEvent,
	getEarlySignsFromEvent,
	getPhaseConclusionFromEvent,
	getYearFromEvent,
} from "~/utilities/event"

export async function chartDataModule(params: any, request: Request): Promise<any> {
	const requestURL = new URL(request.url)

	const result: any = {}

	const requestUtility = requestURL.searchParams.get("requestUtility")
	// init render
	if (requestUtility == null) {
		const year = getYearFromEvent(params.eventCode)
		result.earlySigns = getEarlySignsFromEvent(params.eventCode)
		result.phaseConclusion = getPhaseConclusionFromEvent(params.eventCode)
		result.date = getDateFromEvent(params.eventCode)
		result.indicesUS = await getIndicesUS(year, request)
		result.indicesEU = await getIndicesEU(year, request)
		result.bondsUS = await getBondsUS(year, request)
		result.energy = await getEnergy(year, request)
		result.metals = await getMetals(year, request)
		result.currenciesUS = await getCurrencieUS(year, request)
		return result
	}
}

function getIndicesUS(params: any, request: Request): any {
	return indicesUS(params)
}

function getIndicesEU(params: any, request: Request): any {
	return indicesEU(params)
}

function getBondsUS(params: any, request: Request): any {
	return bondsUS(params)
}

function getEnergy(params: any, request: Request): any {
	return energy(params)
}

function getMetals(params: any, request: Request): any {
	return metals(params)
}

function getCurrencieUS(params: any, request: Request): any {
	return currenciesUS(params)
}
