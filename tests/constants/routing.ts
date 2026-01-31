export type Route = {
    testId: string;
    url: string;
};

export type RouteConfig = {
    desktop: Route[];
    mobile: Route[];
};

export const routing: RouteConfig = {
    desktop: [
        {
            testId: "techical",
            url: "/se/financial-history-timeline/TrmpTrrffShck",
        },
        {
            testId: "fundamental",
            url: "/se/financial-history-timeline/TrmpTrrffShck",
        },
        {
            testId: "sentiment",
            url: "/se/financial-history-timeline/TrmpTrrffShck",
        },
        {
            testId: "FHT",
            url: "/se/financial-history-timeline/TrmpTrrffShck",
        },
        {
            testId: "contact",
            url: "/se/financial-history-timeline/TrmpTrrffShck",
        },
    ],
    mobile: [
        {
            testId: "techical",
            url: "/se/financial-history-timeline/TrmpTrrffShck",
        },
        {
            testId: "fundamental",
            url: "/se/financial-history-timeline/TrmpTrrffShck",
        },
        {
            testId: "FHT",
            url: "/se/financial-history-timeline/TrmpTrrffShck",
        },
    ]
};
