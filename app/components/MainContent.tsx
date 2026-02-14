import type { ReactNode } from "react"

export default function MainContent({ children }: { children: ReactNode }) {
	return <section className="grid grid-cols-1 xl:grid-cols-2 gap-4">{children}</section>
}
