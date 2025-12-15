import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-20">
                <div className="max-w-4xl mx-auto px-6 py-12">
                    <h1 className="font-display text-5xl md:text-6xl font-bold mb-8">
                        About <span className="text-primary">ReviewCatLitter</span>
                    </h1>

                    <div className="prose prose-lg prose-emerald max-w-none text-muted-foreground">
                        <p className="text-xl mb-8">
                            We exist for one reason: To help you stop wasting money on cat litter that doesn&apos;t work.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mb-4">Our Methodology</h2>
                        <p className="mb-6">
                            Unlike other review sites that just aggregate Amazon reviews, we actually buy and test every single product. We spent over $47,000 in our first year of testing to set up a dedicated lab.
                        </p>

                        <ul className="space-y-4 mb-12">
                            {[
                                "We buy all products ourselves (Zero freebies)",
                                "We test for a minimum of 2 weeks per product",
                                "We use scientific tools to measure dust levels",
                                "We weigh clumps to measure efficiency"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                    <span className="text-foreground font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mb-4">Why Trust Us?</h2>
                        <p className="mb-8">
                            Because we&apos;re cat owners who got tired of the lies. &quot;99% Dust Free&quot; usually means &quot;Clouds of Choking Dust&quot;. We&apos;re here to expose the marketing fluff and give you the raw data.
                        </p>

                        <Link href="/reviews" className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary/90 transition-colors">
                            See Our Reviews <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
