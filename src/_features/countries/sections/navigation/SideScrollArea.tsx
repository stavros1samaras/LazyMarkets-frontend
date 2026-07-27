import * as React from "react"
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area"
import { Div } from "@/components/elements/Div"
import { cn } from "@/lib/utils"

type SideScrollAreaProps = {
	children: React.ReactNode
	className?: string
}

export default function SideScrollArea({ children, className }: SideScrollAreaProps) {
	const m = "ml-4 mt-0 mb-0 mr-0"
	const h = "h-[calc(100vh-6.25rem)]"
	return (
		<ScrollArea className={cn("w-fit rounded-md border border-custom-border bg-background", m, h, className)}>
			<Div className="flex-col items-start w-auto p-4 text-sm gap-2">{children}</Div>
			<ScrollBar orientation="vertical" className="w-0" />
		</ScrollArea>
	)
}
