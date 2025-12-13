'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowLeftRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ComparisonWidgetProps {
    currentProduct: string;
}

export function ComparisonWidget({ currentProduct }: ComparisonWidgetProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string[]>([]);

    // This would typically come from a context or prop
    const competitors = [
        "Dr. Elsey's Ultra",
        "World's Best Cat Litter",
        "Arm & Hammer Clump & Seal",
        "PrettyLitter",
        "Boxiecat Premium"
    ].filter(c => c !== currentProduct);

    const toggleSelection = (product: string) => {
        if (selected.includes(product)) {
            setSelected(selected.filter(s => s !== product));
        } else {
            if (selected.length < 2) {
                setSelected([...selected, product]);
            }
        }
    };

    return (
        <>
            {/* Minimized Trigger */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setIsOpen(true)}
                className={cn(
                    "fixed bottom-6 right-6 z-50 bg-foreground text-white p-4 rounded-full shadow-2xl flex items-center gap-2 hover:bg-black transition-colors border border-white/20",
                    isOpen && "hidden"
                )}
            >
                <ArrowLeftRight className="w-6 h-6" />
                <span className="font-bold hidden md:inline">Compare</span>
            </motion.button>

            {/* Expanded Widget */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-0 right-0 md:bottom-6 md:right-6 w-full md:w-96 z-50 bg-white md:rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.2)] border border-border overflow-hidden"
                    >
                        <div className="bg-foreground p-4 flex items-center justify-between text-white">
                            <h3 className="font-bold flex items-center gap-2">
                                <ArrowLeftRight className="w-5 h-5 text-accent" />
                                Compare with {currentProduct}
                            </h3>
                            <button onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-4 max-h-[60vh] overflow-y-auto">
                            <p className="text-sm text-muted-foreground mb-4">Select up to 2 products to compare:</p>
                            <div className="space-y-2">
                                {competitors.map(product => (
                                    <div
                                        key={product}
                                        onClick={() => toggleSelection(product)}
                                        className={cn(
                                            "flex items-center gap-3 p-3 rounded-xl border border-border cursor-pointer transition-all hover:bg-secondary/50",
                                            selected.includes(product) && "border-primary bg-primary/5 ring-1 ring-primary"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-5 h-5 rounded-full border border-muted-foreground flex items-center justify-center transition-colors",
                                            selected.includes(product) && "bg-primary border-primary"
                                        )}>
                                            {selected.includes(product) && <span className="text-white text-xs">✓</span>}
                                        </div>
                                        <span className="text-sm font-medium">{product}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 border-t border-border bg-secondary/30">
                            <button
                                disabled={selected.length === 0}
                                className="w-full py-3 bg-accent text-accent-foreground font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent/90 transition-colors"
                            >
                                Compare {selected.length > 0 ? `(${selected.length})` : ''} Products
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
