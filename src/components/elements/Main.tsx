import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface MainProps {
	children: ReactNode
	className?: string
}

export default function Main({ children, className }: MainProps) {
	const displayStyles = "flex flex-col flex-1"
	const designStyles = "bg-background rounded-lg"
	const crossBrowserStyles = `scrollbar-hide touch-scroll`

	return (
		<main className={cn("overflow-y-auto select-none", displayStyles, designStyles, crossBrowserStyles, className)}>
			{children}
		</main>
	)
}

export function MainContent({ children }: { children: ReactNode }) {
	return <section className="grid grid-cols-1 xl:grid-cols-2 gap-4 ">{children}</section>
}
