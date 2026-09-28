"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { utils, writeFileXLSX } from "xlsx"
import { ChartData } from "@/components/charts/ChartData.provider"
import { useContext } from "react"

interface ExportButtonProps {
	title: string
}

export default function ExportButton({ title }: ExportButtonProps) {
	const data = useContext(ChartData) as Record<string, string | number>[]

	const handleExport = () => {
		const worksheet = utils.json_to_sheet(data, {
			origin: "A2",
		})

		utils.sheet_add_aoa(worksheet, [[title]], {
			origin: "A1",
		})

		const workbook = utils.book_new()

		utils.book_append_sheet(workbook, worksheet, "Data")

		writeFileXLSX(workbook, `${title}.xlsx`)
	}

	return (
		<Button
			type="button"
			variant="ghost"
			size="icon-xs"
			onClick={handleExport}
			aria-label={`Export ${title} data`}
			aria-description="Downloads the chart data as an Excel (.xlsx) file."
			className="text-foreground"
		>
			<Download className="size-4 lg:size-5" aria-hidden="true" />
		</Button>
	)
}
