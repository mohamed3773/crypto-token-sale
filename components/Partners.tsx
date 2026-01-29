import React from "react";

const partners = [
    {
        name: "Binance",
        color: "group-hover/item:text-[#F0B90B]",
    },
    {
        name: "OKX",
        color: "group-hover/item:text-white",
    },
    {
        name: "Coinbase",
        color: "group-hover/item:text-[#0052FF]",
    },
    {
        name: "Polygon",
        color: "group-hover/item:text-[#8247E5]",
    },
    {
        name: "MetaMask",
        color: "group-hover/item:text-[#E2761B]",
    },
    {
        name: "Bybit",
        color: "group-hover/item:text-[#F7A600]",
    },
];

export default function Partners() {
    return (
        <section className="bg-[#0B0F14] border-y border-white/5 py-12 overflow-hidden relative z-20">
            {/* Fade Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0F14] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0F14] to-transparent z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 cursor-default">
                {/* Professional Title */}
                <div className="text-center mb-12">
                    <span className="text-xs font-bold tracking-[0.3em] text-blue-100 drop-shadow-sm uppercase border-b border-blue-500/10 pb-2">Trusted By Industry Leaders</span>
                </div>

                <div className="flex overflow-x-auto md:overflow-visible md:flex-wrap md:justify-center items-center gap-12 md:gap-16 pb-4 md:pb-0 scrollbar-hide w-full px-4">
                    {/* Loop - Single pass for static/manual scroll */}
                    {partners.map((partner, index) => (
                        <div key={`p-${index}`} className="group/item flex-shrink-0 flex items-center justify-center cursor-pointer">
                            {/* Text Only - Default Gray, Hover Brand Color */}
                            <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-700 transition-colors duration-300 ${partner.color}`}>
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
