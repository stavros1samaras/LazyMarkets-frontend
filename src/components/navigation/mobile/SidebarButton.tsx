import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { PanelLeftClose } from "lucide-react"
import { ReactNode, useState } from "react"

type SidebarButtonProps = {
	onClick: () => void
	className?: string
}

export default function SidebarButton({ onClick, className }: SidebarButtonProps) {
	// const [open, setOpen] = useState(false)
	return (
		<Button size="icon" variant="ghost" className={cn("p-0 m-0 text-foreground", className)} onClick={onClick}>
			<PanelLeftClose className="size-6 p-0" />
		</Button>
	)
}
