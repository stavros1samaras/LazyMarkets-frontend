"use client"

import { ThemeProvider } from "next-themes"
import { Suspense } from "react"

export function NextThemeProvider({ children }: { children: React.ReactNode }) {
	return (
		<Suspense>
			<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
				{children}
			</ThemeProvider>
		</Suspense>
	)
}
