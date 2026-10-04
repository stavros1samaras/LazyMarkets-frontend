"use client"

import { cn } from "@/lib/utils"
import React from "react"
import { useTranslation } from "react-i18next"

interface TextProps extends React.HTMLAttributes<HTMLElement> {
	asChild?: boolean
	as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div"
}

export default function Text({ asChild = false, as = "p", className, children, ...props }: TextProps) {
	const { t } = useTranslation()

	if (asChild) {
		if (!React.isValidElement(children)) {
			throw new Error("Text with asChild requires a single React element.")
		}

		const child = children as React.ReactElement<{ className?: string }>
		return React.cloneElement(child, {
			...props,
			className: cn(child.props.className || "", "text-foreground", className),
		})
	}

	const Tag = as
	return (
		<Tag className={cn(`text-responsive-${as} text-foreground`, className)} {...props}>
			{t(children as any)}
		</Tag>
	)
}

interface RevealTextProps extends React.HTMLAttributes<HTMLElement> {
	as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div" | "a"
	stagger?: number
	delay?: number
}

export function RevealText({ children, as = "span", className, stagger = 40, delay = 120, ...props }: RevealTextProps) {
	const { t } = useTranslation()

	const Tag = as
	const text = t(children as string)
	const words = text.split(" ")

	return (
		<Tag className={cn(`text-responsive-${as} text-foreground`, className)} {...props}>
			<span className="sr-only">{text}</span>

			<span aria-hidden="true">
				{words.map((word, index) => (
					<React.Fragment key={`${word}-${index}`}>
						<span
							className="inline-block fade-in slide-in-from-bottom-2 blur-in-20 duration-500 fill-mode-backwards motion-safe:animate-in"
							style={{
								animationDelay: `${delay + index * stagger}ms`,
							}}
						>
							{word}
						</span>

						{index < words.length - 1 ? " " : null}
					</React.Fragment>
				))}
			</span>
		</Tag>
	)
}
