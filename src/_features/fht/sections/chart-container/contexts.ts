"use client"

import { createContext, type Dispatch, type SetStateAction } from "react"
import type { FhtPricePoint } from "@/_features/fht/types"

export type FhtChartDataState = {
	state: FhtPricePoint[]
	setState: Dispatch<SetStateAction<FhtPricePoint[]>>
}

export const FhtChartData = createContext<FhtChartDataState>({
	state: [],
	setState: () => {},
})
