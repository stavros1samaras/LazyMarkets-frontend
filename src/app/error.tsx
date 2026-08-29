"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Div } from "@/components/elements/Div"
import Main from "@/components/elements/Main"
import PageLayout from "@/components/PageLayout"
import { CircleX } from "lucide-react"
import { useEffect } from "react"

export default function Error({ error }: { error: Error & { digest?: string } }) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<PageLayout className="flex-10">
			<Main>
				<Card className="flex items-center justify-center h-full w-full">
					<CardContent className="p-3">
						<Div className="text-destructive text-2xl">
							<CircleX size={25} className="text-destructive" />
							Something went wrong
						</Div>
					</CardContent>
				</Card>
			</Main>
		</PageLayout>
	)
}
