import Link from "next/link";
import { CheckCircle2, Beaker, Clock, DollarSign, Sparkles, ArrowRight } from "lucide-react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PurrifyLink } from "@/components/reviews/PurrifyLink";

export default function MethodologyPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-20">
                <div className="max-w-4xl mx-auto px-6 py-12">
                    <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
                        Our <span className="text-primary">Testing Methodology</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-12">
                        How we test 500+ cat litters to find the ones that actually work.
                    </p>

                    <div className="prose prose-lg prose-emerald max-w-none text-muted-foreground">
                        
                        <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                            <Beaker className="w-6 h-6 text-primary" />
                            Lab Testing Protocol
                        </h2>
                        <p className="mb-6">
                            Unlike other review sites that just aggregate Amazon reviews, we actually buy and test every single product. 
                            We spent over $47,000 in our first year of testing to set up a dedicated lab.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                            <div className="bg-secondary/30 rounded-xl p-6 border border-border">
                                <Clock className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold text-foreground mb-2">2,847 Hours</h3>
                                <p className="text-sm text-muted-foreground">Total testing time across all products</p>
                            </div>
                            <div className="bg-secondary/30 rounded-xl p-6 border border-border">
                                <DollarSign className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold text-foreground mb-2">$47,000+</h3>
                                <p className="text-sm text-muted-foreground">Invested in products and equipment</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-foreground mb-4">What We Test</h2>
                        <ul className="space-y-4 mb-12">
                            {[
                                "Dust levels (measured with particle counter)",
                                "Clumping strength (weight and integrity tests)",
                                "Odor control (ammonia levels over 4 weeks)",
                                "Tracking (measured area of spread)",
                                "Value (cost per day of effective use)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                    <span className="text-foreground font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mb-4">Our Standards</h2>
                        <ul className="space-y-4 mb-12">
                            {[
                                "We buy all products ourselves (Zero freebies)",
                                "We test for a minimum of 2 weeks per product",
                                "We use scientific tools to measure dust levels",
                                "We weigh clumps to measure efficiency",
                                "We test with real cats in real homes"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                    <span className="text-foreground font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mb-4">Why Trust Us?</h2>
                        <p className="mb-8">
                            Because we&apos;re cat owners who got tired of the lies. &quot;99% Dust Free&quot; usually means &quot;Clouds of Choking Dust&quot;. 
                            We&apos;re here to expose the marketing fluff and give you the raw data.
                        </p>

                        {/* Purrify Discovery Section */}
                        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200 my-12 not-prose">
                            <div className="flex items-start gap-4">
                                <div className="bg-emerald-500 p-3 rounded-xl shrink-0">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl font-bold text-emerald-900 mb-2">
                                        Our Biggest Discovery
                                    </h3>
                                    <p className="text-emerald-700 mb-4">
                                        After testing 500+ litters, we discovered that adding a probiotic deodorizer like Purrify 
                                        to ANY litter dramatically improves performance. It&apos;s now part of our standard testing protocol 
                                        to measure how litters perform both with and without enhancement.
                                    </p>
                                    <PurrifyLink variant="badge">
                                        Learn About Purrify
                                    </PurrifyLink>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-12">
                            <Link href="/reviews" className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary/90 transition-colors">
                                See Our Reviews <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/compare" className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground font-bold py-3 px-6 rounded-xl hover:bg-secondary/80 transition-colors">
                                Compare Products
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
