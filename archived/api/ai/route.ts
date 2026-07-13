import { getGeminiResponse } from "../../../src/utils/server/data-fetchers/ai"
import "server-only"

export async function GET() {
	const fullText = await getGeminiResponse()

	const stream = new ReadableStream({
		start(controller) {
			const words = fullText.split(" ")

			let i = 0

			function pushNext() {
				if (i < words.length) {
					controller.enqueue(new TextEncoder().encode(words[i] + " "))
					i++
					setTimeout(pushNext, 50)
				} else {
					controller.close()
				}
			}

			pushNext()
		},
	})

	return new Response(stream, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	})
}
