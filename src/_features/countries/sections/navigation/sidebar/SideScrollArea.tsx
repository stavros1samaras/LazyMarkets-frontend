import * as React from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Div } from "@/components/elements/Div"

type SideScrollAreaProps = {
	children: React.ReactNode
	className?: string
}

export default function SideScrollArea({ children, className }: SideScrollAreaProps) {
	return (
		<ScrollArea className={cn("w-fit bg-background", className)}>
			<Div className="flex-col items-start w-auto text-sm gap-2 px-2">{children}</Div>
			<ScrollBar orientation="vertical" className="w-1" />
		</ScrollArea>
	)
}
