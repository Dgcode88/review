'use client';

import { useState } from 'react';
import { Search, Star, Sparkles, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function Hero() {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-foreground pt-20">
      {/* Premium Forest Background with reduced grain */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      {/* Ambient Light Effects - Adjusted for Forest Theme */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] animate-pulse delay-700" />

      {/* Floating Elements with Glassmorphism */}
      <div className="absolute top-32 left-[8%] hidden xl:block animate-fade-in delay-200">
        <div className="relative w-64 h-64 rounded-3xl overflow-hidden glass-dark rotate-[-6deg] hover:rotate-0 transition-transform duration-700 shadow-2xl border-white/10">
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80" alt="Happy cat" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity p-2 rounded-2xl" />
        </div>
      </div>

      <div className="absolute bottom-32 right-[8%] hidden xl:block animate-fade-in delay-500">
        <div className="relative w-56 h-56 rounded-3xl overflow-hidden glass-dark rotate-[6deg] hover:rotate-0 transition-transform duration-700 shadow-2xl border-white/10">
          <img src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&q=80" alt="Playful cat" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity p-2 rounded-2xl" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Premium Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-10 animate-fade-in backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-white/90 text-sm font-medium tracking-wide">The #1 Data-Driven Review Platform</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium mb-8 leading-[1.1] tracking-tight animate-slide-in-from-bottom">
          <span className="text-white">Find the </span>
          <span className="text-gradient-gold font-bold italic">Perfect</span>
          <br />
          <span className="text-white">Litter for Your </span>
          <span className="text-primary-foreground font-bold relative inline-block">
            Cat
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light animate-slide-in-from-bottom delay-200">
          We spent <strong className="text-white font-medium">$47,000</strong> testing 547 brands so you don't have to.
          Real lab data. Brutally honest reviews.
        </p>

        {/* Search Bar - Premium Glass Style */}
        <div
          className={`relative max-w-2xl mx-auto transition-all duration-500 animate-slide-in-from-bottom delay-300 z-20 ${searchExpanded ? 'scale-105' : ''
            }`}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/30 transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 w-6 h-6 group-hover:text-accent transition-colors" />
            <Input
              type="text"
              placeholder="Search 500+ tested products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchExpanded(true)}
              onBlur={() => setSearchExpanded(false)}
              className="w-full h-16 pl-16 pr-40 text-lg bg-white/10 border-white/10 text-white placeholder:text-white/40 rounded-full backdrop-blur-xl focus:bg-white/15 focus:ring-1 focus:ring-accent/50 transition-all shadow-2xl"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent hover:bg-amber-400 text-foreground font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-accent/20 flex items-center gap-2">
              Search
            </button>
          </div>
        </div>

        {/* Trust Stats - Simplified & elegant */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-20 animate-fade-in delay-500">
          <div className="text-center group cursor-default">
            <div className="text-3xl font-display font-bold text-white mb-1 group-hover:text-accent transition-colors">$47k+</div>
            <div className="text-white/40 text-xs font-bold tracking-widest uppercase">Spent Testing</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block" />
          <div className="text-center group cursor-default">
            <div className="text-3xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">12k+</div>
            <div className="text-white/40 text-xs font-bold tracking-widest uppercase">Community Members</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block" />
          <div className="text-center group cursor-default">
            <div className="text-3xl font-display font-bold text-white mb-1 group-hover:text-accent transition-colors">Zero</div>
            <div className="text-white/40 text-xs font-bold tracking-widest uppercase">Sponsored Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
