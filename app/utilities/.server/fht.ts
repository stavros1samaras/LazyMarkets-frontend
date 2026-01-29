import { BASE_URL_FHT, CurrenciesUS, Energy, EUindices, Metals, USbonds, USindices } from "~/constants";
import { handleGet } from "./fetch-handler";
import type { HTTP_TRANSACTION } from "~/types/httpTransaction";
import { getBaseUrl } from "./environment";

const baseUrl: string = getBaseUrl() as string

export async function indicesUS(year: string) {

    const results: Record<string, any> = {};

    for (const index of USindices) {
        const url = `${baseUrl}/api/db/prices/get-ticker-one-year/${index}/${year}`;

        const transaction: HTTP_TRANSACTION = await handleGet(url);

        if (!transaction.success) {
            throw new Error(`Request failed for ${index} with status: ${transaction.response.status}`);
        }

        const data = await transaction.response.json();

        results[index] = data;
    }

    return results;
}

export async function indicesEU(year: string) {
    const results: Record<string, any> = {};

    for (const index of EUindices) {
        const url = `${baseUrl}/api/db/prices/get-ticker-one-year/${index}/${year}`;

        const transaction: HTTP_TRANSACTION = await handleGet(url);

        if (!transaction.success) {
            throw new Error(`Request failed for ${index} with status: ${transaction.response.status}`);
        }

        const data = await transaction.response.json();

        results[index] = data;
    }

    return results;
}

export async function bondsUS(year: string) {
    const results: Record<string, any> = {};

    for (const index of USbonds) {
        const url = `${baseUrl}/api/db/prices/get-ticker-one-year/${index}/${year}`;

        const transaction: HTTP_TRANSACTION = await handleGet(url);

        if (!transaction.success) {
            throw new Error(`Request failed for ${index} with status: ${transaction.response.status}`);
        }

        const data = await transaction.response.json();

        results[index] = data;
    }

    return results;
}

export async function energy(year: string) {
    const results: Record<string, any> = {};

    for (const index of Energy) {
        const url = `${baseUrl}/api/db/prices/get-ticker-one-year/${index}/${year}`;

        const transaction: HTTP_TRANSACTION = await handleGet(url);

        if (!transaction.success) {
            throw new Error(`Request failed for ${index} with status: ${transaction.response.status}`);
        }

        const data = await transaction.response.json();

        results[index] = data;
    }

    return results;
}


export async function metals(year: string) {
    const results: Record<string, any> = {};

    for (const index of Metals) {
        const url = `${baseUrl}/api/db/prices/get-ticker-one-year/${index}/${year}`;

        const transaction: HTTP_TRANSACTION = await handleGet(url);

        if (!transaction.success) {
            throw new Error(`Request failed for ${index} with status: ${transaction.response.status}`);
        }

        const data = await transaction.response.json();

        results[index] = data;
    }

    return results;
}

export async function currenciesUS(year: string) {
    const results: Record<string, any> = {};

    for (const index of CurrenciesUS) {
        const url = `${baseUrl}/api/db/prices/get-ticker-one-year/${index}/${year}`;

        const transaction: HTTP_TRANSACTION = await handleGet(url);

        if (!transaction.success) {
            throw new Error(`Request failed for ${index} with status: ${transaction.response.status}`);
        }

        const data = await transaction.response.json();

        results[index] = data;
    }

    return results;
}
