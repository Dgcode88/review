import { cn } from "@/lib/utils";

interface ScoreBadgeProps {
    score: number;
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
}

export function ScoreBadge({ score, size = "md", className }: ScoreBadgeProps) {
    let colorClass = "bg-green-500 text-white";

    if (score < 7) {
        colorClass = "bg-red-500 text-white";
    } else if (score < 9) {
        colorClass = "bg-amber-500 text-white";
    }

    const sizeClasses = {
        sm: "w-8 h-8 text-xs",
        md: "w-12 h-12 text-lg",
        lg: "w-16 h-16 text-xl",
        xl: "w-24 h-24 text-3xl",
    };

    return (
        <div
            className={cn(
                "rounded-full flex items-center justify-center font-bold shadow-lg",
                colorClass,
                sizeClasses[size],
                className
            )}
        >
            {score}
        </div>
    );
}
