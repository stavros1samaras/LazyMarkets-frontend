import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionCardProps {
	children: ReactNode
	className?: string
}

export default function SectionCard({ children, className }: SectionCardProps) {
	return (
		<section
			className={cn(
				"flex flex-col gap-4 px-4 py-4 bg-card border border-ring rounded-xl shadow-none text-card-foreground",
				className
			)}
		>
			{children}
		</section>
	)
}
