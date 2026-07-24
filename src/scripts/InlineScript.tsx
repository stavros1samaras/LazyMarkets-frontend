export function InlineScript({ html }: { html: string }) {
	return <script dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning />
}
