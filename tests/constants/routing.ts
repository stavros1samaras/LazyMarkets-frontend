export type Route = {
    testId: string;
    url: string;
};

export type RouteConfig = {
    desktop: {
        dev: Route[];
        prod: Route[];
    };
    mobile: {
        dev: Route[];
        prod: Route[];
    };
};

export const routing: RouteConfig = {
    desktop: {
        dev: [
            {
                testId: "techical",
                url: "/se/technical/overview/BTC-USD",
            },
            {
                testId: "sentiment",
                url: "/se/sentiment",
            },
            {
                testId: "FHT",
                url: "/se/financial-history-timeline/TrmpTrrffShck",
            },
            {
                testId: "contact",
                url: "/se/contact",
            },
        ],

        prod: [
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
    },

    mobile: {
        dev: [
            {
                testId: "menu-techical",
                url: "/se/technical",
            },
            {
                testId: "menu-contact",
                url: "/se/contact",
            },
        ],

        prod: [
            {
                testId: "menu-techical",
                url: "/technical",
            },
        ],
    },
};
