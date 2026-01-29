"use client";

export default function TeamAllocation() {
    const timeline = [
        { year: "Year 1", percentage: "25%", amount: "100M CBP", description: "Initial gradual release" },
        { year: "Year 2", percentage: "25%", amount: "100M CBP", description: "Continued distribution" },
        { year: "Year 3", percentage: "25%", amount: "100M CBP", description: "Sustained release" },
        { year: "Year 4", percentage: "25%", amount: "100M CBP", description: "Final distribution" },
    ];

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accentRed/5 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
                        Team Allocation Release Plan
                    </h2>
                    <p className="text-lg text-softGray max-w-2xl mx-auto">
                        Controlled 4-year distribution timeline with maximum 1% per release tranche
                    </p>
                </div>

                <div className="glass-effect rounded-2xl p-8 sm:p-10 border-2 border-accentRed/20">
                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accentRed via-gold to-iceBlue hidden md:block"></div>

                        <div className="space-y-8">
                            {timeline.map((item, index) => (
                                <div key={index} className="relative pl-0 md:pl-20">
                                    {/* Timeline Dot */}
                                    <div className="absolute left-6 top-6 w-5 h-5 bg-gold rounded-full border-4 border-deepBlack hidden md:block"></div>

                                    <div className="glass-effect rounded-xl p-6 hover:bg-white/5 transition-colors">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-white mb-2">{item.year}</h3>
                                                <p className="text-softGray text-sm">{item.description}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-gold text-2xl font-bold">{item.percentage}</div>
                                                <div className="text-softGray text-sm">{item.amount}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key Points */}
                    <div className="mt-10 pt-8 border-t border-white/10">
                        <h3 className="text-xl font-bold text-white mb-6">Release Structure</h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-iceBlue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Maximum 1% Per Tranche</h4>
                                    <p className="text-softGray text-sm">Each release is capped at 1% of team allocation to ensure controlled distribution.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-iceBlue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Transparent Timeline</h4>
                                    <p className="text-softGray text-sm">4-year gradual release demonstrates long-term commitment to the project.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-iceBlue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Smart Contract Locked</h4>
                                    <p className="text-softGray text-sm">All team tokens are secured in smart contracts with enforced release schedules.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-iceBlue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">No Financial Guarantees</h4>
                                    <p className="text-softGray text-sm">This allocation plan does not promise returns or future value appreciation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
