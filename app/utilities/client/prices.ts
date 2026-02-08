export const currentSymbolPrice = async () => {
	// DOCS: https://api.coingecko.com/api/v3/coins/list

	// coingecko API
	//"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tao&vs_currencies=usd"

	try {
		const response = await fetch(
			"http://127.0.0.1:8000/ta/data/crypto-prices?ids=bitcoin&ids=ethereum&vs_currency=usd"
		)
		const currentPrice = await response.json()
		return currentPrice
	} catch (error) {
		console.error("Error fetching prices:", error)
	}
}
