import "client-only"
import { ChartMetadata } from "@/_features/countries/sections/chart-container/types"

export const CHARTS_CONFIG_METADATA: Omit<ChartMetadata, "badge">[] = [
	{
		chartTitle: "GDP",
		description: "Total value of goods and services produced by a country.",
		category: "Economy",
	},
	{
		chartTitle: "GDP Per Capita",
		description: "Average economic output per person.",
		category: "Economy",
	},
	{
		chartTitle: "GDP Growth Rate",
		description: "Percentage increase of GDP from the previous year.",
		category: "Economy",
	},
	{
		chartTitle: "GDP Per Capita Growth",
		description: "Growth rate of output per person.",
		category: "Economy",
	},
	{
		chartTitle: "GDP Deflator",
		description: "Measures change in prices of goods and services in GDP.",
		category: "Economy",
	},
	{
		chartTitle: "GNP",
		description: "Total income of a country's citizens, regardless of production location.",
		category: "Economy",
	},
	{
		chartTitle: "Consumption",
		description: "Total household spending on goods and services.",
		category: "Economy",
	},
	{
		chartTitle: "Gross Capital Formation",
		description: "Investment in equipment, infrastructure, and inventories.",
		category: "Economy",
	},
	{
		chartTitle: "Trade of GDP",
		description: "Share of trade (imports + exports) in GDP.",
		category: "Trade",
	},
	{
		chartTitle: "Exports",
		description: "Value of goods and services sold abroad.",
		category: "Trade",
	},
	{
		chartTitle: "Exports of GDP",
		description: "Exports as a percentage of GDP.",
		category: "Trade",
	},
	{
		chartTitle: "Imports",
		description: "Value of goods and services bought from abroad.",
		category: "Trade",
	},
	{
		chartTitle: "Imports of GDP",
		description: "Imports as a percentage of GDP.",
		category: "Trade",
	},
	{
		chartTitle: "Debt of GDP",
		description: "Total national debt as a share of GDP.",
		category: "Trade",
	},
	{
		chartTitle: "Net National Income",
		description: "Total income of citizens after taxes and transfers.",
		category: "Economy",
	},
	{
		chartTitle: "CPI",
		description: "Consumer Price Index, shows cost of living changes.",
		category: "Trade",
	},
	{
		chartTitle: "Interest Rate",
		description: "Central bank’s main lending rate.",
		category: "Trade",
	},
	{
		chartTitle: "Unemployment Rate",
		description: "Percentage of people without jobs in the workforce.",
		category: "Labor",
	},
	{
		chartTitle: "Agriculture Employment",
		description: "Share of workforce in agriculture.",
		category: "Labor",
	},
	{
		chartTitle: "Industry Employment",
		description: "Share of workforce in industry.",
		category: "Labor",
	},
	{
		chartTitle: "Services Employment",
		description: "Share of workforce in services.",
		category: "Labor",
	},
	{
		chartTitle: "Primary Enrollment Rate",
		description: "Percentage of children enrolled in primary school.",
		category: "Social",
	},
	{
		chartTitle: "Population",
		description: "Total number of people in the country.",
		category: "Demographics",
	},
	{
		chartTitle: "Life Expectancy Rate",
		description: "Average expected lifespan of the population.",
		category: "Demographics",
	},
	{
		chartTitle: "Birth Rate",
		description: "Number of births per 1,000 people.",
		category: "Demographics",
	},
	{
		chartTitle: "Fertility Rate",
		description: "Average number of children per woman.",
		category: "Demographics",
	},
	{
		chartTitle: "Infant Mortality Rate",
		description: "Deaths of infants under 1 year per 1,000 births.",
		category: "Demographics",
	},
	{
		chartTitle: "Health Spending of GDP",
		description: "Public and private health spending as a share of GDP.",
		category: "Social",
	},
	{
		chartTitle: "Energy Use Per Capita",
		description: "Average energy consumption per person.",
		category: "Social",
	},
	{
		chartTitle: "Forest Area",
		description: "Share of land area covered by forests.",
		category: "Social",
	},
]
