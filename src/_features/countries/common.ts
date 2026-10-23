import { COUNTRIES } from "@/_features/countries/config"
import { CountriesCode, CountriesName } from "@/_features/countries/types"

/**
 * Returns the country name that matches the given country code.
 * @param code - The country code, e.g. "GR".
 * @returns The country name, or `undefined` when no country matches.
 */
export function getCountryName(code: CountriesCode): CountriesName | undefined {
	return COUNTRIES.find((country) => country.code === code)?.label
}

/**
 * Checks whether the given country code belongs to a known country.
 * @param code - The country code, e.g. "GR".
 * @returns `true` when a country matches the code, narrowing `code` to `CountriesCode`.
 */
export function isValidCountryCode(code: string): code is CountriesCode {
	return COUNTRIES.some((country) => country.code === code)
}
