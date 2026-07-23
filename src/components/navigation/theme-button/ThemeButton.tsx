"use client"

import { Button } from "@/components/ui/button"
import { ThemeContext } from "@/contexts/ThemeProvider"
import { Moon, Sun } from "lucide-react"
import { useContext } from "react"

export default function ThemeButton() {
	const context = useContext(ThemeContext)

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
