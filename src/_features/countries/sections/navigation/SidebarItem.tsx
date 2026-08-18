"use client"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Span } from "@/components/elements/Span"
import { Div } from "@/components/elements/Div"

type SidebarItemProps = {
	code: string
	name: string
	className?: string
}

export default function SidebarItem({ code, name, className = "" }: SidebarItemProps) {
	const flagCode = code.toLowerCase()

	const hoverStyles = "hover:bg-linear-to-r hover:from-main/40 hover:to-transparent"

	return (
		<Link
			href={`/countries/${code}`}
			className={cn("flex items-center w-full transition-colors rounded-sm", hoverStyles, className)}
		>
			<Div className="gap-2 py-1.5 rounded-radius">
				<Image src={`/images/flags/${flagCode}.svg`} alt="" width={17} height={17} className="rounded-xs" />
				<Span className="text-[16px] font-medium text-foreground">{name}</Span>
			</Div>
		</Link>
	)
}
