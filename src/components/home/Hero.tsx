'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { FadeUp, FadeIn, StaggerChildren } from '@/components/ui/motion';

export function Hero() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[0%] right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <StaggerChildren className="max-w-4xl mx-auto" staggerDelay={0.15}>
          {/* Badge */}
          <FadeUp className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-full px-5 py-2 mb-8 backdrop-blur-md shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-bold tracking-wide uppercase">2,847 Hours of Lab Testing • Zero Sponsored Reviews</span>
          </FadeUp>

          {/* Headline */}
          <FadeUp>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium mb-8 leading-[1.05] tracking-tight text-foreground">
              We Spent <span className="text-primary font-bold">$47,000</span> Testing Every Major <span className="text-gradient-gold italic pr-2">Cat Litter</span> Brand. <br className="hidden md:block" /> Here&apos;s What Actually Works.
            </h1>
          </FadeUp>

          {/* Subheadline (Hormozi Style) */}
          <FadeUp delay={0.2} className="max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-4">
              <span className="font-bold text-destructive">93% of cat litters fail</span> our odor control test by week 3.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Stop wasting money on litters that <span className="font-semibold text-foreground">clump like wet sand</span>, <span className="font-semibold text-foreground">track across your house</span>, or <span className="font-semibold text-foreground">smell like a zoo</span>. We spent 2,847 hours testing 547 brands so you don't have to.
            </p>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-accent to-amber-500 text-white font-display font-bold text-xl rounded-full shadow-xl shadow-accent/30 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
              <span className="relative z-10">See What Actually Works</span>
              <ArrowRight className="w-6 h-6 relative z-10" />
            </button>
            <Link href="/methodology" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-primary/20 text-foreground font-bold text-lg rounded-full hover:bg-white hover:border-primary/50 transition-all duration-300 inline-flex items-center justify-center">
              How We Test
            </Link>
          </FadeUp>

          {/* Search Bar (Secondary) */}
          <FadeUp delay={0.5} className="max-w-lg mx-auto relative group">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/30 transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <form onSubmit={handleSearch} className={`relative flex items-center bg-white border-2 transition-all duration-300 rounded-full overflow-hidden ${searchFocused ? 'border-primary ring-4 ring-primary/10' : 'border-border'}`}>
              <Search className="ml-4 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search 547+ brutally honest reviews..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="border-none shadow-none focus-visible:ring-0 text-base py-6 bg-transparent"
              />
              <button type="submit" className="mr-2 bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </FadeUp>

        </StaggerChildren>
      </div>

      {/* Floating Cats (Decorations) - Positioned absolutely to frame the content */}
      <FadeIn delay={0.8} className="absolute top-1/2 -translate-y-1/2 left-[2%] hidden xl:block pointer-events-none">
        <div className="relative w-64 xl:w-72 aspect-[3/4] rounded-3xl overflow-hidden rotate-[-6deg] shadow-2xl border-4 border-white/50 bg-white/10 backdrop-blur-sm">
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80" alt="Cat" className="w-full h-full object-cover opacity-90" />
        </div>
      </FadeIn>
      <FadeIn delay={1.0} className="absolute top-1/2 -translate-y-1/2 right-[2%] hidden xl:block pointer-events-none">
        <div className="relative w-64 xl:w-72 aspect-[3/4] rounded-3xl overflow-hidden rotate-[6deg] shadow-2xl border-4 border-white/50 bg-white/10 backdrop-blur-sm">
          <img src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&q=80" alt="Cat" className="w-full h-full object-cover opacity-90" />
        </div>
      </FadeIn>

      {/* Mobile Decorative Elements */}
      <div className="xl:hidden absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
        <FadeIn delay={0.8}>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg border border-primary/10">
            <span className="text-2xl">🐱</span>
            <span className="text-xs font-bold text-primary">547+ Reviews</span>
          </div>
        </FadeIn>
        <FadeIn delay={1.0}>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg border border-accent/10">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold text-accent">Lab Tested</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
