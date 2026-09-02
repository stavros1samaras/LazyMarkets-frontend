import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionCardProps {
	children: ReactNode
	className?: string
}

export default function SectionCard({ children, className }: SectionCardProps) {
	return (
		<section>
			<Card className={cn(className)}>{children}</Card>
		</section>
	)
}
