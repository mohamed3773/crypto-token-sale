"use client";

import { useState, useEffect } from "react";
import { useAddress, useContract, useContractWrite, useNetworkMismatch } from "@thirdweb-dev/react";
import { ethers } from "ethers";

const TOKEN_DROP_CONTRACT = "0x579c7603A5482F9Cf4f65b78dea6AAebd95C2d79";
const PRICE_PER_TOKEN = 0.005; // POL per CBP

export default function PurchaseWidget() {
    const address = useAddress();
    const isMismatch = useNetworkMismatch();
    const [amount, setAmount] = useState("");
    const [totalCost, setTotalCost] = useState("0");
    const [estimatedGas, setEstimatedGas] = useState("~0.01");
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [txHash, setTxHash] = useState("");
    const [error, setError] = useState("");

    const { contract } = useContract(TOKEN_DROP_CONTRACT);
    const { mutateAsync: claim } = useContractWrite(contract, "claim");

    useEffect(() => {
        if (amount && !isNaN(parseFloat(amount))) {
            const cost = parseFloat(amount) * PRICE_PER_TOKEN;
            setTotalCost(cost.toFixed(6));
        } else {
            setTotalCost("0");
        }
    }, [amount]);

    const handlePurchase = async () => {
        if (!address) {
            setError("Please connect your wallet first");
            return;
        }

        if (isMismatch) {
            setError("Please switch to Polygon network");
            return;
        }

        if (!amount || parseFloat(amount) <= 0) {
            setError("Please enter a valid amount");
            return;
        }

        setIsLoading(true);
        setError("");
        setSuccess(false);

        try {
            // 1. Prepare values correctly
            const quantityWei = ethers.utils.parseUnits(amount, 18); // Quantity in Wei (18 decimals)
            const pricePerTokenWei = ethers.utils.parseEther(PRICE_PER_TOKEN.toString()); // Price per token in Wei
            const totalCost = ethers.utils.parseEther((parseFloat(amount) * PRICE_PER_TOKEN).toString()); // Total Cost in POL

            // 2. Define AllowlistProof Struct (Standard default for public claim)
            const allowlistProof = {
                proof: [],
                quantityLimitPerWallet: 0,
                pricePerToken: pricePerTokenWei,
                currency: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
            };

            // 3. Define Data
            const data = "0x";

            // 4. Call claim with exactly 6 arguments
            const tx = await claim({
                args: [
                    address, // _receiver
                    quantityWei, // _quantity
                    "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", // _currency
                    pricePerTokenWei, // _pricePerToken
                    allowlistProof, // _allowlistProof
                    data // _data
                ],
                overrides: {
                    value: totalCost, // Send the total POL amount
                },
            });

            setTxHash(tx.receipt.transactionHash);
            setSuccess(true);
            setAmount("");
        } catch (err: any) {
            console.error("Purchase error details:", err);

            // Check for common error patterns
            const errorMessage = err.message?.toLowerCase() || "";
            const errorReason = err.reason?.toLowerCase() || "";

            if (
                errorMessage.includes("insufficient funds") ||
                errorMessage.includes("missing revert data") ||
                errorMessage.includes("bandwidth limit exceeded") ||
                errorReason.includes("missing revert data")
            ) {
                setError("Insufficient POL balance. You need enough POL to cover the Cost + Gas fees.");
            } else if (errorMessage.includes("user rejected") || errorMessage.includes("action_rejected")) {
                setError("Transaction cancelled by user.");
            } else {
                setError("Transaction failed. Please check your balance or try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const addTokenToWallet = async () => {
        if (typeof window.ethereum !== "undefined") {
            try {
                await window.ethereum.request({
                    method: "wallet_watchAsset",
                    params: {
                        type: "ERC20",
                        options: {
                            address: "0x30519133FeA74Fdda2fa8E68c1F4EC8e90AAa8e9",
                            symbol: "CBP",
                            decimals: 18,
                        },
                    },
                });
            } catch (error) {
                console.error("Failed to add token:", error);
            }
        }
    };

    return (
        <section id="buy" className="relative py-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14] via-[#0B0F14] to-[#0B0F14] pointer-events-none"></div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold to-iceBlue mb-6 tracking-tight">
                        Purchase CBP Tokens
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        In the cold, only the penguin moves first. CBP is your move.
                    </p>
                </div>

                {/* Main 3D Card Container */}
                <div className="relative group bg-[#0f1218] border border-white/5 rounded-3xl p-1 transition-all duration-300">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20"></div>
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/40 to-transparent"></div>

                    <div className="bg-[#0f1218] rounded-[22px] p-8 sm:p-10 relative overflow-hidden">
                        {/* Inner Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-iceBlue/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                        {/* Success Message */}
                        {success && (
                            <div className="mb-8 p-6 bg-green-500/5 border border-green-500/20 rounded-2xl relative overflow-hidden">
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
                                <div className="flex items-center gap-4 mb-3 relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-green-400">Purchase Successful!</h3>
                                </div>
                                <p className="text-green-300/80 mb-4 pl-[3.5rem]">Your CBP tokens have been claimed successfully.</p>
                                <div className="pl-[3.5rem] flex flex-wrap gap-4">
                                    <a
                                        href={`https://polygonscan.com/tx/${txHash}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-iceBlue hover:text-white transition-colors text-sm font-medium"
                                    >
                                        View on Polygonscan
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    <button
                                        onClick={addTokenToWallet}
                                        className="inline-flex items-center gap-2 text-gold hover:text-amber-300 transition-colors text-sm font-medium"
                                    >
                                        Add CBP to Wallet
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Error Message */}
                        {error && (
                            <div className="mb-8 p-4 bg-red-500/5 border border-red-500/20 rounded-xl relative overflow-hidden">
                                <p className="text-sm text-red-400 text-center">{error}</p>
                            </div>
                        )}

                        {/* States: Wallet & Network */}
                        {!address ? (
                            <div className="mb-8 p-6 bg-blue-500/5 border border-blue-500/10 rounded-2xl flex flex-col items-center justify-center text-center">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-3">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <p className="text-blue-300 font-medium">Please connect your wallet to participate in the sale</p>
                            </div>
                        ) : isMismatch ? (
                            <div className="mb-8 p-6 bg-yellow-500/5 border border-yellow-500/10 rounded-2xl flex flex-col items-center justify-center text-center">
                                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mb-3">
                                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <p className="text-yellow-400 font-medium">Please switch to Polygon network</p>
                            </div>
                        ) : null}

                        {/* Purchase Form */}
                        <div className="space-y-8 relative z-10">
                            {/* Input Area */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                                    Amount of CBP Tokens
                                </label>
                                <div className="relative group">
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        onWheel={(e) => (e.target as HTMLInputElement).blur()}
                                        placeholder="Min 100 CBP"
                                        className="w-full bg-[#0B0F14] border border-white/10 rounded-xl px-5 py-5 text-white placeholder-gray-600 focus:border-gold/50 focus:ring-1 focus:ring-gold/50 focus:outline-none transition-all text-xl font-medium [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        disabled={!address || isMismatch || isLoading}
                                    />
                                    <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gold font-bold text-lg pointer-events-none">
                                        CBP
                                    </div>
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold/5 to-iceBlue/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                </div>
                            </div>

                            {/* Summary Card */}
                            <div className="bg-[#141820] rounded-2xl p-6 border border-white/5 space-y-4">
                                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                    <span className="text-gray-400">Price per token</span>
                                    <span className="text-white font-mono">0.005 POL</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Total Tokens</span>
                                    <span className="text-2xl font-bold text-gold">{amount || "0"}</span>
                                </div>

                                <div className="bg-[#0B0F14] rounded-xl p-4 mt-2">
                                    <div className="flex justify-between items-end">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-gray-500 uppercase tracking-widest mb-1">Total Cost</span>
                                            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                                {totalCost} <span className="text-lg text-gray-500 font-normal">POL</span>
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs text-iceBlue mb-1">+ ~{estimatedGas} Gas</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Info Items */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex items-center gap-3 text-xs text-gray-500 bg-white/5 rounded-lg p-3">
                                    <div className="w-2 h-2 rounded-full bg-gold shrink-0"></div>
                                    Polygon Network
                                </div>
                                <div className="flex items-center gap-3 text-xs text-gray-500 bg-white/5 rounded-lg p-3">
                                    <div className="w-2 h-2 rounded-full bg-iceBlue shrink-0"></div>
                                    Instant Transfer
                                </div>
                                <div className="flex items-center gap-3 text-xs text-gray-500 bg-white/5 rounded-lg p-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500 shrink-0"></div>
                                    Secure Contract
                                </div>
                            </div>

                            {/* Primary Action Button */}
                            <button
                                onClick={handlePurchase}
                                disabled={!address || isMismatch || isLoading || !amount || parseFloat(amount) <= 0}
                                className="group relative w-full overflow-hidden rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-gold to-iceBlue transition-all duration-300 group-hover:brightness-110"></div>
                                <div className="relative px-8 py-5 bg-[#0B0F14] m-[2px] rounded-[10px] transition-all duration-300 group-hover:bg-transparent group-hover:m-0">
                                    <span className="block font-extrabold text-xl bg-gradient-to-r from-gold to-iceBlue bg-clip-text text-transparent group-hover:text-black transition-all duration-300 uppercase tracking-widest text-center">
                                        {isLoading ? "Processing..." : "Buy CBP Now"}
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
