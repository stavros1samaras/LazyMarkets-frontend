import { useEffect } from "react"

export default function useDocumentLanguage(language: string) {
	useEffect(() => {
		document.documentElement.lang = language
	}, [language])
}
