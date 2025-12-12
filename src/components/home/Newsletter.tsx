'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Check, Mail, Gift, ArrowRight } from 'lucide-react';

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
    <section className="py-24 px-6 bg-secondary/30 relative overflow-hidden" id="newsletter">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative">
        <div className="relative bg-foreground rounded-[2.5rem] overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/20 to-accent/5 rounded-full blur-3xl" />

          <div className="relative p-12 md:p-16 lg:p-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-8">
                  <Gift className="w-4 h-4 text-accent" />
                  <span className="text-white/90 font-medium text-sm tracking-wide">Join the Inner Circle</span>
                </div>

                <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Expert Cat Care <br />
                  <span className="text-gradient-gold font-serif italic">Delivered Weekly</span>
                </h3>
                <p className="text-lg text-white/60 mb-10 leading-relaxed font-light max-w-lg">
                  Get exclusive testing insights, early access to reviews, and veterinarian-approved tips. Join 50,000+ smart cat parents today.
                </p>

                {/* Social Proof */}
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-foreground overflow-hidden">
                        <img
                          src={`https://i.pravatar.cc/100?img=${i + 10}`}
                          alt="Subscriber"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full bg-accent border-2 border-foreground flex items-center justify-center text-foreground font-bold text-xs">
                      50k+
                    </div>
                  </div>
                  <div className="text-white/50 text-sm">
                    Trusted by <span className="text-white font-semibold">50,000+</span> cat owners
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="relative">
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
                        className={`h-14 pl-12 pr-4 bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl transition-all duration-300 focus:bg-white/10 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 hover:bg-white/10`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitted}
                      className={`w-full h-14 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${submitted
                          ? 'bg-primary text-white cursor-default'
                          : 'bg-accent text-foreground hover:bg-white hover:scale-[1.02]'
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
              </div>
            </div>
          </div>

          {/* Success Confetti Effect */}
          {submitted && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full animate-confetti bg-accent"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: '50%',
                    animationDelay: `${Math.random() * 0.5}s`,
                    opacity: 0,
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
            transform: translateY(-200px) rotate(360deg) scale(0);
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
