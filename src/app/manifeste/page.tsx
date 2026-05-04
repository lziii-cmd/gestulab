import type { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import ManifestePage from '@/components/manifeste/ManifestePage';

export const metadata: Metadata = {
  title: 'Manifeste — Gëstu Systems',
  description:
    "Pourquoi Gëstu Systems existe. La philosophie gëstu : explorer avant d'agir, comprendre avant de construire. Le manifeste du studio.",
  openGraph: {
    title: 'Le Manifeste Gëstu Systems',
    description: "On ne construit pas bien ce qu'on n'a pas pris le temps de comprendre.",
  },
};

export default function ManifestRoute() {
  return (
    <>
      <Header />
      <main>
        <ManifestePage />
      </main>
      <Footer />
    </>
  );
}
