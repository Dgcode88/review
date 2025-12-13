import { dummyReview } from "@/lib/data/dummy-review";
import { ProductReview } from "@/lib/types/review";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

// Mocking some data 
const reviews: ProductReview[] = [
    dummyReview,
    {
        ...dummyReview,
        id: "worlds-best-cat-litter",
        name: "World's Best Cat Litter",
        category: "Natural/Eco",
        rating: 8.8,
        specs: { ...dummyReview.specs, dustLevel: "0.5mg" },
        verdict: { ...dummyReview.verdict, summary: "Great natural option." },
        image: "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5d0?w=800&q=80"
    },
    {
        ...dummyReview,
        id: "arm-and-hammer-slide",
        name: "Arm & Hammer Slide",
        category: "Clumping Clay",
        rating: 9.1,
        specs: { ...dummyReview.specs, dustLevel: "0.1mg" },
        verdict: {
            ...dummyReview.verdict,
            summary: "Amazing clumping, strong scent.",
        },
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80"
    },
];

export default function ReviewsPage() {
    return (
        <div className="min-h-screen bg-background pt-24">
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

                <div className="grid gap-6">
                    {reviews.map((review) => (
                        <Link key={review.id} href={`/reviews/${review.id}`}>
                            <div className="bg-card border border-border p-6 rounded-2xl hover:shadow-md transition-all flex flex-col md:flex-row gap-6 group">
                                <div className="w-full md:w-48 h-48 bg-secondary rounded-xl overflow-hidden shrink-0">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
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
                                        {review.verdict.summary}
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
            </div>
        </div>
    );
}
