import { Header } from '@/components/home/Header';
import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { FeaturedWinners } from '@/components/home/FeaturedWinners';
import { Methodology } from '@/components/home/Methodology';
import { LatestReviews } from '@/components/home/LatestReviews';
import { CategoryNavigation } from '@/components/home/CategoryNavigation';
import { Newsletter } from '@/components/home/Newsletter';
import { Footer } from '@/components/home/Footer';

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <FeaturedWinners />
        <Methodology />
        <LatestReviews />
        <CategoryNavigation />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
