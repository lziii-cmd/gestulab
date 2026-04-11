import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LangProvider } from '@/context/lang';
import './globals.css';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Gëstu Lab — Solutions Numériques sur Mesure',
  description: 'Gëstu Lab conçoit et déploie des solutions numériques durables pour les entreprises et institutions. Développement web & mobile, UI/UX, Data, ERP — depuis Dakar, pour le monde.',
  keywords: 'agence numérique, développement web, UI/UX, data, ERP, Dakar, Sénégal, Afrique, Gëstu Lab',
  openGraph: {
    title: 'Gëstu Lab — Explorer. Construire. Durer.',
    description: 'Solutions numériques sur mesure depuis Dakar.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="antialiased bg-dark text-text-primary">
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
