export type TechnicalOverviewData = {
	pricePoints: PricePoints[]
	options?: number
}

export type PricePoints = {
	date: string
	close: number
}
