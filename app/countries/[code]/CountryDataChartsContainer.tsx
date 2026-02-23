import { getCoutries } from "@/_utils/server/data-fetchers/country"

export default async function CountryDataChartsContainer({ countryCode }: { countryCode: string }) {
	const data = await getCoutries(countryCode)

	return <div>{JSON.stringify(data)}</div>
}
