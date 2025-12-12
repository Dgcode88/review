'use client';

import { Award, RefreshCw, Shield, Star, Zap, Heart } from 'lucide-react';

const trustMetrics = [
  { icon: Award, text: '500+ Products Tested' },
  { icon: RefreshCw, text: 'Updated Weekly' },
  { icon: Shield, text: '100% Independent' },
  { icon: Zap, text: 'Real Lab Testing' },
];

export function TrustBar() {
  return (
    <section className="bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustMetrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                <metric.icon className="w-5 h-5 text-primary/80 group-hover:text-primary transition-colors" />
              </div>
              <span className="text-foreground/80 font-medium text-sm md:text-base tracking-wide group-hover:text-foreground transition-colors">
                {metric.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
