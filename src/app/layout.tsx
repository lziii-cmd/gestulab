import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LangProvider } from '@/context/lang';
import './globals.css';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' });

const baseUrl = 'https://gestulab-7lpx.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Gëstu Systems — Systèmes d\'information sur mesure pour les entreprises africaines',
    template: '%s | Gëstu Systems',
  },
  description:
    'Je conçois et livre des systèmes d\'information sur mesure pour les entreprises africaines — développement web & mobile, ERP, Data, UI/UX. Depuis Dakar, pour le monde.',
  keywords: [
    'développeur web Dakar',
    'agence numérique Sénégal',
    'systèmes d\'information Afrique',
    'ERP Sénégal',
    'développement web Afrique',
    'application mobile Dakar',
    'UI/UX design Sénégal',
    'Gëstu Systems',
    'El Hadji Abdou Babou Ngom',
  ],
  authors: [{ name: 'El Hadji Abdou Babou Ngom', url: baseUrl }],
  creator: 'El Hadji Abdou Babou Ngom',
  publisher: 'Gëstu Systems',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_SN',
    alternateLocale: 'en_US',
    url: baseUrl,
    siteName: 'Gëstu Systems',
    title: 'Gëstu Systems — Systèmes d\'information sur mesure pour les entreprises africaines',
    description:
      'Je conçois et livre des systèmes d\'information sur mesure pour les entreprises africaines. Développement web & mobile, ERP, Data, UI/UX. Depuis Dakar, pour le monde.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gëstu Systems — Explorer. Construire. Durer.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gëstu Systems — Solutions numériques ancrées dans la réalité africaine',
    description:
      'Je conçois et livre des systèmes d\'information sur mesure depuis Dakar. Un seul interlocuteur, du début à la fin.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

/* ── JSON-LD Schema.org — LocalBusiness / ProfessionalService ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Gëstu Systems',
  alternateName: 'Gëstu Systems — El Hadji Abdou Babou Ngom',
  description:
    'Systèmes d\'information sur mesure pour les entreprises et institutions africaines. Développement web & mobile, ERP, Data, UI/UX Design, Cybersécurité.',
  url: baseUrl,
  logo: `${baseUrl}/og-image.png`,
  email: 'ngomabdoubabou@outlook.fr',
  founder: {
    '@type': 'Person',
    name: 'El Hadji Abdou Babou Ngom',
    jobTitle: 'Fondateur & Lead Developer',
    url: `${baseUrl}/fondateur`,
    knowsLanguage: ['fr', 'en', 'wo'],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dakar',
    addressCountry: 'SN',
  },
  areaServed: ['SN', 'Africa', 'Worldwide'],
  serviceType: [
    'Développement Web',
    'Développement Mobile',
    'Design UI/UX',
    'ERP & Digitalisation',
    'Data & Intelligence Artificielle',
    'Cybersécurité',
  ],
  sameAs: [
    'https://linkedin.com/in/el-hadji-abdou-babou-ngom',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-dark text-text-primary">
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
