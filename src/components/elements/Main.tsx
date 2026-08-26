import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface MainProps {
	children: ReactNode
	className?: string
}

export default function Main({ children, className }: MainProps) {
	const displayStyles = "flex flex-col flex-1"
	const designStyles = "rounded-lg bg-background"
	const crossBrowserStyles = `scrollbar-hide touch-scroll`

	return (
		<main className={cn("overflow-y-auto select-none", displayStyles, designStyles, crossBrowserStyles, className)}>
			{children}
		</main>
	)
}

export function MainContent({ children, className = "" }: { children: ReactNode; className?: string }) {
	return <section className={cn("grid grid-cols-1 gap-4 xl:grid-cols-2", className)}>{children}</section>
}
