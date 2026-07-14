import { CHART_DATA, COUNTRIES } from "@/_features/countries/config"

export type Countries = typeof COUNTRIES

export type CountryCode = (typeof COUNTRIES)[number]["code"]
export type CountryName = (typeof COUNTRIES)[number]["name"]

export type ChartInfo = {
	chartTitle: string
	description: string
	valueType: string
}[]

export type RenderConfig = {
	chartTitle: string
	chartData: ChartData
	description: string
	valueType: string
}[]

export type ChartDataKeys = typeof CHART_DATA

export type ChartData = {
	year: string
	value: number
}[]
