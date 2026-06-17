import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { siteName, siteShortName, siteUrl } from "@/lib/site-config"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    template: `${siteName} - %s`,
    default: siteName,
  },
  alternates: {
    canonical: '/',
  },
  description:
    "Adamjee Government Science College in Karachi offers Pre-Engineering, Pre-Medical, and Computer Science programs with excellence in education since 1961.",
  keywords: ['Adamjee Government Science College', 'AGSC Karachi', 'Science College', 'Pre-Engineering', 'Pre-Medical', 'Computer Science', 'SECCAP', 'Education in Karachi'],
  authors: [{ name: siteName }],
  creator: 'Mansoor Ahmed',
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/agsc.png',
    shortcut: '/agsc.png',
    apple: '/agsc.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: siteUrl,
    title: siteName,
    description: 'Adamjee Government Science College in Karachi offers Pre-Engineering, Pre-Medical, and Computer Science programs with excellence in education since 1961.',
    siteName,
    images: [
      {
        url: '/images/agscpics.jpg',
        width: 1200,
        height: 630,
        alt: 'Adamjee Government Science College Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: 'Adamjee Government Science College in Karachi offers Pre-Engineering, Pre-Medical, and Computer Science programs with excellence in education since 1961.',
    images: ['/images/agscpics.jpg'],
  },
}

// '@context' is intentionally provided once at the root structuredDataGraph object.
const websiteJsonLd = {
  '@id': `${siteUrl}/#website`,
  '@type': 'WebSite',
  name: siteName,
  alternateName: siteShortName,
  url: siteUrl,
}

const organizationJsonLd = {
  '@type': 'CollegeOrUniversity',
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/images/agsc.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Business Recorder Road, Soldier Bazaar, Garden East',
    addressLocality: 'Karachi',
    addressCountry: 'PK',
  },
}

const siteNavigationJsonLd = [
  {
    '@type': 'SiteNavigationElement',
    name: 'Home',
    url: `${siteUrl}/`,
  },
  {
    '@type': 'SiteNavigationElement',
    name: 'Admissions',
    url: `${siteUrl}/admissions`,
  },
  {
    '@type': 'SiteNavigationElement',
    name: 'History',
    url: `${siteUrl}/history`,
  },
]

const pageJsonLd = [
  {
    '@type': 'WebPage',
    name: 'Home',
    url: `${siteUrl}/`,
    isPartOf: { '@id': `${siteUrl}/#website` },
  },
  {
    '@type': 'WebPage',
    name: 'Admissions',
    url: `${siteUrl}/admissions`,
    isPartOf: { '@id': `${siteUrl}/#website` },
  },
  {
    '@type': 'WebPage',
    name: 'History',
    url: `${siteUrl}/history`,
    isPartOf: { '@id': `${siteUrl}/#website` },
  },
]

const structuredDataGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    websiteJsonLd,
    organizationJsonLd,
    ...siteNavigationJsonLd,
    ...pageJsonLd,
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataGraph) }}
        />
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0"
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
