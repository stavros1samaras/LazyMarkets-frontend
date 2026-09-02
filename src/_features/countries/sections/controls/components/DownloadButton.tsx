"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { useContext } from "react"
import { CountryDataContext } from "@/providers/CountryDataProvider"
import { utils, writeFileXLSX } from "xlsx"
import { CHART_DATA, CHARTSCONFIG, CHART_CATEGORIES } from "@/_features/countries/config"

interface DownloadButtonProps {
	className?: string
}

export default function DownloadButton({ className }: DownloadButtonProps) {
	const countryData = useContext(CountryDataContext)

	const handleExport = () => {
		if (!countryData) return

		const rows: (string | number)[][] = []
		const headerRows = new Set<number>()

		CHART_CATEGORIES.forEach((category) => {
			const categoryRows: (string | number)[][] = []
			const categoryHeaderRows = new Set<number>()

			CHART_DATA.forEach((key, index) => {
				const data = countryData[key]
				if (!Array.isArray(data) || data.length === 0) return

				const meta = CHARTSCONFIG[index]
				if (meta.category !== category.toLowerCase()) return

				categoryRows.push([meta.chartTitle])
				categoryHeaderRows.add(categoryRows.length - 1)
				categoryRows.push(["Year", "Value"])
				categoryHeaderRows.add(categoryRows.length - 1)
				data.forEach((item) => {
					categoryRows.push([item.year, item.value])
				})
				categoryRows.push([])
			})

			if (categoryRows.length === 0) return

			const categoryStart = rows.length
			rows.push([category])
			headerRows.add(categoryStart)
			rows.push([])
			rows.push(...categoryRows)
			rows.push([])

			categoryHeaderRows.forEach((rowIndex) => {
				headerRows.add(categoryStart + 2 + rowIndex)
			})
		})

		const worksheet = utils.aoa_to_sheet(rows)
		const workbook = utils.book_new()
		utils.book_append_sheet(workbook, worksheet, "Data")

		writeFileXLSX(workbook, "country-data.xlsx")
	}

	return (
		<Button size="sm" className={cn(className)} onClick={handleExport}>
			<Download />
			Export Data (.xlsx)
		</Button>
	)
}
