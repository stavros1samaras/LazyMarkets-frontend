const STORAGE_KEY = "theme"
const DEFAULT_THEME = "light"

export function getThemeScript() {
	return `
    var theme = localStorage.getItem("${STORAGE_KEY}") ?? "${DEFAULT_THEME}";
    document.documentElement.classList.toggle("dark", theme === "dark");
  `
}
