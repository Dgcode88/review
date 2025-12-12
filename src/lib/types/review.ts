export interface ReviewScore {
    label: string;
    score: number; // 0-10
    description: string;
}

export interface ReviewVerdict {
    summary: string; // "Quick block" text
    pros: string[];
    cons: string[];
    bestFor: string[];
    skipIf: string[];
}

export interface ProductReview {
    id: string;
    slug: string;
    name: string;
    brand: string;
    category: string;

    // Hero Data
    price: string; // "$24.99"
    rating: number; // 9.4
    badge?: string; // "Editor's Choice"
    image: string;

    // Detailed Scores
    scores: {
        dust: number;
        clumping: number;
        odor: number;
        tracking: number;
        value: number;
    };

    // Detailed Measurements (for Hormozi specificity)
    specs: {
        dustLevel: string; // "0.03mg"
        avgDailyCost: string; // "$0.51"
        clumpHardness: string; // "Rock Hard"
        lastedWeeks: string; // "7 Weeks"
    };

    verdict: ReviewVerdict;

    // Content
    intro: string;
    content: string; // Markdown content
    datePublished: string;
}
