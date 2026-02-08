export const DEFAULT_INTERVAL = "1d"
export const MAX_START_DATE = "2020-01-01"
export const BASE_URL = "http://127.0.0.1:8000"
export const BASE_URL_FUNDAMENTAL = "http://localhost:3001"
export const BASE_URL_FHT = "http://localhost:3001"
export const MAX_INTERVAL = 500
export const ONE_MONTH_INTERVAL = 10
export const ONE_YEAR_INTERVAL = 110

export const SUPPORTED_TICKERS: {
	symbol: string
	name: string
	fullName: string
	sector: string
	currency: string
	exchange: string
}[] = [
	{
		symbol: "BTC-USD",
		name: "Bitcoin",
		fullName: "Bitcoin / US Dollar",
		sector: "Cryptocurrency",
		currency: "USD",
		exchange: "CRYPTO",
	},
	{
		symbol: "ETH-USD",
		name: "Ethereum",
		fullName: "Ethereum / US Dollar",
		sector: "Cryptocurrency",
		currency: "USD",
		exchange: "CRYPTO",
	},
	{
		symbol: "AAPL",
		name: "Apple",
		fullName: "Apple Inc.",
		sector: "Technology",
		currency: "USD",
		exchange: "NASDAQ",
	},
	{
		symbol: "MSFT",
		name: "Microsoft",
		fullName: "Microsoft Corporation",
		sector: "Technology",
		currency: "USD",
		exchange: "NASDAQ",
	},
	{
		symbol: "TSLA",
		name: "Tesla",
		fullName: "Tesla, Inc.",
		sector: "Automotive / Energy",
		currency: "USD",
		exchange: "NASDAQ",
	},
	{
		symbol: "GOOGL",
		name: "Alphabet",
		fullName: "Alphabet Inc. (Google)",
		sector: "Technology",
		currency: "USD",
		exchange: "NASDAQ",
	},
	{
		symbol: "AMZN",
		name: "Amazon",
		fullName: "Amazon.com, Inc.",
		sector: "Consumer Discretionary",
		currency: "USD",
		exchange: "NASDAQ",
	},
	{
		symbol: "META",
		name: "Meta",
		fullName: "Meta Platforms, Inc. (Facebook)",
		sector: "Technology",
		currency: "USD",
		exchange: "NASDAQ",
	},
	{
		symbol: "NFLX",
		name: "Netflix",
		fullName: "Netflix, Inc.",
		sector: "Communication Services",
		currency: "USD",
		exchange: "NASDAQ",
	},
	{
		symbol: "NVDA",
		name: "Nvidia",
		fullName: "NVIDIA Corporation",
		sector: "Technology",
		currency: "USD",
		exchange: "NASDAQ",
	},
	{
		symbol: "JPM",
		name: "JP Morgan",
		fullName: "JPMorgan Chase & Co.",
		sector: "Financial Services",
		currency: "USD",
		exchange: "NYSE",
	},
	{
		symbol: "V",
		name: "Visa",
		fullName: "Visa Inc.",
		sector: "Financial Services",
		currency: "USD",
		exchange: "NYSE",
	},
	{
		symbol: "DIS",
		name: "Disney",
		fullName: "The Walt Disney Company",
		sector: "Communication Services",
		currency: "USD",
		exchange: "NYSE",
	},
	{
		symbol: "BA",
		name: "Boeing",
		fullName: "The Boeing Company",
		sector: "Aerospace / Defense",
		currency: "USD",
		exchange: "NYSE",
	},
	{
		symbol: "WMT",
		name: "Walmart",
		fullName: "Walmart Inc.",
		sector: "Consumer Staples",
		currency: "USD",
		exchange: "NYSE",
	},
	{
		symbol: "XOM",
		name: "Exxon",
		fullName: "Exxon Mobil Corporation",
		sector: "Energy",
		currency: "USD",
		exchange: "NYSE",
	},
	{
		symbol: "KO",
		name: "Coca-Cola",
		fullName: "The Coca-Cola Company",
		sector: "Consumer Staples",
		currency: "USD",
		exchange: "NYSE",
	},
	{
		symbol: "PFE",
		name: "Pfizer",
		fullName: "Pfizer Inc.",
		sector: "Healthcare",
		currency: "USD",
		exchange: "NYSE",
	},
	{
		symbol: "TSM",
		name: "TSMC",
		fullName: "Taiwan Semiconductor Manufacturing Company",
		sector: "Technology",
		currency: "USD",
		exchange: "NYSE",
	},
	{
		symbol: "BABA",
		name: "Alibaba",
		fullName: "Alibaba Group Holding Limited",
		sector: "Technology / E-Commerce",
		currency: "USD",
		exchange: "NYSE",
	},
]

