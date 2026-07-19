"use client"

import { ThemeContext } from "@/contexts/ThemeProvider"
import { useContext } from "react"

export default function Theme() {
	const context = useContext(ThemeContext)

	return <button onClick={context?.toggleTheme}>{context?.theme}</button>
}
