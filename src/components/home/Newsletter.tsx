'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Check, Mail, Gift, ArrowRight } from 'lucide-react';
import { FadeIn, FadeUp } from '@/components/ui/motion';

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
    <section className="py-24 px-6 relative overflow-hidden" id="newsletter">
      {/* Simple background with pattern */}
      <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <FadeIn className="relative bg-[#0D261F] rounded-[2.5rem] overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative p-12 md:p-16 lg:p-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <FadeUp>
                  <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-8">
                    <Gift className="w-4 h-4 text-accent" />
                    <span className="text-white/90 font-medium text-sm tracking-wide">Join the Inner Circle</span>
                  </div>
                </FadeUp>

                <FadeUp delay={0.1}>
                  <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Expert Cat Care <br />
                    <span className="text-gradient-gold italic">Delivered Weekly</span>
                  </h3>
                </FadeUp>

                <FadeUp delay={0.2}>
                  <p className="text-lg text-white/60 mb-10 leading-relaxed font-light max-w-lg">
                    Get exclusive testing insights, early access to reviews, and specific advice we don't publish publicly. Join <span className="text-white font-bold">12,847</span> smart cat parents.
                  </p>
                </FadeUp>

                {/* Social Proof */}
                <FadeUp delay={0.3} className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0D261F] overflow-hidden bg-white/10">
                        <img
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`}
                          alt="Subscriber"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full bg-accent border-2 border-[#0D261F] flex items-center justify-center text-[#0D261F] font-bold text-xs">
                      12k+
                    </div>
                  </div>
                  <div className="text-white/50 text-sm">
                    Trusted by <span className="text-white font-semibold">12,000+</span> owners
                  </div>
                </FadeUp>
              </div>

              {/* Form Side */}
              <FadeUp delay={0.4} className="relative">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
                  <h4 className="text-white font-bold text-xl mb-6">Subscribe to our newsletter</h4>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative group">
                      <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focused ? 'text-accent' : 'text-white/40'}`} />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        required
                        className={`h-14 pl-12 pr-4 bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl transition-all duration-300 focus:bg-white/10 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 hover:bg-white/10 ring-offset-transparent`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitted}
                      className={`w-full h-14 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${submitted
                        ? 'bg-primary text-white cursor-default'
                        : 'bg-accent text-[#0D261F] hover:bg-white hover:scale-[1.02]'
                        }`}
                    >
                      {submitted ? (
                        <>
                          <Check className="w-5 h-5" />
                          <span>Welcome Aboard!</span>
                        </>
                      ) : (
                        <>
                          <span>Subscribe Free</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-center text-white/30 mt-4">
                      No spam, ever. Unsubscribe anytime.
                    </p>
                  </form>
                </div>
              </FadeUp>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
