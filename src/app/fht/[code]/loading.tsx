import { getFhtAssetCategories } from "@/_features/fht/dal"
import SectionCard from "@/components/elements/SectionCard"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default async function Loading() {
	const categories = await getFhtAssetCategories()

	return (
		<>
			<SectionCard>
				<Skeleton className="h-6 w-40" />
				<Skeleton className="h-4 w-full max-w-3xl" />
			</SectionCard>

			{categories.map((category) => (
				<SectionCard key={category}>
					<Skeleton className="h-6 w-32" />

					<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4">
						{Array.from({ length: 3 }, (_, index) => (
							<Card key={index} className="w-auto gap-0">
								<CardHeader className="flex items-center justify-between gap-0 p-3 pb-0">
									<Skeleton className="h-4 w-24" />
									<Skeleton className="h-4 w-10" />
								</CardHeader>
								<CardContent className="p-3">
									<Skeleton className="h-50 w-full" />
								</CardContent>
							</Card>
						))}
					</section>
				</SectionCard>
			))}
		</>
	)
}
