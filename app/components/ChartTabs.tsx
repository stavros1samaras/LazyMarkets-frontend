import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type ReactNode } from "react";

type SimpleTabsProps = {
    children: ReactNode[];
};

export function ChartTabs({ children }: SimpleTabsProps) {
    return (
        <Tabs defaultValue="tab-0">
            <TabsList className="flex flex-wrap">
                {children.map((child, index) => (
                    <TabsTrigger key={index} value={`tab-${index}`}>
                        {child}
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
}

