"use client"

import useTheme from "@/hooks/useTheme"

export default function Theme() {
	const { theme, setTheme } = useTheme()

	function toggleTheme() {
		document.documentElement.classList.toggle("dark")
		setTheme((prevTheme) => {
			if (prevTheme == "light") return "dark"
			else {
				return "light"
			}
		})
	}

	return <button onClick={toggleTheme}>{theme}</button>
}
