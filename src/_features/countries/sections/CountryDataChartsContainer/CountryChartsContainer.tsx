import { titleStyle } from "@/styles/tailwindClasses"
import { getCoutries } from "../../../../utils/server/data-fetchers/country"
import { CardContainer } from "../../../../components/CardContainer"
import HoverIcon from "../../../../components/HoverIcon"
import Text from "../../../../components/elements/Text"
import { Info } from "lucide-react"
import SingleLineChart from "@/components/charts/SingleLineChart"
import { Badge } from "@/components/ui/badge"

export default async function CountryDataChartsContainer({ countryCode }: { countryCode: string }) {
	const data = await getCoutries(countryCode)

	const formattedData = data.data

	const renderConfig = [
		{
			chartTitle: "GDP",
			chartData: formattedData.gdp,
			description: "Total value of goods and services produced by a country.",
			valueType: "absolute",
		},
		{
			chartTitle: "GDP Per Capita",
			chartData: formattedData.gdpPerCapita,
			description: "Average economic output per person.",
			valueType: "absolute",
		},
		{
			chartTitle: "GDP Growth Rate",
			chartData: formattedData.gdpGrowthRate,
			description: "Percentage increase of GDP from the previous year.",
			valueType: "percentage",
		},
		{
			chartTitle: "GDP Per Capita Growth",
			chartData: formattedData.gdpPerCapitaGrowth,
			description: "Growth rate of output per person.",
			valueType: "percentage",
		},
		{
			chartTitle: "GDP Deflator",
			chartData: formattedData.gdpDeflator,
			description: "Measures change in prices of goods and services in GDP.",
			valueType: "percentage",
		},
		{
			chartTitle: "GNP",
			chartData: formattedData.gnp,
			description: "Total income of a country's citizens, regardless of production location.",
			valueType: "absolute",
		},
		{
			chartTitle: "Consumption",
			chartData: formattedData.consumption,
			description: "Total household spending on goods and services.",
			valueType: "absolute",
		},
		{
			chartTitle: "Gross Capital Formation",
			chartData: formattedData.grossCapitalFormation,
			description: "Investment in equipment, infrastructure, and inventories.",
			valueType: "absolute",
		},
		{
			chartTitle: "Trade of GDP",
			chartData: formattedData.tradePercentGDP,
			description: "Share of trade (imports + exports) in GDP.",
			valueType: "percentage",
		},
		{
			chartTitle: "Exports",
			chartData: formattedData.exports,
			description: "Value of goods and services sold abroad.",
			valueType: "absolute",
		},
		{
			chartTitle: "Exports of GDP",
			chartData: formattedData.exportsPercentGDP,
			description: "Exports as a percentage of GDP.",
			valueType: "percentage",
		},
		{
			chartTitle: "Imports",
			chartData: formattedData.imports,
			description: "Value of goods and services bought from abroad.",
			valueType: "absolute",
		},
		{
			chartTitle: "Imports of GDP",
			chartData: formattedData.importsPercentGDP,
			description: "Imports as a percentage of GDP.",
			valueType: "percentage",
		},
		{
			chartTitle: "Debt of GDP",
			chartData: formattedData.debtPercentGDP,
			description: "Total national debt as a share of GDP.",
			valueType: "percentage",
		},
		{
			chartTitle: "Net National Income",
			chartData: formattedData.netNationalIncome,
			description: "Total income of citizens after taxes and transfers.",
			valueType: "absolute",
		},
		{
			chartTitle: "CPI",
			chartData: formattedData.cpi,
			description: "Consumer Price Index, shows cost of living changes.",
			valueType: "absolute",
		},
		{
			chartTitle: "Interest Rate",
			chartData: formattedData.interestRate,
			description: "Central bank’s main lending rate.",
			valueType: "percentage",
		},
		{
			chartTitle: "Unemployment Rate",
			chartData: formattedData.unemploymentRate,
			description: "Percentage of people without jobs in the workforce.",
			valueType: "percentage",
		},
		{
			chartTitle: "Agriculture Employment",
			chartData: formattedData.agricultureEmploymentPercent,
			description: "Share of workforce in agriculture.",
			valueType: "percentage",
		},
		{
			chartTitle: "Industry Employment",
			chartData: formattedData.industryEmploymentPercent,
			description: "Share of workforce in industry.",
			valueType: "percentage",
		},
		{
			chartTitle: "Services Employment",
			chartData: formattedData.servicesEmploymentPercent,
			description: "Share of workforce in services.",
			valueType: "percentage",
		},
		{
			chartTitle: "Primary Enrollment Rate",
			chartData: formattedData.primaryEnrollmentRate,
			description: "Percentage of children enrolled in primary school.",
			valueType: "percentage",
		},
		{
			chartTitle: "Population",
			chartData: formattedData.population,
			description: "Total number of people in the country.",
			valueType: "absolute",
		},
		{
			chartTitle: "Life Expectancy Rate",
			chartData: formattedData.lifeExpectancyRate,
			description: "Average expected lifespan of the population.",
			valueType: "percentage",
		},
		{
			chartTitle: "Birth Rate",
			chartData: formattedData.birthRate,
			description: "Number of births per 1,000 people.",
			valueType: "percentage",
		},
		{
			chartTitle: "Fertility Rate",
			chartData: formattedData.fertilityRate,
			description: "Average number of children per woman.",
			valueType: "percentage",
		},
		{
			chartTitle: "Infant Mortality Rate",
			chartData: formattedData.infantMortalityRate,
			description: "Deaths of infants under 1 year per 1,000 births.",
			valueType: "percentage",
		},
		{
			chartTitle: "Health Spending of GDP",
			chartData: formattedData.healthSpendingPercentGDP,
			description: "Public and private health spending as a share of GDP.",
			valueType: "percentage",
		},
		{
			chartTitle: "Energy Use Per Capita",
			chartData: formattedData.energyUsePerCapita,
			description: "Average energy consumption per person.",
			valueType: "absolute",
		},
		{
			chartTitle: "Forest Area",
			chartData: formattedData.forestAreaPercent,
			description: "Share of land area covered by forests.",
			valueType: "percentage",
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
							<span className="flex items-center">
								<Text as="h3" className={`${titleStyle} self-center mr-2`}>
									{config.chartTitle}
								</Text>
								{config.valueType == "percentage" ? <Badge>%</Badge> : <Badge>A</Badge>}
								<HoverIcon description={config.description}>
									<Info className="size-6" />
								</HoverIcon>
							</span>

							<Text className={`${titleStyle}`}>
								{config.chartData[config.chartData.length - 1].value.toLocaleString("en-US", {
									notation: "compact",
									compactDisplay: "short",
								})}
							</Text>
						</SingleLineChart>
					</CardContainer>
				)
			})}
		</>
	)
}
