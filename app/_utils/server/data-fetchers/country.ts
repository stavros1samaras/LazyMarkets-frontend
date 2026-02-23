import "server-only"

export async function getCoutries(code: any) {
	const url = `http://localhost:3001/api/db/country/get-country-data/${code}`
	const response = await fetch(url)

	await new Promise((resolve) => {
		setTimeout(resolve, 3000)
	})

	return response.json()
}
