import type { HTTP_TRANSACTION } from "~/types/httpTransaction";
import type { Ticker } from "~/types/tickers";
import { handleGet } from "./fetch-handler";


let baseUrl: string;
if (import.meta.env.PROD) {
    baseUrl = process.env.REMOTE_API_URL as string
}
else if (import.meta.env.DEV) {
    baseUrl = process.env.LOCAL_API_URL as string
}

export async function getQuote(ticker: Ticker) {
    const url: string = `${baseUrl}/api/quote/${ticker.symbol}`;

    const transaction: HTTP_TRANSACTION = await handleGet(url);
    if (!transaction.success) {
        throw new Error(`Request failed with status: ${transaction.response.status}`);
    }
    const data = await transaction.response.json();
    return data;

}

export async function getInsights(ticker: Ticker) {
    const url: string = `${baseUrl}/api/insights/${ticker.symbol}`;

    const transaction: HTTP_TRANSACTION = await handleGet(url);
    if (!transaction.success) {
        throw new Error(`Request failed with status: ${transaction.response.status}`);
    }
    const data = await transaction.response.json();
    return data;

}

export async function getRecommendations(ticker: Ticker) {
    const url: string = `${baseUrl}/api/recommendations/${ticker.symbol}`;

    const transaction: HTTP_TRANSACTION = await handleGet(url);
    if (!transaction.success) {
        throw new Error(`Request failed with status: ${transaction.response.status}`);
    }
    const data = await transaction.response.json();
    return data;

}