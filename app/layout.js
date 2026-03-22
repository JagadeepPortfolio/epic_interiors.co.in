import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Toast from '@/components/Toast';
import ScrollReveal from '@/components/ScrollReveal';
import PageLoader from '@/components/PageLoader';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://epicinteriors.vercel.app'),
  title: {
    default: 'Epic Interiors — Timeless Elegance',
    template: '%s | Epic Interiors',
  },
  description:
    'Epic Interiors — Hyderabad\'s premier interior design studio. Modular kitchens, wardrobes, TV units, false ceilings, pooja units & complete home interiors.',
  keywords: 'interior design hyderabad, modular kitchen hyderabad, wardrobe design, false ceiling, epic interiors',
  openGraph: {
    title: 'Epic Interiors — Timeless Elegance',
    description:
      'Sleek, stylish, and functional modern interiors designed for timeless elegance.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Epic Interiors',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=630&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Epic Interiors — Premium Interior Design in Hyderabad',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://epicinteriors.vercel.app',
              name: 'Epic Interiors',
              description: 'Premium interior design studio in Hyderabad — modular kitchens, wardrobes, TV units, false ceilings, and complete home interiors.',
              url: 'https://epicinteriors.vercel.app',
              telephone: '+919032506322',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kukatpally, Hyderabad',
                addressRegion: 'Telangana',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 17.4065,
                longitude: 78.2674,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '19:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '17:00',
                },
              ],
              priceRange: '₹₹₹',
              image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=630&fit=crop&q=80',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="font-body bg-ink text-cream">
        <PageLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Toast />
        <ScrollReveal />
      </body>
    </html>
  );
}
