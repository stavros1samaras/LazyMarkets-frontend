"use client"

import { Div } from "@/components/elements/Div"
import Main from "@/components/elements/Main"
import { Hammer } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Page() {
	const pathname = usePathname()
	return (
		<Main className="flex flex-col items-center justify-center flex-1 mb-2 border border-ring">
			<Div className="text-2xl text-foreground">
				<Hammer size={25} />
				{pathname.slice(1) || "Home"} page is under construction
			</Div>
		</Main>
	)
}
