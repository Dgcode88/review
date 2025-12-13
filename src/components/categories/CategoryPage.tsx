'use client';

import { ReactNode, useState } from 'react';
import { Header } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';
import { QuickPickCard } from './ui/QuickPickCard';
import { FilterSidebar } from './ui/FilterSidebar';
import { CategoryComparisonTable, ProductSpec } from './ui/CategoryComparisonTable';
import { FadeUp, StaggerChildren } from '@/components/ui/motion';
import { ArrowUpDown, SlidersHorizontal, Check } from 'lucide-react';
import { ScoreBadge } from '@/components/reviews/ui/ScoreBadge';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ProductGridItem {
    id: string;
    name: string;
    image: string;
    score: number;
    price: string;
    type: string;
    weight: string;
    quickTake: string;
    pros: string[];
    cons: string[];
    reviewUrl: string;
    priceCheckUrl: string;
    tags: string[]; // For filtering
}

interface CategoryPageProps {
    title: string;
    description: string;
    stats: {
        tested: number;
        duration: string;
        priceRange: string;
    };
    quickPicks: {
        overall: ProductGridItem & { bestFor: string };
        value: ProductGridItem & { bestFor: string };
        niche: ProductGridItem & { bestFor: string; nicheLabel?: string };
    };
    products: ProductGridItem[]; // Full list
    comparisonProducts: ProductSpec[]; // Comparison data
    faq: { question: string; answer: string }[];
    children: ReactNode; // Buying guide
}

