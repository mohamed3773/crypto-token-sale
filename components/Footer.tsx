"use client";

import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className="relative border-t border-white/10 bg-deepBlack">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Top Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/5 ring-1 ring-white/10 shadow-lg shadow-black/50">
                                <Image
                                    src="/cbp-new-logo.png"
                                    alt="ComfortBreak Penguin"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                ComfortBreak Penguin
                            </span>
                        </div>
                        <p className="text-softGray text-sm leading-relaxed max-w-sm">
                            Inspired by the penguin — calm, resilient, and strategic. ComfortBreak Penguin is building a transparent and sustainable token ecosystem on the Polygon blockchain.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="#hero" className="text-softGray hover:text-gold transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#buy" className="text-softGray hover:text-gold transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                                    Buy
                                </a>
                            </li>
                            <li>
                                <a href="#contracts" className="text-softGray hover:text-gold transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                                    Contracts
                                </a>
                            </li>
                            <li>
                                <a href="#footer" className="text-softGray hover:text-gold transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                                    Social
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social & Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Connect With Us</h3>
                        <div className="flex flex-col gap-3">
                            {/* X (Twitter) Button */}
                            <a href="https://x.com/MarsPioneersNFT" target="_blank" rel="noopener noreferrer" className="group/btn1 relative inline-flex w-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#1DA1F2] to-iceBlue rounded-xl opacity-0 transition-opacity duration-300 group-hover/btn1:opacity-100 blur-[2px]"></div>
                                <div className="relative w-full bg-[#141b29] border border-white/10 hover:border-iceBlue text-white px-6 py-3 rounded-xl font-bold flex items-center justify-start gap-4 transition-all duration-300 group-hover/btn1:-translate-y-0.5 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn1:animate-shimmer"></div>
                                    <svg className="w-5 h-5 text-iceBlue transition-transform group-hover/btn1:scale-110 duration-300 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                    <span className="tracking-wide text-sm">X (Twitter)</span>
                                </div>
                            </a>

                            {/* Instagram Button */}
                            <a href="https://www.instagram.com/butwhybpt?igsh=MWdhOTBpMnplbGo1NA==" target="_blank" rel="noopener noreferrer" className="group/btn2 relative inline-flex w-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCA758] rounded-xl opacity-0 transition-opacity duration-300 group-hover/btn2:opacity-100 blur-[2px]"></div>
                                <div className="relative w-full bg-[#1a1418] border border-white/10 hover:border-[#FD1D1D] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-start gap-4 transition-all duration-300 group-hover/btn2:-translate-y-0.5 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn2:animate-shimmer"></div>
                                    <svg className="w-5 h-5 text-[#FD1D1D] transition-transform group-hover/btn2:scale-110 duration-300 ml-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                                    </svg>
                                    <span className="tracking-wide text-sm">Instagram</span>
                                </div>
                            </a>

                            {/* TikTok Button */}
                            <a href="https://www.tiktok.com/@butwyh?_r=1&_t=ZS-93THBcdjpeE" target="_blank" rel="noopener noreferrer" className="group/btn3 relative inline-flex w-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#00f2ea] to-[#ff0050] rounded-xl opacity-0 transition-opacity duration-300 group-hover/btn3:opacity-100 blur-[2px]"></div>
                                <div className="relative w-full bg-[#141414] border border-white/10 hover:border-[#00f2ea] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-start gap-4 transition-all duration-300 group-hover/btn3:-translate-y-0.5 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn3:animate-shimmer"></div>
                                    <svg className="w-5 h-5 text-[#00f2ea] group-hover/btn3:text-[#ff0050] transition-colors duration-300 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.03 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                                    <span className="tracking-wide text-sm">TikTok</span>
                                </div>
                            </a>

                            {/* Email */}
                            <a href="mailto:contact@thepenguins.live" className="group/btn4 relative inline-flex w-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 rounded-xl opacity-0 transition-opacity duration-300 group-hover/btn4:opacity-100 blur-[2px]"></div>
                                <div className="relative w-full bg-[#142618] border border-white/10 hover:border-green-400 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-start gap-4 transition-all duration-300 group-hover/btn4:-translate-y-0.5 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn4:animate-shimmer"></div>
                                    <svg className="w-5 h-5 text-green-400 transition-colors duration-300 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    <span className="tracking-wide text-sm">Email</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-softGray text-sm">
                        © {currentYear} ComfortBreak Penguin. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-softGray">Powered by</span>
                        <span className="text-purple-400 font-semibold">Polygon</span>
                        <div className="w-1 h-1 bg-softGray rounded-full"></div>
                        <span className="text-softGray">Built with</span>
                        <span className="text-iceBlue font-semibold">thirdweb</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
