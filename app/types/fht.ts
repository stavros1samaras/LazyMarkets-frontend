export type FHT_module = {
	params: FHT_params
	request: Request
}

export type FHT_params = {
	eventCode: string
}

export type FHT_data = {
	earlySigns: any
	date: any
	phaseConclusion: any
	indicesUS: any
	indicesEU: any
	bondsUS: any
	energy: any
	metals: any
	currenciesUS: any
}
