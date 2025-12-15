'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Check, Mail, Gift, ArrowRight, Sparkles } from 'lucide-react';
import { FadeIn, FadeUp } from '@/components/ui/motion';

export function Newsletter() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="newsletter">
      {/* Simple background with pattern */}
      <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <FadeIn className="relative bg-foreground rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

          <div className="grid lg:grid-cols-2 gap-0 relative z-10">
            {/* Left Content */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-accent font-semibold mb-6">
                <Mail className="w-5 h-5" />
                <span>Join 45,000+ Cat Parents</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Get Our Free <span className="text-accent">Litter Buying Guide</span> (Saves You $300+)
              </h2>

              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                <span className="font-bold text-white">Stop wasting money on bad litter.</span> Get our weekly lab results, exclusive buying guides, and money-saving hacks. Plus, instant access to our <span className="text-accent font-semibold">$15 Budget Hack</span> that turns cheap litter into premium performance.
              </p>

              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter your email..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-14 rounded-full px-6 focus-visible:ring-accent focus-visible:border-accent transition-all hover:bg-white/20"
                  />
                  <button type="submit" className="h-14 px-8 rounded-full bg-accent text-foreground hover:bg-white transition-all duration-300 font-bold text-lg shadow-lg shadow-accent/20 whitespace-nowrap flex items-center gap-2">
                    Send Me The Guide
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-white/40 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Next report dropping in 3 days
                </p>
              </form>

              {/* Social Proof Mini */}
              <div className="mt-12 flex items-center gap-4">
                <h3 className="font-display text-xl font-bold text-white mr-4">
                  Get the <span className="text-accent">&quot;Pro Tip&quot;</span> of the Week
                </h3>
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-foreground overflow-hidden bg-white/10">
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="Subscriber"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full bg-accent border-2 border-foreground flex items-center justify-center text-foreground font-bold text-xs">
                    +45k
                  </div>
                </div>
              </div>

              <div className="text-white/60 text-sm font-medium mt-4">
                Trusted by 45,000+ cat experts
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-full min-h-[400px] bg-white/5 lg:border-l border-white/10 p-12 flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Stacked Cards Animation */}
                <div className="absolute top-0 left-0 w-full h-full bg-white/5 rounded-2xl rotate-6 transform translate-y-4" />
                <div className="absolute top-0 left-0 w-full h-full bg-white/5 rounded-2xl -rotate-6 transform -translate-y-4" />

                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <Gift className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Weekly Gold Nuggets</h4>
                      <p className="text-white/60 text-sm">Latest finding from the lab</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {['Best Clumping Clay 2024', 'Top 5 Eco-Friendly Picks', 'Dust-Free Solutions'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs">✓</div>
                        <span className="text-white/90 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                    <span className="text-white/60 text-sm">Read time: 3 min</span>
                    <button className="text-accent text-sm font-bold hover:underline">View Preview</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
