"use client"

import { createContext, useState, type ReactNode } from "react"

type Theme = "light" | "dark"

type ThemeContextType = {
	theme: Theme
	toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>("light")

	function toggleTheme() {
		const nextTheme = theme === "light" ? "dark" : "light"
		setTheme(nextTheme)
		document.documentElement.classList.toggle("dark")
	}

	return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
}
