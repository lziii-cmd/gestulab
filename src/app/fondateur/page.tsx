import type { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import BackToTop from '@/components/shared/BackToTop';
import FounderPage from '@/components/founder/FounderPage';

export const metadata: Metadata = {
  title: 'El Hadji Abdou Babou Ngom — Fondateur de Gëstu Systems',
  description: 'Développeur full-stack, Designer UI/UX et Expert en systèmes d\'information. L\'homme derrière Gëstu Systems.',
};

export default function Fondateur() {
  return (
    <>
      <Header />
      <main>
        <FounderPage />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
