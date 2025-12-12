'use client';

import { Beaker, ClipboardCheck, LineChart, Microscope, CheckCircle2 } from 'lucide-react';

const methodologyPoints = [
  {
    icon: Beaker,
    title: 'Lab Testing',
    description: 'Every product undergoes 30+ standardized tests in our facility',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Microscope,
    title: 'Scientific Analysis',
    description: 'Dust levels, clumping strength, and odor control measured precisely',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: ClipboardCheck,
    title: 'Real-World Usage',
    description: '90-day home trials with multiple cats and litter box setups',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: LineChart,
    title: 'Data-Driven Scoring',
    description: 'Objective metrics combined with expert evaluation for final ratings',
    color: 'from-rose-500 to-pink-500',
  },
];

export function Methodology() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&q=80"
                alt="Testing Process"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Floating Secondary Image */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 z-20">
              <img
                src="https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=400&q=80"
                alt="Cat testing"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-8 -left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-2xl shadow-xl z-20 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-bold">30+ Tests Per Product</span>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
              <Beaker className="w-5 h-5 text-emerald-400" />
              <span className="text-white/90 font-medium">Our Process</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              How We <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Test</span>
              <br />
              Cat Litter
            </h2>
            
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              We don't just scoop and sniff. Our comprehensive testing protocol combines laboratory analysis with real-world usage to give you the complete picture.
            </p>

            {/* Methodology Points */}
            <div className="space-y-6">
              {methodologyPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex gap-5 group"
                >
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${point.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <point.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-1">
                      {point.title}
                    </h3>
                    <p className="text-white/60">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-12 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              Read Full Methodology
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
