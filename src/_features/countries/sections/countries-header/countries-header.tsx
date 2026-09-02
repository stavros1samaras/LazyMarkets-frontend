import { CardContent } from "@/components/ui/card"
import Text from "@/components/elements/Text"
import { Div } from "@/components/elements/Div"
import CountrySelector from "./components/CountrySelector"
import SectionCard from "@/components/elements/SectionCard"

export default function CountriesHeader() {
	return (
		<SectionCard>
			<CardContent className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center sm:justify-between p-4 sm:p-6">
				<Div className="flex-col items-start gap-4 w-full">
					<Text as="h1" className="text-2xl sm:text-3xl tracking-tight">
						Country Market Data
					</Text>
					<Text className="text-muted-foreground">
						Select a country to explore its economy, trade, labor, demographics, and social indicators.
					</Text>
					<CountrySelector className="xl:hidden w-full md:max-w-140 bg-background border-ring text-foreground" />
				</Div>
			</CardContent>
		</SectionCard>
	)
}
