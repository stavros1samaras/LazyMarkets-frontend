export const normalizeFromStart = (data: any[]) => {
	if (!data.length) return []

	const firstRow = data[0]

	return data.map((row) => {
		const newRow: any = { date: row.date }

		Object.keys(row).forEach((key) => {
			if (key === "date") return

			const firstValue = firstRow[key]
			const currentValue = row[key]

			if (firstValue !== 0 && firstValue !== undefined) {
				newRow[key] = currentValue / firstValue
			}
		})

		return newRow
	})
}
