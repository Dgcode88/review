'use client';

import { Droplets, Leaf, Mountain, Sparkles, Zap, Heart } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    icon: Mountain,
    label: 'Best Clumping',
    slug: 'best-clumping-cat-litter',
    count: '150+ Reviews',
    gradient: 'from-accent to-amber-600',
    bgGradient: 'from-accent/10 to-amber-600/10',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&q=80'
  },
  {
    icon: Sparkles,
    label: 'Best Low Dust',
    slug: 'best-low-dust-cat-litter',
    count: '80+ Reviews',
    gradient: 'from-slate-400 to-slate-600',
    bgGradient: 'from-slate-400/10 to-slate-600/10',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&q=80'
  },
  {
    icon: Leaf,
    label: 'Best Natural',
    slug: 'best-natural-cat-litter',
    count: '120+ Reviews',
    gradient: 'from-primary to-emerald-600',
    bgGradient: 'from-primary/10 to-emerald-600/10',
    image: 'https://images.unsplash.com/photo-1573865526739-10c1dd7aa5d0?w=300&q=80'
  },
  {
    icon: Heart,
    label: 'Best Budget',
    slug: 'best-budget-cat-litter',
    count: '60+ Reviews',
    gradient: 'from-emerald-400 to-teal-500',
    bgGradient: 'from-emerald-400/10 to-teal-500/10',
    image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=300&q=80'
  },
  {
    icon: Droplets,
    label: 'Best Odor Control',
    slug: 'best-odor-control-cat-litter',
    count: '90+ Reviews',
    gradient: 'from-accent to-amber-700',
    bgGradient: 'from-accent/10 to-amber-700/10',
    image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=300&q=80'
  },
];

export function CategoryNavigation() {
  return (
    <section className="py-24 px-6 bg-foreground relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6">
            <Heart className="w-5 h-5 text-rose-400" />
            <span className="text-white/90 font-medium">Find Your Match</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            Find What <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Actually Works</span> for Your Situation
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Don&apos;t guess. Pick the category that matches your specific problem.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/categories/${category.slug}`}
              className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden cursor-pointer block"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img src={category.image} alt="" className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <span className="font-display text-xl font-bold text-white mb-2">
                  {category.label}
                </span>
                <span className="text-sm text-white/60">
                  {category.count}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Categories Banner */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <Link href="/categories/best-clumping-cat-litter" className="relative bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 block">
            <div className="absolute top-0 right-0 w-48 h-48 opacity-30">
              <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80" alt="" className="w-full h-full object-cover rounded-bl-3xl" />
            </div>
            <div className="relative z-10">
              <span className="text-white/80 font-medium">Most Popular</span>
              <h3 className="font-display text-3xl font-bold text-white mt-2 mb-4">Best Clumping Litters</h3>
              <p className="text-white/80 mb-6">Our top-rated clumping formulas for easy cleanup</p>
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold group-hover:bg-white group-hover:text-amber-600 transition-all duration-300">
                Explore Now →
              </span>
            </div>
          </Link>

          <Link href="/categories/best-natural-cat-litter" className="relative bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-8 overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 block">
            <div className="absolute top-0 right-0 w-48 h-48 opacity-30">
              <img src="https://images.unsplash.com/photo-1573865526739-10c1dd7aa5d0?w=400&q=80" alt="" className="w-full h-full object-cover rounded-bl-3xl" />
            </div>
            <div className="relative z-10">
              <span className="text-white/80 font-medium">Eco-Friendly</span>
              <h3 className="font-display text-3xl font-bold text-white mt-2 mb-4">Natural & Sustainable</h3>
              <p className="text-white/80 mb-6">Environmentally conscious options for green cat parents</p>
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold group-hover:bg-white group-hover:text-emerald-600 transition-all duration-300">
                Explore Now →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
