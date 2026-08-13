import { NextRequest, NextResponse } from "next/server"
import { userAgent } from "next/server"

export function proxy(request: NextRequest) {
	const { device } = userAgent(request)

	const requestHeaders = new Headers(request.headers)

	requestHeaders.set("x-device-type", device?.type ?? "desktop")

	return NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	})
}
