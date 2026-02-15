import { MARKET_EVENTS } from "~/constants/fht"

export function getTitleFromEvent(code: string): string {
	return MARKET_EVENTS.find((e) => e.code === code)?.title as string
}

export function getYearFromEvent(code: string): string {
	return MARKET_EVENTS.find((e) => e.code === code)?.year as string
}

export function getDateFromEvent(code: string): string {
	return MARKET_EVENTS.find((e) => e.code === code)?.date as string
}

export function getDescriptionFromEvent(code: string): string {
	return MARKET_EVENTS.find((e) => e.code === code)?.description as string
}
