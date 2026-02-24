import { titleStyle } from "@/_styles/tailwindClasses"
import { getCoutries } from "@/_utils/server/data-fetchers/country"
import { CardContainer } from "@/components/CardContainer"
import HoverIcon from "@/components/HoverIcon"
import SingleLineChart from "@/components/SingleLineChart"
import Text from "@/components/Text"
import { Info } from "lucide-react"

export default async function CountryDataChartsContainer({ countryCode }: { countryCode: string }) {
	const data = await getCoutries(countryCode)

	const formattedData = data.data

	const renderConfig = [
		{ chartTitle: "GDP", chartData: formattedData.gdp, description: "Total value of goods and services produced by a country." },
		{ chartTitle: "GDP Per Capita", chartData: formattedData.gdpPerCapita, description: "Average economic output per person." },
		{
			chartTitle: "GDP Growth Rate",
			chartData: formattedData.gdpGrowthRate,
			description: "Percentage increase of GDP from the previous year.",
		},
		{
			chartTitle: "GDP Per Capita Growth",
			chartData: formattedData.gdpPerCapitaGrowth,
			description: "Growth rate of output per person.",
		},
		{
			chartTitle: "GDP Deflator",
			chartData: formattedData.gdpDeflator,
			description: "Measures change in prices of goods and services in GDP.",
		},
		{
			chartTitle: "GNP",
			chartData: formattedData.gnp,
			description: "Total income of a country's citizens, regardless of production location.",
		},
		{
			chartTitle: "Consumption",
			chartData: formattedData.consumption,
			description: "Total household spending on goods and services.",
		},
		{
			chartTitle: "Gross Capital Formation",
			chartData: formattedData.grossCapitalFormation,
			description: "Investment in equipment, infrastructure, and inventories.",
		},
		{
			chartTitle: "Trade % of GDP",
			chartData: formattedData.tradePercentGDP,
			description: "Share of trade (imports + exports) in GDP.",
		},
		{ chartTitle: "Exports", chartData: formattedData.exports, description: "Value of goods and services sold abroad." },
		{
			chartTitle: "Exports % of GDP",
			chartData: formattedData.exportsPercentGDP,
			description: "Exports as a percentage of GDP.",
		},
		{ chartTitle: "Imports", chartData: formattedData.imports, description: "Value of goods and services bought from abroad." },
		{
			chartTitle: "Imports % of GDP",
			chartData: formattedData.importsPercentGDP,
			description: "Imports as a percentage of GDP.",
		},
		{
			chartTitle: "Debt % of GDP",
			chartData: formattedData.debtPercentGDP,
			description: "Total national debt as a share of GDP.",
		},
		{
			chartTitle: "Net National Income",
			chartData: formattedData.netNationalIncome,
			description: "Total income of citizens after taxes and transfers.",
		},
		{ chartTitle: "CPI", chartData: formattedData.cpi, description: "Consumer Price Index, shows cost of living changes." },
		{ chartTitle: "Interest Rate", chartData: formattedData.interestRate, description: "Central bank’s main lending rate." },
		{
			chartTitle: "Unemployment Rate",
			chartData: formattedData.unemploymentRate,
			description: "Percentage of people without jobs in the workforce.",
		},
		{
			chartTitle: "Agriculture Employment %",
			chartData: formattedData.agricultureEmploymentPercent,
			description: "Share of workforce in agriculture.",
		},
		{
			chartTitle: "Industry Employment %",
			chartData: formattedData.industryEmploymentPercent,
			description: "Share of workforce in industry.",
		},
		{
			chartTitle: "Services Employment %",
			chartData: formattedData.servicesEmploymentPercent,
			description: "Share of workforce in services.",
		},
		{
			chartTitle: "Primary Enrollment Rate",
			chartData: formattedData.primaryEnrollmentRate,
			description: "Percentage of children enrolled in primary school.",
		},
		{ chartTitle: "Population", chartData: formattedData.population, description: "Total number of people in the country." },
		{
			chartTitle: "Life Expectancy Rate",
			chartData: formattedData.lifeExpectancyRate,
			description: "Average expected lifespan of the population.",
		},
		{ chartTitle: "Birth Rate", chartData: formattedData.birthRate, description: "Number of births per 1,000 people." },
		{
			chartTitle: "Fertility Rate",
			chartData: formattedData.fertilityRate,
			description: "Average number of children per woman.",
		},
		{
			chartTitle: "Infant Mortality Rate",
			chartData: formattedData.infantMortalityRate,
			description: "Deaths of infants under 1 year per 1,000 births.",
		},
		{
			chartTitle: "Health Spending % of GDP",
			chartData: formattedData.healthSpendingPercentGDP,
			description: "Public and private health spending as a share of GDP.",
		},
		{
			chartTitle: "Energy Use Per Capita",
			chartData: formattedData.energyUsePerCapita,
			description: "Average energy consumption per person.",
		},
		{
			chartTitle: "Forest Area %",
			chartData: formattedData.forestAreaPercent,
			description: "Share of land area covered by forests.",
		},
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
							<span className="flex">
								<Text as="h3" className={`${titleStyle} self-center`}>
									{config.chartTitle}
								</Text>
								<HoverIcon description={config.description}>
									<Info />
								</HoverIcon>
							</span>
							<Text className={`${titleStyle}`}>{JSON.stringify(config.chartData[config.chartData.length - 1].value)}</Text>
						</SingleLineChart>
					</CardContainer>
				)
			})}
		</>
	)
}
