import "server-only"

export async function handleGet(url: string): Promise<Response> {
	const request = new Request(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": process.env.API_KEY as string,
		},
	})

	let response: Response

	try {
		response = await fetch(request)
	} catch (error) {
		throw new Error("Network error", { cause: error })
	}

	if (!response.ok) {
		throw new Error(`GET request failed: ${response.status} ${response.statusText}`)
	}

	return response
}
