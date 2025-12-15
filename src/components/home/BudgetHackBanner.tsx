import { DollarSign, TrendingUp, Sparkles } from "lucide-react";
import { PurrifyLink } from "@/components/reviews/PurrifyLink";

export function BudgetHackBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              <Sparkles className="w-4 h-4" />
              EDITOR&apos;S SECRET
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground mb-4 leading-tight">
            The <span className="text-gradient-gold italic">$15 Budget Hack</span>
          </h2>
          <p className="text-xl md:text-2xl text-center text-foreground mb-2 max-w-3xl mx-auto">
            Turn <span className="font-bold">any cheap litter</span> into premium performance.
          </p>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our testers saved an average of <span className="font-bold text-emerald-600">$240/year</span> with this one simple addition.
          </p>

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100">
            <div className="grid md:grid-cols-2">

              {/* Left: The Problem */}
              <div className="p-8 md:p-10 bg-red-50 border-r border-red-100">
                <h3 className="font-display text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
                  ❌ The Old Way
                </h3>
                <div className="space-y-4 text-red-800">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💸</span>
                    <div>
                      <p className="font-bold">Premium Litter: $30-40/month</p>
                      <p className="text-sm">Dr. Elsey&apos;s, Boxiecat, World&apos;s Best</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤢</span>
                    <div>
                      <p className="font-bold">Still smells by week 3</p>
                      <p className="text-sm">Even premium litters develop odor</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <p className="font-bold">Constant replacement</p>
                      <p className="text-sm">Full box changes every 3-4 weeks</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: The Solution */}
              <div className="p-8 md:p-10 bg-gradient-to-br from-emerald-50 to-teal-50">
                <h3 className="font-display text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                  ✅ The Hack
                </h3>
                <div className="space-y-4 text-emerald-800">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💰</span>
                    <div>
                      <p className="font-bold">Budget Litter + Purrify: $15-20/month</p>
                      <p className="text-sm">50% cheaper than premium alone</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✨</span>
                    <div>
                      <p className="font-bold">Zero odor for 6-8 weeks</p>
                      <p className="text-sm">Probiotics eliminate smell at source</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <p className="font-bold">Lasts 2x longer</p>
                      <p className="text-sm">Extends any litter&apos;s effective life</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: The Math */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-8 text-white">
              <div className="max-w-3xl mx-auto">
                <h4 className="font-display text-2xl font-bold mb-6 text-center">The Actual Math (No BS)</h4>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <DollarSign className="w-8 h-8 mx-auto mb-2 opacity-90" />
                    <p className="text-3xl font-bold mb-1">$240</p>
                    <p className="text-emerald-100 text-sm">Saved per year</p>
                  </div>
                  <div>
                    <TrendingUp className="w-8 h-8 mx-auto mb-2 opacity-90" />
                    <p className="text-3xl font-bold mb-1">2x</p>
                    <p className="text-emerald-100 text-sm">Longer litter life</p>
                  </div>
                  <div>
                    <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-90" />
                    <p className="text-3xl font-bold mb-1">87%</p>
                    <p className="text-emerald-100 text-sm">Less ammonia odor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 bg-white text-center border-t border-gray-200">
              <p className="text-muted-foreground mb-6 text-lg">
                Over <strong className="text-foreground">10,000+ cat owners</strong> are already using this hack
              </p>
              <PurrifyLink variant="button">
                See How It Works
              </PurrifyLink>
              <p className="text-xs text-muted-foreground mt-4">
                Made in Canada • Natural probiotics • Safe for cats
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
