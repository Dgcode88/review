"use client";

import { FadeUp } from "@/components/ui/motion";
import { CountUp } from "@/components/ui/CountUp";

export function TrustBar() {
  const stats = [
    { label: "Hours of Lab Testing", value: "2,847" },
    { label: "Products Tested", value: "547" },
    { label: "Sponsored Reviews", value: "Zero" },
    { label: "Money Spent", value: "$47,000+" },
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
            {stat.label === "Hours of Lab Testing" ? <CountUp value={2847} /> :
              stat.label === "Products Tested" ? <CountUp value={547} /> :
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
