'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import { dummyReview } from '@/lib/data/dummy-review';
import { ProductReview } from '@/lib/types/review';
import { Star, ArrowRight } from 'lucide-react';

// Mocking more data for the search demo
const moreReviews: ProductReview[] = [
    dummyReview,
    {
        ...dummyReview,
        id: 'worlds-best-cat-litter',
        name: "World's Best Cat Litter",
        category: "Natural/Eco",
        rating: 8.8,
        specs: { ...dummyReview.specs, dustLevel: "0.5mg" },
        verdict: { ...dummyReview.verdict, summary: "Great natural option." }
    },
    {
        ...dummyReview,
        id: 'arm-and-hammer-slide',
        name: "Arm & Hammer Slide",
        category: "Clumping Clay",
        rating: 9.1,
        specs: { ...dummyReview.specs, dustLevel: "0.1mg" },
        verdict: { ...dummyReview.verdict, summary: "Amazing clumping, strong scent." }
    }
];

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';

    const results = moreReviews.filter(review =>
        review.name.toLowerCase().includes(query.toLowerCase()) ||
        review.category.toLowerCase().includes(query.toLowerCase()) ||
        review.verdict.summary.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
            <h1 className="font-display text-4xl font-bold mb-8">
                Search Results for <span className="text-primary">&quot;{query}&quot;</span>
            </h1>

            {results.length === 0 ? (
                <div className="text-center py-20 bg-secondary/30 rounded-3xl">
                    <h2 className="text-2xl font-bold mb-4">No results found</h2>
                    <p className="text-muted-foreground mb-8">Try searching for &quot;clay&quot;, &quot;natural&quot;, or &quot;dust&quot;.</p>
                    <Link href="/" className="btn-primary">Return Home</Link>
                </div>
            ) : (
                <div className="grid gap-6">
                    {results.map(review => (
                        <Link key={review.id} href={`/reviews/${review.id}`}>
                            <div className="bg-card border border-border p-6 rounded-2xl hover:shadow-md transition-all flex flex-col md:flex-row gap-6 group">
                                <div className="w-full md:w-48 h-48 bg-secondary rounded-xl overflow-hidden shrink-0">
                                    <img src={review.image} alt={review.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">{review.category}</span>
                                        <div className="flex items-center gap-1 text-amber-500">
                                            <Star className="w-4 h-4 fill-current" />
                                            <span className="font-bold text-sm">{review.rating}</span>
                                        </div>
                                    </div>
                                    <h2 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{review.name}</h2>
                                    <p className="text-muted-foreground mb-4">{review.verdict.summary}</p>

                                    <div className="flex items-center text-sm font-semibold text-primary">
                                        Read Review <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
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
