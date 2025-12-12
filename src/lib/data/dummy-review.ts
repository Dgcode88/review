import { ProductReview } from "@/lib/types/review";

export const dummyReview: ProductReview = {
    id: "dr-elseys-ultra",
    slug: "dr-elseys-ultra",
    name: "Dr. Elsey's Ultra",
    brand: "Dr. Elsey's",
    category: "Clumping Clay",
    price: "$24.99",
    rating: 9.4,
    badge: "Editor's Choice",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80",
    scores: {
        dust: 9.0,
        clumping: 10.0,
        odor: 8.0,
        tracking: 7.0,
        value: 8.0,
    },
    specs: {
        dustLevel: "0.03mg",
        avgDailyCost: "$0.51",
        clumpHardness: "Rock Hard",
        lastedWeeks: "7 Weeks",
    },
    verdict: {
        summary: "The best dust-free clumping litter we've tested, period.",
        pros: [
            "Genuinely zero dust (tested!)",
            "Rock-solid clumps that don't break",
            "Minimal tracking",
            "Lasts 30% longer than average"
        ],
        cons: [
            "More expensive than basic options",
            "Moderately heavy (40lb bags)",
            "Not flushable"
        ],
        bestFor: [
            "Dust-sensitive owners",
            "Those who want rock-hard clumps"
        ],
        skipIf: [
            "You're on a tight budget",
            "You need natural/flushable"
        ]
    },
    intro: "After testing this for 90 days with 6 different cats, here's the truth: This is the best clumping litter we've tested if you prioritize dust control and rock-solid clumps. You'll pay 30% more than basic clay, but you'll scoop 40% less often and deal with zero dust clouds.",
    content: `
## What This Litter Actually Is (No Marketing BS)

Dr. Elsey's Ultra is a medium-grain clay litter designed specifically for multi-cat households. Unlike most lightweight litters that use corn or wheat, this is 100% bentonite clay. That means it's heavy, but it forms concrete-like clumps.

## Performance Results: The Data

### Dust Control (9.0/10)
We measured **0.03mg of dust per pour** using our air quality monitor. That's 94% less than the average clay litter. You won't see visible dust clouds even when pouring from 2 feet up.

### Clumping (10/10)
If you hate it when clumps crumble as you try to scoop them, this is your solution. We dropped clumps from 3 feet onto concrete, and they didn't shatter. This is rare.

### Odor Control (8.0/10)
It doesn't use heavy perfumes. It relies on locking moisture away instantly. For 2 cats, it held up perfectly for 5 days without a full change. If you have 4+ cats, you might need a scented option or more frequent changes.

## Real-World Use

Using this litter feels premium. It doesn't stick to the box liner, it scoops cleanly, and you don't feel like you're breathing in a construction site every time you top it off.
  `,
    datePublished: "2024-01-15"
};
