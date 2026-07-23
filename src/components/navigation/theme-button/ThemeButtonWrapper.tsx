"use client"

import dynamic from "next/dynamic"

const ThemeButton = dynamic(() => import("./ThemeButton"), {
	ssr: false,
})

export default function ThemeWrapper() {
	return <ThemeButton />
}
