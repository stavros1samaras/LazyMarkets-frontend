"use client"

import Link from "next/link"
import Image from "next/image"
import { Div } from "@/components/elements/Div"
import Text from "@/components/elements/Text"
import { cn } from "@/lib/utils"

export default function SidebarSearchItem({ item }: any) {
	const flagCode = item.code.toLowerCase()
	const hoverStyles = "hover:bg-linear-to-r hover:from-main/40 hover:to-transparent"

	return (
		<Link href={`${item.code}`} className={cn("flex w-full items-center rounded-sm pl-1 transition-colors", hoverStyles)}>
			<Div className="gap-2 py-1.5 rounded-radius">
				<Image src={`/images/flags/${flagCode}.svg`} alt="" width={17} height={17} className="rounded-xs" />
				<Text as="span" className="max-w-40 text-[16px] font-medium text-foreground">
					{item.name}
				</Text>
			</Div>
		</Link>
	)
}
