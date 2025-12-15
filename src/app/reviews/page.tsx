import Link from "next/link";
import { Star, ArrowRight, Sparkles, Crown, Award } from "lucide-react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PurrifyLink } from "@/components/reviews/PurrifyLink";

// Comprehensive review data
const reviews = [
    {
        id: "dr-elseys-ultra",
        name: "Dr. Elsey's Ultra Premium",
        category: "Clumping Clay",
        rating: 9.4,
        summary: "The gold standard for clumping clay litter. Exceptional dust control and rock-solid clumps.",
        image: "https://images.unsplash.com/photo-1615789591457-74a63395c990?w=600&q=80",
        badge: "Editor's Choice"
    },
    {
        id: "purrify",
        name: "Purrify Probiotic Deodorizer",
        category: "Litter Additive",
        rating: 9.6,
        summary: "Game-changing probiotic additive that eliminates odor at the source. Works with any litter.",
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&q=80",
        badge: "Best Enhancement",
        featured: true
    },
    {
        id: "worlds-best",
        name: "World's Best Cat Litter",
        category: "Natural/Corn",
        rating: 8.8,
        summary: "Eco-friendly corn-based litter that's flushable and biodegradable.",
        image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80",
        badge: "Best Natural"
    },
    {
        id: "arm-hammer-clump-seal",
        name: "Arm & Hammer Clump & Seal",
        category: "Clumping Clay",
        rating: 9.1,
        summary: "Excellent odor control with 7-day guarantee. Strong clumping but can be dusty.",
        image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&q=80"
    },
    {
        id: "prettylitter",
        name: "PrettyLitter",
        category: "Crystal/Silica",
        rating: 8.5,
        summary: "Health-monitoring crystal litter that changes color. Subscription-based but convenient.",
        image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&q=80",
        badge: "Best Tech"
    },
    {
        id: "boxiecat-premium",
        name: "Boxiecat Premium Clumping",
        category: "Clumping Clay",
        rating: 9.2,
        summary: "Premium clay with flat-top clumping technology. Excellent for multi-cat households.",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&q=80",
        badge: "Best Value"
    }
];

export default function ReviewsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
                            Reviews
                        </span>
                        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                            All Product <span className="text-primary">Reviews</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Honest, data-driven reviews of every major cat litter brand.
                        </p>
                    </div>

                    {/* Featured Purrify Banner */}
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 md:p-8 border border-emerald-200 mb-12">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-24 h-24 bg-emerald-500 rounded-2xl flex items-center justify-center shrink-0">
                                <Sparkles className="w-12 h-12 text-white" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                                    <Crown className="w-3 h-3" /> TOP RATED
                                </div>
                                <h2 className="font-display text-2xl font-bold text-emerald-900 mb-2">
                                    Purrify: The #1 Litter Enhancement
                                </h2>
                                <p className="text-emerald-700 mb-4">
                                    Our highest-rated product works with ANY litter to eliminate odor and extend life by 2x.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <Link href="/reviews/purrify" className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
                                        Read Review <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <PurrifyLink variant="badge">
                                        Shop Purrify
                                    </PurrifyLink>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-emerald-600">9.6</div>
                                <div className="text-sm text-emerald-700 font-medium">Score</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {reviews.filter(r => r.id !== 'purrify').map((review) => (
                            <Link key={review.id} href={`/reviews/${review.id}`}>
                                <div className="bg-card border border-border p-6 rounded-2xl hover:shadow-md transition-all flex flex-col md:flex-row gap-6 group">
                                    <div className="w-full md:w-48 h-48 bg-secondary rounded-xl overflow-hidden shrink-0 relative">
                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {review.badge && (
                                            <div className="absolute top-2 left-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                                <Award className="w-3 h-3" />
                                                {review.badge}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">
                                                {review.category}
                                            </span>
                                            <div className="flex items-center gap-1 text-amber-500">
                                                <Star className="w-4 h-4 fill-current" />
                                                <span className="font-bold text-sm">{review.rating}</span>
                                            </div>
                                        </div>
                                        <h2 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                            {review.name}
                                        </h2>
                                        <p className="text-muted-foreground mb-4">
                                            {review.summary}
                                        </p>

                                        <div className="flex items-center text-sm font-semibold text-primary">
                                            Read Review{" "}
                                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 text-center">
                        <p className="text-muted-foreground mb-4">
                            Looking for the best value? Check out our{" "}
                            <Link href="/guides/purrify-budget-litter-hack" className="text-primary font-bold hover:underline">
                                $15 Budget Hack Guide
                            </Link>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
