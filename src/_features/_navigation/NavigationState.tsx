"use client"
import Link from "next/link"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import useNavigationState from "./hooks"

type NavLinkProps = ComponentProps<typeof Link> & {
	index: number
}

export default function NavLink({ index, className, ...props }: NavLinkProps) {
	const { selected } = useNavigationState()
	return <Link className={cn(className, selected === index && "text-main")} {...props} />
}
