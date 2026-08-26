"use client"

import Header from "@/components/elements/Header"
import MainNavigationMenu from "@/components/navigation/desktop/NavigationMenu"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import Link from "next/link"

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
						<Link href="/technical" onClick={onClose} className="py-2 text-2xl text-foreground">
							Technical
						</Link>
						<Link href="/fundamental" onClick={onClose} className="py-2 text-2xl text-foreground">
							Fundamental
						</Link>
						<Link href="/sentiment" onClick={onClose} className="py-2 text-2xl text-foreground">
							Sentiment
						</Link>
						<Link href="/countries/GR" onClick={onClose} className="py-2 text-2xl text-foreground">
							Countries
						</Link>
						<Link href="/contact" onClick={onClose} className="py-2 text-2xl text-foreground">
							Contact
						</Link>
					</nav>
				</Header>
			</aside>
		</>
	)
}
