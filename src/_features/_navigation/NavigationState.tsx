"use client"
import useNavigationState from "./hooks"

export default function NavigationState({ index, children }: { index: number; children: React.ReactNode }) {
	const { selected } = useNavigationState()
	return (
		<span data-selected={selected === index} className="group contents">
			{children}
		</span>
	)
}
