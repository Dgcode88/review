"use client";

import { Check, X } from "lucide-react";
import { FadeUp } from "@/components/ui/motion";

interface ProsConsProps {
    pros: string[];
    cons: string[];
}

export function ProsCons({ pros, cons }: ProsConsProps) {
    return (
        <div className="grid md:grid-cols-2 gap-8 my-12">
            {/* Pros */}
            <FadeUp className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8">
                <h3 className="font-display font-bold text-xl text-emerald-700 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Check className="w-5 h-5 text-emerald-600" />
                    </span>
                    What We Loved
                </h3>
                <ul className="space-y-4">
                    {pros.map((pro, i) => (
                        <li key={i} className="flex gap-3 text-emerald-900/80 leading-relaxed font-medium">
                            <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                            {pro}
                        </li>
                    ))}
                </ul>
            </FadeUp>

            {/* Cons */}
            <FadeUp delay={0.1} className="bg-rose-500/5 border border-rose-500/20 rounded-3xl p-8">
                <h3 className="font-display font-bold text-xl text-rose-700 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
                        <X className="w-5 h-5 text-rose-600" />
                    </span>
                    What Fell Short
                </h3>
                <ul className="space-y-4">
                    {cons.map((con, i) => (
                        <li key={i} className="flex gap-3 text-rose-900/80 leading-relaxed font-medium">
                            <X className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                            {con}
                        </li>
                    ))}
                </ul>
            </FadeUp>
        </div>
    );
}
