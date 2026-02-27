"use client"

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { Sparkle } from "lucide-react"
import { use, useState } from "react"

export default function Ai({ aiData }: any) {
	const data = use(aiData) as any

	const [isLoading, setLoadingState] = useState(false)
	const [content, setContent] = useState<any>(null)

	async function getAiResponse() {
		setLoadingState(true)

		await new Promise((resolve) => setTimeout(resolve, 3000))

		setContent(data)
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

			{content && <div className="p-4 rounded-xl border bg-muted/40 text-sm leading-relaxed shadow-sm">{content}</div>}
		</div>
	)
}
