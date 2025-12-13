
import { CategoryPage, CategoryData } from '@/components/categories/CategoryPage';

const categoryData: CategoryData = {
    title: "Best Budget Cat Litter (2025)",
    description: "You don't need to spend $40 a month to avoid smelling cat poop. We found the best cheap litters that actually work.",
    stats: {
        tested: 15,
        duration: "4 Months",
        priceRange: "$8 - $20"
    },
    products: [
        {
            id: "arm-hammer-clump-seal",
            name: "Arm & Hammer Clump & Seal",
            image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=800&q=80",
            price: "$$",
            score: 8.7,
            quickTake: "The best value for odor sealing.",
            pros: ["Seals odor instantly", "Cheap", "Hard clumps"],
            cons: ["Strong perfume", "Fine dust"],
            type: "Clay",
            weight: "38lbs",
            reviewUrl: "/reviews/arm-hammer-clump-seal",
            priceCheckUrl: "https://amazon.com",
            tags: ["budget", "clay", "scented"]
        },
        {
            id: "dr-elseys-ultra",
            name: "Dr. Elsey's Ultra",
            image: "https://images.unsplash.com/photo-1603573568853-294c65365511?w=800&q=80",
            price: "$$",
            score: 9.4,
            quickTake: "The gold standard. Slightly more expensive than grocery brands, but lasts longer.",
            pros: ["Best clumping", "No Smell", "Hypoallergenic"],
            cons: ["Heavy bags", "Tracking"],
            type: "Clay",
            weight: "40lbs",
            reviewUrl: "/reviews/dr-elseys-ultra",
            priceCheckUrl: "https://amazon.com",
            tags: ["premium", "clay", "unscented"]
        },
        {
            id: "boxiecat-premium",
            name: "Boxiecat Premium",
            image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&q=80",
            price: "$$$",
            score: 9.2,
            quickTake: "Premium option provided for comparison. Better dust control.",
            pros: ["Flat top clumps", "Zero dust", "Clean"],
            cons: ["Twice the price", "Hard to find"],
            type: "Clay",
            weight: "28lbs",
            reviewUrl: "/reviews/boxiecat-premium",
            priceCheckUrl: "https://amazon.com",
            tags: ["premium", "clay", "unscented"]
        }
    ],
    quickPicks: {
        overall: {
            id: "arm-hammer-clump-seal",
            name: "Arm & Hammer Clump & Seal",
            image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=800&q=80",
            price: "$$",
            score: 8.7,
            quickTake: "The best value for odor sealing.",
            pros: ["Seals odor instantly", "Cheap", "Hard clumps"],
            cons: ["Strong perfume", "Fine dust"],
            type: "Clay",
            weight: "38lbs",
            reviewUrl: "/reviews/arm-hammer-clump-seal",
            priceCheckUrl: "https://amazon.com",
            tags: ["budget"],
            bestFor: "Maximum Odor Blocking"
        },
        value: {
            id: "dr-elseys-ultra",
            name: "Dr. Elsey's Ultra",
            image: "https://images.unsplash.com/photo-1603573568853-294c65365511?w=800&q=80",
            price: "$$",
            score: 9.4,
            quickTake: "The gold standard.",
            pros: ["Best clumping", "No Smell", "Hypoallergenic"],
            cons: ["Heavy bags", "Tracking"],
            type: "Clay",
            weight: "40lbs",
            reviewUrl: "/reviews/dr-elseys-ultra",
            priceCheckUrl: "https://amazon.com",
            tags: ["premium"],
            bestFor: "Dust-Free Homes"
        },
        niche: {
            id: "worlds-best",
            name: "World's Best Cat Litter",
            image: "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5d0?w=800&q=80",
            price: "$$$",
            score: 9.1,
            quickTake: "The best natural clumping litter.",
            pros: ["Flushable & Septic Safe", "Lightweight", "Sustainable corn"],
            cons: ["Expensive", "Musky corn smell"],
            type: "Corn",
            weight: "28lbs",
            reviewUrl: "/reviews/worlds-best",
            priceCheckUrl: "https://amazon.com",
            tags: ["natural"],
            bestFor: "Flushability",
            nicheLabel: "Best Natural"
        }
    },
    faq: [
        {
            question: "Is Tidy Cats worthy buying?",
            answer: "It's okay. The 'Lightweight' version is incredibly dusty (choking hazard). The standard clay version is decent but tracks badly."
        },
        {
            question: "How often should I change cheap litter?",
            answer: "Weekly. Unlike premium litter which can last 30 days with scooping, cheap litter saturates with ammonia quickly."
        }
    ],
    comparisonProducts: [
        {
            id: "arm-hammer-clump-seal",
            name: "Arm & Hammer",
            image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=200&q=80",
            score: 8.7,
            price: "$$",
            type: "Clay",
            dust: 8,
            clumping: 9,
            odor: 9,
            tracking: 6,
            attributes: { natural: false, flushable: false, scented: true },
            reviewUrl: "/reviews/arm-hammer-clump-seal"
        },
        {
            id: "dr-elseys-ultra",
            name: "Dr. Elsey's Ultra",
            image: "https://images.unsplash.com/photo-1603573568853-294c65365511?w=200&q=80",
            score: 9.4,
            price: "$$",
            type: "Clay",
            dust: 9,
            clumping: 10,
            odor: 9,
            tracking: 6,
            attributes: { natural: false, flushable: false, scented: false },
            reviewUrl: "/reviews/dr-elseys-ultra"
        },
        {
            id: "boxiecat-premium",
            name: "Boxiecat Premium",
            image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=200&q=80",
            score: 9.2,
            price: "$$$",
            type: "Clay",
            dust: 10,
            clumping: 9,
            odor: 8.5,
            tracking: 8,
            attributes: { natural: false, flushable: false, scented: false },
            reviewUrl: "/reviews/boxiecat-premium"
        }
    ]
};

const buyingGuide = (
    <>
        <h3>The Mathematics of Cheap Litter</h3>
        <p>
            Cheap litter often costs <em>more</em> in the long run. Why? Because it doesn&apos;t form tight clumps. When you scoop, the clump breaks apart, leaving dirty crumbs behind. This forces you to dump the entire box and refill it every week instead of every month.
        </p>

        <h3>The &quot;Grocery Store&quot; Trap</h3>
        <p>
            Most litters under $10 rely on heavy perfumes to mask odor because they lack the premium ingredients to absorb it.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-xl">
            <h4 className="font-bold text-blue-900 mb-2">💡 The Budget &quot;Super-Hack&quot;</h4>
            <p className="text-blue-800 mb-4">
                Here is how to get $40 performance for $15.
            </p>
            <ul className="list-decimal pl-6 text-blue-800 mb-4 space-y-2">
                <li>Buy the cheapest <strong>Unscented</strong> clumping clay litter you can find (e.g., Special Kitty).</li>
                <li>Add one scoop of <a href="https://purrify.ca" target="_blank" className="font-bold underline hover:text-blue-950">Purrify Deodorizer</a> ($10).</li>
                <li><strong>Result:</strong> Creates a premium probiotic litter that outperforms the expensive brands.</li>
            </ul>
            <p className="font-bold text-blue-900 mt-2">
                You save ~50% annually by buying generic litter and boosting it with Purrify.
            </p>
        </div>
    </>
);

export default function BestBudgetLitterPage() {
    return <CategoryPage {...categoryData}>{buyingGuide}</CategoryPage>;
}
