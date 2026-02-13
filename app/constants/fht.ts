export const indicesUS: string[] = ["GSPC", "DJI", "IXIC"]
export const indicesEU: string[] = ["FTSE", "FCHI", "GDAXI"]
export const bondsUS: string[] = ["IRX", "FVX", "TNX", "TYX"]
export const energyCommodities: string[] = ["WTI", "NG", "Brent"]
export const preciousMetals: string[] = ["Gold", "Silver", "Copper"]
export const forexCurrencies: string[] = ["EUR", "CNY", "RUB"]

export const USindices_ENC = ["%5EGSPC", "%5EIXIC", "%5EDJI", "%5ERUT"]
export const EUindices_ENC = ["%5EFTSE", "%5EFCHI", "%5EGDAXI", "%5EN100"]
export const USbonds_ENC = ["%5EIRX", "%5EFVX", "%5ETNX", "%5ETYX"]
export const Energy_ENC = ["CL%3DF", "NG%3DF", "BZ%3DF"]
export const Metals_ENC = ["GC%3DF", "SI%3DF", "HG%3DF"]
export const CurrenciesUS_ENC = ["EUR%3DX", "RUB%3DX", "CNY%3DX"]

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
