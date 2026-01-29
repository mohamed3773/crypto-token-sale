"use client";

import Image from "next/image";

export default function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Effects */}
            {/* Background Effects & Professional Abstract Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none isolation-auto z-0">
                {/* 1. Deep Atmospheric Gradient Base */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1f2e] via-[#0B0F14] to-[#0B0F14] opacity-80"></div>

                {/* 2. Professional Top-Right Glow (Gold/Amber) - Properly positioned for Desktop & Mobile */}
                <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[60%] sm:w-[40%] sm:h-[50%] bg-gradient-to-b from-gold/10 to-transparent rounded-full blur-[120px] opacity-40 mix-blend-screen animate-pulse-slow"></div>

                {/* 3. Professional Bottom-Left Glow (IceBlue/Cyan) */}
                <div className="absolute bottom-[-20%] left-[-10%] w-[80%] h-[60%] sm:w-[40%] sm:h-[50%] bg-gradient-to-t from-iceBlue/10 to-transparent rounded-full blur-[120px] opacity-40 mix-blend-screen animate-pulse-slow delay-1000"></div>

                {/* 4. Modern Geometric Accents (Clean Lines instead of bulky shapes) */}
                {/* Diagonal Tech Line Top Left */}
                <div className="absolute top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-y-12 opacity-30"></div>
                {/* Diagonal Tech Line Bottom Right */}
                <div className="absolute bottom-40 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-y-12 opacity-30"></div>

                {/* 5. Floating Abstract 3D Shapes (2 Cubes & 2 Orbs) - Fixed for Chrome Visibility */}

                {/* Top Left - Gold Cube (Soft Square) */}
                <div className="block max-sm:hidden absolute top-[12%] left-[8%] w-36 h-36 rounded-3xl rotate-12 border border-gold/10 bg-gradient-to-br from-gold/10 to-transparent backdrop-blur-md animate-[float_10s_ease-in-out_infinite] opacity-80"></div>

                {/* Bottom Right - IceBlue Cube (Soft Square) */}
                <div className="block max-sm:hidden absolute bottom-[18%] right-[8%] w-44 h-44 rounded-3xl -rotate-12 border border-iceBlue/10 bg-gradient-to-tl from-iceBlue/10 to-transparent backdrop-blur-md animate-[float_12s_ease-in-out_infinite_reverse] opacity-80"></div>

                {/* Top Right - Subtle Purple Orb (Circle) */}
                <div className="block max-sm:hidden absolute top-[20%] right-[12%] w-28 h-28 rounded-full border border-purple-500/10 bg-gradient-to-bl from-purple-500/10 to-transparent backdrop-blur-md animate-[float_14s_ease-in-out_infinite] delay-1000 opacity-70"></div>

                {/* Bottom Left - Amber Orb (Circle) */}
                <div className="block max-sm:hidden absolute bottom-[15%] left-[12%] w-32 h-32 rounded-full border border-white/10 bg-gradient-to-tr from-white/10 to-transparent backdrop-blur-md animate-[float_11s_ease-in-out_infinite_reverse] delay-500 opacity-70"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex items-center justify-center">
                    {/* Content */}
                    <div className="space-y-8 text-center max-w-4xl">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
                            <span className="text-gradient">ComfortBreak</span>
                            <br />
                            <span className="text-white">Penguin Token</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-softGray max-w-2xl mx-auto leading-relaxed font-light">
                            Not hype. Not chaos.
                            <br />
                            <span className="text-white font-medium">Just strategy. Stability. Vision.</span>
                            <br className="my-3 block" />
                            The penguin didn’t follow the crowd — it asked, <span className="text-gold italic font-semibold">But why?</span>
                            <br />
                            <span className="text-2xl font-bold text-gradient mt-2 inline-block">That’s CBP.</span>
                        </p>

                        {/* Key Stats */}
                        {/* Key Stats - Modern 3D Crystal Design */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mt-12 mb-12">
                            <div className="relative group bg-[#0f1218] border border-white/5 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20"></div>
                                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/40 to-transparent"></div>
                                <div className="text-3xl font-extrabold bg-gradient-to-r from-gold to-amber-200 bg-clip-text text-transparent">0.005 POL</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mt-2">Price per CBP</div>
                            </div>
                            <div className="relative group bg-[#0f1218] border border-white/5 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20"></div>
                                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/40 to-transparent"></div>
                                <div className="text-3xl font-extrabold bg-gradient-to-r from-iceBlue to-cyan-200 bg-clip-text text-transparent">1B CBP</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mt-2">Public Sale Supply</div>
                            </div>
                        </div>

                        {/* Action Buttons - Professional 3D No-Shadow */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            {/* Buy CBP Now - Gold Theme */}
                            <button
                                onClick={() => scrollToSection("buy")}
                                className="group/btnBuy relative inline-flex items-center justify-center rounded-xl w-full sm:w-auto"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-gold via-yellow-500 to-orange-500 rounded-xl opacity-0 transition-opacity duration-300 group-hover/btnBuy:opacity-100 blur-[2px]"></div>
                                <div className="relative w-full bg-[#0B0F14] border border-white/10 hover:border-gold/50 text-softGray group-hover/btnBuy:text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 group-hover/btnBuy:-translate-y-0.5 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btnBuy:animate-shimmer pointer-events-none"></div>
                                    <span className="relative z-10 tracking-wider text-lg uppercase">Buy CBP Now</span>
                                </div>
                            </button>

                            {/* View Contracts - Purple Theme */}
                            <button
                                onClick={() => scrollToSection("contracts")}
                                className="group/btnContracts relative inline-flex items-center justify-center rounded-xl w-full sm:w-auto"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl opacity-0 transition-opacity duration-300 group-hover/btnContracts:opacity-100 blur-[2px]"></div>
                                <div className="relative w-full bg-[#1a1f2e] border border-white/10 hover:border-purple-400 text-softGray group-hover/btnContracts:text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 group-hover/btnContracts:-translate-y-0.5 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btnContracts:animate-shimmer"></div>
                                    <span className="relative z-10 tracking-wider text-lg uppercase">View Contracts</span>
                                </div>
                            </button>
                        </div>

                        {/* Network Badge */}
                        <div className="flex items-center gap-3 justify-center">
                            <div className="bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 flex items-center gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-purple-300">Polygon Network</span>
                            </div>
                            <div className="bg-green-600/20 border border-green-500/30 rounded-full px-4 py-2 flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-green-300">ERC-20</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
