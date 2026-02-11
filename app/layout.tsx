import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { TooltipProvider } from '@/components/ui/tooltip';
import '@/index.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
  variable: '--font-display',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light dark',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://rrmexternalcleaningspecialist.co.uk'),
  title: {
    default: 'Professional Pressure Washing & Exterior Cleaning | R.R.M Exterior Cleaning',
    template: '%s | R.R.M Exterior Cleaning',
  },
  description:
    'Professional pressure washing, driveway cleaning, roof soft washing, and exterior cleaning services in Newton-le-Willows, Warrington, and Greater Manchester. Trusted since 2016.',
  keywords: [
    'pressure washing',
    'driveway cleaning',
    'roof cleaning',
    'exterior cleaning',
    'soft washing',
    'Newton-le-Willows',
    'Warrington',
    'Greater Manchester',
  ],
  authors: [
    {
      name: 'R.R.M Exterior Cleaning Specialist',
      url: 'https://rrmexternalcleaningspecialist.co.uk',
    },
  ],
  creator: 'R.R.M Exterior Cleaning Specialist',
  publisher: 'R.R.M Exterior Cleaning Specialist',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://rrmexternalcleaningspecialist.co.uk',
    siteName: 'R.R.M Exterior Cleaning',
    title: 'Professional Pressure Washing & Exterior Cleaning | R.R.M Exterior Cleaning',
    description:
      'Expert pressure washing and exterior cleaning services in Newton-le-Willows, Warrington, and Greater Manchester. Licensed, insured, 5-star rated.',
    images: [
      {
        url: 'https://rrmexternalcleaningspecialist.co.uk/og-image.png',
        width: 1200,
        height: 630,
        alt: 'R.R.M Exterior Cleaning',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Pressure Washing & Exterior Cleaning | R.R.M Exterior Cleaning',
    description:
      'Expert pressure washing and exterior cleaning services in Newton-le-Willows, Warrington, and Greater Manchester. Fully insured, 5-star rated.',
    images: ['https://rrmexternalcleaningspecialist.co.uk/twitter-image.png'],
    creator: '@rrmcleaning',
  },
  category: 'Business Services',
  classification: 'Services',
  other: {
    'google-site-verification': 'v8P94CRfISwlk7t5LpsCS6QK4yb5M6PEw-Axte6p0WQ',
    'ICBM': '53.4455,-2.6396',
    'geo.placename': 'Newton-le-Willows',
    'geo.region': 'GB-ENG',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/webp" href="/logo.webp" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.webp" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="anonymous" />
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://rrmexternalcleaningspecialist.co.uk/#localbusiness',
              name: 'R.R.M External Cleaning Specialist',
              description:
                'Professional exterior cleaning services in Newton-le-Willows, Warrington, and Greater Manchester',
              url: 'https://rrmexternalcleaningspecialist.co.uk',
              telephone: '+447845463877',
              email: 'rrmexternalcleaning@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '9 Noon Ct',
                addressLocality: 'Newton-le-Willows',
                addressRegion: 'Merseyside',
                postalCode: 'WA12 8QY',
                addressCountry: 'GB',
              },
              areaServed: [
                { '@type': 'City', name: 'Newton-le-Willows' },
                { '@type': 'City', name: 'Lowton' },
                { '@type': 'City', name: 'Haydock' },
                { '@type': 'City', name: 'Golborne' },
                { '@type': 'City', name: 'Earlestown' },
                { '@type': 'City', name: 'Burtonwood' },
                { '@type': 'City', name: 'Ashton-in-Makerfield' },
                { '@type': 'City', name: 'Warrington' },
                { '@type': 'City', name: 'St Helens' },
                { '@type': 'City', name: 'Widnes' },
                { '@type': 'City', name: 'Liverpool' },
                { '@type': 'City', name: 'Manchester' },
                { '@type': 'City', name: 'Huyton' },
                { '@type': 'City', name: 'Lymm' },
                { '@type': 'City', name: 'Wigan' },
                { '@type': 'City', name: 'Skelmersdale' },
                { '@type': 'State', name: 'Greater Manchester' },
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                ratingCount: '1',
              },
              image: 'https://rrmexternalcleaningspecialist.co.uk/logo.webp',
              priceRange: '$$',
              foundingDate: '2016',
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '00:00',
                closes: '23:59',
              },
              sameAs: [
                'https://www.facebook.com/rrmcleaning',
                'https://www.instagram.com/rrmcleaning',
              ],
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://rrmexternalcleaningspecialist.co.uk/#organization',
              name: 'R.R.M External Cleaning Specialist',
              url: 'https://rrmexternalcleaningspecialist.co.uk',
              logo: 'https://rrmexternalcleaningspecialist.co.uk/logo.webp',
              description:
                'Professional exterior cleaning services in Newton-le-Willows, Warrington, and Greater Manchester',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                telephone: '+447845463877',
                email: 'rrmexternalcleaning@gmail.com',
              },
              sameAs: [
                'https://www.facebook.com/rrmcleaning',
                'https://www.instagram.com/rrmcleaning',
              ],
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
