import { getUserAgent } from "@/lib/server/user-agent"

export default async function DesktopOnly({ children }: { children: React.ReactNode }) {
	const ua = await getUserAgent()

	if (ua !== "desktop") return null

	return <>{children}</>
}
