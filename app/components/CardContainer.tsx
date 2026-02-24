import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ReactNode } from "react"

export function CardContainer({ children, className, withSection = false }: any) {
	const m = "mt-0 mb-0 ml-0 mr-0"

	return (
		<>
			{withSection ? (
				<section className="select-text">
					<Card className={`w-auto ${m} ${className ?? ""}`}>
						<CardContent className="p-3">{children}</CardContent>
					</Card>
				</section>
			) : (
				<Card className={`w-auto ${m} ${className ?? ""}`}>
					<CardContent className="p-3">{children}</CardContent>
				</Card>
			)}
		</>
	)
}
