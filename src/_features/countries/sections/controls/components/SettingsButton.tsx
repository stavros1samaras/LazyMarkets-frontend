"use client"

import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"
import { cn } from "@/lib/utils"

interface SettingsButtonProps {
	className?: string
}

export default function SettingsButton({ className }: SettingsButtonProps) {
	return (
		<Button size="icon" variant="outline" className={cn(className)} aria-label="Settings">
			<Settings />
		</Button>
	)
}
