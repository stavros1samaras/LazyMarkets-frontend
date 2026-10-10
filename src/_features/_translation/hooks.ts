import { useEffect } from "react"

export default function useDocumentLanguage(language: string) {
	useEffect(() => {
		if (document.documentElement.lang !== language) {
			document.documentElement.lang = language
			console.log("changerd from hook")
		}
	}, [language])
}
