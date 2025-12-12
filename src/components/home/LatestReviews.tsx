'use client';

import { Badge } from '@/components/ui/badge';
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
    gradient: 'from-amber-500 to-orange-500',
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
    gradient: 'from-emerald-500 to-teal-500',
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
    gradient: 'from-violet-500 to-purple-500',
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
    gradient: 'from-rose-500 to-pink-500',
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
    gradient: 'from-cyan-500 to-blue-500',
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
    gradient: 'from-amber-500 to-yellow-500',
  },
];

export function LatestReviews() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-gradient-to-r from-violet-200/40 to-purple-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-gradient-to-r from-amber-200/40 to-orange-200/40 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-full px-6 py-2 mb-6">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Fresh Reviews</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              Latest <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">Reviews</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-xl">
              Fresh insights from our testing lab, updated weekly
            </p>
          </div>
          <button className="mt-6 md:mt-0 inline-flex items-center gap-2 text-violet-600 font-semibold hover:gap-4 transition-all duration-300">
            View All Reviews <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className="group bg-white border-0 shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={review.image}
                  alt={review.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Score Badge */}
                <div className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-r ${review.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <div className="font-mono text-xl font-bold text-white">
                    {review.score}
                  </div>
                </div>

                {/* Trending Badge */}
                {review.trending && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-semibold text-sm">Trending</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`bg-gradient-to-r ${review.gradient} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {review.category}
                  </span>
                  <div className="flex items-center text-xs text-slate-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {review.date}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-violet-600 transition-colors duration-300">
                  {review.title}
                </h3>

                <p className="text-sm text-slate-600 line-clamp-2 mb-4">
                  {review.excerpt}
                </p>

                <div className="flex items-center text-violet-600 font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                  Read Full Review <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
