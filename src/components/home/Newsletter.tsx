'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Check, Mail, Sparkles, Gift } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-200/40 to-orange-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-200/40 to-teal-200/40 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="relative bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 rounded-[3rem] overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl" />
          
          {/* Floating Images */}
          <div className="absolute top-8 right-8 w-32 h-32 rounded-2xl overflow-hidden shadow-xl rotate-6 hidden lg:block border-4 border-white/10">
            <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&q=80" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-8 left-8 w-28 h-28 rounded-2xl overflow-hidden shadow-xl -rotate-6 hidden lg:block border-4 border-white/10">
            <img src="https://images.unsplash.com/photo-1573865526739-10c1dd7aa5d0?w=300&q=80" alt="" className="w-full h-full object-cover" />
          </div>
          
          <div className="relative p-12 md:p-16 lg:p-20">
            <div className="max-w-2xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
                <Gift className="w-5 h-5 text-amber-400" />
                <span className="text-white/90 font-medium">Free Weekly Newsletter</span>
              </div>

              <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Stay <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Updated</span>
              </h3>
              <p className="text-xl text-white/70 mb-10 leading-relaxed">
                Get weekly reviews, testing insights, and exclusive cat care tips delivered to your inbox. Join 50,000+ cat parents!
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="relative">
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <div className="relative flex-1">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      required
                      className={`h-14 pl-14 pr-6 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white placeholder:text-white/50 rounded-full transition-all duration-300 ${
                        focused ? 'border-amber-400 ring-4 ring-amber-400/20' : ''
                      }`}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={submitted}
                    className={`h-14 px-8 rounded-full font-semibold transition-all duration-300 shadow-xl ${
                      submitted
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                        : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-2xl hover:-translate-y-1'
                    }`}
                  >
                    {submitted ? (
                      <span className="flex items-center gap-2">
                        <Check className="w-5 h-5" />
                        Subscribed!
                      </span>
                    ) : (
                      'Subscribe Free'
                    )}
                  </button>
                </div>
                
                <p className="text-sm text-white/50 mt-6">
                  No spam, unsubscribe anytime. We respect your privacy. 🐱
                </p>
              </form>

              {/* Social Proof */}
              <div className="flex items-center justify-center gap-4 mt-10">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-white/70 text-sm">
                  Join <span className="text-white font-semibold">50,000+</span> cat parents
                </span>
              </div>
            </div>
          </div>

          {/* Success Confetti Effect */}
          {submitted && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full animate-confetti"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: '50%',
                    animationDelay: `${Math.random() * 0.5}s`,
                    background: ['#F59E0B', '#10B981', '#8B5CF6', '#EC4899', '#06B6D4'][Math.floor(Math.random() * 5)],
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-300px) rotate(720deg) scale(0);
            opacity: 0;
          }
        }
        
        .animate-confetti {
          animation: confetti 1.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
