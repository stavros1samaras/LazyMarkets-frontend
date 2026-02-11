import { Link, useLocation } from "react-router"

export default function SidebarTickers({ name, symbol }: any) {
	const location = useLocation()

	const currentPath = location.pathname
	const basePath = currentPath.substring(0, currentPath.lastIndexOf("/"))

	const to = `${basePath}/${symbol}`

	return (
		<Link to={to} className="w-[200px]">
			{name}
		</Link>
	)
}
