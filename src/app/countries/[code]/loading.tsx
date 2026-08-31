import { Card, CardContent, CardHeader } from "../../../components/ui/card"
import { Skeleton } from "../../../components/ui/skeleton"
import { CHART_CATEGORIES } from "@/_features/countries/config"

export default function Loading() {
	return (
		<>
			{CHART_CATEGORIES.map((category) => (
				<Card key={category} className="gap-2 pt-2 pb-4">
					<CardHeader className="px-3 lg:px-6">
						<Skeleton className="h-6 w-32" />
					</CardHeader>
					<CardContent className="px-3 lg:px-6">
						<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4">
							{[...Array(6)].map((_, i) => (
								<Card key={i} className="w-auto">
									<CardContent className="p-3">
										<div className="flex items-center gap-2">
											<Skeleton className="h-4 w-24" />
											<Skeleton className="h-4 w-8 rounded-full" />
										</div>
										<Skeleton className="aspect-video w-full mt-2" />
									</CardContent>
								</Card>
							))}
						</section>
					</CardContent>
				</Card>
			))}
		</>
	)
}
