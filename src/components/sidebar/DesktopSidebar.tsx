"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Div } from "@/components/elements/Div"
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

interface SidebarSearchListProps {
	data: Countries[]
	searchKey: string
	children: (item: Countries) => React.ReactElement
}

export function SidebarSearchList({ data, searchKey, children }: SidebarSearchListProps) {
	const [filteredItems, setCountries] = useState<any[]>(data)

	function filter(e: React.ChangeEvent<HTMLInputElement>) {
		const filteredData: any[] = data.filter((item: any) => {
			if (item[searchKey].toLowerCase().includes(e.target.value.toLowerCase())) {
				return item
			}
		})

		setCountries(filteredData)
	}

	return (
		<Div className="flex-col items-start gap-2 w-auto text-sm">
			<Input placeholder="search country" className="w-auto h-7" onChange={(e) => filter(e)} />
			{filteredItems.map((item, index) => (
				<React.Fragment key={index}>{children(item)}</React.Fragment>
			))}
		</Div>
	)
}
