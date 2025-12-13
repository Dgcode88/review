import { ScoreBadge } from "@/components/reviews/ui/ScoreBadge";
import { Check, X, Minus } from "lucide-react";

export interface ProductSpec {
    id: string;
    name: string;
    image: string;
    score: number;
    price: string;
    type: string;
    dust: number; // 0-10
    clumping: number; // 0-10
    odor: number; // 0-10
    tracking: number; // 0-10
    attributes: {
        natural: boolean;
        flushable: boolean;
        scented: boolean;
    };
    reviewUrl: string;
}

interface CategoryComparisonTableProps {
    products: ProductSpec[];
}

export function CategoryComparisonTable({ products }: CategoryComparisonTableProps) {
    return (
        <div className="overflow-x-auto pb-4">
            <table className="w-full min-w-[800px] border-collapse text-left">
                <thead>
                    <tr className="border-b border-border">
                        <th className="p-4 bg-secondary/20 rounded-tl-xl w-[200px]">Product</th>
                        <th className="p-4 bg-secondary/20">Review Score</th>
                        <th className="p-4 bg-secondary/20">Price</th>
                        <th className="p-4 bg-secondary/20">Type</th>
                        <th className="p-4 bg-secondary/20">Dust</th>
                        <th className="p-4 bg-secondary/20">Clumping</th>
                        <th className="p-4 bg-secondary/20">Odor</th>
                        <th className="p-4 bg-secondary/20 rounded-tr-xl">Key Features</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border">
                    {products.map((product) => (
                        <tr key={product.id} className="hover:bg-secondary/10 transition-colors">
                            <td className="p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-white rounded-lg border border-border p-1">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                                    </div>
                                    <a href={product.reviewUrl} className="font-bold text-foreground hover:text-primary hover:underline block max-w-[150px] leading-tight">
                                        {product.name}
                                    </a>
                                </div>
                            </td>
                            <td className="p-4">
                                <div className="flex items-center gap-2">
                                    <ScoreBadge score={product.score} size="sm" />
                                    <span className="font-bold">{product.score}</span>
                                </div>
                            </td>
                            <td className="p-4 font-medium">{product.price}</td>
                            <td className="p-4 text-sm text-muted-foreground">{product.type}</td>
                            <td className="p-4">
                                <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full bg-primary" style={{ width: `${product.dust * 10}%` }} />
                                </div>
                                <span className="text-xs text-muted-foreground mt-1 block">{product.dust}/10</span>
                            </td>
                            <td className="p-4">
                                <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full bg-primary" style={{ width: `${product.clumping * 10}%` }} />
                                </div>
                                <span className="text-xs text-muted-foreground mt-1 block">{product.clumping}/10</span>
                            </td>
                            <td className="p-4">
                                <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full bg-primary" style={{ width: `${product.odor * 10}%` }} />
                                </div>
                                <span className="text-xs text-muted-foreground mt-1 block">{product.odor}/10</span>
                            </td>
                            <td className="p-4">
                                <div className="flex gap-2">
                                    {product.attributes.natural ? (
                                        <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium" title="Natural">
                                            🌿 Natural
                                        </span>
                                    ) : null}
                                    {product.attributes.flushable ? (
                                        <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium" title="Flushable">
                                            🚽 Flushable
                                        </span>
                                    ) : null}
                                    {product.attributes.scented ? (
                                        <span className="inline-flex items-center px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full font-medium" title="Scented">
                                            🌸 Scented
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full font-medium" title="Unscented">
                                            ⚪ Unscented
                                        </span>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
