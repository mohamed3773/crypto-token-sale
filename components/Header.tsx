"use client";

import { useState, useEffect } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";

export default function Header() {
    const [isMounted, setIsMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 w-full z-[1000] transition-all duration-300 ${scrolled ? "glass-effect shadow-lg shadow-black/20" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection("hero")}>
                        <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110">
                            <Image
                                src="/cbp-new-logo.png"
                                alt="ComfortBreak Penguin Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-xl font-bold text-gradient transition-all duration-300 group-hover:tracking-wide">
                            ComfortBreak Penguin
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="flex max-md:hidden items-center gap-4">
                        {/* Home Button - Blue Theme (X/Twitter Style) */}
                        <button
                            onClick={() => scrollToSection("hero")}
                            className="group/btn1 relative inline-flex items-center justify-center rounded-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1DA1F2] to-iceBlue rounded-xl opacity-0 transition-opacity duration-300 group-hover/btn1:opacity-100 blur-[2px]"></div>
                            <div className="relative bg-[#141b29] border border-white/10 hover:border-iceBlue text-softGray group-hover/btn1:text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all duration-300 group-hover/btn1:-translate-y-0.5 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn1:animate-shimmer"></div>
                                <span className="relative z-10 tracking-wide">Home</span>
                            </div>
                        </button>

                        {/* Buy Button - Gold Theme */}
                        <button
                            onClick={() => scrollToSection("buy")}
                            className="group/btn2 relative inline-flex items-center justify-center rounded-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-gold via-yellow-500 to-orange-500 rounded-xl opacity-0 transition-opacity duration-300 group-hover/btn2:opacity-100 blur-[2px]"></div>
                            <div className="relative bg-[#141b29] border border-white/10 hover:border-gold text-softGray group-hover/btn2:text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all duration-300 group-hover/btn2:-translate-y-0.5 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn2:animate-shimmer"></div>
                                <span className="relative z-10 tracking-wide">Buy</span>
                            </div>
                        </button>

                        {/* Contracts Button - Green Theme */}
                        <button
                            onClick={() => scrollToSection("contracts")}
                            className="group/btn3 relative inline-flex items-center justify-center rounded-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 rounded-xl opacity-0 transition-opacity duration-300 group-hover/btn3:opacity-100 blur-[2px]"></div>
                            <div className="relative bg-[#141b29] border border-white/10 hover:border-green-400 text-softGray group-hover/btn3:text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all duration-300 group-hover/btn3:-translate-y-0.5 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn3:animate-shimmer"></div>
                                <span className="relative z-10 tracking-wide">Contracts</span>
                            </div>
                        </button>

                        {/* Social Button - TikTok Style */}
                        <button
                            onClick={() => scrollToSection("footer")}
                            className="group/btn4 relative inline-flex items-center justify-center rounded-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00f2ea] to-[#ff0050] rounded-xl opacity-0 transition-opacity duration-300 group-hover/btn4:opacity-100 blur-[2px]"></div>
                            <div className="relative bg-[#141b29] border border-white/10 hover:border-[#00f2ea] text-softGray group-hover/btn4:text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all duration-300 group-hover/btn4:-translate-y-0.5 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn4:animate-shimmer"></div>
                                <span className="relative z-10 tracking-wide">Social</span>
                            </div>
                        </button>
                    </nav>

                    {/* Wallet Connect Button - Instagram Style */}
                    <div className="block max-md:hidden">
                        <div className="group/wallet relative inline-flex items-center justify-center rounded-xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCA758] rounded-xl opacity-0 transition-opacity duration-300 group-hover/wallet:opacity-100 blur-[2px]"></div>
                            <div className="relative bg-[#141b29] border border-white/10 hover:border-[#FD1D1D] rounded-xl p-[1px] transition-all duration-300 group-hover/wallet:-translate-y-0.5 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/wallet:animate-shimmer z-20 pointer-events-none"></div>
                                {isMounted && (
                                    <ConnectWallet
                                        theme="dark"
                                        btnTitle="Connect Wallet"
                                        className="custom-wallet-btn !bg-[#141b29] !border-none !rounded-xl !h-auto !py-3 !px-6 !font-bold !text-white"
                                        style={{
                                            background: "transparent",
                                            border: "none",
                                            boxShadow: "none",
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button - Visible on Mobile */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="flex md:hidden relative w-10 h-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-gold/50"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden glass-effect bg-[#0B0F14]/60 rounded-xl mt-2 mb-4 p-4 space-y-3 border border-white/10 shadow-2xl">
                        <button
                            onClick={() => scrollToSection("hero")}
                            className="block w-full text-left px-4 py-3 text-white font-medium rounded-lg hover:bg-iceBlue/10 border border-transparent hover:border-iceBlue/30 transition-all duration-300"
                        >
                            🏠 Home
                        </button>
                        <button
                            onClick={() => scrollToSection("buy")}
                            className="block w-full text-left px-4 py-3 text-white font-medium rounded-lg hover:bg-gold/10 border border-transparent hover:border-gold/30 transition-all duration-300"
                        >
                            💰 Buy
                        </button>
                        <button
                            onClick={() => scrollToSection("contracts")}
                            className="block w-full text-left px-4 py-3 text-white font-medium rounded-lg hover:bg-purple-500/10 border border-transparent hover:border-purple-500/30 transition-all duration-300"
                        >
                            📄 Contracts
                        </button>
                        <button
                            onClick={() => scrollToSection("footer")}
                            className="block w-full text-left px-4 py-3 text-white font-medium rounded-lg hover:bg-green-500/10 border border-transparent hover:border-green-500/30 transition-all duration-300"
                        >
                            🌐 Social
                        </button>
                        <div className="pt-2 border-t border-white/10">

                            <ConnectWallet
                                theme="dark"
                                btnTitle="Connect Wallet"
                                style={{
                                    background: "linear-gradient(135deg, #1a1f2e 0%, #2d3548 50%, #1a1f2e 100%)",
                                    color: "#ffffff",
                                    fontWeight: "700",
                                    fontSize: "0.875rem",
                                    borderRadius: "0.75rem",
                                    padding: "0.75rem",
                                    width: "100%",
                                    border: "2px solid transparent",
                                    backgroundImage: "linear-gradient(135deg, #1a1f2e 0%, #2d3548 50%, #1a1f2e 100%), linear-gradient(135deg, #D4AF37, #66D9FF, #a855f7)",
                                    backgroundOrigin: "border-box",
                                    backgroundClip: "padding-box, border-box",
                                    letterSpacing: "0.5px",
                                }}
                            />

                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
