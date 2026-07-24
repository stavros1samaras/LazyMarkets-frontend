/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeButton() {
	const [mounted, setMounted] = useState(false)
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => setMounted(true), [])

	if (!mounted) {
		return null
	}

	if (resolvedTheme === "light") {
		return (
			<Button size="icon" variant="ghost" className="p-0 m-0 text-foreground" onClick={() => setTheme("dark")}>
				<Sun className="size-6 p-0" />
			</Button>
		)
	}

	return (
		<Button size="icon" variant="ghost" className="p-0 m-0 text-foreground" onClick={() => setTheme("light")}>
			<Moon className="size-6 p-0" />
		</Button>
	)
}
