"use client";

import { useState } from "react";

const faqs = [
    {
        question: "What is ComfortBreak Penguin (CBP)?",
        answer: "ComfortBreak Penguin (CBP) is an ERC-20 token on the Polygon blockchain. It is part of the ComfortBreak Penguin ecosystem, distributed through a transparent public sale with fixed pricing and controlled team allocation.",
    },
    {
        question: "How do I buy CBP tokens?",
        answer: "Connect your Web3 wallet (MetaMask, WalletConnect, etc.) to the Polygon network, enter the amount of CBP you want to purchase in the Buy section, and confirm the transaction. You'll need POL (formerly MATIC) to cover the token cost and gas fees.",
    },
    {
        question: "Why do I need POL in my wallet?",
        answer: "POL is the native currency of the Polygon network. You need POL to pay for the CBP tokens (0.005 POL per CBP) and to cover network gas fees for the transaction. Always ensure you have extra POL beyond the purchase amount to cover gas fees.",
    },
    {
        question: "Where will my CBP tokens appear after purchase?",
        answer: "After a successful purchase, your CBP tokens will automatically appear in your connected wallet on the Polygon network. If they don't show immediately, you may need to manually add the CBP token contract address to your wallet.",
    },
    {
        question: "What if CBP tokens don't show in my wallet?",
        answer: "Some wallets require manual token addition. Click 'Add Token' or 'Import Token' in your wallet, select 'Custom Token', and enter the CBP token contract address: 0x30519133FeA74Fdda2fa8E68c1F4EC8e90AAa8e9. The symbol is CBP and decimals are 18.",
    },
    {
        question: "Is there a minimum or maximum purchase limit?",
        answer: "There is no strict minimum purchase amount, but consider gas fees when buying small amounts. Maximum limits may be enforced by the smart contract to ensure fair distribution. Check the purchase widget for any active limits.",
    },
    {
        question: "Is this financial advice or an investment opportunity?",
        answer: "No. This website is for informational purposes only and does not constitute financial advice. CBP is a utility token distribution with no promises or guarantees of future value, profits, or returns. Cryptocurrency involves significant risk. Always do your own research and never invest more than you can afford to lose.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="relative py-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-iceBlue/5 to-transparent"></div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Additional Help - Modern 3D Design */}
                <div className="mt-24 relative group perspective-1000">
                    {/* Gradient Border Accent */}
                    <div className="absolute inset-x-10 -top-[2px] bottom-0 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-50 blur-sm pointer-events-none"></div>
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-gold/20 via-white/10 to-iceBlue/20 rounded-[32px] opacity-100 pointer-events-none"></div>

                    <div className="relative bg-[#0f1218] rounded-[30px] p-8 sm:p-14 overflow-hidden">
                        {/* Clean Background Decorations */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-iceBlue/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                        <div className="relative z-10 text-center">
                            <h3 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
                                Still wondering when to <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-iceBlue">step forward?</span>
                            </h3>
                            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                                The penguin never walks alone. Join the community, ask questions, and move with confidence.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6">
                                {/* X (Twitter) Button */}
                                <a href="https://x.com/MarsPioneersNFT" target="_blank" rel="noopener noreferrer" className="group/btn1 relative inline-flex min-w-[200px]">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#1DA1F2] to-iceBlue rounded-xl opacity-0 transition-opacity duration-300 group-hover/btn1:opacity-100 blur-[2px]"></div>
                                    <div className="relative w-full bg-[#141b29] border border-white/10 hover:border-iceBlue text-white px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 group-hover/btn1:-translate-y-1 overflow-hidden">
                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn1:animate-shimmer"></div>

                                        <svg className="w-5 h-5 text-iceBlue transition-transform group-hover/btn1:scale-110 duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                        <span className="tracking-wide">Follow on X</span>
                                    </div>
                                </a>

                                {/* Instagram Button */}
                                <a href="https://www.instagram.com/butwhybpt?igsh=MWdhOTBpMnplbGo1NA==" target="_blank" rel="noopener noreferrer" className="group/btn2 relative inline-flex min-w-[200px]">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCA758] rounded-xl opacity-0 transition-opacity duration-300 group-hover/btn2:opacity-100 blur-[2px]"></div>
                                    <div className="relative w-full bg-[#1a1418] border border-white/10 hover:border-[#FD1D1D] text-white px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 group-hover/btn2:-translate-y-1 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn2:animate-shimmer"></div>
                                        <svg className="w-5 h-5 text-[#FD1D1D] transition-transform group-hover/btn2:scale-110 duration-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                                        </svg>
                                        <span className="tracking-wide">Instagram</span>
                                    </div>
                                </a>

                                {/* TikTok Button */}
                                <a href="https://www.tiktok.com/@butwyh?_r=1&_t=ZS-93THBcdjpeE" target="_blank" rel="noopener noreferrer" className="group/btn3 relative inline-flex min-w-[200px]">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#00f2ea] to-[#ff0050] rounded-xl opacity-0 transition-opacity duration-300 group-hover/btn3:opacity-100 blur-[2px]"></div>
                                    <div className="relative w-full bg-[#141414] border border-white/10 hover:border-[#00f2ea] text-white px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 group-hover/btn3:-translate-y-1 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn3:animate-shimmer"></div>
                                        <svg className="w-5 h-5 text-[#00f2ea] group-hover/btn3:text-[#ff0050] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.03 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                                        <span className="tracking-wide">TikTok</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
