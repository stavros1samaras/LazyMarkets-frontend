"use client"

import Header from "@/components/elements/Header"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Suspense } from "react"
import { MOBILE_NAV_ITEMS, NAV_ITEMS } from "../config"
import NavigationState from "@/_features/_navigation/NavigationState"
import { NavigationMenuItem } from "@/components/ui/navigation-menu"

type SidebarProps = {
	open: boolean
	onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
	return (
		<>
			{open && <div onClick={onClose} className="fixed inset-0 z-40 bg-black/40" />}

			<aside
				className={cn(
					"fixed top-0 right-0 z-50 h-screen w-72 bg-background shadow-lg transition-transform duration-300",
					open ? "translate-x-0" : "translate-x-full"
				)}
			>
				<Header>
					<nav className="flex flex-col w-full p-4">
						<ul className="list-none">
							{NAV_ITEMS.map((item, index) => {
								const Icon = item.icon
								const link = (
									<Link
										href={item.href}
										onClick={onClose}
										target={item.external ? "_blank" : undefined}
										className="flex items-center gap-1.5 py-2 text-2xl"
									>
										{item.label}
										{Icon && <Icon size={19} />}
									</Link>
								)

								return (
									<NavigationMenuItem key={item.label} className="text-foreground">
										<Suspense fallback={link}>
											<NavigationState index={index}>{link}</NavigationState>
										</Suspense>
									</NavigationMenuItem>
								)
							})}
						</ul>
					</nav>
				</Header>
			</aside>
		</>
	)
}
