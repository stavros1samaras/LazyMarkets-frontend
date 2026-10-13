import { CHART_CATEGORIES, COUNTRIES } from "@/_features/countries/config"

export interface Country {
	name: string
	code: string
}
export type Countries = typeof COUNTRIES

export type Category = "Economy" | "Trade" | "Labor" | "Demographics" | "Social"
export type Categories = (typeof CHART_CATEGORIES)[number]

export type CountryApiData = Record<string, { year: string; value: number }[]>
