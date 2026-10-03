import React from "react"
import Link from "next/link"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Countries } from "@/_features/countries/types"

export default function DesktopSidebar({ children }: { children: React.ReactNode }) {
	const overscrollContain = "**:data-[slot=scroll-area-viewport]:overscroll-contain"
	return (
		<aside className={cn("hidden xl:flex xl:sticky xl:top-15 h-[calc(100vh-4.4rem)] px-4 pt-4 border border-ring rounded-2xl")}>
			<ScrollArea className={cn("h-full w-fit bg-background", overscrollContain)}>
				{children}
				<ScrollBar orientation="vertical" className="w-1" />
			</ScrollArea>
		</aside>
	)
}

export function SidebarItem({ item, children }: { item: Countries; children: React.ReactNode }) {
	const hoverStyles = "hover:bg-linear-to-r hover:from-main/40 hover:to-transparent"

	return (
		<Link href={item.code} className={cn("flex w-full items-center rounded-sm pl-1 transition-colors", hoverStyles)}>
			{children}
		</Link>
	)
}
