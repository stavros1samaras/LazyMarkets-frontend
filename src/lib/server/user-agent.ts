import "server-only"

import { headers } from "next/headers"
import { cache } from "react"

export const getUserAgent = cache(async () => {
	const headersList = await headers()
	const deviceType = headersList.get("x-device-type") ?? "desktop"
	return deviceType
})
