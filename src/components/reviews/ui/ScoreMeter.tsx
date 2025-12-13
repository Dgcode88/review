import { cn } from "@/lib/utils";

interface ScoreMeterProps {
    score: number;
    label: string;
    className?: string;
    showScore?: boolean;
}

export function ScoreMeter({ score, label, className, showScore = true }: ScoreMeterProps) {
    let colorClass = "bg-green-500";

    if (score < 7) {
        colorClass = "bg-red-500";
    } else if (score < 9) {
        colorClass = "bg-amber-500";
    }

    const percentage = Math.min(Math.max(score * 10, 0), 100);

    return (
        <div className={cn("w-full", className)}>
            <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-sm text-foreground/80 uppercase tracking-wide">{label}</span>
                {showScore && <span className="font-bold text-foreground">{score}/10</span>}
            </div>
            <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                <div
                    className={cn("h-full transition-all duration-1000 ease-out rounded-full", colorClass)}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}
