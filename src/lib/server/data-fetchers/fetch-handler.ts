import "server-only"

import { HTTP_TRANSACTION } from "@/types"

export async function handleGet(url: string): Promise<HTTP_TRANSACTION | undefined> {
	const request: Request = new Request(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": process.env.API_KEY as string,
		},
	})
	try {
		const response: Response = await fetch(request)
		const fetchTransaction: HTTP_TRANSACTION = {
			request: request,
			response: response,
			success: response.ok,
		}
		return fetchTransaction
	} catch (error) {
		console.error("GET Error:", error)
		return undefined
	}
}
