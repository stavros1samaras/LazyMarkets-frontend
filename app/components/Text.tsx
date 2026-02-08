import React from "react"

type TextProps = {
	as?: "h1" | "p" | "span" | "div"
	children?: React.ReactNode
}
export function Text({ as = "p", children }: TextProps) {
	const Tag = as
	return <Tag>{children}</Tag>
}

export default Text
