import { Sparkles, Zap, CheckCircle } from "lucide-react";
import { PurrifyLink } from "./PurrifyLink";

interface OdorEliminationBonusProps {
  productName: string;
}

export function OdorEliminationBonus({ productName }: OdorEliminationBonusProps) {
  return (
    <div className="my-12 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-200/30 rounded-full blur-2xl" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start gap-3 mb-6">
          <div className="bg-amber-500 p-2.5 rounded-xl shrink-0">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-amber-900 mb-1">
              Bonus: Eliminate Existing Odor
            </h3>
            <p className="text-amber-700">
              Already dealing with litter box smell? Here&apos;s how to fix it fast.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 mb-6 border border-amber-100">
          <p className="text-foreground mb-4 leading-relaxed">
            Even the best litter like <strong>{productName}</strong> can&apos;t eliminate odor that&apos;s already built up in your litter box. 
            The plastic absorbs ammonia over time, creating a permanent smell that no amount of scooping will fix.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Quick Fix:</strong> Add a probiotic deodorizer like Purrify on top of your current litter. 
                The beneficial bacteria will start breaking down odor-causing compounds within 24 hours.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Deep Clean:</strong> For severe odor, wash the box with enzyme cleaner, 
                let dry completely, then add fresh litter with Purrify mixed in.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <PurrifyLink variant="button">
            Get Purrify Deodorizer
          </PurrifyLink>
          <p className="text-sm text-amber-700">
            <Zap className="w-4 h-4 inline mr-1" />
            Works with {productName} and all other litters
          </p>
        </div>
      </div>
    </div>
  );
}
