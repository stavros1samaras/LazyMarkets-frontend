import { cn } from "@/lib/utils"

export default function PageLayout({ children, className }: any) {
	const displayStypes = "flex flex-1 gap-4 w-full"
	const paddingStyles = "px-3 pb-2"
	return <div className={cn(displayStypes, paddingStyles, className)}>{children}</div>
}
