import { MARKET_EVENTS } from "~/constants";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";
import SidebarEvent from "./SidebarEvent";

export default function MobileEventSelector() {
    return (
        <div className="w-full">
            <Select >
                <SelectTrigger className="w-full bg-white m-0 p-0">
                    <SelectValue placeholder="Select an event" />
                </SelectTrigger>
                <SelectContent position={"popper"} className="w-full bg-white ">
                    <SelectGroup className="w-[auto] bg-white ">
                        {MARKET_EVENTS.map((event) => (
                            <SelectItem value={event.code}>
                                <SidebarEvent key={event.code} title={event.title} code={event.code} className={`block bg-white w-full`}></SidebarEvent>
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>



    )
}