import { cn } from "@/lib/utils"

export default function PageLayout({ children, className }: any) {
	const displayStypes = "flex w-full flex-1 gap-4"
	const paddingStyles = "pt-1 pb-2 px-3"
	return <div className={cn("overflow-hidden", displayStypes, paddingStyles, className)}>{children}</div>
}
