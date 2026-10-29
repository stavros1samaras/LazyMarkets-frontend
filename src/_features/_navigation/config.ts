import { NavItemConfig, PathnameNavRoute } from "./desktop/types"
import { ExternalLink, Hammer } from "lucide-react"

export const NAV_ITEMS: NavItemConfig[] = [
	{
		label: "LazyMarkets",
		href: "/",
		dataTestId: "lazymarkets-home",
		prefetch: true,
		alwaysVisible: true,
	},
	{
		label: "Technical",
		href: "/technical",
		icon: Hammer,
		dataTestId: "technical",
		prefetch: true,
	},
	{
		label: "Fundamental",
		href: "/fundamental",
		icon: Hammer,
		dataTestId: "fundamental",
		prefetch: true,
	},
	{
		label: "Sentiment",
		href: "/sentiment",
		icon: Hammer,
		dataTestId: "sentiment",
		prefetch: true,
	},
	{
		label: "Countries",
		href: "/countries/GR",
		dataTestId: "countries",
		prefetch: true,
	},
	{
		label: "FHT",
		href: process.env.NODE_ENV === "production" ? "http://lazy-markets-rr.vercel.app/" : "/fht/IraqWar",
		icon: ExternalLink,
		dataTestId: "fht-external",
		external: process.env.NODE_ENV === "production",
		prefetch: false,
	},
	{
		label: "Contact",
		href: "/contact",
		dataTestId: "contact",
		prefetch: true,
	},
]

export const MOBILE_NAV_ITEMS: NavItemConfig[] = NAV_ITEMS.filter((item) => !item.alwaysVisible)

export const PATHNAME_NAV_ROUTES: PathnameNavRoute[] = [
	{ prefix: "/technical", value: 1 },
	{ prefix: "/fundamental", value: 2 },
	{ prefix: "/sentiment", value: 3 },
	{ prefix: "/countries", value: 4 },
	{ prefix: "/fht", value: 5 },
	{ prefix: "/contact", value: 6 },
]
