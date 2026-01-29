export function getBaseUrl() {
    if (import.meta.env.PROD) {
        return (process.env.REMOTE_API_URL as string)
    }
    else if (import.meta.env.DEV) {
        return (process.env.LOCAL_API_URL as string)
    }
}