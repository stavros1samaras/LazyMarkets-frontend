"use client"

import { Download } from "lucide-react"
import { utils, writeFileXLSX } from "xlsx"

interface ExportButtonProps {
	data: Record<string, string | number>[]
	title: string
}

export default function ExportButton({ data, title }: ExportButtonProps) {
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
		<Download onClick={handleExport} className="size-4 lg:size-5 text-foreground">
			Export
		</Download>
	)
}
