import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import "@/styles/globals.css"
import "@/styles/compat.css"
import DesktopHeader from "@/_features/_navigation/desktop/DesktopHeader"
import { NextThemeProvider } from "@/providers/NextThemeProvider"
import { Toaster } from "@/components/ui/sonner"
import { I18nProvider } from "@/_features/_translation/I18n.provider"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import getLanguage from "@/_features/_translation/server"
import { Suspense } from "react"
import { getUserAgent } from "@/lib/server/user-agent"
import { UserAgentProvider } from "@/providers/UserAgentProvider"
import { cn } from "@/lib/utils"

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
		"Lazy Markets is a web application for analyzing financial markets. It provides fundamental, technical, and sentiment analysis of companies, along with economic and demographic insights for countries worldwide.",
	alternates: { canonical: "https://lazy-markets-frontend.vercel.app" },
	robots: { follow: true, index: true },
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<AppShell>
			<DynamicContent>{children}</DynamicContent>
		</AppShell>
	)
}

function AppShell({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className="" suppressHydrationWarning>
			<body className={cn(geistSans.variable, inter.className, "root min-h-screen bg-background antialiased")}>
				<Script src="/scripts/locale_cookie.js" strategy="beforeInteractive" />
				<div className="flex flex-col w-[95%] lg:w-[98%] min-h-screen mx-auto">
					<Suspense>{children}</Suspense>
				</div>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	)
}

async function DynamicContent({ children }: Readonly<{ children: React.ReactNode }>) {
	const { locale, translationResource } = await getLanguage()
	const deviceType = await getUserAgent()

	return (
		<I18nProvider locale={locale} translationResource={translationResource}>
			<UserAgentProvider value={deviceType}>
				<NextThemeProvider>
					<DesktopHeader />
					{children}
				</NextThemeProvider>
			</UserAgentProvider>
			<Toaster />
		</I18nProvider>
	)
}
