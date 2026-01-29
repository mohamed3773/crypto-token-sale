import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("http://localhost:3000"),
    title: "ComfortBreak Penguin (CBP) - Official Token Sale on Polygon",
    description: "Participate in the official ComfortBreak Penguin (CBP) token sale on Polygon. Purchase CBP tokens securely with transparent tokenomics and gradual team allocation release.",
    keywords: ["CBP", "ComfortBreak Penguin", "Polygon", "ERC-20", "Token Sale", "Cryptocurrency"],
    openGraph: {
        title: "ComfortBreak Penguin (CBP) - Official Token Sale",
        description: "Join the ComfortBreak Penguin ecosystem. Purchase CBP tokens on Polygon blockchain.",
        type: "website",
        images: [
            {
                url: "/penguin-logo.png",
                width: 1200,
                height: 630,
                alt: "ComfortBreak Penguin Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ComfortBreak Penguin (CBP) Token Sale",
        description: "Purchase CBP tokens on Polygon blockchain",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </head>
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
