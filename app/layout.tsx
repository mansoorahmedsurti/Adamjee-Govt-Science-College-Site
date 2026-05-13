import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-geist',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-geist-mono',
})
const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

const defaultSiteUrl = 'https://agsckarachi.edu.pk'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || defaultSiteUrl

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'Adamjee Government Science College',
  title: {
    template: 'Adamjee Government Science College - %s',
    default: 'Adamjee Government Science College - Home',
  },
  alternates: {
    canonical: '/',
  },
  description:
    "Adamjee Government Science College in Karachi offers Pre-Engineering, Pre-Medical, and Computer Science programs with excellence in education since 1961.",
  keywords: ['Adamjee Government Science College', 'AGSC Karachi', 'Science College', 'Pre-Engineering', 'Pre-Medical', 'Computer Science', 'SECCAP', 'Education in Karachi'],
  authors: [{ name: 'Adamjee Government Science College' }],
  creator: 'Mansoor Ahmed',
  publisher: 'Adamjee Government Science College',
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
    title: 'Adamjee Government Science College - Home',
    description: 'Adamjee Government Science College in Karachi offers Pre-Engineering, Pre-Medical, and Computer Science programs with excellence in education since 1961.',
    siteName: 'Adamjee Government Science College',
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
    title: 'Adamjee Government Science College - Home',
    description: 'Adamjee Government Science College in Karachi offers Pre-Engineering, Pre-Medical, and Computer Science programs with excellence in education since 1961.',
    images: ['/images/agscpics.jpg'],
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Adamjee Government Science College',
  alternateName: 'AGSC',
  url: siteUrl,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
