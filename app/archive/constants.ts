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
