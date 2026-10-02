import { COUNTRIES } from "@/_features/countries/config"

export interface Countries {
	name: string
	code: string
}

export type CountriesInfo = typeof COUNTRIES
export type CountryCode = CountriesInfo[number]["code"]
export type CountryName = CountriesInfo[number]["name"]
