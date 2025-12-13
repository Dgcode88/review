import { CategoryPage, CategoryData } from '@/components/categories/CategoryPage';

const categoryData: CategoryData = {
    title: "Best Odor Control Cat Litter (2025)",
    description: "If your house smells like a litter box, you're buying the wrong litter. We tested 23 brands to find the ones that actually trap, seal, and destroy odors.",
    stats: {
        tested: 23,
        duration: "6 Months",
        priceRange: "$15 - $32"
    },
    products: [
        {
            id: "arm-hammer-clump-seal",
            name: "Arm & Hammer Clump & Seal",
            image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=800&q=80",
            price: "$$",
            score: 8.7,
            quickTake: "The nuclear option. Seals odor instantly with micro-sealing granules and powerful scent.",
            pros: ["Seals odor instantly", "7-day guarantee works", "Cheap"],
            cons: ["Strong perfume smell", "Fine dust"],
            type: "Clay",
            weight: "38lbs",
            reviewUrl: "/reviews/arm-hammer-clump-seal",
            priceCheckUrl: "https://amazon.com",
            tags: ["odor-control", "clay", "scented"]
        },
        {
            id: "prettylitter",
            name: "PrettyLitter",
            image: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=800&q=80",
            price: "$$$$",
            score: 8.8,
            quickTake: "Best for urine odor. The silica crystals absorb moisture instantly, trapping the smell inside.",
            pros: ["Zero urine smell", "Lightweight", "Health monitoring"],
            cons: ["Expensive", "Poop smell can linger"],
            type: "Silica",
            weight: "8lbs",
            reviewUrl: "/reviews/prettylitter",
            priceCheckUrl: "https://prettylitter.com",
            tags: ["odor-control", "silica", "unscented"]
        },
        {
            id: "dr-elseys-ultra",
            name: "Dr. Elsey's Ultra",
            image: "https://images.unsplash.com/photo-1603573568853-294c65365511?w=800&q=80",
            price: "$$",
            score: 9.4,
            quickTake: "Best unscented option. Controls odor by locking waste in rock-solid clumps.",
            pros: ["No fake perfume", "Great clumping", "Dust free"],
            cons: ["Heavy", "No active deodorizer"],
            type: "Clay",
            weight: "40lbs",
            reviewUrl: "/reviews/dr-elseys-ultra",
            priceCheckUrl: "https://amazon.com",
            tags: ["odor-control", "clay", "unscented"]
        }
    ],
    quickPicks: {
        overall: {
            id: "arm-hammer-clump-seal",
            name: "Arm & Hammer Clump & Seal",
            image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=800&q=80",
            price: "$$",
            score: 8.7,
            quickTake: "The nuclear option for smell.",
            pros: ["Seals odor instantly", "7-day guarantee works", "Cheap"],
            cons: ["Strong perfume smell", "Fine dust"],
            type: "Clay",
            weight: "38lbs",
            reviewUrl: "/reviews/arm-hammer-clump-seal",
            priceCheckUrl: "https://amazon.com",
            tags: ["odor-control"],
            bestFor: "Max Scent Power"
        },
        value: {
            id: "dr-elseys-ultra",
            name: "Dr. Elsey's Ultra",
            image: "https://images.unsplash.com/photo-1603573568853-294c65365511?w=800&q=80",
            price: "$$",
            score: 9.4,
            quickTake: "Best unscented option.",
            pros: ["No fake perfume", "Great clumping", "Dust free"],
            cons: ["Heavy", "No active deodorizer"],
            type: "Clay",
            weight: "40lbs",
            reviewUrl: "/reviews/dr-elseys-ultra",
            priceCheckUrl: "https://amazon.com",
            tags: ["unscented"],
            bestFor: "Sensitive Noses"
        },
        niche: {
            id: "prettylitter",
            name: "PrettyLitter",
            image: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=800&q=80",
            price: "$$$$",
            score: 8.8,
            quickTake: "Best for urine odor.",
            pros: ["Zero urine smell", "Lightweight", "Health monitoring"],
            cons: ["Expensive", "Poop smell can linger"],
            type: "Silica",
            weight: "8lbs",
            reviewUrl: "/reviews/prettylitter",
            priceCheckUrl: "https://prettylitter.com",
            tags: ["silica"],
            bestFor: "Urine Odor",
            nicheLabel: "Best Absorbent"
        }
    },
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
            odor: 10,
            tracking: 6,
            attributes: { natural: false, flushable: false, scented: true },
            reviewUrl: "/reviews/arm-hammer-clump-seal"
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
            tracking: 8,
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
            odor: 8.5,
            tracking: 7,
            attributes: { natural: false, flushable: false, scented: false },
            reviewUrl: "/reviews/dr-elseys-ultra"
        }
    ],
    faq: [
        {
            question: "Why does my litter box still smell after scooping?",
            answer: "Small crumbles of poop or urine-saturated clay are often left behind. These bacterial colonies grow and emit gas. Using a better clumping litter (like Dr. Elsey's) or adding a probiotic (like Purrify) helps prevent this."
        },
        {
            question: "Is better to cover odor or remove it?",
            answer: "Always remove it. Covering odor with floral scents just creates a 'poop-pourri' smell that is actually more offensive to sensitive noses."
        }
    ]
};

const buyingGuide = (
    <>
        <h3>The Two Types of Odor Control</h3>
        <p>
            If you live in a small apartment, you can&apos;t afford cheap litter. The smell permeates <em>everything</em>—your clothes, your sofa, your bed.
        </p>
        <p>
            You need a litter with <strong>Activated Carbon</strong> or probiotics. Baking soda alone often isn&apos;t enough for multi-cat homes.
        </p>

        <h3>The &quot;Nose Blindness&quot; Danger</h3>
        <p>
            You might get used to the smell (&quot;nose blind&quot;), but your guests certainly aren&apos;t.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-xl">
            <h4 className="font-bold text-blue-900 mb-2">💡 Pro Tip: The &quot;Nuclear&quot; Option</h4>
            <p className="text-red-800 mb-4">
                Most cheap &quot;odor control&quot; litters just use heavy chemicals that are bad for your cat&apos;s lungs.
            </p>
            <p className="text-red-800">
                <strong>The Better Way:</strong> Use an unscented litter and add <a href="https://purrify.ca" target="_blank" className="font-bold underline hover:text-red-950">Purrify Deodorizer</a>.
            </p>
            <p className="font-bold text-red-900 mt-2">
                Purrify uses enzymes to essentially &quot;eat&quot; the waste at a microscopic level. It kills the source of the smell instead of just spraying perfume on it.
            </p>
        </div>

        <h3>Carbon vs. Baking Soda vs. Probiotics</h3>
        <p>
            <strong>Baking Soda:</strong> Cheap, absorbs some smell, but mostly filler.<br />
            <strong>Activated Carbon:</strong> Very effective at trapping gas molecules. Look for this in premium clays.<br />
            <strong>Probiotics:</strong> The new gold standard. Active bacteria that hunt down and destroy odor-causing waste.
        </p>
    </>
);

export default function BestOdorControlPage() {
    return <CategoryPage {...categoryData}>{buyingGuide}</CategoryPage>;
}
