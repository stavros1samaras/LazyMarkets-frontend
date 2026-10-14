"use client"

import { createContext } from "react"
import type { ChartData as ChartDataType } from "../../types"

export const ChartData = createContext<ChartDataType[] | null>(null)
