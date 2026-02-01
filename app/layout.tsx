import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    // Set the base URL to your live site so images work correctly in previews
    metadataBase: new URL("https://thepenguins.live"),
    
    // Main Title and Description
    title: "ComfortBreak (CBP): Penguin Token Facts & Utility",
    description: "ComfortBreak (CBP) is a next-generation cryptocurrency built for a secure and seamless experience. Join the Penguin community, explore $CBP utility, and trade on the official platform.",
    
    keywords: ["CBP", "ComfortBreak Penguin", "Polygon", "ERC-20", "Token Sale", "Cryptocurrency"],
    
    // OpenGraph configuration (for Facebook, LinkedIn, etc.)
    openGraph: {
        title: "ComfortBreak (CBP): Penguin Token Facts & Utility",
        description: "ComfortBreak (CBP) is a next-generation cryptocurrency built for a secure and seamless experience.",
        url: "https://thepenguins.live",
        siteName: "ComfortBreak", // This name appears on social media posts
        type: "website",
        images: [
            {
                url: "/cbp-new-logo.png", // Image file located in the 'public' folder
                width: 1200,
                height: 630,
                alt: "ComfortBreak Penguin Logo",
            },
        ],
    },
    
    // Twitter Card configuration
    twitter: {
        card: "summary_large_image",
        title: "ComfortBreak (CBP): Penguin Token Facts & Utility",
        description: "Purchase CBP tokens on Polygon blockchain",
        images: ["/cbp-new-logo.png"], // Same image for Twitter
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
                {/* JSON-LD Script: REQUIRED to show the Site Name above the URL in Google Search */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "name": "ComfortBreak",
                            "url": "https://thepenguins.live/",
                            "alternateName": ["CBP", "The Penguins"]
                        })
                    }}
                />
                
                <Providers>{children}</Providers>
                
                <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
            </body>
        </html>
    );
}
