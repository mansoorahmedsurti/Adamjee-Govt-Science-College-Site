import type { Metadata } from 'next';
import SECCAPAdmissions from '@/components/SECCAPAdmissions';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const defaultSiteUrl = 'https://agsckarachi.edu.pk';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || defaultSiteUrl;

export const metadata: Metadata = {
  title: 'Admissions',
  description:
    'Adamjee Government Science College - Admissions information, eligibility, and SECCAP cutoff updates for prospective students.',
  alternates: {
    canonical: '/admissions',
  },
  openGraph: {
    url: `${siteUrl}/admissions`,
    title: 'Adamjee Government Science College - Admissions',
    description:
      'Admissions information, eligibility, and SECCAP cutoff updates for prospective students.',
  },
};

export default function AdmissionsPage() {
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
              Admissions
            </h2>
            <SECCAPAdmissions />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
