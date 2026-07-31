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
		<ScrollArea className={cn("w-fit flex-1 border border-custom-border bg-background pl-2", className)}>
			<Div className="flex-col items-start w-auto p-1 text-sm gap-2">{children}</Div>
			<ScrollBar orientation="vertical" className="w-0" />
		</ScrollArea>
	)
}
