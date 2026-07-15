import type { Metadata } from 'next';
import SECCAPAdmissions from '@/components/SECCAPAdmissions';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteUrl } from '@/lib/site-config';

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

const admissionFlow = [
  {
    step: '01',
    title: 'Review Eligibility',
    description:
      'Confirm your SSC marks and stream eligibility (Pre-Medical, Pre-Engineering, or Computer Science) before applying.',
  },
  {
    step: '02',
    title: 'Create SECCAP Application',
    description:
      'Submit your online admission form through the official SECCAP portal with accurate academic and personal details.',
  },
  {
    step: '03',
    title: 'Select Adamjee as Preference',
    description:
      'Add Adamjee Government Science College in your preferred college list to be considered in merit rounds.',
  },
  {
    step: '04',
    title: 'Track Merit Lists',
    description:
      'Print Out the SECCAP result with the print button on top',
  },
  {
    step: '05',
    title: 'Complete Verification',
    description:
      'Visit the college with required documents for verification and admission confirmation by principal.',
  },
];

const requiredDocuments = [
  'Class IX Marks Sheet',
  'Class X Admit Card',
  'B-Form/CNIC',
  '2 Recent passport-size photographs',
  'SECCAP Admission Result(Generated after REsults announced)',
];

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
            <div className="grid gap-10 mb-14 lg:grid-cols-[1.8fr_1fr]">
              <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-forest-green mb-6">Admission Process (Step by Step)</h3>
                <div className="space-y-4">
                  {admissionFlow.map((item) => (
                    <article key={item.step} className="rounded-lg border border-slate-200 p-4 sm:p-5 bg-slate-50">
                      <p className="text-sm font-semibold tracking-wide text-blue-accent mb-2">Step {item.step}</p>
                      <h4 className="text-lg font-semibold text-navy-blue mb-1">{item.title}</h4>
                      <p className="text-slate-700">{item.description}</p>
                    </article>
                  ))}
                </div>
              </section>
              <aside className="space-y-6">
                <section className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-forest-green mb-4">Required Documents</h3>
                  <ul className="space-y-3 text-slate-700">
                    {requiredDocuments.map((document) => (
                      <li key={document} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-accent" aria-hidden="true" />
                        <span>{document}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-navy-blue mb-3">Important Note</h3>
                  <p className="text-slate-700">
                    Admissions are processed through SECCAP only. Keep checking official announcements for updated timelines,
                    merit movement, and verification dates.
                  </p>
                </section>
              </aside>
            </div>
            <SECCAPAdmissions />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
