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

function getThemeScript() {
	return `
    {
      var theme = localStorage.getItem("${STORAGE_KEY}") ?? "${DEFAULT_THEME}";
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  `
}

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

	return (
		<ThemeContext value={{ theme, toggleTheme }}>
			{children}
			<InlineScript html={getThemeScript()} />
		</ThemeContext>
	)
}
export function InlineScript({ html }: { html: string }) {
	return (
		<script
			type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
			suppressHydrationWarning
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	)
}
