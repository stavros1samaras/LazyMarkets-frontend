import { cn } from "@/lib/utils"

type SpanProps = React.ComponentProps<"span">

export function Span({ className, ...props }: SpanProps) {
	return <span className={cn("inline-flex items-center", className)} {...props} />
}
