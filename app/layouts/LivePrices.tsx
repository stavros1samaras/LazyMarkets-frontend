import { useFetcher, useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import type { loader } from "./service";

export default function LivePrices() {

    let firstPrices = useLoaderData<typeof loader>();
    const [livePrices, setlivePrices] = useState(firstPrices);

    const currentPrices = useFetcher();

    useEffect(() => {
        const id = setInterval(() => {
            currentPrices.load("/fetchCryptoLivePrices");
        }, 93000);

        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        if (currentPrices.data !== undefined) {
            setlivePrices(currentPrices.data);
        }
    }, [currentPrices.data]);

    return (
        <div>
            <div>{JSON.stringify(livePrices)}</div>
        </div>
    );
}