import { Link } from "react-router";
import { Spinner } from "@/components/ui/spinner"
import { useState } from "react";

export default function SidebarEvent({ title, code, className = "" }: any) {

    const [loading, setLoading] = useState(false);

    return (
        <Link
            to={`/se/financial-history-timeline/${code}`} className={`flex items-center w-[200px] ${className}`}
            onClick={() => setLoading(true)}>
            {title}
            {loading && <Spinner className="ml-2 h-4 w-4" />}
        </Link>
    );
}