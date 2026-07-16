import { CHART_DATA, COUNTRIES } from "@/_features/countries/config"

export interface Countries {
	name: string
	code: string
}

export type CountriesInfo = typeof COUNTRIES
export type CountryCode = CountriesInfo[number]["code"]
export type CountryName = CountriesInfo[number]["name"]

export interface ChartMetadata {
	chartTitle: string
	description: string
	valueType: "absolute" | "percentage"
}

export interface RenderDataConfig extends ChartMetadata {
	chartData: {
		year: string
		value: number
	}[]
}

export type ChartDataKeys = typeof CHART_DATA
