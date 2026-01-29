import type { HTTP_TRANSACTION } from "~/types/httpTransaction";

export async function handleGet(url: string): Promise<HTTP_TRANSACTION> {
    console.log(process.env.API_KEY as string)
    const request: Request = new Request(
        url,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.API_KEY as string
            }
        });

    try {
        const response: Response = await fetch(request);
        const fetchTransaction: HTTP_TRANSACTION = {
            request: request,
            response: response,
            success: response.ok
        };

        // console.log(response)


        return fetchTransaction;

    } catch (error) {
        console.error("GET Error:", error);

        const failedResponse: Response = new Response(null, { status: 0 });

        const fetchTransaction: HTTP_TRANSACTION = {
            request: request,
            response: failedResponse,
            success: false
        };

        return fetchTransaction;
    }
}
