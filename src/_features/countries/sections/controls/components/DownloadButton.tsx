"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { useContext } from "react"
import { CountryDataContext } from "@/_features/countries/sections/CountryData.provider"
import { CHART_DATA, CHART_CATEGORIES } from "@/_features/countries/configs/config"
import { CHARTS_CONFIG_METADATA } from "@/_features/countries/configs/charts_metadata.config"

interface DownloadButtonProps {
	className?: string
}

export default function DownloadButton({ className }: DownloadButtonProps) {
	const countryData = useContext(CountryDataContext)

	async function asyncImportXlsx() {
		void import("xlsx")
	}

	const handleExport = async () => {
		if (!countryData) return

		const rows: (string | number)[][] = []
		const headerRows = new Set<number>()

		CHART_CATEGORIES.forEach((category) => {
			const categoryRows: (string | number)[][] = []
			const categoryHeaderRows = new Set<number>()

			CHART_DATA.forEach((key, index) => {
				const data = countryData[key]
				if (!Array.isArray(data) || data.length === 0) return

				const meta = CHARTS_CONFIG_METADATA[index]
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

		const { utils, writeFileXLSX } = await import("xlsx")

		const worksheet = utils.aoa_to_sheet(rows)
		const workbook = utils.book_new()
		utils.book_append_sheet(workbook, worksheet, "Data")

		writeFileXLSX(workbook, "country-data.xlsx")
	}

	return (
		<Button size="sm" variant={"default"} className={cn(className)} onMouseEnter={asyncImportXlsx} onClick={handleExport}>
			<Download />
			Export Data (.xlsx)
		</Button>
	)
}
