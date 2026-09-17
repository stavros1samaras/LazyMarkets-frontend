import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import "./globals.css"
import "../styles/compat.css"
import DesktopHeader from "@/_features/_navigation/desktop/DesktopHeader"
import { NextThemeProvider } from "@/providers/NextThemeProvider"
import { Toaster } from "@/components/ui/sonner"
import { I18nProvider } from "@/providers/I18nProvider"
import getLanguage from "@/_features/_translation/server"

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

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const { locale, translationResource } = await getLanguage()

	return (
		<html lang={locale} className="" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${inter.className} root min-h-screen bg-background antialiased`}>
				<div className="flex flex-col w-[95%] lg:w-[98%] min-h-screen mx-auto">
					<I18nProvider locale={locale} translationResource={translationResource}>
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
