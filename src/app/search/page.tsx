'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import { Star, ArrowRight, Sparkles } from 'lucide-react';
import { Header } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';
import { PurrifyLink } from '@/components/reviews/PurrifyLink';

// Comprehensive product data for search
const allProducts = [
    {
        id: 'dr-elseys-ultra',
        name: "Dr. Elsey's Ultra Premium",
        category: "Clumping Clay",
        rating: 9.4,
        image: "https://images.unsplash.com/photo-1615789591457-74a63395c990?w=400&q=80",
        summary: "The gold standard for clumping clay litter. Exceptional dust control and rock-solid clumps.",
        tags: ["clay", "clumping", "low-dust", "unscented", "multi-cat"]
    },
    {
        id: 'worlds-best',
        name: "World's Best Cat Litter",
        category: "Natural/Corn",
        rating: 8.8,
        image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=80",
        summary: "Eco-friendly corn-based litter that's flushable and biodegradable. Great for environmentally conscious cat owners.",
        tags: ["natural", "corn", "flushable", "eco-friendly", "biodegradable"]
    },
    {
        id: 'arm-hammer-clump-seal',
        name: "Arm & Hammer Clump & Seal",
        category: "Clumping Clay",
        rating: 9.1,
        image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&q=80",
        summary: "Excellent odor control with 7-day guarantee. Strong clumping but can be dusty.",
        tags: ["clay", "clumping", "odor-control", "scented"]
    },
    {
        id: 'prettylitter',
        name: "PrettyLitter",
        category: "Crystal/Silica",
        rating: 8.5,
        image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&q=80",
        summary: "Health-monitoring crystal litter that changes color. Subscription-based but convenient.",
        tags: ["crystal", "silica", "health-monitoring", "lightweight", "subscription"]
    },
    {
        id: 'boxiecat-premium',
        name: "Boxiecat Premium Clumping",
        category: "Clumping Clay",
        rating: 9.2,
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&q=80",
        summary: "Premium clay with flat-top clumping technology. Excellent for multi-cat households.",
        tags: ["clay", "clumping", "premium", "multi-cat", "low-tracking"]
    },
    {
        id: 'purrify',
        name: "Purrify Probiotic Deodorizer",
        category: "Litter Additive",
        rating: 9.6,
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&q=80",
        summary: "Game-changing probiotic additive that eliminates odor at the source. Works with any litter.",
        tags: ["additive", "probiotic", "odor-control", "natural", "budget-hack"]
    }
];

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';

    const results = allProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.summary.toLowerCase().includes(query.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <h1 className="font-display text-4xl font-bold mb-2">
                        Search Results for <span className="text-primary">&quot;{query}&quot;</span>
                    </h1>
                    <p className="text-muted-foreground mb-8">{results.length} products found</p>

                    {results.length === 0 ? (
                        <div className="text-center py-20 bg-secondary/30 rounded-3xl">
                            <h2 className="text-2xl font-bold mb-4">No results found</h2>
                            <p className="text-muted-foreground mb-8">Try searching for &quot;clay&quot;, &quot;natural&quot;, &quot;dust&quot;, or &quot;odor&quot;.</p>
                            <Link href="/" className="bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary/90 transition-colors">
                                Return Home
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="grid gap-6 mb-12">
                                {results.map(product => (
                                    <Link key={product.id} href={`/reviews/${product.id}`}>
                                        <div className="bg-card border border-border p-6 rounded-2xl hover:shadow-md transition-all flex flex-col md:flex-row gap-6 group">
                                            <div className="w-full md:w-48 h-48 bg-secondary rounded-xl overflow-hidden shrink-0">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">{product.category}</span>
                                                    <div className="flex items-center gap-1 text-amber-500">
                                                        <Star className="w-4 h-4 fill-current" />
                                                        <span className="font-bold text-sm">{product.rating}</span>
                                                    </div>
                                                </div>
                                                <h2 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h2>
                                                <p className="text-muted-foreground mb-4">{product.summary}</p>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {product.tags.slice(0, 4).map(tag => (
                                                        <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex items-center text-sm font-semibold text-primary">
                                                    Read Review <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Purrify Suggestion */}
                            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
                                <div className="flex items-start gap-4">
                                    <div className="bg-emerald-500 p-3 rounded-xl shrink-0">
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-display text-xl font-bold text-emerald-900 mb-2">
                                            Pro Tip: Boost Any Litter&apos;s Performance
                                        </h3>
                                        <p className="text-emerald-700 mb-4">
                                            No matter which litter you choose, adding Purrify probiotic deodorizer can extend its life by 2x and eliminate odor at the source.
                                        </p>
                                        <PurrifyLink variant="button">
                                            Learn About Purrify
                                        </PurrifyLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="p-12 text-center">Loading...</div>}>
            <SearchContent />
        </Suspense>
    );
}
