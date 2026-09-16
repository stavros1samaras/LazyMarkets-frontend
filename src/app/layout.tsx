import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import "./globals.css"
import "../styles/compat.css"
import DesktopHeader from "@/_features/_navigation/desktop/DesktopHeader"
import { NextThemeProvider } from "@/providers/NextThemeProvider"
import { Toaster } from "@/components/ui/sonner"
import i18n from "./i18n"
import { I18nextProvider } from "react-i18next"
import { I18nProvider } from "@/providers/I18nProvider"
import Backend from "i18next-http-backend"

const inter = Inter({
	variable: "--font-inter",
})

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

import getLanguage from "@/app/cookies.actions"

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const { locale } = await getLanguage()

	return (
		<html lang={locale} className="" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${inter.className} root min-h-screen bg-background antialiased`}>
				<div className="flex flex-col w-[95%] lg:w-[98%] min-h-screen mx-auto">
					<I18nProvider locale={locale}>
						<NextThemeProvider>
							<DesktopHeader />
							{children}
						</NextThemeProvider>
						<Toaster />
					</I18nProvider>
				</div>
			</body>
		</html>
	)
}
