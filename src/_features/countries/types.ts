import { CHART_DATA, COUNTRIES } from "@/_features/countries/config"

export type Countries = typeof COUNTRIES

export type CountryCode = (typeof COUNTRIES)[number]["code"]
export type CountryName = (typeof COUNTRIES)[number]["name"]

export interface ChartMetadata {
	chartTitle: string
	description: string
	valueType: "absolute" | "percentage"
}

export interface RenderDataConfig extends ChartMetadata {
	chartData: ChartData
}

export type ChartDataKeys = typeof CHART_DATA

export type ChartData = {
	year: string
	value: number
}[]
