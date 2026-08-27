import { headers } from "next/headers"
import DesktopSidebar from "./sidebar/DesktopSidebar"
import MobileCountyBar from "./MobileCountryBar"

export default async function Navigation() {
	const headersList = await headers()
	const ua = headersList.get("x-device-type")

	return ua == "desktop" ? <DesktopSidebar /> : <MobileCountyBar />
}
