"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import React from "react"

export function Chart({ children }: { children: React.ReactNode }) {
	return <Card className="w-auto gap-0">{children}</Card>
}

export function ChartHeader({ children }: { children: React.ReactNode }) {
	return <CardHeader className="flex items-center justify-between gap-0 p-3 pb-0">{children}</CardHeader>
}

export function ChartContent({ children }: { children: React.ReactNode }) {
	return <CardContent className="p-3 animate-in fade-in duration-500">{children}</CardContent>
}
