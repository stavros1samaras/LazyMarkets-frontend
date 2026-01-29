import * as React from 'react';
import { NavigationMenu } from '@base-ui-components/react/navigation-menu';

export default function SubNavigationMenu({ children }: { children: React.ReactNode }) {

    const triggerClassName =
        'box-border flex items-center justify-center gap-1.5 h-10 ' +
        'px-2 xs:px-3.5 m-0 rounded-md bg-gray-50 text-gray-900 font-medium ' +
        'text-[0.925rem] xs:text-base leading-6 select-none no-underline ' +
        'hover:bg-gray-100 active:bg-gray-100 data-[popup-open]:bg-gray-100 ' +
        'focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 focus-visible:relative';

    return (
        <NavigationMenu.Root className="min-w-max rounded-lg bg-gray-50 p-1 text-gray-900">
            <NavigationMenu.List className="relative flex">
                {React.Children.map(children, (child, index) => (
                    <NavigationMenu.Item key={index}>
                        <div className={triggerClassName}>{child}</div>
                    </NavigationMenu.Item>
                ))}
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
}




