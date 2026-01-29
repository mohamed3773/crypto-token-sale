import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                shimmer: "shimmer 2.5s infinite",
                scroll: "scroll 30s linear infinite",
            },
            keyframes: {
                shimmer: {
                    "100%": { transform: "translateX(100%)" },
                },
                scroll: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
            },
            colors: {
                gold: "#D4AF37",
                iceBlue: "#66D9FF",
                deepBlack: "#0B0F14",
                softGray: "#A8B3C1",
                accentRed: "#B21E2B",
            },
        },
    },
    plugins: [],
};
export default config;
