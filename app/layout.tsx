import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Playfair_Display, Cinzel, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] })
const _cinzel = Cinzel({ subsets: ["latin"], weight: ["700"] })
const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: '%s | Adamjee Government Science College - Karachi',
    default: 'Adamjee Government Science College - Karachi | Premier Science Education Since 1961',
  },
  description:
    "Premier science college in Karachi with Pre-Engineering, Pre-Medical, and Computer Science programs. Excellence in education since 1961.",
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
    url: 'https://agsckarachi.edu.pk',
    title: 'Adamjee Government Science College - Karachi | Premier Science Education Since 1961',
    description: 'Premier science college in Karachi with Pre-Engineering, Pre-Medical, and Computer Science programs. Excellence in education since 1961.',
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
    title: 'Adamjee Government Science College - Karachi',
    description: 'Premier science college in Karachi with Pre-Engineering, Pre-Medical, and Computer Science programs. Excellence in education since 1961.',
    images: ['/images/agscpics.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.className} antialiased`}>
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
