import { useState } from "react"

export type theme = "light" | "dark"

export default function useTheme() {
	const [theme, setTheme] = useState<theme>("light")

	return {
		theme,
		setTheme,
	}
}
