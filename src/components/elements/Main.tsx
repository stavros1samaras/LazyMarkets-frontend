import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface MainProps {
	children: ReactNode
	className?: string
}

export default function Main({ children, className }: MainProps) {
	const designStyles = "bg-background rounded-lg"
	const crossBrowserStyles = `scrollbar-hide touch-scroll`

	return <main className={cn(crossBrowserStyles, designStyles, "select-none", className)}>{children}</main>
}
