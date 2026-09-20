import { NavItemConfig, PathnameNavRoute } from "./desktop/types"
import { ExternalLink, Hammer } from "lucide-react"

export const NAV_ITEMS: NavItemConfig[] = [
	{
		label: "LazyMarkets",
		href: "/",
		dataTestId: "lazymarkets-home",
		prefetch: false,
		alwaysVisible: true,
	},
	{
		label: "Technical",
		href: "/technical",
		icon: Hammer,
		dataTestId: "technical",
		prefetch: false,
	},
	{
		label: "Fundamental",
		href: "/fundamental",
		icon: Hammer,
		dataTestId: "fundamental",
		prefetch: false,
	},
	{
		label: "Sentiment",
		href: "/sentiment",
		icon: Hammer,
		dataTestId: "sentiment",
		prefetch: false,
	},
	{
		label: "Countries",
		href: "/countries/GR",
		dataTestId: "countries",
	},
	{
		label: "FHT",
		href: "http://lazy-markets-rr.vercel.app/",
		icon: ExternalLink,
		dataTestId: "fht-external",
		external: true,
	},
	{
		label: "Contact",
		href: "/contact",
		dataTestId: "contact",
		prefetch: false,
	},
]

export const MOBILE_NAV_ITEMS: NavItemConfig[] = NAV_ITEMS.filter((item) => !item.alwaysVisible)

export const PATHNAME_NAV_ROUTES: PathnameNavRoute[] = [
	{ prefix: "/technical", value: 1 },
	{ prefix: "/fundamental", value: 2 },
	{ prefix: "/sentiment", value: 3 },
	{ prefix: "/countries", value: 4 },
	{ prefix: "/contact", value: 6 },
]
