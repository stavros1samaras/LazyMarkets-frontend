"use client"

import { CardContainer } from "@/components/CardContainer"
import { Flex } from "@/components/elements/Containers"
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
				<CardContainer className="flex h-full w-full items-center justify-center">
					<Flex className=" items-center text-2xl text-destructive gap-2">
						<CircleX size={25} className="text-destructive" />
						Something went wrong
					</Flex>
				</CardContainer>
			</Main>
		</PageLayout>
	)
}
