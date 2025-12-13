'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';
import { ComparisonTable, DetailedProduct } from '@/components/compare/ComparisonTable';
import { useComparison } from '@/context/ComparisonContext';
import { FadeUp } from '@/components/ui/motion';

// Mock DB - In real app, fetch from CMS/DB
const PRODUCT_DB: Record<string, DetailedProduct> = {
    "dr-elseys-ultra": {
        id: "dr-elseys-ultra",
        name: "Dr. Elsey's Ultra",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&q=80",
        overallScore: 9.4,
        price: "$24.99",
        weight: "40 lbs",
        costPerLb: "$0.62",
        costPerDay: "$0.51",
        type: "Clay",
        scores: {
            dust: 9.0,
            dustMeasurement: "0.03mg",
            clumping: 10.0,
            clumpingStatus: "Rock-solid",
            odor: 8.0,
            odorStatus: "85% reduction",
            tracking: 7.0,
            trackingStatus: "Moderate",
            value: 8.0
        },
        features: {
            scented: false,
            flushable: false,
            biodegradable: false,
            lightweight: false,
            multiCat: true
        },
        longevity: {
            single: "7 weeks",
            multi: "4.5 weeks"
        },
        verdict: {
            bestFor: "Dust-free performance"
        },
        reviewUrl: "/reviews/dr-elseys-ultra",
        buyUrl: "https://amazon.com"
    },
    "worlds-best": {
        id: "worlds-best",
        name: "World's Best Cat Litter",
        image: "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5d0?w=200&q=80",
        overallScore: 9.1,
        price: "$29.99",
        weight: "28 lbs",
        costPerLb: "$1.07",
        costPerDay: "$0.58",
        type: "Corn",
        scores: {
            dust: 7.0,
            dustMeasurement: "0.12mg",
            clumping: 9.0,
            clumpingStatus: "Excellent",
            odor: 8.0,
            odorStatus: "85% reduction",
            tracking: 9.0,
            trackingStatus: "Minimal",
            value: 7.0
        },
        features: {
            scented: false,
            flushable: true,
            biodegradable: true,
            lightweight: true,
            multiCat: true
        },
        longevity: {
            single: "6 weeks",
            multi: "4 weeks"
        },
        verdict: {
            bestFor: "Eco-conscious / Flushing"
        },
        reviewUrl: "/reviews",
        buyUrl: "https://amazon.com"
    },
    "arm-hammer-clump-seal": {
        id: "arm-hammer-clump-seal",
        name: "Arm & Hammer",
        image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=200&q=80",
        overallScore: 8.7,
        price: "$16.99",
        weight: "38 lbs",
        costPerLb: "$0.45",
        costPerDay: "$0.43",
        type: "Clay",
        scores: {
            dust: 6.0,
            dustMeasurement: "0.18mg",
            clumping: 8.0,
            clumpingStatus: "Good",
            odor: 9.0,
            odorStatus: "90% reduction",
            tracking: 6.0,
            trackingStatus: "Moderate",
            value: 9.0
        },
        features: {
            scented: true,
            flushable: false,
            biodegradable: false,
            lightweight: false,
            multiCat: true
        },
        longevity: {
            single: "5 weeks",
            multi: "3.5 weeks"
        },
        verdict: {
            bestFor: "Budget & Odor"
        },
        reviewUrl: "/reviews",
        buyUrl: "https://amazon.com"
    }
};

function ComparisonLoader() {
    const searchParams = useSearchParams();
    const { products: contextProducts } = useComparison();
    const [displayProducts, setDisplayProducts] = useState<DetailedProduct[]>([]);

    useEffect(() => {
        // Preference 1: URL query param (sharing)
        const urlIds = searchParams.get('products')?.split(',');

        // Preference 2: Context state
        const contextIds = contextProducts.map(p => p.id);

        // Merge (prefer URL if present, else Context)
        const targetIds = (urlIds && urlIds.length > 0) ? urlIds : contextIds;

        const resolved = targetIds
            .map(id => PRODUCT_DB[id])
            .filter(Boolean); // Remove not found

        setDisplayProducts(resolved);
    }, [searchParams, contextProducts]);

    return (
        <section className="container mx-auto px-6 mb-24">
            <FadeUp>
                <ComparisonTable products={displayProducts} />
            </FadeUp>
        </section>
    );
}

export default function ComparePage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-20">
                <section className="container mx-auto px-6 mb-12 text-center">
                    <h1 className="font-display text-4xl font-bold mb-4">Compare Cat Litters</h1>
                    <p className="text-xl text-muted-foreground">See the real data side-by-side. No fluff.</p>
                </section>

                <Suspense fallback={<div className="text-center py-12">Loading comparison...</div>}>
                    <ComparisonLoader />
                </Suspense>

            </main>
            <Footer />
        </div>
    );
}