export const MARKET_EVENTS = [
	{
		title: "Trump Tariff Shock",
		encodedTitle: "Trump%20Tariff%20Shock",
		earlySigns: "01-04-25",
		date: "04-04-25",
		day: "04",
		month: "04",
		year: "2025",
		phaseConclusion: "07-04-25",
		description:
			"The announcement of significant new tariffs by US President Donald Trump in early April 2025 caused intense volatility in the stock markets, with sharp drops in indices like the Dow Jones and S&P 500 as investors feared a trade war and a slowdown in economic growth.",
		code: "TrmpTrrffShck",
	},
	{
		title: "Trump Tariff Shock2",
		encodedTitle: "Trump%20Tariff%20Shock2",
		earlySigns: "01-04-24",
		date: "04-04-24",
		day: "04",
		month: "04",
		year: "2024",
		phaseConclusion: "07-04-24",
		description:
			"The announcement of significant new tariffs by US President Donald Trump in early April 2025 caused intense volatility in the stock markets, with sharp drops in indices like the Dow Jones and S&P 500 as investors feared a trade war and a slowdown in economic growth.",
		code: "TrmpTrrffShck2",
	},
	{
		title: "Tech Stock Rally",
		encodedTitle: "Tech%20Stock%20Rally",
		earlySigns: "12-06-24",
		date: "15-06-24",
		day: "15",
		month: "06",
		year: "2024",
		phaseConclusion: "18-06-24",
		description:
			"A surge in major tech stocks including Apple, Microsoft, and Google led to a strong market rally, driven by impressive quarterly earnings and optimistic future guidance.",
		code: "TchStckRlly",
	},
	{
		title: "Oil Price Crash",
		encodedTitle: "Oil%20Price%20Crash",
		earlySigns: "07-09-23",
		date: "10-09-23",
		day: "10",
		month: "09",
		year: "2023",
		phaseConclusion: "13-09-23",
		description:
			"Global oil prices fell sharply due to oversupply and decreased demand forecasts, impacting energy sector stocks and causing broader market concern.",
		code: "LPrcCrsh",
	},
	{
		title: "Federal Reserve Rate Hike",
		encodedTitle: "Federal%20Reserve%20Rate%20Hike",
		earlySigns: "17-12-22",
		date: "20-12-22",
		day: "20",
		month: "12",
		year: "2022",
		phaseConclusion: "23-12-22",
		description:
			"The US Federal Reserve announced a significant interest rate hike to combat inflation, causing a temporary decline in stock markets and increased bond yields.",
		code: "FdrlRsrvRtHk",
	},
	{
		title: "Global Pandemic Panic",
		encodedTitle: "Global%20Pandemic%20Panic",
		earlySigns: "08-03-20",
		date: "11-03-20",
		day: "11",
		month: "03",
		year: "2020",
		phaseConclusion: "14-03-20",
		description:
			"The declaration of a global pandemic caused massive sell-offs in stock markets worldwide, with unprecedented volatility in multiple sectors.",
		code: "GlblPndmcPnc",
	},
	{
		title: "Global Pandemic Panic",
		code: "1",
	},
	{
		title: "Global Pandemic Panic",
		code: "1q",
	},
	{
		title: "Global Pandemic Panic",
		code: "1qq",
	},
	{
		title: "Global Pandemic Panic",
		code: "1qwe",
	},
	{
		title: "Global Pandemic Panic",
		code: "1ewq",
	},
	{
		title: "Global Pandemic Panic",
		code: "1fds",
	},
	{
		title: "Global Pandemic Panic",
		code: "1asdad",
	},
	{
		title: "Global Pandemic Panic",
		code: "1asddas",
	},
	{
		title: "Global Pandemic Panic",
		code: "1asddas",
	},
	{
		title: "Global Pandemic Panic",
		code: "1asdfasfdsf",
	},
	{
		title: "Global Pandemic Panic",
		code: "1asdfdsf",
	},
	{
		title: "Global Pandemic Panic",
		code: "1asfdaw",
	},
	{
		title: "Global Pandemic Panic",
		code: "1awdas",
	},
	{
		title: "Global Pandemic Panic",
		code: "1asdaf",
	},

	{
		title: "Global Pandemic Panic",
		code: "gj",
	},
	{
		title: "Global Pandemic Panic",
		code: "fgdgfd",
	},
	{
		title: "Global Pandemic Panic",
		code: "dfgfhjgj",
	},
	{
		title: "Global Pandemic Panic",
		code: "fghfhfggh",
	},
	{
		title: "Global Pandemic Panic",
		code: "1asdhjkhjkaf",
	},
]

export const USindices = ["%5EGSPC", "%5EIXIC", "%5EDJI", "%5ERUT"]
export const EUindices = ["%5EFTSE", "%5EFCHI", "%5EGDAXI", "%5EN100"]
export const USbonds = ["%5EIRX", "%5EFVX", "%5ETNX", "%5ETYX"]
export const Energy = ["CL%3DF", "NG%3DF", "BZ%3DF"]
export const Metals = ["GC%3DF", "SI%3DF", "HG%3DF"]
export const CurrenciesUS = ["EUR%3DX", "RUB%3DX", "CNY%3DX"]
