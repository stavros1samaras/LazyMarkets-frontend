import "server-only"

import { ChartAbsoluteBadge, ChartPercentageBadge } from "@/_features/countries/sections/chart-container/components/Badges"
import { ChartMetadata } from "@/_features/countries/sections/chart-container/types"

export const CHARTSCONFIG = [
	{
		chartTitle: "GDP",
		description: "Total value of goods and services produced by a country.",
		badge: ChartAbsoluteBadge,
		category: "Economy",
	},
	{
		chartTitle: "GDP Per Capita",
		description: "Average economic output per person.",
		badge: ChartAbsoluteBadge,
		category: "Economy",
	},
	{
		chartTitle: "GDP Growth Rate",
		description: "Percentage increase of GDP from the previous year.",
		badge: ChartPercentageBadge,
		category: "Economy",
	},
	{
		chartTitle: "GDP Per Capita Growth",
		description: "Growth rate of output per person.",
		badge: ChartPercentageBadge,
		category: "Economy",
	},
	{
		chartTitle: "GDP Deflator",
		description: "Measures change in prices of goods and services in GDP.",
		badge: ChartPercentageBadge,
		category: "Economy",
	},
	{
		chartTitle: "GNP",
		description: "Total income of a country's citizens, regardless of production location.",
		badge: ChartAbsoluteBadge,
		category: "Economy",
	},
	{
		chartTitle: "Consumption",
		description: "Total household spending on goods and services.",
		badge: ChartAbsoluteBadge,
		category: "Economy",
	},
	{
		chartTitle: "Gross Capital Formation",
		description: "Investment in equipment, infrastructure, and inventories.",
		badge: ChartAbsoluteBadge,
		category: "Economy",
	},
	{
		chartTitle: "Trade of GDP",
		description: "Share of trade (imports + exports) in GDP.",
		badge: ChartPercentageBadge,
		category: "Trade",
	},
	{
		chartTitle: "Exports",
		description: "Value of goods and services sold abroad.",
		badge: ChartAbsoluteBadge,
		category: "Trade",
	},
	{
		chartTitle: "Exports of GDP",
		description: "Exports as a percentage of GDP.",
		badge: ChartPercentageBadge,
		category: "Trade",
	},
	{
		chartTitle: "Imports",
		description: "Value of goods and services bought from abroad.",
		badge: ChartAbsoluteBadge,
		category: "Trade",
	},
	{
		chartTitle: "Imports of GDP",
		description: "Imports as a percentage of GDP.",
		badge: ChartPercentageBadge,
		category: "Trade",
	},
	{
		chartTitle: "Debt of GDP",
		description: "Total national debt as a share of GDP.",
		badge: ChartPercentageBadge,
		category: "Trade",
	},
	{
		chartTitle: "Net National Income",
		description: "Total income of citizens after taxes and transfers.",
		badge: ChartAbsoluteBadge,
		category: "Economy",
	},
	{
		chartTitle: "CPI",
		description: "Consumer Price Index, shows cost of living changes.",
		badge: ChartAbsoluteBadge,
		category: "Trade",
	},
	{
		chartTitle: "Interest Rate",
		description: "Central bank’s main lending rate.",
		badge: ChartPercentageBadge,
		category: "Trade",
	},
	{
		chartTitle: "Unemployment Rate",
		description: "Percentage of people without jobs in the workforce.",
		badge: ChartPercentageBadge,
		category: "Labor",
	},
	{
		chartTitle: "Agriculture Employment",
		description: "Share of workforce in agriculture.",
		badge: ChartPercentageBadge,
		category: "Labor",
	},
	{
		chartTitle: "Industry Employment",
		description: "Share of workforce in industry.",
		badge: ChartPercentageBadge,
		category: "Labor",
	},
	{
		chartTitle: "Services Employment",
		description: "Share of workforce in services.",
		badge: ChartPercentageBadge,
		category: "Labor",
	},
	{
		chartTitle: "Primary Enrollment Rate",
		description: "Percentage of children enrolled in primary school.",
		badge: ChartPercentageBadge,
		category: "Social",
	},
	{
		chartTitle: "Population",
		description: "Total number of people in the country.",
		badge: ChartAbsoluteBadge,
		category: "Demographics",
	},
	{
		chartTitle: "Life Expectancy Rate",
		description: "Average expected lifespan of the population.",
		badge: ChartPercentageBadge,
		category: "Demographics",
	},
	{
		chartTitle: "Birth Rate",
		description: "Number of births per 1,000 people.",
		badge: ChartPercentageBadge,
		category: "Demographics",
	},
	{
		chartTitle: "Fertility Rate",
		description: "Average number of children per woman.",
		badge: ChartPercentageBadge,
		category: "Demographics",
	},
	{
		chartTitle: "Infant Mortality Rate",
		description: "Deaths of infants under 1 year per 1,000 births.",
		badge: ChartPercentageBadge,
		category: "Demographics",
	},
	{
		chartTitle: "Health Spending of GDP",
		description: "Public and private health spending as a share of GDP.",
		badge: ChartPercentageBadge,
		category: "Social",
	},
	{
		chartTitle: "Energy Use Per Capita",
		description: "Average energy consumption per person.",
		badge: ChartAbsoluteBadge,
		category: "Social",
	},
	{
		chartTitle: "Forest Area",
		description: "Share of land area covered by forests.",
		badge: ChartPercentageBadge,
		category: "Social",
	},
] as const satisfies ChartMetadata[]
