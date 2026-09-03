import Text from "@/components/elements/Text"
import { Div } from "@/components/elements/Div"
import CountrySelector from "./components/CountrySelector"
import SectionCard from "@/components/elements/SectionCard"

export default function CountriesHeader() {
	return (
		<SectionCard>
			<Text as="h1" className="leading-none">
				Country Market Data
			</Text>
			<Text className="text-foreground">
				Select a country to explore its economy, trade, labor, demographics, and social indicators.
			</Text>
			<CountrySelector className="xl:hidden w-full md:max-w-140 bg-background border-ring text-foreground" />
		</SectionCard>
	)
}
