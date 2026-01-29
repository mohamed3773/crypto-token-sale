"use client";

export default function Tokenomics() {
    return (
        <section id="tokenomics" className="relative py-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-iceBlue/5 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
                        Tokenomics
                    </h2>
                    <p className="text-lg text-softGray max-w-2xl mx-auto">
                        Transparent and balanced token distribution designed for long-term sustainability
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Total Supply */}
                    <div className="glass-effect rounded-2xl p-8 text-center hover:border-gold/40 transition-colors border-2 border-gold/20">
                        <div className="text-gold text-5xl font-bold mb-3">1B</div>
                        <div className="text-white text-xl font-semibold mb-2">Total Supply</div>
                        <div className="text-softGray text-sm">1,000,000,000 CBP</div>
                    </div>

                    {/* Public Sale */}
                    <div className="glass-effect rounded-2xl p-8 text-center hover:border-iceBlue/40 transition-colors border-2 border-iceBlue/20">
                        <div className="text-iceBlue text-5xl font-bold mb-3">600M</div>
                        <div className="text-white text-xl font-semibold mb-2">Public Sale</div>
                        <div className="text-softGray text-sm">60% of total supply</div>
                    </div>

                    {/* Team Allocation */}
                    <div className="glass-effect rounded-2xl p-8 text-center hover:border-accentRed/40 transition-colors border-2 border-accentRed/20">
                        <div className="text-accentRed text-5xl font-bold mb-3">400M</div>
                        <div className="text-white text-xl font-semibold mb-2">Team Allocation</div>
                        <div className="text-softGray text-sm">40% of total supply</div>
                    </div>
                </div>

                {/* Distribution Details */}
                <div className="glass-effect rounded-2xl p-8 sm:p-10 border-2 border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6">Distribution Breakdown</h3>

                    <div className="space-y-6">
                        {/* Public Sale */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <div>
                                    <div className="text-white font-semibold text-lg">Public Sale</div>
                                    <div className="text-softGray text-sm">Fixed price offering</div>
                                </div>
                                <div className="text-iceBlue font-bold text-xl">60%</div>
                            </div>
                            <div className="h-4 bg-deepBlack/50 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-iceBlue to-iceBlue/70 rounded-full" style={{ width: "60%" }}></div>
                            </div>
                            <div className="mt-2 text-sm text-softGray">
                                • 600,000,000 CBP available at 0.005 POL per token
                            </div>
                        </div>

                        {/* Team Allocation */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <div>
                                    <div className="text-white font-semibold text-lg">Team Allocation</div>
                                    <div className="text-softGray text-sm">Gradual release over 4 years</div>
                                </div>
                                <div className="text-accentRed font-bold text-xl">40%</div>
                            </div>
                            <div className="h-4 bg-deepBlack/50 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-accentRed to-accentRed/70 rounded-full" style={{ width: "40%" }}></div>
                            </div>
                            <div className="mt-2 text-sm text-softGray">
                                • 400,000,000 CBP locked and released gradually<br />
                                • Maximum 1% per release tranche<br />
                                • Ensures controlled distribution and market stability
                            </div>
                        </div>
                    </div>

                    {/* Important Note */}
                    <div className="mt-8 p-6 bg-gold/5 border border-gold/20 rounded-xl">
                        <div className="flex items-start gap-3">
                            <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <div>
                                <h4 className="text-gold font-semibold mb-2">Transparency Commitment</h4>
                                <p className="text-softGray text-sm">
                                    All token allocations are managed through verified smart contracts on Polygon.
                                    This is a utility token distribution with no financial promises or guaranteed returns.
                                    The team allocation release schedule ensures long-term commitment to the project.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
