const localeCookie = document.cookie.split("; ").find((cookie) => cookie.startsWith("locale="))
const locale = localeCookie?.split("=")[1]

if (locale === undefined) {
	document.documentElement.lang = "en"
} else if (locale !== "en") {
	document.documentElement.lang = locale
}

