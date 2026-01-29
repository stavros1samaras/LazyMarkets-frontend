
import { currentSymbolPrice } from '~/utilities/.server/prices'

export async function loader() {
    // console.log(await currentSymbolPrice());
    return (await currentSymbolPrice());

}