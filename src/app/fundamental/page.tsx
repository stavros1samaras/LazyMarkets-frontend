"use client"

import { CardContainer } from "@/components/CardContainer"
import { Div } from "@/components/elements/Div"
import Main from "@/components/elements/Main"
import PageLayout from "@/components/PageLayout"
import { Hammer } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Page() {
	const pathname = usePathname()
	return (
		<PageLayout>
			<Main>
				<CardContainer className="flex h-full w-full items-center justify-center">
					<Div className="text-2xl text-foreground">
						<Hammer size={25} className="text-foreground" />
						{pathname.slice(1)} page is under construction
					</Div>
				</CardContainer>
			</Main>
		</PageLayout>
	)
}
