"use client"

import { createContext } from "react"
import type { FhtPricePoint } from "@/_features/fht/types"

export const FhtChartData = createContext<FhtPricePoint[]>([])
