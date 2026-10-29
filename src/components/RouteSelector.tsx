"use client"

import { FhtEventLabel } from "@/_features/fht/types"
import Text from "@/components/elements/Text"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select"
import { Route } from "next"
import { useRouter } from "next/navigation"
import { useTranslation } from "react-i18next"

interface RouteSelectorProps {
	items:
		| readonly {
				code: string
				label: string
		  }[]
		| FhtEventLabel[]
	placeholder: string
	groupLabel?: string
	className?: string
}

export default function RouteSelector({ items, placeholder, groupLabel, className }: RouteSelectorProps) {
	const router = useRouter()
	const { t } = useTranslation()

	return (
		<Select
			onValueChange={(code: Route) => {
				router.push(code)
			}}
		>
			<SelectTrigger size="sm" className={className}>
				<SelectValue placeholder={t(placeholder)} />
			</SelectTrigger>
			<SelectContent className="bg-background border-ring text-foreground" position="popper" side="bottom">
				<SelectGroup>
					{groupLabel && (
						<SelectLabel>
							<Text as="span">{groupLabel}</Text>
						</SelectLabel>
					)}
					{items.map((item, index) => (
						<SelectItem
							value={item.code}
							key={index}
							onMouseEnter={() => router.prefetch(item.code as Route)}
							onTouchStart={() => router.prefetch(item.code as Route)}
							className="focus:bg-select-item"
						>
							<Text as="span">{item.label}</Text>
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
