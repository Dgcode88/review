'use client';

import { Check, X, Trophy, Minus, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScoreBadge } from '@/components/reviews/ui/ScoreBadge';
import Link from 'next/link';
import { useComparison } from '@/context/ComparisonContext';

// Extended product interface for the full table
export interface DetailedProduct {
    id: string;
    name: string;
    image: string;
    overallScore: number;
    price: string;
    weight: string;
    costPerLb: string;
    costPerDay: string;
    type: string;
    scores: {
        dust: number;
        dustMeasurement: string;
        clumping: number;
        clumpingStatus: string;
        odor: number;
        odorStatus: string;
        tracking: number;
        trackingStatus: string;
        value: number;
    };
    features: {
        scented: boolean;
        flushable: boolean;
        biodegradable: boolean;
        lightweight: boolean;
        multiCat: boolean;
    };
    longevity: {
        single: string;
        multi: string;
    };
    verdict: {
        bestFor: string;
    };
    reviewUrl: string;
    buyUrl: string;
}

interface ComparisonTableProps {
    products: DetailedProduct[];
}

export function ComparisonTable({ products }: ComparisonTableProps) {
    const { removeProduct } = useComparison();

    if (products.length === 0) {
        return (
            <div className="text-center py-24 bg-secondary/20 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">No products selected</h3>
                <p className="text-muted-foreground mb-8">Add products from across the site to compare them here.</p>
                <Link href="/categories/best-clumping-cat-litter" className="bg-primary text-white font-bold py-3 px-6 rounded-xl">
                    Browse Reviews
                </Link>
            </div>
        );
    }

    // Helper to find winner in a row
    const findWinner = (selector: (p: DetailedProduct) => number) => {
        if (products.length < 2) return null;
        let max = -1;
        let winnerId = null;
        products.forEach(p => {
            const val = selector(p);
            if (val > max) {
                max = val;
                winnerId = p.id;
            }
        });
        return winnerId;
    };

    const overallWinner = findWinner(p => p.overallScore);
    const dustWinner = findWinner(p => p.scores.dust);
    const clumpingWinner = findWinner(p => p.scores.clumping);

    return (
        <div className="overflow-x-auto pb-8">
            <table className="w-full min-w-[800px] border-collapse">
                <thead>
                    <tr className="border-b border-border">
                        <th className="p-4 w-48 text-left align-bottom bg-background sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Product</span>
                        </th>
                        {products.map(product => (
                            <th key={product.id} className="p-4 align-bottom min-w-[240px] relative group">
                                <button
                                    onClick={() => removeProduct(product.id)}
                                    className="absolute top-2 right-2 text-muted-foreground hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                                <div className="flex flex-col items-center text-center">
                                    <div className="h-32 mb-4 flex items-center justify-center">
                                        <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
                                    </div>
                                    <Link href={product.reviewUrl} className="font-display font-bold text-lg leading-tight hover:text-primary hover:underline mb-2 block">
                                        {product.name}
                                    </Link>
                                    {overallWinner === product.id && (
                                        <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                                            <Trophy className="w-3 h-3" /> Winner
                                        </span>
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className="divide-y divide-border">

                    {/* OVERALL SCORE */}
                    <tr className="bg-secondary/10">
                        <th className="p-4 text-left bg-background sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] font-bold">Overall Score</th>
                        {products.map(product => (
                            <td key={product.id} className="p-4 text-center">
                                <div className="flex flex-col items-center">
                                    <ScoreBadge score={product.overallScore} size="lg" className="mb-2" />
                                    <div className="w-full max-w-[120px] h-2 bg-secondary rounded-full overflow-hidden">
                                        <div
                                            className={cn("h-full", product.overallScore >= 9 ? "bg-green-500" : product.overallScore >= 7 ? "bg-amber-500" : "bg-red-500")}
                                            style={{ width: `${product.overallScore * 10}%` }}
                                        />
                                    </div>
                                </div>
                            </td>
                        ))}
                    </tr>

                    {/* PRICING */}
                    <tr>
                        <td colSpan={products.length + 1} className="p-2 bg-secondary/30 text-xs font-bold uppercase tracking-widest text-muted-foreground pl-4">Pricing</td>
                    </tr>
                    <tr>
                        <th className="p-4 text-left bg-background sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] text-sm font-medium">Price</th>
                        {products.map(p => <td key={p.id} className="p-4 text-center font-bold">{p.price}</td>)}
                    </tr>
                    <tr>
                        <th className="p-4 text-left bg-background sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] text-sm font-medium">Weight</th>
                        {products.map(p => <td key={p.id} className="p-4 text-center text-muted-foreground">{p.weight}</td>)}
                    </tr>
                    <tr>
                        <th className="p-4 text-left bg-background sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] text-sm font-medium">Cost / Day</th>
                        {products.map(p => <td key={p.id} className="p-4 text-center font-mono">{p.costPerDay}</td>)}
                    </tr>

                    {/* PERFORMANCE */}
                    <tr>
                        <td colSpan={products.length + 1} className="p-2 bg-secondary/30 text-xs font-bold uppercase tracking-widest text-muted-foreground pl-4">Performance</td>
                    </tr>
                    <tr>
                        <th className="p-4 text-left bg-background sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] text-sm font-medium">Dust Control</th>
                        {products.map(p => (
                            <td key={p.id} className="p-4 text-center align-top relative">
                                {dustWinner === p.id && <Trophy className="w-3 h-3 text-amber-500 absolute top-2 right-4" />}
                                <div className="font-bold text-lg mb-1">{p.scores.dust}</div>
                                <div className="w-full max-w-[80px] h-1.5 bg-secondary rounded-full overflow-hidden mx-auto mb-2">
                                    <div className="h-full bg-primary" style={{ width: `${p.scores.dust * 10}%` }} />
                                </div>
                                <div className="text-xs text-muted-foreground">{p.scores.dustMeasurement}</div>
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <th className="p-4 text-left bg-background sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] text-sm font-medium">Clumping</th>
                        {products.map(p => (
                            <td key={p.id} className="p-4 text-center align-top relative">
                                {clumpingWinner === p.id && <Trophy className="w-3 h-3 text-amber-500 absolute top-2 right-4" />}
                                <div className="font-bold text-lg mb-1">{p.scores.clumping}</div>
                                <div className="w-full max-w-[80px] h-1.5 bg-secondary rounded-full overflow-hidden mx-auto mb-2">
                                    <div className="h-full bg-primary" style={{ width: `${p.scores.clumping * 10}%` }} />
                                </div>
                                <div className="text-xs text-muted-foreground">{p.scores.clumpingStatus}</div>
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <th className="p-4 text-left bg-background sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] text-sm font-medium">Odor Control</th>
                        {products.map(p => (
                            <td key={p.id} className="p-4 text-center align-top relative">
                                <div className="font-bold text-lg mb-1">{p.scores.odor}</div>
                                <div className="w-full max-w-[80px] h-1.5 bg-secondary rounded-full overflow-hidden mx-auto mb-2">
                                    <div className="h-full bg-primary" style={{ width: `${p.scores.odor * 10}%` }} />
                                </div>
                                <div className="text-xs text-muted-foreground">{p.scores.odorStatus}</div>
                            </td>
                        ))}
                    </tr>

                    {/* FEATURES */}
                    <tr>
                        <td colSpan={products.length + 1} className="p-2 bg-secondary/30 text-xs font-bold uppercase tracking-widest text-muted-foreground pl-4">Features</td>
                    </tr>
                    <tr>
                        <th className="p-4 text-left bg-background sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] text-sm font-medium">Type</th>
                        {products.map(p => <td key={p.id} className="p-4 text-center text-sm">{p.type}</td>)}
                    </tr>
                    <tr>
                        <th className="p-4 text-left bg-background sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] text-sm font-medium">Flushable</th>
                        {products.map(p => (
                            <td key={p.id} className="p-4 text-center">
                                {p.features.flushable ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <th className="p-4 text-left bg-background sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] text-sm font-medium">Scented</th>
                        {products.map(p => (
                            <td key={p.id} className="p-4 text-center">
                                {p.features.scented ? <span className="text-sm">Yes</span> : <span className="text-sm text-muted-foreground">No</span>}
                            </td>
                        ))}
                    </tr>

                    {/* VERDICT */}
                    <tr>
                        <td colSpan={products.length + 1} className="p-2 bg-secondary/30 text-xs font-bold uppercase tracking-widest text-muted-foreground pl-4">Our Verdict</td>
                    </tr>
                    <tr>
                        <th className="p-4 text-left bg-background sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] text-sm font-medium">Best For</th>
                        {products.map(p => (
                            <td key={p.id} className="p-4 text-center text-sm font-medium text-foreground">
                                {p.verdict.bestFor}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <th className="p-4 text-left bg-background sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] text-sm font-medium"></th>
                        {products.map(p => (
                            <td key={p.id} className="p-4 text-center">
                                <Link href={p.reviewUrl} className="block w-full py-2 mb-2 bg-secondary text-foreground text-sm font-bold rounded hover:bg-black hover:text-white transition-colors">
                                    Read Review
                                </Link>
                                <a href={p.buyUrl} target="_blank" className="block w-full py-2 bg-primary text-white text-sm font-bold rounded hover:bg-primary/90 transition-colors">
                                    Check Price
                                </a>
                            </td>
                        ))}
                    </tr>

                </tbody>
            </table>
        </div>
    );
}
