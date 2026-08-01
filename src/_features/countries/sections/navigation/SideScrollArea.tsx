import * as React from "react"
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area"
import { Div } from "@/components/elements/Div"
import { cn } from "@/lib/utils"

type SideScrollAreaProps = {
	children: React.ReactNode
	className?: string
}

export default function SideScrollArea({ children, className }: SideScrollAreaProps) {
	return (
		<ScrollArea className={cn("w-fit border border-custom-border bg-background", className)}>
			<Div className="flex-col items-start w-auto text-sm gap-2">{children}</Div>
			<ScrollBar orientation="vertical" className="w-1" />
		</ScrollArea>
	)
}
