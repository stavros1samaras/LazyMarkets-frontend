import { COUNTRIES } from "@/_features/countries/config"

export default function findCountryName(code: string): string | undefined {
	const country = COUNTRIES.find((c) => c.code === code)
	return country?.name
}
