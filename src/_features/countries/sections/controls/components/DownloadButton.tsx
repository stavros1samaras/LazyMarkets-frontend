"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { cn } from "@/lib/utils"

interface DownloadButtonProps {
	className?: string
}

export default function DownloadButton({ className }: DownloadButtonProps) {
	return (
		<Button size="sm" className={cn(className)}>
			<Download />
			Export Data (.xlsx)
		</Button>
	)
}
