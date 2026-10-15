export function getEnvURL() {
	if (process.env.NODE_ENV == "production") {
		return process.env.REMOTE_API_URL
	} else if (process.env.NODE_ENV == "development") {
		return process.env.LOCAL_API_URL
	}
}
