import { CardContainer } from "@/components/CardContainer"
import { Card, CardContent, CardHeader } from "../../../components/ui/card"
import { Skeleton } from "../../../components/ui/skeleton"

export default function Loading() {
	return (
		<>
			{[...Array(8)].map((_, i) => (
				<CardContainer key={i} className="bg-component-background">
					<Card className="w-full bg-component-background">
						<CardHeader>
							<Skeleton className="h-4 w-2/3 bg-primary-foreground" />
							<Skeleton className="h-4 w-1/2 bg-primary-foreground" />
						</CardHeader>
						<CardContent>
							<Skeleton className="aspect-video w-auto  bg-primary-foreground" />
						</CardContent>
					</Card>
				</CardContainer>
			))}
		</>
	)
}
