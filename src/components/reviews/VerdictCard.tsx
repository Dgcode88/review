"use client";

import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { ScalePop } from "@/components/ui/motion";

interface VerdictCardProps {
    verdict: string;
    bestFor: string[];
    skipIf: string[];
    score: number;
}

export function VerdictCard({ verdict, bestFor, skipIf, score }: VerdictCardProps) {
    return (
        <ScalePop className="bg-foreground text-secondary rounded-3xl p-8 md:p-10 relative overflow-hidden my-12 shadow-2xl">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-8 md:items-start mb-8 border-b border-white/10 pb-8">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 bg-accent text-foreground px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest mb-4">
                            The Verdict
                        </div>
                        <p className="text-xl md:text-2xl text-white font-medium leading-relaxed italic">
                            &quot;{verdict}&quot;
                        </p>
                    </div>

                    <div className="flex-shrink-0 text-center">
                        <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center">
                            <span className="text-4xl font-bold text-white">{score}</span>
                            <span className="text-xs uppercase font-bold text-white/50 tracking-widest">Score</span>
                        </div>
                    </div>
                </div>

                <h3 className="font-bold text-lg mb-2">
                    Is it &quot;worth it&quot;?
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Best For */}
                    <div>
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Worth it if:
                        </h4>
                        <ul className="space-y-3">
                            {bestFor.map((item, i) => (
                                <li key={i} className="text-white/70 text-sm flex gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Skip If */}
                    <div>
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-rose-400" /> Skip it if:
                        </h4>
                        <ul className="space-y-3">
                            {skipIf.map((item, i) => (
                                <li key={i} className="text-white/70 text-sm flex gap-2">
                                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 text-center md:text-left">
                    <button className="w-full md:w-auto px-8 py-4 bg-accent hover:bg-white text-foreground font-bold rounded-full transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                        Check Current Price <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-xs text-white/30 mt-3 text-center md:text-left">
                        *Links are affiliate. We buy our own products.
                    </p>
                </div>
            </div>
        </ScalePop>
    );
}
