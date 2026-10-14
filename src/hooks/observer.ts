"use client"

import { useEffect, useState } from "react"
import type { RefObject } from "react"

export function useObserverMount(ref: RefObject<HTMLElement | null>) {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const element = ref.current

		if (!element) return

		const observer = new IntersectionObserver(
			(entries, observer) => {
				const entry = entries[0]

				if (entry.isIntersecting) {
					setVisible(true)
					observer.disconnect()
				}
			},
			{
				rootMargin: "100px",
			}
		)

		observer.observe(element)

		return () => observer.disconnect()
	}, [])

	return { visible }
}
