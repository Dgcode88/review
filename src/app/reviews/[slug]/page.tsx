import { ReviewHero } from "@/components/reviews/ReviewHero";
import { ScoreGauge } from "@/components/reviews/ScoreGauge";
import { ProsCons } from "@/components/reviews/ProsCons";
import { VerdictCard } from "@/components/reviews/VerdictCard";
import { dummyReview } from "@/lib/data/dummy-review";
import { Metadata } from "next";
// In a real app, we'd fetch data based on params.slug

export const metadata: Metadata = {
    title: "Dr. Elsey's Ultra Review: We Tested It For 90 Days",
    description: "Is Dr. Elsey's Ultra actually dust-free? We spent $47k testing it. Read our brutal honest review.",
};

export default function ReviewPage({ params }: { params: { slug: string } }) {
    // Mock data fetch
    const review = dummyReview;

    return (
        <div className="min-h-screen bg-background">
            <ReviewHero review={review} />

            <main className="container mx-auto px-6 py-16 flex flex-col lg:flex-row gap-16">
                {/* Main Content Column */}
                <article className="lg:w-2/3">

                    {/* Quick Verdict (Top of article for Hormozi style) */}
                    <VerdictCard
                        verdict={review.verdict.summary}
                        bestFor={review.verdict.bestFor}
                        skipIf={review.verdict.skipIf}
                        score={review.rating}
                    />

                    {/* Pros & Cons */}
                    <ProsCons pros={review.verdict.pros} cons={review.verdict.cons} />

                    {/* Detailed Scores */}
                    <div className="my-16">
                        <h2 className="font-display text-3xl font-bold mb-8">Performance Breakdown</h2>
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                            <ScoreGauge
                                score={review.scores.dust}
                                label="Dust Control"
                                description="Measured 0.03mg particulates. Effectively zero visible dust."
                            />
                            <ScoreGauge
                                score={review.scores.clumping}
                                label="Clumping"
                                description="Concrete-hard clumps that survive a 3-foot drop test."
                            />
                            <ScoreGauge
                                score={review.scores.odor}
                                label="Odor Control"
                                description="Good lock-in of ammonia, but relies on scooping daily."
                            />
                            <ScoreGauge
                                score={review.scores.tracking}
                                label="Tracking"
                                description="Medium grain size means some tracking, but better than lightweight."
                            />
                        </div>
                    </div>

                    {/* Markdown Content Area */}
                    <div className="prose prose-lg prose-emerald max-w-none">
                        {/* We're doing a simple render here, normally we'd use a Markdown renderer */}
                        <div dangerouslySetInnerHTML={{ __html: review.content.replace(/\n/g, '<br />').replace(/## (.*)/g, '<h2 class="text-3xl font-bold mt-12 mb-6 text-foreground">$1</h2>').replace(/### (.*)/g, '<h3 class="text-xl font-bold mt-8 mb-4 text-foreground">$1</h3>') }} />
                    </div>

                </article>

                {/* Sticky Sidebar */}
                <aside className="lg:w-1/3 relative hidden lg:block">
                    <div className="sticky top-24 space-y-8">
                        {/* Key Specs Card */}
                        <div className="bg-white border border-border rounded-3xl p-8 shadow-sm">
                            <h3 className="font-bold text-lg mb-6 border-b border-border pb-4">Key Specs</h3>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Price</span>
                                    <span className="font-bold">{review.price}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Daily Cost</span>
                                    <span className="font-bold text-emerald-600">{review.specs.avgDailyCost}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Type</span>
                                    <span className="font-bold">{review.category}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Lasts</span>
                                    <span className="font-bold">{review.specs.lastedWeeks}</span>
                                </div>
                            </div>

                            <button className="w-full mt-8 bg-foreground text-background py-4 rounded-xl font-bold hover:bg-foreground/90 transition-colors shadow-lg">
                                Check Price on Amazon
                            </button>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
}
