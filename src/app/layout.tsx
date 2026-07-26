import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import "../styles/compat.css"
import DesktopHeader from "../components/navigation/DesktopHeader"
import { NextThemeProvider } from "@/contexts/NextThemeProvider"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Lazy Market",
	description:
		"**Trade Market** is a web application for analyzing financial markets. It provides fundamental, technical, and sentiment analysis of companies, along with economic and demographic insights for countries worldwide.",
	alternates: { canonical: "https://lazy-markets-frontend.vercel.app" },
	robots: { follow: true, index: true },
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-global-background root w-screen`}>
				<div className="w-screen h-screen">
					<NextThemeProvider>
						<DesktopHeader />
						{children}
					</NextThemeProvider>
				</div>
			</body>
		</html>
	)
}
