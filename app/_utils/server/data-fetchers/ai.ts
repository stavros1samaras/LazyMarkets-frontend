import "server-only"

export async function getGeminiResponse() {
	const url = `http://localhost:3001/getSentence`
	const response = await fetch(url)

	return response.json()
}
