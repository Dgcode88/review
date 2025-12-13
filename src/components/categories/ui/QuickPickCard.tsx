import Link from "next/link";
import { ArrowRight, Trophy, Star, Sparkles, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScoreBadge } from "@/components/reviews/ui/ScoreBadge";

interface QuickPickCardProps {
    type: "overall" | "value" | "niche";
    productName: string;
    image: string;
    score: number;
    bestFor: string;
    reviewUrl: string;
    priceCheckUrl: string;
}

export function QuickPickCard({
    type,
    productName,
    image,
    score,
    bestFor,
    reviewUrl,
    priceCheckUrl,
}: QuickPickCardProps) {
    const styles = {
        overall: {
            border: "border-amber-200",
            bg: "bg-amber-50",
            icon: Trophy,
            iconColor: "text-amber-600",
            badgeColor: "bg-amber-100 text-amber-800",
            label: "Overall Winner",
        },
        value: {
            border: "border-blue-200",
            bg: "bg-blue-50",
            icon: DollarSign,
            iconColor: "text-blue-600",
            badgeColor: "bg-blue-100 text-blue-800",
            label: "Best Value",
        },
        niche: {
            border: "border-green-200",
            bg: "bg-green-50",
            icon: Sparkles,
            iconColor: "text-green-600",
            badgeColor: "bg-green-100 text-green-800",
            label: type === 'niche' ? 'Best Natural' : 'Top Pick', // Customizable
        },
    };

    const style = styles[type] || styles.overall;
    const Icon = style.icon;

    return (
        <div className={cn("relative rounded-2xl border-2 p-6 flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow", style.border)}>
            {/* Label Badge */}
            <div className={cn("absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-2 shadow-sm", style.badgeColor)}>
                <Icon className="w-4 h-4" />
                {style.label}
            </div>

            <div className="mt-4 mb-6 relative aspect-square">
                <img
                    src={image}
                    alt={productName}
                    className="w-full h-full object-contain p-4"
                />
                <div className="absolute top-0 right-0">
                    <ScoreBadge score={score} size="md" />
                </div>
            </div>

            <h3 className="font-display font-bold text-xl text-center mb-2 leading-tight min-h-[3rem] flex items-center justify-center">
                {productName}
            </h3>

            <div className="bg-secondary/50 rounded-lg p-3 text-center mb-6 mt-auto">
                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Best For</span>
                <p className="font-medium text-sm text-foreground">{bestFor}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-auto">
                <Link href={reviewUrl} className="flex items-center justify-center py-2.5 rounded-lg border border-border text-sm font-bold text-foreground hover:bg-secondary transition-colors">
                    Review
                </Link>
                <a href={priceCheckUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center py-2.5 rounded-lg bg-primary text-sm font-bold text-white hover:bg-primary/90 transition-colors shadow-sm">
                    Check Price
                </a>
            </div>
        </div>
    );
}
