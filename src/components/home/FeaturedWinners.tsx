'use client';

import { Card } from '@/components/ui/card';
import { Star, Crown, Award, Sparkles, ArrowRight } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: "Dr. Elsey's Ultra",
    category: 'Clumping Clay',
    score: 9.4,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80',
    badge: "Editor's Choice",
    badgeIcon: Crown,
    specs: ['99% Dust Free', 'Superior Clumping', 'Low Tracking'],
    gradient: 'from-accent to-amber-600', // Gold/Amber
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
    gradient: 'from-primary to-emerald-800', // Forest Green
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
    specs: ['Health Monitoring', 'Odor Control', 'Long Lasting'],
    gradient: 'from-slate-600 to-slate-800', // Modern/Tech Slate
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
    specs: ['Flat Top Clumps', 'Probiotic Formula', 'Scent Free'],
    gradient: 'from-[#8B5E3C] to-[#6F4E37]', // Bronze/Earth
    size: 'medium',
  },
];

export function FeaturedWinners() {
  return (
    <section id="featured" className="py-24 px-6 relative overflow-hidden bg-background">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-border text-foreground/80 rounded-full px-5 py-2 mb-6 shadow-sm">
            <Crown className="w-4 h-4 text-accent" />
            <span className="font-semibold text-sm tracking-wide">2024 Winners</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
            Top Rated <span className="text-gradient-gold font-serif italic">Cat Litters</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Rigorously tested, independently reviewed, and cat-approved
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className={`group relative overflow-hidden border-0 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer ${product.size === 'large' ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
                }`}
            >
              {/* Product Image */}
              <div className={`relative overflow-hidden ${product.size === 'large' ? 'aspect-[4/3]' : 'aspect-square'} h-full`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Score Badge */}
                <div className={`absolute top-4 right-4 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300`}>
                  <div className="text-center">
                    <div className="font-mono text-lg md:text-xl font-bold text-white leading-none">
                      {product.score}
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${product.gradient} text-white border-none px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 shadow-lg`}>
                  <product.badgeIcon className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  <span className="font-semibold text-[10px] md:text-xs tracking-wide uppercase">{product.badge}</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-white/70 text-[10px] md:text-xs font-bold mb-2 uppercase tracking-widest">
                    {product.category}
                  </div>
                  <h3 className={`font-display font-bold text-white mb-3 md:mb-4 leading-tight ${product.size === 'large' ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
                    {product.name}
                  </h3>

                  {/* Quick Specs */}
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {product.specs.map((spec, i) => (
                      <span key={i} className="bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-[10px] uppercase font-bold tracking-wider px-2 py-1 md:px-3 md:py-1 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="overflow-hidden h-0 group-hover:h-10 md:group-hover:h-12 transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center gap-2 text-white font-bold text-sm">
                    Read Review <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-20">
          <button className="group relative px-10 py-5 bg-foreground text-secondary rounded-full font-bold text-lg shadow-2xl hover:shadow-xl transition-all duration-300 overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors">View All Winners</span>
            <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
          </button>
        </div>
      </div>
    </section>
  );
}
