import * as React from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, } from "@/components/ui/navigation-menu";

interface MainNavigationMenuProps {
    children: React.ReactNode;
}

export default function MainNavigationMenu({ children }: MainNavigationMenuProps) {

    const m = "mx-4 my-4";

    return (
        <NavigationMenu className={`h-13 ${m} w-auto bg-white rounded-lg`}>
            <NavigationMenuList className="flex items-center gap-5 rounded-lg bg-white p-1 w-auto">
                {React.Children.map(children, (child: any, index) => {
                    if (!child) return null;
                    const className = child.props?.className || "";
                    return (
                        <NavigationMenuItem key={index} className={className}>
                            {child}
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
