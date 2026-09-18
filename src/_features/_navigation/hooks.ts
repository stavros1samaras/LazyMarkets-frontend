import { usePathname } from "next/navigation"
import { PATHNAME_NAV_ROUTES } from "./config"

export default function useNavigationState() {
	const pathname = usePathname()

	function getValueFromPathname(pathname: string): number {
		const match = PATHNAME_NAV_ROUTES.find((route) => pathname.startsWith(route.prefix))
		return match ? match.value : 0
	}

	const selected = getValueFromPathname(pathname)

	return { selected }
}
