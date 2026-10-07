import "client-only"
import { ChartMetadata } from "@/_features/countries/sections/chart-container/types"

export const CHARTS_CONFIG_METADATA: Omit<ChartMetadata, "badge">[] = [
	{
		chartTitle: "GDP",
		description: "Total value of goods and services produced by a country.",
		category: "economy",
	},
	{
		chartTitle: "GDP Per Capita",
		description: "Average economic output per person.",
		category: "economy",
	},
	{
		chartTitle: "GDP Growth Rate",
		description: "Percentage increase of GDP from the previous year.",
		category: "economy",
	},
	{
		chartTitle: "GDP Per Capita Growth",
		description: "Growth rate of output per person.",
		category: "economy",
	},
	{
		chartTitle: "GDP Deflator",
		description: "Measures change in prices of goods and services in GDP.",
		category: "economy",
	},
	{
		chartTitle: "GNP",
		description: "Total income of a country's citizens, regardless of production location.",
		category: "economy",
	},
	{
		chartTitle: "Consumption",
		description: "Total household spending on goods and services.",
		category: "economy",
	},
	{
		chartTitle: "Gross Capital Formation",
		description: "Investment in equipment, infrastructure, and inventories.",
		category: "economy",
	},
	{
		chartTitle: "Trade of GDP",
		description: "Share of trade (imports + exports) in GDP.",
		category: "trade",
	},
	{
		chartTitle: "Exports",
		description: "Value of goods and services sold abroad.",
		category: "trade",
	},
	{
		chartTitle: "Exports of GDP",
		description: "Exports as a percentage of GDP.",
		category: "trade",
	},
	{
		chartTitle: "Imports",
		description: "Value of goods and services bought from abroad.",
		category: "trade",
	},
	{
		chartTitle: "Imports of GDP",
		description: "Imports as a percentage of GDP.",
		category: "trade",
	},
	{
		chartTitle: "Debt of GDP",
		description: "Total national debt as a share of GDP.",
		category: "trade",
	},
	{
		chartTitle: "Net National Income",
		description: "Total income of citizens after taxes and transfers.",
		category: "economy",
	},
	{
		chartTitle: "CPI",
		description: "Consumer Price Index, shows cost of living changes.",
		category: "trade",
	},
	{
		chartTitle: "Interest Rate",
		description: "Central bank’s main lending rate.",
		category: "trade",
	},
	{
		chartTitle: "Unemployment Rate",
		description: "Percentage of people without jobs in the workforce.",
		category: "labor",
	},
	{
		chartTitle: "Agriculture Employment",
		description: "Share of workforce in agriculture.",
		category: "labor",
	},
	{
		chartTitle: "Industry Employment",
		description: "Share of workforce in industry.",
		category: "labor",
	},
	{
		chartTitle: "Services Employment",
		description: "Share of workforce in services.",
		category: "labor",
	},
	{
		chartTitle: "Primary Enrollment Rate",
		description: "Percentage of children enrolled in primary school.",
		category: "social",
	},
	{
		chartTitle: "Population",
		description: "Total number of people in the country.",
		category: "demographics",
	},
	{
		chartTitle: "Life Expectancy Rate",
		description: "Average expected lifespan of the population.",
		category: "demographics",
	},
	{
		chartTitle: "Birth Rate",
		description: "Number of births per 1,000 people.",
		category: "demographics",
	},
	{
		chartTitle: "Fertility Rate",
		description: "Average number of children per woman.",
		category: "demographics",
	},
	{
		chartTitle: "Infant Mortality Rate",
		description: "Deaths of infants under 1 year per 1,000 births.",
		category: "demographics",
	},
	{
		chartTitle: "Health Spending of GDP",
		description: "Public and private health spending as a share of GDP.",
		category: "social",
	},
	{
		chartTitle: "Energy Use Per Capita",
		description: "Average energy consumption per person.",
		category: "social",
	},
	{
		chartTitle: "Forest Area",
		description: "Share of land area covered by forests.",
		category: "social",
	},
]
