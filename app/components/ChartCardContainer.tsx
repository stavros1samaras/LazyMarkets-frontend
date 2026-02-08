import { Card, CardContent } from "@/components/ui/card"
import { type ReactNode } from "react"

type ChartCardContainerProps = {
	children: ReactNode
	className?: string
}

export function ChartCardContainer({ children, className }: ChartCardContainerProps) {
	const m = "mt-0 mb-0 ml-0 mr-0"

	return (
		<Card className={`w-[auto] ${m} ${className ?? ""}`}>
			<CardContent className="p-3">{children}</CardContent>
		</Card>
	)
}
