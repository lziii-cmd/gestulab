import type { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import BackToTop from '@/components/shared/BackToTop';
import BlogList from '@/components/blog/BlogList';

export const metadata: Metadata = {
  title: 'Blog — Numérique & Systèmes d\'information en Afrique',
  description:
    "Réflexions et retours d'expérience sur la digitalisation des entreprises africaines — ERP, développement web, data et transformation numérique.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogList />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
