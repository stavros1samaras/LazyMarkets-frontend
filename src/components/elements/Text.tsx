import { cn } from "@/lib/utils"
import React from "react"

interface TextProps extends React.HTMLAttributes<HTMLElement> {
	asChild?: boolean
	as?: "h1" | "h2" | "h3" | "p" | "span" | "div"
}

export default function Text({ asChild = false, as = "p", className, children, ...props }: TextProps) {
	if (asChild) {
		if (!React.isValidElement(children)) {
			throw new Error("Text with asChild requires a single React element.")
		}

		const child = children as React.ReactElement<{ className?: string }>
		return React.cloneElement(child, {
			...props,
			className: cn(child.props.className, className, "text-foreground"),
		})
	}

	const Tag = as
	return (
		<Tag className={cn("text-foreground", className)} {...props}>
			{children}
		</Tag>
	)
}

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	as?: "h1" | "h2" | "h3"
}
export function Title({ as = "h3", className, children, ...props }: TitleProps) {
	return (
		<Text as={as} className={cn("text-base md:text-2xl font-semibold", className)} {...props}>
			{children}
		</Text>
	)
}
