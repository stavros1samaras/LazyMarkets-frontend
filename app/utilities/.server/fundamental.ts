import { BASE_URL, BASE_URL_FUNDAMENTAL } from "~/constants";
import type { HTTP_TRANSACTION } from "~/types/httpTransaction";
import type { Ticker } from "~/types/tickers";
import { handleGet } from "./fetch-handler";

export async function getQuote(ticker: Ticker) {
    const url: string = `${BASE_URL_FUNDAMENTAL}/api/quote/${ticker.symbol}`;

    const transaction: HTTP_TRANSACTION = await handleGet(url);
    if (!transaction.success) {
        throw new Error(`Request failed with status: ${transaction.response.status}`);
    }
    const data = await transaction.response.json();
    return data;

}

export async function getInsights(ticker: Ticker) {
    const url: string = `${BASE_URL_FUNDAMENTAL}/api/insights/${ticker.symbol}`;

    const transaction: HTTP_TRANSACTION = await handleGet(url);
    if (!transaction.success) {
        throw new Error(`Request failed with status: ${transaction.response.status}`);
    }
    const data = await transaction.response.json();
    return data;

}

export async function getRecommendations(ticker: Ticker) {
    const url: string = `${BASE_URL_FUNDAMENTAL}/api/recommendations/${ticker.symbol}`;

    const transaction: HTTP_TRANSACTION = await handleGet(url);
    if (!transaction.success) {
        throw new Error(`Request failed with status: ${transaction.response.status}`);
    }
    const data = await transaction.response.json();
    return data;

}