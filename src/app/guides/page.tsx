import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function GuidesPage() {
    return (
        <div className="min-h-screen bg-background pt-24">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
                        Expert Guides
                    </span>
                    <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                        Cat Care <span className="text-primary">Knowledge Base</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Deep dives into everything from litter box behavior to health tips.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        "How to Choose the Right Litter Box",
                        "Why Your Cat Stopped Using the Litter Box",
                        "The Truth About Silica vs Clay",
                        "How to Transition Cat Litter Brands",
                        "Best Ways to Control Order in Small Apartments",
                        "Understanding Cat Litter Allergies"
                    ].map((title, i) => (
                        <div key={i} className="bg-card border border-border p-8 rounded-3xl hover:shadow-lg transition-all group cursor-pointer">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <BookOpen className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{title}</h3>
                            <p className="text-muted-foreground mb-6">Coming soon...</p>
                            <span className="text-sm font-bold text-primary">Read Guide &rarr;</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
