'use client';

import { Card } from '@/components/ui/card';
import { Calendar, TrendingUp, ArrowRight, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    title: 'ARM & HAMMER Clump & Seal Review',
    category: 'Clumping Clay',
    date: 'Dec 15, 2024',
    score: 8.7,
    image: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=600&q=80',
    excerpt: 'Strong odor control meets affordable pricing in this popular choice...',
    trending: true,
    gradient: 'from-accent to-amber-600',
  },
  {
    id: 2,
    title: 'Ökocat Natural Wood Clumping',
    category: 'Natural/Wood',
    date: 'Dec 12, 2024',
    score: 8.9,
    image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&q=80',
    excerpt: 'Eco-conscious cat parents will appreciate this sustainable option...',
    trending: false,
    gradient: 'from-primary to-emerald-600',
  },
  {
    id: 3,
    title: 'Fresh Step Clean Paws Multi-Cat',
    category: 'Clumping Clay',
    date: 'Dec 10, 2024',
    score: 8.5,
    image: 'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=600&q=80',
    excerpt: 'Low-tracking formula delivers on its promise for multi-cat homes...',
    trending: true,
    gradient: 'from-accent/80 to-amber-700',
  },
  {
    id: 4,
    title: 'Boxiecat Premium Clumping Clay',
    category: 'Clumping Clay',
    date: 'Dec 8, 2024',
    score: 9.0,
    image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=600&q=80',
    excerpt: 'Premium pricing justified by exceptional performance metrics...',
    trending: false,
    gradient: 'from-[#8B5E3C] to-[#6F4E37]', // Bronze
  },
  {
    id: 5,
    title: 'Tidy Cats LightWeight 24/7',
    category: 'Lightweight Clay',
    date: 'Dec 5, 2024',
    score: 8.3,
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=600&q=80',
    excerpt: 'Convenience meets performance in this easy-to-handle formula...',
    trending: false,
    gradient: 'from-slate-600 to-slate-800',
  },
  {
    id: 6,
    title: 'sWheat Scoop Multi-Cat Natural',
    category: 'Natural/Wheat',
    date: 'Dec 3, 2024',
    score: 8.6,
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&q=80',
    excerpt: 'Wheat-based formula offers natural clumping with minimal dust...',
    trending: false,
    gradient: 'from-accent to-yellow-600',
  },
];

export function LatestReviews() {
  return (
    <section id="latest" className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-6 py-2 mb-6 border border-primary/20">
              <Star className="w-4 h-4" />
              <span className="font-semibold text-sm">Fresh from the Lab</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
              Latest <span className="text-gradient-gold font-serif italic">Reviews</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl font-light">
              Fresh insights from our testing lab, updated weekly
            </p>
          </div>
          <button className="mt-6 md:mt-0 inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300">
            View All Reviews <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="group bg-card border-0 shadow-sm hover:shadow-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={review.image}
                  alt={review.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />

                {/* Score Badge */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300`}>
                  <div className="font-mono text-lg font-bold text-white">
                    {review.score}
                  </div>
                </div>

                {/* Trending Badge */}
                {review.trending && (
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                    <TrendingUp className="w-3 h-3" />
                    <span className="font-bold text-xs uppercase tracking-wide">Trending</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`bg-gradient-to-r ${review.gradient} text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full`}>
                    {review.category}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground font-medium">
                    <Calendar className="w-3 h-3 mr-1" />
                    {review.date}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                  {review.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-6 font-light">
                  {review.excerpt}
                </p>

                <div className="flex items-center text-primary font-bold text-xs uppercase tracking-widest group-hover:gap-2 transition-all duration-300">
                  Read Full Review <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-foreground text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 hover:bg-primary-foreground hover:text-foreground border-2 border-transparent hover:border-foreground">
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
