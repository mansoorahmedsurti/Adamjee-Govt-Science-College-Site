"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Academics from "@/components/Academics";
import Tour from "@/components/Tour";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <div className="bg-beige">
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-accent focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Vercel Analytics and Speed Insights */}
      <Analytics />
      <SpeedInsights />

      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <Academics />
        <Tour />
        {/* SECCAP Admissions - now on separate page */}
        <News />
        {/* Foundations - now on separate page */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}