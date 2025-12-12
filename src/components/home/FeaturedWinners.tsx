'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Star, Crown, Award, Sparkles } from 'lucide-react';

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
    gradient: 'from-amber-500 to-orange-600',
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
    gradient: 'from-emerald-500 to-teal-600',
    size: 'medium',
  },
  {
    id: 3,
    name: 'PrettyLitter',
    category: 'Silica Crystal',
    score: 8.8,
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80',
    badge: 'Best Tech',
    badgeIcon: Award,
    specs: ['Health Monitoring', 'Odor Control', 'Long Lasting'],
    gradient: 'from-violet-500 to-purple-600',
    size: 'medium',
  },
  {
    id: 4,
    name: 'Boxiecat Premium',
    category: 'Premium Clay',
    score: 9.2,
    image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=600&q=80',
    badge: 'Best Value',
    badgeIcon: Star,
    specs: ['Flat Top Clumps', 'Probiotic Formula', 'Scent Free'],
    gradient: 'from-rose-500 to-pink-600',
    size: 'medium',
  },
];

export function FeaturedWinners() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full px-6 py-2 mb-6">
            <Crown className="w-5 h-5" />
            <span className="font-semibold">2024 Winners</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Top Rated <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Cat Litters</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Rigorously tested, independently reviewed, and cat-approved
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <Card
              key={product.id}
              className={`group relative overflow-hidden bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 ${
                product.size === 'large' ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Product Image */}
              <div className={`relative overflow-hidden ${product.size === 'large' ? 'aspect-[4/3]' : 'aspect-square'}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Score Badge */}
                <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-r ${product.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <div className="text-center">
                    <div className="font-mono text-2xl font-bold text-white leading-none">
                      {product.score}
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${product.gradient} text-white border-none px-4 py-2 rounded-full flex items-center gap-2 shadow-lg`}>
                  <product.badgeIcon className="w-4 h-4" />
                  <span className="font-semibold text-sm">{product.badge}</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white/80 text-sm font-medium mb-2 uppercase tracking-wider">
                    {product.category}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                    {product.name}
                  </h3>

                  {/* Quick Specs */}
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {product.specs.map((spec, i) => (
                      <span key={i} className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Button */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <button className={`bg-gradient-to-r ${product.gradient} text-white px-6 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300`}>
                  View Review
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            View All Top Picks
          </button>
        </div>
      </div>
    </section>
  );
}
