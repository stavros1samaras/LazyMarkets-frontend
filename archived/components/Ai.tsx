"use client"

import { Button } from "../../src/components/ui/button"
import { Spinner } from "../../src/components/ui/spinner"
import { Sparkle } from "lucide-react"
import { use, useState } from "react"

export default function Ai({ aiData }: any) {
	const data = use(aiData) as any

	const [isLoading, setLoadingState] = useState(false)
	const [content, setContent] = useState<string>("")

	function randomDelay(min = 500, max = 100) {
		return new Promise((resolve) => setTimeout(resolve, Math.random() * (max - min) + min))
	}

	async function getAiResponse() {
		setLoadingState(true)
		setContent("")

		try {
			const res = await fetch("/api/ai")
			if (!res.body) throw new Error("No stream from API")

			const reader: ReadableStreamDefaultReader<Uint8Array> = res.body.getReader()
			const decoder = new TextDecoder()
			let done = false

			while (!done) {
				const { value, done: readerDone } = await reader.read()
				done = readerDone
				if (value) {
					const decoded = decoder.decode(value, { stream: true })
					setContent((prev) => prev + decoded)

					await randomDelay()
				}
			}
		} catch (err) {
			console.error(err)
			setContent("Error fetching AI response")
		}

		setLoadingState(false)
	}
	return (
		<div className="flex flex-col gap-3 items-start">
			<Button size="sm" variant="default" onClick={getAiResponse} disabled={isLoading} className="flex items-center gap-2">
				{isLoading ? (
					<>
						<Spinner />
						<p>Generating AI summary...</p>
					</>
				) : (
					<>
						<Sparkle size={20} strokeWidth={1.25} className="text-blue-400" />
						Ai summary generation
					</>
				)}
			</Button>

			{content && (
				<div className="p-4 rounded-xl border bg-muted/40 text-sm leading-relaxed shadow-sm whitespace-pre-wrap">{content}</div>
			)}
		</div>
	)
}
