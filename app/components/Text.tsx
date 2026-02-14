import React from "react"

type TextProps = {
	as?: "h1" | "h3" | "p" | "span" | "div"
	className: string
	children?: React.ReactNode
}
export default function Text({ as = "p", className, children }: TextProps) {
	const Tag = as
	return <Tag className={`${className}`}>{children}</Tag>
}
