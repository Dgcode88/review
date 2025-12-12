'use client';

import { motion } from 'framer-motion';
import { Star, Crown, Award, Sparkles, ArrowRight, Check } from 'lucide-react';
import { ScalePop, StaggerChildren, FadeUp } from '@/components/ui/motion';

const featuredProducts = [
  {
    id: 1,
    name: "Dr. Elsey's Ultra",
    category: 'Clumping Clay',
    score: 9.4,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80',
    badge: "Editor's Choice",
    badgeIcon: Crown,
    specs: ['99% Dust Free', 'Hard Clumps', 'Low Tracking'],
    gradient: 'from-[#D9B373] to-[#B38B4D]', // Gold
    size: 'large',
  },
  {
    id: 2,
    name: "World's Best Cat Litter",
    category: 'Natural/Corn',
    score: 9.1,
    image: 'https://images.unsplash.com/photo-1573865526739-10c1dd7aa5d0?w=600&q=80',
    badge: 'Best Natural',
    badgeIcon: Sparkles,
    specs: ['Flushable', 'Lightweight', 'Eco-Friendly'],
    gradient: 'from-[#15664C] to-[#0D4030]', // Forest/Teal
    size: 'medium',
  },
  {
    id: 3,
    name: "PrettyLitter",
    category: 'Silica Crystal',
    score: 8.8,
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80',
    badge: 'Best Tech',
    badgeIcon: Award,
    specs: ['Health Monitor', 'Odor Control', 'Non-Clumping'],
    gradient: 'from-slate-500 to-slate-700',
    size: 'medium',
  },
  {
    id: 4,
    name: "Boxiecat Premium",
    category: 'Premium Clay',
    score: 9.2,
    image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=600&q=80',
    badge: 'Best Value',
    badgeIcon: Star,
    specs: ['Probiotic', 'Flat Top Clumps', 'Unscented'],
    gradient: 'from-[#8B5E3C] to-[#6F4E37]',
    size: 'medium',
  },
];

export function FeaturedWinners() {
  return (
    <section id="featured" className="py-24 px-6 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-white border border-border text-foreground/80 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <Crown className="w-4 h-4 text-accent" />
              <span className="font-semibold text-sm tracking-wide">2024 Award Winners</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Top Rated <span className="text-gradient-gold italic font-serif">Cat Litters</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              We tested 547 brands to find the few that actually deliver. Here are the winners.
            </p>
          </FadeUp>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-shadow cursor-pointer ${product.size === 'large' ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''}`}
            >
              <div className="relative h-full flex flex-col">
                <div className={`relative overflow-hidden ${product.size === 'large' ? 'aspect-[16/9] md:aspect-auto md:h-full md:flex-1' : 'aspect-[4/3]'}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 transition-opacity group-hover:opacity-40" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Badge */}
                  <ScalePop delay={0.2} className={`absolute top-4 left-4 z-20 bg-gradient-to-r ${product.gradient} text-white px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg`}>
                    <product.badgeIcon className="w-3.5 h-3.5" />
                    <span className="font-bold text-[10px] md:text-xs tracking-wide uppercase">{product.badge}</span>
                  </ScalePop>

                  {/* Score */}
                  <ScalePop delay={0.3} className="absolute top-4 right-4 z-20">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl flex flex-col items-center justify-center border border-white/50 shadow-lg">
                      <span className="text-[10px] uppercase font-bold text-muted-foreground leading-none mb-0.5">Score</span>
                      <span className="text-lg font-bold text-primary leading-none">{product.score}</span>
                    </div>
                  </ScalePop>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1 relative z-20">
                  {/* Content */}
                  <div className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-2">{product.category}</div>
                  <h3 className={`font-display font-bold text-foreground mb-4 leading-tight ${product.size === 'large' ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    {product.name}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.specs.map((spec, i) => (
                      <span key={i} className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md">
                        <Check className="w-3 h-3 text-primary" /> {spec}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-border flex items-center justify-between group-hover:text-primary transition-colors">
                    <span className="font-bold text-sm">Read Full Review</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-white border-2 border-border hover:border-primary text-foreground font-bold rounded-full transition-all duration-300 shadow-sm hover:shadow-lg flex items-center gap-2 mx-auto">
            View All 547 Reviews <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
