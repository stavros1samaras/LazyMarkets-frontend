export default function Main({ children }: any) {

    const m = "ml-4 mt-0 mb-4 mr-4"
    const h = `h-[calc(100svh-6.25rem)] h-[calc(100vh-6.25rem)]`

    const crossBrowserStyles = `scrollbar-hide touch-scroll`
    const compatHeight = `content-height`

    return (
        <main className={`flex flex-col w-[100%] ${compatHeight} ${m} p-0 bg-[#dbd9d9] rounded-lg overflow-y-auto ${crossBrowserStyles}`}>
            {children}
        </main>
    )
}