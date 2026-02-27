// // src/app/components/AiSentiment.jsx
// "use client"

// import { useState } from "react"
// import { pipeline } from "@huggingface/transformers"

// export default function AiSentiment() {
// 	const [text, setText] = useState("I love walking my dog.")
// 	const [result, setResult] = useState("")
// 	const [loading, setLoading] = useState(false)

// 	const classify = async () => {
// 		setLoading(true)
// 		// Load and run the sentiment analysis pipeline
// 		const pipe = await pipeline("text-classification", "Xenova/distilbert-base-uncased-finetuned-sst-2-english")
// 		const output = await pipe(text)
// 		setResult(JSON.stringify(output[0], null, 2))
// 		setLoading(false)
// 	}

// 	return (
// 		<div style={{ maxWidth: 500, margin: "20px auto", padding: 20 }}>
// 			<h2>Minimal Sentiment Analysis</h2>

// 			<textarea value={text} onChange={(e) => setText(e.target.value)} rows={3} style={{ width: "100%", marginBottom: 10 }} />

// 			<button onClick={classify} disabled={loading} style={{ marginBottom: 10 }}>
// 				{loading ? "Analyzing..." : "Analyze Sentiment"}
// 			</button>

// 			<pre style={{ background: "#f0f0f0", padding: 10 }}>{result || "Result will appear here"}</pre>
// 		</div>
// 	)
// }

// // src/app/components/AiSentiment.jsx
// "use client"

// import { useState } from "react"
// import { pipeline } from "@huggingface/transformers"

// export default function AiSentiment() {
// 	const [text, setText] = useState("I love walking my dog.")
// 	const [result, setResult] = useState("")
// 	const [loading, setLoading] = useState(false)

// 	const classify = async () => {
// 		setLoading(true)
// 		// Use a much smaller model for faster browser inference
// 		const pipe = await pipeline("text-classification", "kousik-2310/intent-classifier-minilm")
// 		const output = await pipe(text)
// 		setResult(JSON.stringify(output[0], null, 2))
// 		setLoading(false)
// 	}

// 	return (
// 		<div style={{ maxWidth: 500, margin: "20px auto", padding: 20 }}>
// 			<h2>Minimal Sentiment Analysis</h2>

// 			<textarea value={text} onChange={(e) => setText(e.target.value)} rows={3} style={{ width: "100%", marginBottom: 10 }} />

// 			<button onClick={classify} disabled={loading} style={{ marginBottom: 10 }}>
// 				{loading ? "Analyzing..." : "Analyze Sentiment"}
// 			</button>

// 			<pre style={{ background: "#f0f0f0", padding: 10 }}>{result || "Result will appear here"}</pre>
// 		</div>
// 	)
// }

// src/app/components/AiTextGen.jsx
// "use client"

// import { useState } from "react"
// import { pipeline } from "@huggingface/transformers"

// export default function AiSummarizer() {
// 	const [text, setText] =
// 		useState(`New York (CNN)When Liana Barrientos was 23 years old, she got married in Westchester County, New York.
// A year later, she got married again in Westchester County, but to a different man and without divorcing her first husband.
// Only 18 days after that marriage, she got hitched yet again. Then, Barrientos declared "I do" five more times, sometimes only within two weeks of each other.
// In 2010, she married once more, this time in the Bronx. In an application for a marriage license, she stated it was her "first and only" marriage.
// Barrientos, now 39, is facing two criminal counts of "offering a false instrument for filing in the first degree," referring to her false statements on the
// 2010 marriage license application, according to court documents.`)
// 	const [summary, setSummary] = useState("")
// 	const [loading, setLoading] = useState(false)

// 	const summarize = async () => {
// 		setLoading(true)
// 		try {
// 			// Browser-friendly summarization model
// 			const summarizer = await pipeline(
// 				"summarization",
// 				"Xenova/distilbart-cnn-6-6" // μικρότερο μοντέλο για browser
// 			)
// 			const output: any = await summarizer(text, {
// 				max_length: 130,
// 				min_length: 30,
// 				do_sample: false,
// 			} as any)
// 			setSummary(output[0].summary_text)
// 		} catch (err) {
// 			console.error(err)
// 			setSummary("Error generating summary")
// 		} finally {
// 			setLoading(false)
// 		}
// 	}

// 	return (
// 		<div style={{ maxWidth: 600, margin: "20px auto", padding: 20 }}>
// 			<h2>Summarization Example</h2>

// 			<textarea value={text} onChange={(e) => setText(e.target.value)} rows={10} style={{ width: "100%", marginBottom: 10 }} />

// 			<button onClick={summarize} disabled={loading} style={{ marginBottom: 10 }}>
// 				{loading ? "Summarizing..." : "Summarize Text"}
// 			</button>

// 			<pre style={{ background: "#f0f0f0", padding: 10, whiteSpace: "pre-wrap" }}>{summary || "Summary will appear here"}</pre>
// 		</div>
// 	)
// }

// "use client"

// import { useState } from "react"

// export default function Ai() {
// 	const [context, setContext] = useState(`stavros is 10 years old and he is a big boy`)
// 	const [question, setQuestion] = useState("How old is Stavros?")
// 	const [answer, setAnswer] = useState("")
// 	const [loading, setLoading] = useState(false)

// 	const answerQuestion = async () => {
// 		setLoading(true)
// 		try {
// 			const { pipeline } = await import("@xenova/transformers")
// 			const qa = (await pipeline("question-answering", "Xenova/distilbert-base-cased-distilled-squad")) as any

// 			const output: any = await qa({ question, context }) // ✅ σωστό format
// 			setAnswer(output.answer)
// 		} catch (err) {
// 			console.error(err)
// 			setAnswer("Error generating answer")
// 		} finally {
// 			setLoading(false)
// 		}
// 	}

// 	return (
// 		<div style={{ maxWidth: 600, margin: "20px auto", padding: 20 }}>
// 			<h2>Stable Q&A Example</h2>

// 			<textarea
// 				value={context}
// 				onChange={(e) => setContext(e.target.value)}
// 				rows={10}
// 				style={{ width: "100%", marginBottom: 10 }}
// 			/>

// 			<input
// 				type="text"
// 				value={question}
// 				onChange={(e) => setQuestion(e.target.value)}
// 				style={{ width: "100%", marginBottom: 10, padding: 5 }}
// 			/>

// 			<button onClick={answerQuestion} disabled={loading} style={{ marginBottom: 10 }}>
// 				{loading ? "Answering..." : "Get Answer"}
// 			</button>

// 			<pre style={{ background: "#f0f0f0", padding: 10, whiteSpace: "pre-wrap" }}>{answer || "Answer will appear here"}</pre>
// 		</div>
// 	)
// }

//////////////////////////////////////////////////////////

// import { GoogleGenAI } from "@google/genai"

// // The client gets the API key from the environment variable `GEMINI_API_KEY`.
// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API })

// export async function Ai() {
// 	const response = await ai.models.generateContent({
// 		model: "gemini-2.5-flash-lite",
// 		contents: "What is AI answer in one line?",
// 	})
// 	console.log(response.text)
// }
