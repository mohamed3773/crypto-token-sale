"use client";

import { useState } from "react";

const TOKEN_CONTRACT = "0x30519133FeA74Fdda2fa8E68c1F4EC8e90AAa8e9";
const DROP_CONTRACT = "0x579c7603A5482F9Cf4f65b78dea6AAebd95C2d79";

export default function Contracts() {
    const [copiedToken, setCopiedToken] = useState(false);
    const [copiedDrop, setCopiedDrop] = useState(false);

    const copyToClipboard = (text: string, type: 'token' | 'drop') => {
        navigator.clipboard.writeText(text);
        if (type === 'token') {
            setCopiedToken(true);
            setTimeout(() => setCopiedToken(false), 2000);
        } else {
            setCopiedDrop(true);
            setTimeout(() => setCopiedDrop(false), 2000);
        }
    };

    return (
        <section id="contracts" className="relative py-24 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14] via-[#0f1218] to-[#0B0F14] pointer-events-none"></div>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold to-iceBlue mb-6 tracking-tight">
                        Transparency & Trust
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Like the penguin that steps forward when others hesitate, CBP is for those who believe early, move boldly, and endure the cold.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* Token Contract Card - Clean 3D Style */}
                    <div className="relative group perspective-1000">
                        {/* Removed Strong Outer Glow for cleaner look */}

                        <div className="relative bg-[#0f1218] rounded-[30px] border border-white/10 p-1 overflow-hidden transition-colors duration-300 hover:border-gold/20">
                            {/* Inner Card Content */}
                            <div className="bg-[#0f1218]/80 backdrop-blur-xl rounded-[26px] p-8 sm:p-12 relative overflow-hidden">

                                {/* Geometric Decorations */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-iceBlue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10 text-center sm:text-left">
                                        <div className="relative">
                                            <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-2xl border border-iceBlue/30 flex items-center justify-center relative">
                                                <svg className="w-8 h-8 text-iceBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">Token Contract</h3>
                                            <p className="text-gray-400">Verified Smart Contract on Polygon PoS Chain</p>
                                        </div>
                                    </div>

                                    {/* Address Display */}
                                    <div className="space-y-3 mb-10">
                                        <label className="text-xs text-iceBlue font-bold uppercase tracking-[0.2em] ml-1">Contract Address</label>
                                        <div className="group/code relative bg-black/50 rounded-2xl border border-white/10 p-1 transition-colors hover:border-iceBlue/30">
                                            <div className="flex items-center justify-between bg-[#0B0F14] rounded-xl px-4 py-4 sm:px-6">
                                                <code className="text-iceBlue text-sm sm:text-base font-mono truncate mr-4">
                                                    {TOKEN_CONTRACT}
                                                </code>
                                                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                                    <button
                                                        onClick={() => copyToClipboard(TOKEN_CONTRACT, 'token')}
                                                        className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
                                                        title="Copy Address"
                                                    >
                                                        {copiedToken ? (
                                                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        ) : (
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                            </svg>
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                        <button
                                            onClick={() => copyToClipboard(TOKEN_CONTRACT, 'token')}
                                            className="group/btn1 relative overflow-hidden rounded-xl"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 group-hover/btn1:from-gold/20 group-hover/btn1:to-gold/40"></div>
                                            <div className="relative px-6 py-4 bg-[#1a1f2e] border border-white/5 m-[1px] rounded-[11px] flex items-center justify-center gap-2 transition-all group-hover/btn1:bg-transparent">
                                                <span className="text-white font-semibold flex items-center gap-2">
                                                    {copiedToken ? 'Address Copied' : 'Copy Address'}
                                                </span>
                                            </div>
                                        </button>

                                        <a
                                            href={`https://polygonscan.com/address/${TOKEN_CONTRACT}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn2 relative overflow-hidden rounded-xl"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-iceBlue/80 to-blue-600 transition-all duration-300 group-hover/btn2:brightness-110"></div>
                                            <div className="relative px-6 py-4 bg-[#0f1218] border border-white/5 m-[1px] rounded-[11px] flex items-center justify-center gap-2 transition-all group-hover/btn2:bg-transparent">
                                                <span className="text-iceBlue font-bold group-hover/btn2:text-white transition-colors flex items-center gap-2">
                                                    View on Explorer
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </a>
                                    </div>

                                    {/* Smart Stats Grid */}
                                    <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/10 pt-8">
                                        <div className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
                                            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Type</div>
                                            <div className="text-white font-bold">ERC-20</div>
                                        </div>
                                        <div className="text-center p-3 rounded-xl bg-purple-500/5 border border-purple-500/10">
                                            <div className="text-xs text-purple-400/70 uppercase tracking-wider mb-1">Chain</div>
                                            <div className="text-purple-400 font-bold">Polygon</div>
                                        </div>
                                        <div className="text-center p-3 rounded-xl bg-gold/5 border border-gold/10">
                                            <div className="text-xs text-gold/70 uppercase tracking-wider mb-1">Ticker</div>
                                            <div className="text-gold font-bold">CBP</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
