import Link from "next/link";
import { BookOpen, Sparkles, Clock, DollarSign, ArrowRight } from "lucide-react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PurrifyLink } from "@/components/reviews/PurrifyLink";

const guides = [
    {
        title: "How to Extend Cat Litter Life by 2x",
        slug: "extend-cat-litter-life",
        description: "Save $240/year with this simple probiotic hack that doubles your litter's lifespan.",
        icon: Clock,
        featured: true,
        readTime: "8 min read"
    },
    {
        title: "The $15 Budget Litter Hack",
        slug: "purrify-budget-litter-hack",
        description: "Turn any cheap litter into premium performance with one simple addition.",
        icon: DollarSign,
        featured: true,
        readTime: "5 min read"
    },
    {
        title: "How to Choose the Right Litter Box",
        slug: null,
        description: "Size, shape, covered vs uncovered - everything you need to know.",
        icon: BookOpen,
        featured: false,
        readTime: "Coming soon"
    },
    {
        title: "Why Your Cat Stopped Using the Litter Box",
        slug: null,
        description: "Common causes and solutions for litter box avoidance.",
        icon: BookOpen,
        featured: false,
        readTime: "Coming soon"
    },
    {
        title: "The Truth About Silica vs Clay",
        slug: null,
        description: "A deep dive into the pros and cons of each litter type.",
        icon: BookOpen,
        featured: false,
        readTime: "Coming soon"
    },
    {
        title: "How to Transition Cat Litter Brands",
        slug: null,
        description: "Step-by-step guide to switching litters without upsetting your cat.",
        icon: BookOpen,
        featured: false,
        readTime: "Coming soon"
    },
];

export default function GuidesPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
                            Expert Guides
                        </span>
                        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                            Cat Care <span className="text-primary">Knowledge Base</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Deep dives into everything from litter box behavior to money-saving hacks.
                        </p>
                    </div>

                    {/* Featured Guides */}
                    <div className="mb-16">
                        <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                            <Sparkles className="w-6 h-6 text-accent" />
                            Most Popular Guides
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {guides.filter(g => g.featured).map((guide, i) => (
                                <Link 
                                    key={i} 
                                    href={guide.slug ? `/guides/${guide.slug}` : '#'}
                                    className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 p-8 rounded-3xl hover:shadow-xl transition-all group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <guide.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{guide.readTime}</span>
                                            <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-emerald-700 transition-colors">{guide.title}</h3>
                                            <p className="text-emerald-700 mb-4">{guide.description}</p>
                                            <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 group-hover:gap-3 transition-all">
                                                Read Guide <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* All Guides */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {guides.filter(g => !g.featured).map((guide, i) => (
                            <div key={i} className="bg-card border border-border p-8 rounded-3xl hover:shadow-lg transition-all group cursor-pointer">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <guide.icon className="w-6 h-6 text-primary" />
                                </div>
                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{guide.readTime}</span>
                                <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{guide.title}</h3>
                                <p className="text-muted-foreground mb-6">{guide.description}</p>
                                <span className="text-sm font-bold text-primary">Read Guide &rarr;</span>
                            </div>
                        ))}
                    </div>

                    {/* Purrify CTA */}
                    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl p-10 border-2 border-amber-200 text-center">
                        <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                        <h2 className="font-display text-3xl font-bold text-amber-900 mb-4">
                            The Secret Weapon Behind Our Top Guides
                        </h2>
                        <p className="text-lg text-amber-700 max-w-2xl mx-auto mb-6">
                            Most of our money-saving hacks involve one simple product: Purrify probiotic deodorizer. 
                            It&apos;s the single best investment you can make for your litter box.
                        </p>
                        <PurrifyLink variant="button">
                            Learn About Purrify
                        </PurrifyLink>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
