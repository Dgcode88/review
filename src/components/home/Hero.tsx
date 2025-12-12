'use client';

import { useState } from 'react';
import { Search, Star, Award, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function Hero() {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Stunning Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-amber-400/30 to-orange-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-rose-400/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl" />
      
      {/* Floating Images */}
      <div className="absolute top-32 left-[10%] w-48 h-48 rounded-3xl overflow-hidden shadow-2xl rotate-[-8deg] hover:rotate-0 transition-transform duration-500 border-4 border-white/20">
        <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80" alt="Happy cat" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-32 left-[5%] w-40 h-40 rounded-3xl overflow-hidden shadow-2xl rotate-[12deg] hover:rotate-0 transition-transform duration-500 border-4 border-white/20 hidden lg:block">
        <img src="https://images.unsplash.com/photo-1573865526739-10c1dd7aa5d0?w=400&q=80" alt="Cute cat" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-40 right-[8%] w-44 h-44 rounded-3xl overflow-hidden shadow-2xl rotate-[6deg] hover:rotate-0 transition-transform duration-500 border-4 border-white/20">
        <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=80" alt="Cat portrait" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-40 right-[12%] w-36 h-36 rounded-3xl overflow-hidden shadow-2xl rotate-[-10deg] hover:rotate-0 transition-transform duration-500 border-4 border-white/20 hidden lg:block">
        <img src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&q=80" alt="Playful cat" className="w-full h-full object-cover" />
      </div>

      {/* Floating Badges */}
      <div className="absolute top-[20%] right-[25%] bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce hidden md:flex">
        <Star className="w-4 h-4 fill-current" />
        <span className="font-semibold text-sm">500+ Reviews</span>
      </div>
      <div className="absolute bottom-[25%] left-[20%] bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce delay-500 hidden md:flex">
        <Award className="w-4 h-4" />
        <span className="font-semibold text-sm">Lab Tested</span>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span className="text-white/90 font-medium">The #1 Cat Litter Review Platform</span>
        </div>

        <h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
        >
          <span className="text-white">Find the </span>
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">Perfect</span>
          <br />
          <span className="text-white">Litter for Your </span>
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Cat</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Data-driven reviews, real lab testing, and honest recommendations 
          <br className="hidden md:block" />
          for discerning cat parents who demand the best
        </p>

        {/* Search Bar */}
        <div 
          className={`relative max-w-2xl mx-auto transition-all duration-500 ${
            searchExpanded ? 'scale-105' : ''
          }`}
        >
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-600 w-6 h-6" />
            <Input
              type="text"
              placeholder="Search 500+ tested products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchExpanded(true)}
              onBlur={() => setSearchExpanded(false)}
              className="w-full h-16 pl-16 pr-6 text-lg bg-white border-0 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 focus:ring-4 focus:ring-amber-400/30"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg">
              Search
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-1">500+</div>
            <div className="text-white/60 text-sm">Products Tested</div>
          </div>
          <div className="w-px h-12 bg-white/20 hidden md:block" />
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-1">50K+</div>
            <div className="text-white/60 text-sm">Happy Cat Parents</div>
          </div>
          <div className="w-px h-12 bg-white/20 hidden md:block" />
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-1">100%</div>
            <div className="text-white/60 text-sm">Independent</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-2 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
