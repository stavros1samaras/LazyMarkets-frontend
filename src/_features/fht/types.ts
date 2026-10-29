export interface FhtPricePoint {
	date: string
	close: number
}

export interface FhtTickerData {
	symbol: string
	name: string
	count: number
	data: FhtPricePoint[]
}

export interface FhtApiChartData {
	code: string
	label: string
	date: string
	year: string
	description: string
	data: FhtTickerData[]
}

export interface FhtEventLabel {
	code: string
	label: string
}
