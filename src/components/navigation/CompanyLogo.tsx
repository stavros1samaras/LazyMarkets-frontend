"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState, useEffect } from "react"
import Text from "@/components/elements/Text"
import { Hammer } from "lucide-react"

export function CompanyLogo(props: any) {
	const [mounted, setMounted] = useState(false)

	// eslint-disable-next-line react-hooks/set-state-in-effect
	useEffect(() => setMounted(true), [])

	if (!mounted) {
		return (
			<Text asChild className={cn(props.fontStyles, props.hoverStyles)}>
				<Link href="/" prefetch={false} data-testid="techical" className="flex items-center gap-1.5">
					LM
					<Hammer size={19} />
				</Link>
			</Text>
		)
	}
	return (
		<Text asChild className={cn(props.fontStyles, props.hoverStyles)}>
			<Link href="/" prefetch={false} data-testid="techical" className="flex items-center gap-1.5">
				LazyMarkets
				<Hammer size={19} />
			</Link>
		</Text>
	)
}
