import "server-only"

import { headers } from "next/headers"

export async function getUserAgent() {
	const headersList = await headers()
	const deviceType = headersList.get("x-device-type") ?? "desktop"
	return deviceType
}
