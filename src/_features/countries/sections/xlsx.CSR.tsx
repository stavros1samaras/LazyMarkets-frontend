"use client"

import dynamic from "next/dynamic"

export const DownloadButton = dynamic(() => import("./controls/components/DownloadButton"), {
	ssr: false,
})

export const ExportButton = dynamic(() => import("./chart-container/components/ExportButton"), {
	ssr: false,
})
