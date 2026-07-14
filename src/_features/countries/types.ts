import { COUNTRIES } from "@/_features/countries/config"

export type Countries = typeof COUNTRIES

export type CountryCode = (typeof COUNTRIES)[number]["code"]
export type CountryName = (typeof COUNTRIES)[number]["name"]
