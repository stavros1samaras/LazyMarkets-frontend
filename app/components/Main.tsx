export default function Main({ children }: any) {

    const m = "ml-4 mt-0 mb-4 mr-4"
    const h = `h-[calc(100svh-6.25rem)] h-[calc(100vh-6.25rem)]`

    return (
        <main className={`flex flex-col w-[100%] ${h} ${m} p-0 bg-[#dbd9d9] rounded-lg overflow-y-auto scrollbar-hide`}>
            {children}
        </main>
    )
}