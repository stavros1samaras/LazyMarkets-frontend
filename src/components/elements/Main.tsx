export default function Main({ children }: any) {
	const m = "ml-4 mt-0 mb-4 mr-4"
	// const h = `h-[calc(100svh-6.25rem)] h-[calc(100vh-6.25rem)]`

	const crossBrowserStyles = `scrollbar-hide touch-scroll`
	const compatHeight = `content-height`

	return (
		<main
			className={`flex flex-col w-full ${compatHeight} ${m} p-0 bg-[#dbd9d9] rounded-lg overflow-y-auto ${crossBrowserStyles} select-none`}
		>
			{children}
		</main>
	)
}

import type { ReactNode } from "react"

export function MainContent({ children }: { children: ReactNode }) {
	return <section className="grid grid-cols-1 xl:grid-cols-2 gap-4">{children}</section>
}
