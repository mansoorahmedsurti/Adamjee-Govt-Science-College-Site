import type { Metadata } from 'next';
import Foundations from '@/components/Foundations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const defaultSiteUrl = 'https://agsckarachi.edu.pk';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || defaultSiteUrl;

export const metadata: Metadata = {
  title: 'History',
  description:
    "Adamjee Government Science College - History and foundations of one of Karachi's leading science colleges.",
  alternates: {
    canonical: '/history',
  },
  openGraph: {
    url: `${siteUrl}/history`,
    title: 'Adamjee Government Science College - History',
    description:
      "History and foundations of one of Karachi's leading science colleges.",
  },
};

export default function HistoryPage() {
  return (
    <div className="bg-beige">
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-accent focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content">
        <section className="py-20 bg-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-navy-blue text-center">
              History & Foundations
            </h2>
            <Foundations />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
