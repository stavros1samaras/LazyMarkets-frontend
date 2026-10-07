import Text from "@/components/elements/Text"
import SectionCard from "@/components/elements/SectionCard"
import { getUserAgent } from "@/lib/server/user-agent"
import CountrySelector from "@/_features/countries/sections/countries-header/components/CountrySelector.CSR"

export default async function CountriesHeader() {
	const ua = await getUserAgent()

	return (
		<SectionCard>
			<Text as="h1" className="leading-none">
				Country Market Data
			</Text>
			<Text className="text-foreground">
				Select a country to explore its economy, trade, labor, demographics, and social indicators.
			</Text>

			{ua !== "desktop" && <CountrySelector />}
		</SectionCard>
	)
}
