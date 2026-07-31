import { cn } from "@/lib/utils"

export default function PageLayout({ children, className }: any) {
	return <div className={cn("flex w-full flex-1 min-h-0 pb-2", className)}>{children}</div>
}
