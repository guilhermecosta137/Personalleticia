import { Inter, Crimson_Text } from 'next/font/google'
import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-display',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://leticiaferreira.fit'),
  title: {
    default: 'Letícia Ferreira | Personal Trainer & Pilates em Juiz de Fora',
    template: '%s | Letícia Ferreira Fit',
  },
  description: 'Personal Training e Pilates com Letícia Ferreira em Juiz de Fora. Treinamento técnico e personalizado para transformação real do seu corpo. Agende sua avaliação gratuita.',
  keywords: [
    'personal trainer juiz de fora',
    'pilates juiz de fora',
    'treinamento personalizado',
    'musculação feminina',
    'emagrecimento',
    'hipertrofia',
    'letícia ferreira',
  ],
  authors: [{ name: 'Letícia Ferreira' }],
  creator: 'Letícia Ferreira',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://leticiaferreira.fit',
    siteName: 'Letícia Ferreira Fit',
    title: 'Letícia Ferreira | Personal Trainer & Pilates',
    description: 'Treinamento técnico e personalizado para transformação real. Personal Training + Pilates em Juiz de Fora.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Letícia Ferreira - Personal Trainer e Pilates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letícia Ferreira | Personal Trainer & Pilates',
    description: 'Treinamento técnico e personalizado para transformação real.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${crimsonText.variable}`}>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
