export function sortByDate(array: any[], keys: string[], earlySigns: string, eventDate: string, phaseConclusion: string) {
	const copy = array.slice()

	const dates = [earlySigns, eventDate, phaseConclusion]

	let added = false

	dates.forEach((date) => {
		if (!date) return

		const exists = copy.some((item) => item.date === date)

		if (!exists) {
			const newItem: any = {
				date,
			}

			keys.forEach((key) => {
				newItem[key] = null
			})

			copy.push(newItem)
			added = true
		}
	})

	if (!added) {
		return copy
	}

	return copy.sort((a, b) => {
		const [dA, mA, yA] = a.date.split("-")
		const [dB, mB, yB] = b.date.split("-")

		const dateA = new Date(2000 + +yA, +mA - 1, +dA)
		const dateB = new Date(2000 + +yB, +mB - 1, +dB)

		return dateA.getTime() - dateB.getTime()
	})
}
