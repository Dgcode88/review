'use client';

import { Award, RefreshCw, Shield, Star, Zap, Heart } from 'lucide-react';

const trustMetrics = [
  { icon: Award, text: '500+ Products Tested', color: 'from-amber-400 to-orange-500' },
  { icon: RefreshCw, text: 'Updated Weekly', color: 'from-emerald-400 to-teal-500' },
  { icon: Shield, text: '100% Independent', color: 'from-violet-400 to-purple-500' },
  { icon: Star, text: 'Expert Reviews', color: 'from-rose-400 to-pink-500' },
  { icon: Zap, text: 'Real Lab Testing', color: 'from-cyan-400 to-blue-500' },
  { icon: Heart, text: 'Cat Parent Approved', color: 'from-amber-400 to-orange-500' },
];

export function TrustBar() {
  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-8 overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-violet-400" />
      
      <div className="flex animate-marquee whitespace-nowrap">
        {[...trustMetrics, ...trustMetrics].map((metric, index) => (
          <div
            key={index}
            className="inline-flex items-center mx-10 group"
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <metric.icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-semibold text-lg">{metric.text}</span>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
