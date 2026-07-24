"use client"

import { createContext, useState, type ReactNode } from "react"

type Theme = "light" | "dark"

type ThemeContextType = {
	theme: Theme
	toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

const STORAGE_KEY = "theme"
const DEFAULT_THEME: Theme = "light"

export default function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState(() => {
		if (typeof window === "undefined") return DEFAULT_THEME

		const theme = localStorage.getItem(STORAGE_KEY)

		return theme === "dark" ? "dark" : "light"
	})

	function toggleTheme() {
		const nextTheme: Theme = theme === "light" ? "dark" : "light"

		setTheme(nextTheme)
		localStorage.setItem(STORAGE_KEY, nextTheme)
		document.documentElement.classList.toggle("dark", nextTheme === "dark")
	}

	return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
}
