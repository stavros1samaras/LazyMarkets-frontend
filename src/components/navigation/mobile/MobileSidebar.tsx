"use client"

import { useState } from "react"
import Sidebar from "./Sidebar"
import SidebarButton from "./SidebarButton"

export default function MobileSidebar() {
	const [open, setOpen] = useState(false)

	return (
		<>
			<SidebarButton className="inline-flex lg:hidden" onClick={() => setOpen(true)} />
			<Sidebar open={open} onClose={() => setOpen(false)} />
		</>
	)
}
