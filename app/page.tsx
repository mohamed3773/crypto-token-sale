import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import PurchaseWidget from "@/components/PurchaseWidget";

import Contracts from "@/components/Contracts";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-deepBlack">
            <Header />
            <Hero />
            <Partners />
            <PurchaseWidget />

            <Contracts />
            <FAQ />
            <Footer />
        </main>
    );
}
