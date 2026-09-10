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
			<Button
				size="icon"
				variant="ghost"
				className="m-0 p-0 text-foreground"
				aria-label="Switch to dark theme"
				aria-description="Toggles the site between light and dark appearance."
				onClick={() => setTheme("dark")}
			>
				<Sun className="size-6 p-0" aria-hidden="true" />
			</Button>
		)
	}

	return (
		<Button
			size="icon"
			variant="ghost"
			className="m-0 p-0 text-foreground"
			aria-label="Switch to light theme"
			aria-description="Toggles the site between light and dark appearance."
			onClick={() => setTheme("light")}
		>
			<Moon className="size-6 p-0" aria-hidden="true" />
		</Button>
	)
}
