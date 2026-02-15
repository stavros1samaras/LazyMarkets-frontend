import { bondsUS, currenciesUS, energy, indicesEU, indicesUS, metals } from "~/utilities/.server/fht"
import { getDateFromEvent, getYearFromEvent } from "~/utilities/event"
import type { FHT_data, FHT_module, FHT_params } from "~/types/fht"

export async function chartDataModule({ params, request }: FHT_module): Promise<FHT_data | undefined> {
	const requestURL = new URL(request.url)

	const requestUtility = requestURL.searchParams.get("requestUtility")
	if (requestUtility == null) {
		return await FHTdata(params)
	}
}

async function FHTdata(params: FHT_params): Promise<FHT_data> {
	const year = getYearFromEvent(params.eventCode)

	const result: FHT_data = {
		date: getDateFromEvent(params.eventCode),
		indicesUS: await indicesUS(year),
		indicesEU: await indicesEU(year),
		bondsUS: await bondsUS(year),
		energy: await energy(year),
		metals: await metals(year),
		currenciesUS: await currenciesUS(year),
	}

	return result
}
