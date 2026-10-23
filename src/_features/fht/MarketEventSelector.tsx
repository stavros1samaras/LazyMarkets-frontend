"use client"

import { FHT_EVENTS } from "@/_features/fht/config"
import Text from "@/components/elements/Text"
import { SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem, Select } from "@/components/ui/select"
import { Route } from "next"
import { useRouter } from "next/navigation"
import { useTranslation } from "react-i18next"

export default function MarketEventSelector({ className }: { className?: string }) {
	const router = useRouter()
	const { t } = useTranslation()

	return (
		<Select
			onValueChange={(code: Route) => {
				router.push(code)
			}}
		>
			<SelectTrigger size="sm" className={className}>
				<SelectValue placeholder={t(`Select a market event`)} />
			</SelectTrigger>
			<SelectContent className="bg-background border-ring text-foreground" position="popper" side="bottom">
				<SelectGroup>
					{FHT_EVENTS.map((event, index) => (
						<SelectItem
							value={event.code}
							key={index}
							onMouseEnter={() => router.prefetch(event.code as Route)}
							onTouchStart={() => router.prefetch(event.code as Route)}
							className="focus:bg-select-item"
						>
							<Text as="span">{event.title}</Text>
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
