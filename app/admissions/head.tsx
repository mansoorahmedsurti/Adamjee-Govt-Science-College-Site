const defaultSiteUrl = 'https://agsckarachi.edu.pk';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || defaultSiteUrl;

const admissionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Admissions',
  url: `${siteUrl}/admissions`,
  description:
    'Admissions information, eligibility, and SECCAP cutoff updates for prospective students.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Adamjee Government Science College',
    url: siteUrl,
  },
};

export default function Head() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(admissionsJsonLd) }}
    />
  );
}
