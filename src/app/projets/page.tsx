import type { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import BackToTop from '@/components/shared/BackToTop';
import ProjectsGrid from '@/components/projects/ProjectsGrid';

export const metadata: Metadata = {
  title: 'Projets — Gëstu Lab',
  description: 'Découvrez les réalisations de Gëstu Lab : applications web & mobile, systèmes d\'information, data pipelines et plus encore.',
};

export default function ProjetsPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectsGrid />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
