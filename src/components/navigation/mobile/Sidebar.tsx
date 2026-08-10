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
					<nav className="flex flex-col p-4 w-full">
						<Link href="/technical" onClick={onClose} className="text-2xl text-foreground py-2">
							Technical
						</Link>
						<Link href="/fundamental" onClick={onClose} className="text-2xl text-foreground py-2">
							Fundamental
						</Link>
						<Link href="/sentiment" onClick={onClose} className="text-2xl text-foreground py-2">
							Sentiment
						</Link>
						<Link href="/countries/GR" onClick={onClose} className="text-2xl text-foreground py-2">
							Countries
						</Link>
						<Link href="/contact" onClick={onClose} className="text-2xl text-foreground py-2">
							Contact
						</Link>
					</nav>
				</Header>
			</aside>
		</>
	)
}
