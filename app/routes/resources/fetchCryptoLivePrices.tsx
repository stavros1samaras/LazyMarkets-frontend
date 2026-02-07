
import { currentSymbolPrice } from '~/utilities/.server/prices'

export async function loader() {
    return (await currentSymbolPrice());

}