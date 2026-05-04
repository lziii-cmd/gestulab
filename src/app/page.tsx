import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import BackToTop from '@/components/shared/BackToTop';
import HomeHero from '@/components/home/Hero';
import StorySection from '@/components/home/StorySection';
import HomeServices from '@/components/home/Services';
import HomeProcess from '@/components/home/Process';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import HomeTestimonials from '@/components/home/Testimonials';
import FounderTeaser from '@/components/home/FounderTeaser';
import HomeCta from '@/components/home/HomeCta';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <StorySection />
        <HomeServices />
        <HomeProcess />
        <FeaturedProjects />
        <HomeTestimonials />
        <FounderTeaser />
        <HomeCta />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
