import * as React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type SideScrollAreaProps = {
    children: React.ReactNode;
    className?: string;
};

export default function SideScrollArea({ children, className }: SideScrollAreaProps) {
    const m = "ml-4 mt-0 mb-0 mr-0"
    const h = "h-[calc(100vh-6.25rem)]"
    return (
        <ScrollArea className={`w-fit hidden md:block ${m} ${h} rounded-md border border-gray-200 bg-gray-100`}>
            <div className={`flex flex-col p-4 text-sm text-gray-900 gap-2 `}>
                {children}
            </div>
            <ScrollBar orientation="vertical" />
        </ScrollArea>
    );
}
