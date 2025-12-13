import { CategoryPage, CategoryData } from '@/components/categories/CategoryPage';

const categoryData: CategoryData = {
    title: "Best Natural Cat Litter (2025)",
    description: "Stop bringing clay dust into your home. We tested the top 12 natural litters to find the ones that actually clump and don't attract bugs.",
    stats: {
        tested: 12,
        duration: "3 Months",
        priceRange: "$18 - $35"
    },
    products: [
        {
            id: "worlds-best",
            name: "World's Best Cat Litter",
            image: "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5d0?w=800&q=80",
            price: "$$$",
            score: 9.1,
            quickTake: "The overall winner. Best clumping for precise scooping.",
            pros: ["Flushable", "Excellent clumping", "Sustainable corn"],
            cons: ["Smells like corn", "Can attract bugs"],
            type: "Corn",
            weight: "28lbs",
            reviewUrl: "/reviews/worlds-best",
            priceCheckUrl: "https://amazon.com",
            tags: ["natural", "clumping", "flushable"]
        },
        {
            id: "prettylitter",
            name: "PrettyLitter",
            image: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=800&q=80",
            price: "$$$$",
            score: 8.8,
            quickTake: "Best for health monitoring, but non-clumping behavior is polarizing.",
            pros: ["Health indicators", "Delivered to door", "Lightweight"],
            cons: ["Expensive", "Does not clump"],
            type: "Silica",
            weight: "6lbs",
            reviewUrl: "/reviews/prettylitter",
            priceCheckUrl: "https://prettylitter.com",
            tags: ["silica", "health", "non-clumping"]
        },
        {
            id: "dr-elseys-ultra",
            name: "Dr. Elsey's Ultra",
            image: "https://images.unsplash.com/photo-1603573568853-294c65365511?w=800&q=80",
            price: "$$",
            score: 9.4,
            quickTake: "Not natural (Clay), but included for comparison as the gold standard.",
            pros: ["Best clumping", "Cheap", "Odor control"],
            cons: ["Heavy", "Not eco-friendly"],
            type: "Clay",
            weight: "40lbs",
            reviewUrl: "/reviews/dr-elseys-ultra",
            priceCheckUrl: "https://amazon.com",
            tags: ["clay", "clumping", "budget"]
        }
    ],
    quickPicks: {
        overall: {
            id: "worlds-best",
            name: "World's Best Cat Litter",
            image: "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5d0?w=800&q=80",
            price: "$$$",
            score: 9.1,
            quickTake: "The overall winner. Best clumping for precise scooping.",
            pros: ["Flushable", "Excellent clumping", "Sustainable corn"],
            cons: ["Smells like corn", "Can attract bugs"],
            type: "Corn",
            weight: "28lbs",
            reviewUrl: "/reviews/worlds-best",
            priceCheckUrl: "https://amazon.com",
            tags: ["natural"],
            bestFor: "Eco-conscious owners"
        },
        value: {
            id: "dr-elseys-ultra",
            name: "Dr. Elsey's Ultra",
            image: "https://images.unsplash.com/photo-1603573568853-294c65365511?w=800&q=80",
            price: "$$",
            score: 9.4,
            quickTake: "Not natural (Clay), but included for comparison as the gold standard.",
            pros: ["Best clumping", "Cheap", "Odor control"],
            cons: ["Heavy", "Not eco-friendly"],
            type: "Clay",
            weight: "40lbs",
            reviewUrl: "/reviews/dr-elseys-ultra",
            priceCheckUrl: "https://amazon.com",
            tags: ["clay"],
            bestFor: "Budget performance"
        },
        niche: {
            id: "prettylitter",
            name: "PrettyLitter",
            image: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=800&q=80",
            price: "$$$$",
            score: 8.8,
            quickTake: "Best for health monitoring.",
            pros: ["Health indicators", "Delivered to door", "Lightweight"],
            cons: ["Expensive", "Does not clump"],
            type: "Silica",
            weight: "8lbs",
            reviewUrl: "/reviews/prettylitter",
            priceCheckUrl: "https://prettylitter.com",
            tags: ["health"],
            bestFor: "Health monitoring",
            nicheLabel: "Best Tech"
        }
    },
    faq: [
        {
            question: "Can I really flush corn litter?",
            answer: "Yes, but be careful. Flush one clump at a time. Do not flush if you have a septic tank unless the brand specifically says 'septic safe' (World's Best is)."
        },
        {
            question: "Does natural litter attract bugs?",
            answer: "It can. It is food, after all. Keep the box clean and scoop daily to avoid flour beetles or ants finding a free meal."
        }
    ],
    comparisonProducts: [
        {
            id: "worlds-best",
            name: "World's Best",
            image: "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5d0?w=200&q=80",
            score: 9.1,
            price: "$$$",
            type: "Corn",
            dust: 8,
            clumping: 9,
            odor: 8.5,
            tracking: 8,
            attributes: { natural: true, flushable: true, scented: false },
            reviewUrl: "/reviews/worlds-best"
        },
        {
            id: "prettylitter",
            name: "PrettyLitter",
            image: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=200&q=80",
            score: 8.8,
            price: "$$$$",
            type: "Silica",
            dust: 9,
            clumping: 0,
            odor: 9,
            tracking: 7,
            attributes: { natural: false, flushable: false, scented: false },
            reviewUrl: "/reviews/prettylitter"
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
        }
    ]
};

const buyingGuide = (
    <>
        <h3>Why Switch to Natural Litter?</h3>
        <p>
            Clay litter is strip-mined and ends up in landfills forever. Natural litters (corn, wheat, pine, walnut) are sustainable, often flushable, and lighter.
        </p>

        <h3>The &quot;Corn Smell&quot; Issue</h3>
        <p>
            Some users find that corn litter develops a sour fermented smell if not scooped daily. This is because it is organic matter.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-xl">
            <h4 className="font-bold text-blue-900 mb-2">💡 Pro Tip: Stop The Sour Smell</h4>
            <p className="text-blue-800 mb-4">
                Natural litters are more prone to bacterial growth than clay. Using a probiotic deodorizer like Purrify is virtually mandatory for corn/wheat litter to prevent that &quot;barnyard&quot; smell.
            </p>
            <p className="text-green-800">
                <strong>The Solution:</strong> Add a probiotic booster like <a href="https://purrify.ca" target="_blank" className="font-bold underline hover:text-green-950">Purrify</a> to your natural litter.
            </p>
            <p className="font-bold text-green-900 mt-2">
                Purrify uses enzymes to break down the waste <em>before</em> it ferments into that sour smell. It makes corn and wheat litter perform just as well as heavy chemical clay.
            </p>
        </div>

        <h3>Corn vs. Wood vs. Grass</h3>
        <p>
            <strong>Corn (World&apos;s Best):</strong> Clumps the best. Can smell sour.<br />
            <strong>Wood (Okocat):</strong> Smells like lumber (nice). Clumps poorly.<br />
            <strong>Grass (SmartCat):</strong> Clumps amazing. Tracks everywhere.
        </p>
    </>
);

export default function BestNaturalLitterPage() {
    return <CategoryPage {...categoryData}>{buyingGuide}</CategoryPage>;
}
