"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Div } from "@/components/elements/Div"
import Main from "@/components/elements/Main"
import { CircleX } from "lucide-react"
import { useEffect } from "react"

export default function Error({ error }: { error: Error & { digest?: string } }) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className="flex flex-10 gap-4 w-full">
			<Main className="flex flex-col flex-1">
				<Card className="flex items-center justify-center h-full w-full">
					<CardContent className="p-3">
						<Div className="text-destructive text-2xl">
							<CircleX size={25} className="text-destructive" />
							Something went wrong
						</Div>
					</CardContent>
				</Card>
			</Main>
		</div>
	)
}
