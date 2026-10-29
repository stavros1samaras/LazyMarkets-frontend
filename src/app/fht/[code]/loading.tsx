import SectionCard from "@/components/elements/SectionCard"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
	return (
		<SectionCard>
			<Skeleton className="h-9 w-64" />
			<Skeleton className="h-4 w-full max-w-3xl" />
			<Skeleton className="h-9 w-full md:max-w-140" />
		</SectionCard>
	)
}
