import type { FhtPricePoint } from "@/_features/fht/types"

/**
 * Checks whether a ticker's price series contains a point for the given date.
 * The FHT reference line can only be drawn when the event date exists in the series.
 */
export function containsEventDate(data: FhtPricePoint[], eventDate: string): boolean {
	return data.some((point) => point.date === eventDate)
}

/**
 * Reorders an FHT date from "DD-MM-YY" (days, months, years) to "YYYY-MM-DD"
 * and turns it into a Date object.
 */
export function formatEventDate(eventDate: string): Date {
	const [day, month, year] = eventDate.split("-")
	const fullYear = year.length === 2 ? `20${year}` : year

	return new Date(`${fullYear}-${month}-${day}`)
}

/**
 * Decodes a Date object back into the project's date format: "DD-MM-YY"
 * (days, months, years). UTC getters keep the calendar date intact for dates
 * created by `formatEventDate` (ISO strings parse as UTC midnight).
 */
export function decodeEventDate(date: Date): string {
	const day = String(date.getUTCDate()).padStart(2, "0")
	const month = String(date.getUTCMonth() + 1).padStart(2, "0")
	const year = String(date.getUTCFullYear()).slice(-2)

	return `${day}-${month}-${year}`
}

/**
 * Main resolver for the event reference line.
 * When the series contains the event date, that date is used as-is. Otherwise it
 * walks back one day at a time (one day, then two days, then three...) until it
 * finds a date that exists in the series.
 */
export function resolveEventDate(data: FhtPricePoint[], eventDate: string): string {
	if (containsEventDate(data, eventDate)) {
		return eventDate
	}

	const eventDateObject = formatEventDate(eventDate)

	let daysBack = 1

	while (daysBack <= data.length) {
		const previousDateObject = new Date(eventDateObject)
		previousDateObject.setUTCDate(previousDateObject.getUTCDate() - daysBack)

		const previousEventDate = decodeEventDate(previousDateObject)

		if (containsEventDate(data, previousEventDate)) {
			return previousEventDate
		}

		daysBack++
	}

	return eventDate
}
