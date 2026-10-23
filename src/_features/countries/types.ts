import { CHART_CATEGORIES, COUNTRIES } from "@/_features/countries/config"

export interface Country {
	label: string
	code: string
}
export type Countries = typeof COUNTRIES

export type CountriesCode = Countries[number]["code"]
export type CountriesName = Countries[number]["label"]

export type Category = "Economy" | "Trade" | "Labor" | "Demographics" | "Social"
export type Categories = (typeof CHART_CATEGORIES)[number]

export type CountryApiData = Record<string, ChartData[]>

export interface ChartData {
	year: string
	value: number
}
