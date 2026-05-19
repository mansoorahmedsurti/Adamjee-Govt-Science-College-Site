const defaultSiteUrl = 'https://agsckarachi.edu.pk';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || defaultSiteUrl;

const historyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'History',
  url: `${siteUrl}/history`,
  description:
    "History and foundations of one of Karachi's leading science colleges.",
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(historyJsonLd) }}
    />
  );
}
