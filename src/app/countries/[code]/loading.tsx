import { Card, CardContent, CardHeader } from "../../../components/ui/card"
import { Skeleton } from "../../../components/ui/skeleton"

export default function Loading() {
	return (
		<>
			{[...Array(4)].map((_, i) => (
				<Card key={i} className="w-full bg-component-background">
					<CardHeader>
						<Skeleton className="h-4 w-2/3 bg-primary-foreground" />
						<Skeleton className="h-4 w-1/2 bg-primary-foreground" />
					</CardHeader>
					<CardContent>
						<Skeleton className="aspect-video w-full  bg-primary-foreground" />
					</CardContent>
				</Card>
			))}
		</>
	)
}
