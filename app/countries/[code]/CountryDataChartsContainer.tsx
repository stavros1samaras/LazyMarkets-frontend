import { titleStyle } from "@/_styles/tailwindClasses"
import { getCoutries } from "@/_utils/server/data-fetchers/country"
import { CardContainer } from "@/components/CardContainer"
import SingleLineChart from "@/components/SingleLineChart"
import Text from "@/components/Text"
import { Info } from "lucide-react"

export default async function CountryDataChartsContainer({ countryCode }: { countryCode: string }) {
	const data = await getCoutries(countryCode)

	const formattedData = data.data

	const renderConfig = [
		{ chartTitle: "GDP", chartData: formattedData.gdp },
		{ chartTitle: "GDP Per Capita", chartData: formattedData.gdpPerCapita },
		{ chartTitle: "GDP Growth Rate", chartData: formattedData.gdpGrowthRate },
		{ chartTitle: "GDP Per Capita Growth", chartData: formattedData.gdpPerCapitaGrowth },
		{ chartTitle: "GDP Deflator", chartData: formattedData.gdpDeflator },
		{ chartTitle: "GNP", chartData: formattedData.gnp },
		{ chartTitle: "Consumption", chartData: formattedData.consumption },
		{ chartTitle: "Gross Capital Formation", chartData: formattedData.grossCapitalFormation },
		{ chartTitle: "Trade % of GDP", chartData: formattedData.tradePercentGDP },
		{ chartTitle: "Exports", chartData: formattedData.exports },
		{ chartTitle: "Exports % of GDP", chartData: formattedData.exportsPercentGDP },
		{ chartTitle: "Imports", chartData: formattedData.imports },
		{ chartTitle: "Imports % of GDP", chartData: formattedData.importsPercentGDP },
		{ chartTitle: "Debt % of GDP", chartData: formattedData.debtPercentGDP },
		{ chartTitle: "Net National Income", chartData: formattedData.netNationalIncome },
		{ chartTitle: "CPI", chartData: formattedData.cpi },
		{ chartTitle: "Interest Rate", chartData: formattedData.interestRate },
		{ chartTitle: "Unemployment Rate", chartData: formattedData.unemploymentRate },
		{ chartTitle: "Agriculture Employment %", chartData: formattedData.agricultureEmploymentPercent },
		{ chartTitle: "Industry Employment %", chartData: formattedData.industryEmploymentPercent },
		{ chartTitle: "Services Employment %", chartData: formattedData.servicesEmploymentPercent },
		{ chartTitle: "Primary Enrollment Rate", chartData: formattedData.primaryEnrollmentRate },
		{ chartTitle: "Population", chartData: formattedData.population },
		{ chartTitle: "Life Expectancy Rate", chartData: formattedData.lifeExpectancyRate },
		{ chartTitle: "Birth Rate", chartData: formattedData.birthRate },
		{ chartTitle: "Fertility Rate", chartData: formattedData.fertilityRate },
		{ chartTitle: "Infant Mortality Rate", chartData: formattedData.infantMortalityRate },
		{ chartTitle: "Health Spending % of GDP", chartData: formattedData.healthSpendingPercentGDP },
		{ chartTitle: "Energy Use Per Capita", chartData: formattedData.energyUsePerCapita },
		{ chartTitle: "Forest Area %", chartData: formattedData.forestAreaPercent },
	]

	const filteredConfig = renderConfig
		.filter((item) => Array.isArray(item.chartData) && item.chartData.length > 0)
		.map((item) => ({
			...item,
			chartData: item.chartData.slice().reverse(),
		}))

	return (
		<>
			{filteredConfig.map((config, index) => {
				return (
					<CardContainer key={index}>
						<SingleLineChart data={config.chartData}>
							<Text as="h3" className={`${titleStyle}`}>
								{config.chartTitle}
								{/* <Info /> */}
							</Text>
							<Text className={`${titleStyle}`}>{JSON.stringify(config.chartData[config.chartData.length - 1].value)}</Text>
						</SingleLineChart>
					</CardContainer>
				)
			})}
		</>
	)
}
