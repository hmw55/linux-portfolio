export interface WindowRule {
    appId: string;
    defaultX: number;
    defaultY: number;
    defaultWidth: number;
    defaultHeight: number;
    floating?: boolean; // if true, can drag anywhere
}

export const windowRules: WindowRule[] = [
    {
        appId: "calculator",
        defaultX: 400,
        defaultY: 200,
        defaultWidth: 320,
        defaultHeight: 400,
        floating: true,
    },
];