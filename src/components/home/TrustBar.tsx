"use client";

import { FadeUp } from "@/components/ui/motion";
import { CountUp } from "@/components/ui/CountUp";

export function TrustBar() {
  const stats = [
    { label: "Spent on Testing", value: "$47,000+" },
    { label: "Cat Owners Trust Us", value: "12,847" },
    { label: "Sponsored Reviews", value: "Zero" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 pb-8 border-t border-primary/10 pt-8 relative z-20">
      {stats.map((stat, index) => (
        <FadeUp
          key={index}
          delay={0.6 + index * 0.1}
          className="text-center group cursor-default"
        >
          <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1 group-hover:text-accent transition-colors duration-300">
            {stat.label === "Spent on Testing" ? <><span className="text-secondary">$</span><CountUp value={47000} suffix="+" /></> :
              stat.label === "Cat Owners Trust Us" ? <CountUp value={12847} /> :
                stat.value}
          </div>
          <div className="text-primary/60 text-[10px] md:text-xs font-bold tracking-widest uppercase">
            {stat.label}
          </div>
        </FadeUp>
      ))}
    </div>
  );
}
