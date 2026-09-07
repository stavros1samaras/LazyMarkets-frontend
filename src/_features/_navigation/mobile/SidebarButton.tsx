import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { PanelLeftClose } from "lucide-react"

type SidebarButtonProps = {
	onClick: () => void
	className?: string
}

export default function SidebarButton({ onClick, className }: SidebarButtonProps) {
	return (
		<Button size="icon" variant="ghost" className={cn("m-0 p-0 text-foreground", className)} onClick={onClick}>
			<PanelLeftClose className="size-6 p-0" />
		</Button>
	)
}
