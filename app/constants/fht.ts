export const INDICES_US: string[] = ["GSPC", "DJI", "IXIC"]
export const INDICES_EU: string[] = ["FTSE", "FCHI", "GDAXI"]
export const BONDS_US: string[] = ["IRX", "FVX", "TNX", "TYX"]
export const ENERGY: string[] = ["WTI", "NG", "Brent"]
export const METALS: string[] = ["Gold", "Silver", "Copper"]
export const FOREX: string[] = ["EUR", "CNY", "RUB"]

export const INDICES_US_LOWER: string[] = ["gspc", "ixic", "dji"]
export const INDICES_EU_LOWER: string[] = ["ftse", "fchi", "gdaxi"]
export const BONDS_US_LOWER: string[] = ["irx", "fvx", "tnx", "tyx"]
export const ENERGY_LOWER: string[] = ["wti", "ng", "brent"]
export const METALS_LOWER: string[] = ["gold", "silver", "copper"]
export const FOREX_LOWER: string[] = ["eur", "cny", "rub"]

export const INDICES_US_ENC: string[] = ["%5EGSPC", "%5EIXIC", "%5EDJI"]
export const INDICES_EU_ENC: string[] = ["%5EFTSE", "%5EFCHI", "%5EGDAXI", "%5EN100"]
export const BONDS_US_ENC: string[] = ["%5EIRX", "%5EFVX", "%5ETNX", "%5ETYX"]
export const ENERGY_ENC: string[] = ["CL%3DF", "NG%3DF", "BZ%3DF"]
export const METALS_ENC: string[] = ["GC%3DF", "SI%3DF", "HG%3DF"]
export const FOREX_ENC: string[] = ["EUR%3DX", "RUB%3DX", "CNY%3DX"]

export const commonLineProps = { type: "monotone", dot: false, isAnimationActive: false, connectNulls: true } as const

export const baseDaysMap: Record<string, number> = {
	"1w": 3,
	"2w": 7,
	"3w": 11,
	"1m": 14,
	"2m": 30,
	"3m": 45,
	"6m": 90,
	"1y": 190,
}

export const MARKET_EVENTS = [
	{
		title: "Trump Tariff Shock",
		encodedTitle: "Trump%20Tariff%20Shock",
		date: "04-04-25",
		day: "04",
		month: "04",
		year: "2025",
		description:
			"The announcement of significant new tariffs by US President Donald Trump in early April 2025 caused intense volatility in the stock markets, with sharp drops in indices like the Dow Jones and S&P 500 as investors feared a trade war and a slowdown in economic growth.",
		code: "TrmpTrrffShck",
	},
	{
		title: "Trump Tariff Shock2",
		encodedTitle: "Trump%20Tariff%20Shock2",
		date: "04-04-24",
		day: "04",
		month: "04",
		year: "2024",
		description:
			"The announcement of significant new tariffs by US President Donald Trump in early April 2025 caused intense volatility in the stock markets, with sharp drops in indices like the Dow Jones and S&P 500 as investors feared a trade war and a slowdown in economic growth.",
		code: "TrmpTrrffShck2",
	},
	{
		title: "Tech Stock Rally",
		encodedTitle: "Tech%20Stock%20Rally",
		date: "15-06-24",
		day: "15",
		month: "06",
		year: "2024",
		description:
			"A surge in major tech stocks including Apple, Microsoft, and Google led to a strong market rally, driven by impressive quarterly earnings and optimistic future guidance.",
		code: "TchStckRlly",
	},
	{
		title: "Oil Price Crash",
		encodedTitle: "Oil%20Price%20Crash",
		date: "10-09-23",
		day: "10",
		month: "09",
		year: "2023",
		description:
			"Global oil prices fell sharply due to oversupply and decreased demand forecasts, impacting energy sector stocks and causing broader market concern.",
		code: "LPrcCrsh",
	},
	{
		title: "Federal Reserve Rate Hike",
		encodedTitle: "Federal%20Reserve%20Rate%20Hike",
		date: "20-12-22",
		day: "20",
		month: "12",
		year: "2022",
		description:
			"The US Federal Reserve announced a significant interest rate hike to combat inflation, causing a temporary decline in stock markets and increased bond yields.",
		code: "FdrlRsrvRtHk",
	},
	{
		title: "Global Pandemic Panic",
		encodedTitle: "Global%20Pandemic%20Panic",
		date: "11-03-20",
		day: "11",
		month: "03",
		year: "2020",
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