export function CategoryPage({
    title,
    description,
    stats,
    quickPicks,
    products,
    comparisonProducts,
    faq,
    children
}: CategoryPageProps) {

    const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
    const [sortBy, setSortBy] = useState('rating');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Filters Configuration (You might bubble this up in a real app)
    const filterConfig = [
        {
            id: 'price',
            label: 'Price',
            options: [
                { id: 'budget', label: 'Under $15' },
                { id: 'mid', label: '$15 - $25' },
                { id: 'premium', label: 'Over $25' },
            ]
        },
        {
            id: 'type',
            label: 'Material',
            options: [
                { id: 'clay', label: 'Clay' },
                { id: 'natural', label: 'Natural/Plant' },
                { id: 'crystal', label: 'Silica Gel' },
            ]
        },
        {
            id: 'feature',
            label: 'Features',
            options: [
                { id: 'unscented', label: 'Unscented' },
                { id: 'scented', label: 'Scented' },
                { id: 'lightweight', label: 'Lightweight' },
                { id: 'flushable', label: 'Flushable' },
            ]
        }
    ];

    const handleFilterChange = (groupId: string, optionId: string) => {
        setActiveFilters(prev => {
            const group = prev[groupId] || [];
            if (group.includes(optionId)) {
                return { ...prev, [groupId]: group.filter(id => id !== optionId) };
            } else {
                return { ...prev, [groupId]: [...group, optionId] };
            }
        });
    };

    // Filter Logic (Client-side for demo)
    const filteredProducts = products.filter(product => {
        // Logic would go here to match product tags/attributes against activeFilters
        // For MVP/Demo we pass through or implement basic check if tags exist
        if (Object.keys(activeFilters).length === 0 || Object.values(activeFilters).every(arr => arr.length === 0)) return true;

        // Basic implementation assuming product.tags matches filter IDs
        // This is a simplification. Real implementation needs mapping.
        return true;
    }).sort((a, b) => {
        if (sortBy === 'rating') return b.score - a.score;
        if (sortBy === 'price_low') return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        if (sortBy === 'price_high') return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        return 0;
    });

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-24 pb-20">

                {/* Category Hero */}
                <section className="container mx-auto px-6 mb-16 text-center max-w-4xl">
                    <FadeUp>
                        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground">{title}</h1>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-8">
                            {description}
                        </p>
                    </FadeUp>
                    <FadeUp delay={0.2} className="inline-flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-bold uppercase tracking-widest text-primary/80">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            Tested {stats.tested} Products
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            {stats.duration} Testing
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            Tested by Humans & Cats
                        </span>
                    </FadeUp>
                </section>

                {/* Quick Picks */}
                <section className="container mx-auto px-6 mb-24">
                    <h2 className="font-display text-2xl font-bold mb-8 flex items-center gap-2">
                        <span className="text-accent">★</span>
                        The Winners (Skip the Research)
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <FadeUp delay={0.3}>
                            <QuickPickCard
                                type="overall"
                                productName={quickPicks.overall.name}
                                image={quickPicks.overall.image}
                                score={quickPicks.overall.score}
                                bestFor={quickPicks.overall.bestFor}
                                reviewUrl={quickPicks.overall.reviewUrl}
                                priceCheckUrl={quickPicks.overall.priceCheckUrl}
                            />
                        </FadeUp>
                        <FadeUp delay={0.4}>
                            <QuickPickCard
                                type="value"
                                productName={quickPicks.value.name}
                                image={quickPicks.value.image}
                                score={quickPicks.value.score}
                                bestFor={quickPicks.value.bestFor}
                                reviewUrl={quickPicks.value.reviewUrl}
                                priceCheckUrl={quickPicks.value.priceCheckUrl}
                            />
                        </FadeUp>
                        <FadeUp delay={0.5}>
                            <QuickPickCard
                                type="niche"
                                productName={quickPicks.niche.name}
                                image={quickPicks.niche.image}
                                score={quickPicks.niche.score}
                                bestFor={quickPicks.niche.bestFor}
                                reviewUrl={quickPicks.niche.reviewUrl}
                                priceCheckUrl={quickPicks.niche.priceCheckUrl}
                            />
                        </FadeUp>
                    </div>
                </section>

                {/* Main Product List */}
                <section className="container mx-auto px-6 mb-24" id="all-reviews">
                    <div className="grid lg:grid-cols-12 gap-8">

                        {/* Sidebar Filters */}
                        <aside className="hidden lg:block lg:col-span-3">
                            <div className="sticky top-24">
                                <div className="flex items-center gap-2 font-bold text-lg mb-6">
                                    <SlidersHorizontal className="w-5 h-5" /> Filters
                                </div>
                                <FilterSidebar
                                    filters={filterConfig}
                                    activeFilters={activeFilters}
                                    onFilterChange={handleFilterChange}
                                />
                            </div>
                        </aside>

                        {/* Mobile Filter Toggle */}
                        <div className="lg:hidden col-span-12 mb-4">
                            <button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className="w-full flex items-center justify-center gap-2 py-3 border border-border rounded-xl font-bold"
                            >
                                <SlidersHorizontal className="w-4 h-4" /> Filters {Object.values(activeFilters).flat().length > 0 && `(${Object.values(activeFilters).flat().length})`}
                            </button>
                            {isFilterOpen && (
                                <div className="mt-4 p-4 border border-border rounded-xl bg-secondary/10">
                                    <FilterSidebar
                                        filters={filterConfig}
                                        activeFilters={activeFilters}
                                        onFilterChange={handleFilterChange}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Product Grid */}
                        <div className="lg:col-span-9 space-y-8">

                            {/* Toolbar */}
                            <div className="flex justify-between items-center pb-4 border-b border-border">
                                <span className="text-muted-foreground font-medium">{filteredProducts.length} Products Found</span>
                                <div className="flex items-center gap-2">
                                    <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
                                    <select
                                        className="bg-transparent font-bold text-foreground border-none focus:ring-0 cursor-pointer"
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                    >
                                        <option value="rating">Highest Rated</option>
                                        <option value="price_low">Lowest Price</option>
                                        <option value="price_high">Highest Price</option>
                                    </select>
                                </div>
                            </div>

                            {/* Cards */}
                            <StaggerChildren className="space-y-6">
                                {filteredProducts.map((product) => (
                                    <FadeUp key={product.id} className="bg-white border border-border rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 hover:shadow-lg transition-shadow">
                                        {/* Image & Score */}
                                        <div className="w-full md:w-56 flex-shrink-0 flex flex-col items-center">
                                            <div className="w-full aspect-square mb-4 relative">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                                                <div className="absolute top-0 right-0 md:hidden">
                                                    <ScoreBadge score={product.score} size="sm" />
                                                </div>
                                            </div>
                                            <div className="hidden md:flex flex-col items-center gap-2">
                                                <ScoreBadge score={product.score} size="lg" />
                                                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Our Score</span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
                                                <div>
                                                    <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{product.type}</div>
                                                    <Link href={product.reviewUrl} className="font-display text-2xl font-bold text-foreground hover:text-primary hover:underline">
                                                        {product.name}
                                                    </Link>
                                                </div>
                                                <div className="text-lg font-bold text-foreground">{product.price}</div>
                                            </div>

                                            {/* Quick Take */}
                                            <div className="bg-secondary/30 rounded-xl p-4 mb-6">
                                                <p className="font-medium text-foreground">{product.quickTake}</p>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                                <div className="space-y-1">
                                                    {product.pros.slice(0, 2).map((pro, i) => (
                                                        <div key={i} className="flex items-start gap-2 text-sm text-green-700">
                                                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                                            <span>{pro}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="space-y-1">
                                                    {product.cons.slice(0, 2).map((con, i) => (
                                                        <div key={i} className="flex items-start gap-2 text-sm text-red-700">
                                                            <span className="font-bold text-xs mt-0.5 px-1 bg-red-100 rounded">✗</span>
                                                            <span>{con}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-3">
                                                <Link href={product.reviewUrl} className="px-6 py-2.5 bg-foreground text-white font-bold rounded-lg hover:bg-black transition-colors">
                                                    Read Review
                                                </Link>
                                                <a href={product.priceCheckUrl} target="_blank" className="px-6 py-2.5 border border-border font-bold rounded-lg hover:bg-secondary transition-colors">
                                                    Check Price
                                                </a>
                                            </div>
                                        </div>
                                    </FadeUp>
                                ))}
                            </StaggerChildren>
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="container mx-auto px-6 mb-24">
                    <h2 className="font-display text-3xl font-bold mb-8 text-center">Compare All Products</h2>
                    <CategoryComparisonTable products={comparisonProducts} />
                </section>

                {/* Buying Guide */}
                <section className="container mx-auto px-6 mb-24">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-display prose-headings:font-bold prose-p:text-muted-foreground prose-a:text-primary">
                        {children}
                    </div>
                </section>

                {/* FAQ */}
                <section className="container mx-auto px-6 mb-24 max-w-3xl">
                    <h2 className="font-display text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {faq.map((item, i) => (
                            <div key={i} className="bg-white border border-border rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-3 text-foreground">{item.question}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
