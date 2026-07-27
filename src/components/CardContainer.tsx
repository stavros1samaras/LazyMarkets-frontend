import { cn } from "@/lib/utils"
import { Card, CardContent } from "./ui/card"
import { ReactElement } from "react"

interface CardContainerProps {
	children: ReactElement
	className?: string
	withSection?: boolean
}

export function CardContainer({ children, className, withSection = false }: CardContainerProps) {
	const CardComponent = (
		<Card className={cn("w-auto", className)}>
			<CardContent className="p-3">{children}</CardContent>
		</Card>
	)

	if (withSection) {
		return <section className="select-text">{CardComponent}</section>
	}

	return CardComponent
}
