import "server-only"

export async function handleGet(url: string): Promise<Response> {
	const request = new Request(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": process.env.API_KEY as string,
		},
	})

	try {
		const response = await fetch(request)

		if (!response.ok) {
			throw new Error(`GET request failed: ${response.status} ${response.statusText}`)
		}

		return response
	} catch (error) {
		console.error("GET Error:", error)

		throw error
	}
}
