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
  title: "Adamjee Government Science College - Karachi",
  description:
    "Premier science college in Karachi with Pre-Engineering, Pre-Medical, and Computer Science programs. Excellence in education since 1961.",
  icons: {
    icon: [
      { url: '/agsc.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/agsc.png',
    apple: '/agsc.png',
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
