import { cn } from "@/lib/utils"

type DivProps = React.ComponentProps<"div">

export function Div({ className, ...props }: DivProps) {
	const desplayStyles = "flex items-center gap-2"
	return <div className={cn("w-full", desplayStyles, className)} {...props} />
}
