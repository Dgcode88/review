"use client";

import { ProductReview } from "@/lib/types/review";
import { FadeIn, FadeUp } from "@/components/ui/motion";
import { Star, Award, ShieldCheck, Clock } from "lucide-react";
import Image from "next/image";

interface ReviewHeroProps {
    review: ProductReview;
}

export function ReviewHero({ review }: ReviewHeroProps) {
    return (
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-foreground text-background overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* Left: Content */}
                    <div className="lg:w-1/2">
                        {/* Category/Breadcrumb feel */}
                        <FadeUp className="flex items-center gap-2 mb-6 text-sm font-bold tracking-widest uppercase text-white/50">
                            <span>Review</span>
                            <span className="w-1 h-1 bg-accent rounded-full" />
                            <span className="text-accent">{review.category}</span>
                        </FadeUp>

                        <FadeUp delay={0.1}>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                {review.name} <span className="text-white/30 text-3xl block mt-2 font-normal">Review & Test Results</span>
                            </h1>
                        </FadeUp>

                        {/* Quick Stats Grid */}
                        <FadeUp delay={0.2} className="grid grid-cols-2 gap-4 mb-8">
                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                                <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase mb-1">
                                    <Star className="w-3 h-3 text-accent" /> Our Score
                                </div>
                                <div className="text-3xl font-bold text-white">{review.rating}<span className="text-base text-white/30 font-normal">/10</span></div>
                            </div>

                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                                <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase mb-1">
                                    <Clock className="w-3 h-3 text-primary" /> Tested For
                                </div>
                                <div className="text-3xl font-bold text-white">{review.specs.lastedWeeks}</div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.3} className="prose prose-invert prose-lg text-white/70 max-w-none">
                            <p>{review.intro}</p>
                        </FadeUp>
                    </div>

                    {/* Right: Image */}
                    <FadeIn delay={0.4} className="lg:w-1/2 relative">
                        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-white/5">
                            <Image
                                src={review.image}
                                alt={review.name}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />

                            {review.badge && (
                                <div className="absolute top-6 left-6 bg-accent text-foreground px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg flex items-center gap-2">
                                    <Award className="w-4 h-4" /> {review.badge}
                                </div>
                            )}
                        </div>

                        {/* Trust Badge Floating */}
                        <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-12 bg-[#0D261F] border border-white/10 p-5 rounded-2xl shadow-xl flex items-center gap-4 hidden md:flex">
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                <ShieldCheck className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <div className="text-white font-bold">100% Independent</div>
                                <div className="text-white/50 text-xs"> purchased with our own money</div>
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}
