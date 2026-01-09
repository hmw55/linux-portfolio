import CalculatorApp from "./Calculator"

export interface AppEntry {
    id: string;
    name: string;
    icon: string;
    component: React.ComponentType;
}

export const apps: AppEntry[] = [
    {
        id: "calculator",
        name: "Calculator",
        icon: "🧮",
        component: CalculatorApp,
    },
];