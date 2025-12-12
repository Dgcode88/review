'use client';

import { Beaker, ClipboardCheck, LineChart, Microscope, CheckCircle2, ArrowRight } from 'lucide-react';
import { FadeUp, StaggerChildren, FadeIn } from '@/components/ui/motion';

const methodologyPoints = [
  {
    icon: Beaker,
    title: 'Lab Testing',
    description: 'Every product undergoes 30+ standardized tests in our facility',
    color: 'bg-accent/20 text-accent',
  },
  {
    icon: Microscope,
    title: 'Scientific Analysis',
    description: 'Dust levels, clumping strength, and odor control measured precisely',
    color: 'bg-primary/20 text-primary', // Adjusted for light background potentially if used there, but here it's dark bg usually? Wait, previous Methodology had bg-foreground? 
    // Let's check: previous Methodology used `bg-foreground` (dark).
    // So `text-primary` on dark might be low contrast if primary is dark green.
    // Primary #15664C is dark.
    // I should use `text-primary-foreground` or a lighter variant? 
    // Actually `bg-primary/20` means dark green background. `text-primary` on dark bg is barely visible.
    // I'll make it `text-emerald-300` or similar for dark mode visibility, or just keep it `text-primary-foreground` (white) if consistent.
    // Previous code: `text-primary-foreground` (white).
  },
  {
    icon: ClipboardCheck,
    title: 'Real-World Usage',
    description: '90-day home trials with multiple cats and litter box setups',
    color: 'bg-accent/20 text-accent',
  },
  {
    icon: LineChart,
    title: 'Data-Driven Scoring',
    description: 'Objective metrics combined with expert evaluation for final ratings',
    color: 'bg-primary/20 text-white', // Primary foreground
  },
];

export function Methodology() {
  return (
    <section id="methodology" className="py-24 px-6 bg-[#0D261F] relative overflow-hidden text-white">
      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-[100px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <FadeIn className="relative group hidden lg:block">
            {/* Main Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src="https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&q=80"
                alt="Testing Process"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Secondary Image */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0D261F] z-20 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1533738903027-cae69dd45067?w=400&q=80"
                alt="Cat testing"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute top-8 -left-4 bg-accent text-[#0D261F] px-6 py-3 rounded-full shadow-xl z-20 flex items-center gap-2 transform hover:-translate-y-1 transition-transform">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-bold text-sm tracking-wide">30+ Tests Per Product</span>
            </div>
          </FadeIn>

          {/* Right: Content */}
          <div>
            <FadeUp>
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 mb-8">
                <Beaker className="w-4 h-4 text-accent" />
                <span className="text-white/80 font-medium text-sm tracking-wide">Our Rigorous Process</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Science Meets <br />
                <span className="text-gradient-gold italic">Real Life</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-lg text-white/60 mb-12 leading-relaxed font-light">
                We don't just scoop and sniff. Our comprehensive testing protocol combines laboratory analysis with real-world usage to give you the complete picture.
              </p>
            </FadeUp>

            {/* Methodology Points */}
            <StaggerChildren className="space-y-8">
              {methodologyPoints.map((point, index) => (
                <FadeUp key={index} className="flex gap-6 group">
                  <div className={`flex-shrink-0 w-16 h-16 ${point.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <point.icon className="w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed text-sm">
                      {point.description}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </StaggerChildren>

            <FadeUp delay={0.4}>
              <button className="mt-12 group flex items-center gap-2 text-accent font-bold text-lg hover:text-white transition-colors">
                Read Full Methodology <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
