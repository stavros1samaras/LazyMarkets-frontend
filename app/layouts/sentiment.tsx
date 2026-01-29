import { Outlet } from "react-router";
import type { Route } from "./+types/sentiment";



export default function Sentiment() {
    return (
        <div>
            <Outlet />
        </div>
    )
}