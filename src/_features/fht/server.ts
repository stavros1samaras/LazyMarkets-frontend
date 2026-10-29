import type { FhtEventLabel } from "@/_features/fht/types"

export function getEventLabelByCode(eventLabels: FhtEventLabel[], code: string): string | undefined {
	return eventLabels.find((event) => event.code === code)?.label
}
