/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { Button } from "@/components/ui/button"
import { ThemeContext } from "@/contexts/ThemeProvider"
import { Moon, Sun } from "lucide-react"
import { useContext, useEffect, useState } from "react"

export default function ThemeButton() {
	const context = useContext(ThemeContext)

	const [mounted, setMounted] = useState(false)

	useEffect(() => setMounted(true), [])

	if (!mounted) return null

	return (
		<>
			{context?.theme === "light" ? (
				<Button size="icon" variant="ghost" className="p-0 m-0 text-foreground" onClick={context.toggleTheme}>
					<Sun className="size-6 p-0" />
				</Button>
			) : (
				<Button size="icon" variant="ghost" className="p-0 m-0 text-foreground" onClick={context?.toggleTheme}>
					<Moon className="size-6 p-0" />
				</Button>
			)}
		</>
	)
}
