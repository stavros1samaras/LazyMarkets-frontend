import type { ReactNode } from "react"

export default function Main({ children }: { children: ReactNode }) {
	const m = "pt-1 px-4"
	// const h = `h-[calc(100svh-6.25rem)] h-[calc(100vh-6.25rem)]`

	const crossBrowserStyles = `scrollbar-hide touch-scroll`

	return (
		<main className={`flex flex-col w-full  ${m} p-0 bg-background rounded-lg overflow-y-auto ${crossBrowserStyles} select-none`}>
			{children}
		</main>
	)
}

export function MainContent({ children }: { children: ReactNode }) {
	return <section className="grid grid-cols-1 xl:grid-cols-2 gap-4 ">{children}</section>
}
