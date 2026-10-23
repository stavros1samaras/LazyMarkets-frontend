import { FHT_EVENTS } from "@/_features/fht/config"

/**
 * Returns the event name that matches the given event code.
 * @param code - The event code, e.g. "TrmpTrrffShck".
 * @returns The event name, or `undefined` when no event matches.
 */
export function getEventName(code: string): string | undefined {
	return FHT_EVENTS.find((event) => event.code === code)?.label
}

/**
 * Returns the event description that matches the given event code.
 * @param code - The event code, e.g. "TrmpTrrffShck".
 * @returns The event description, or `undefined` when no event matches.
 */
export function getEventDescription(code: string): string | undefined {
	return FHT_EVENTS.find((event) => event.code === code)?.description
}
