import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import BackToTop from '@/components/shared/BackToTop';
import HomeHero from '@/components/home/Hero';
import HomeServices from '@/components/home/Services';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import FounderTeaser from '@/components/home/FounderTeaser';
import HomeCta from '@/components/home/HomeCta';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <HomeServices />
        <FeaturedProjects />
        <FounderTeaser />
        <HomeCta />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
