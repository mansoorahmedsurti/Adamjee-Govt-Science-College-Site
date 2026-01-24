"use client"

import Link from "next/link"
import Image from "next/image"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Shield, Zap, Users, MapPin, Mail, Instagram, Facebook, Award, Phone, MessageCircle } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import FacebookFeed from "@/components/FacebookFeed"

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const increment = end / (duration * 60)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 1000 / 60)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export default function Home() {
  const newsItems = [
    { date: "Dec 2024", title: "SECCAP Merit List Released", icon: "📋" },
    { date: "Dec 2024", title: "HSC Part 2 Results Announced", icon: "📊" },
    { date: "Nov 2024", title: "Annual Sports Week 2024", icon: "⚽" },
    { date: "Nov 2024", title: "Science Fair - Student Projects", icon: "🔬" },
    { date: "Oct 2024", title: "New Computer Lab Inauguration", icon: "💻" },
    { date: "Sep 2024", title: "Orientation Week 2024", icon: "🎓" },
  ]

  const [newsIndex, setNewsIndex] = useState(0)
  const [activeTab, setActiveTab] = useState("location")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setNewsIndex((prev) => (prev + 1) % newsItems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [newsItems.length])

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

      {/* Navigation */}
      <nav className="sticky top-0 z-50 navbar-premium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Image src="/images/agsc.png" alt="Adamjee Government Science College Logo" width={48} height={48} className="w-12 h-12" />
            </div>
            <div className="hidden md:flex gap-8">
              {["Home", "Academics", "Tour", "Admissions", "History", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-medium text-sm transition duration-300 text-navy-blue hover:text-blue-accent"
                >
                  {item}
                </Link>
              ))}
            </div>
            <button
              className="md:hidden w-12 h-12 rounded-full font-medium transition duration-300 flex items-center justify-center bg-blue-accent text-white hover:bg-navy-dark focus:outline-none focus:ring-2 focus:ring-blue-accent focus:ring-offset-2"
              aria-label="Mobile menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Positioned outside the navbar to avoid overlay issues */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:hidden`}
           onClick={() => setIsMobileMenuOpen(false)}>
        <div className={`absolute top-16 left-0 right-0 w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
             onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col p-4 space-y-4">
            {["Home", "Academics", "Tour", "Admissions", "History", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium text-base py-3 px-4 transition duration-300 text-navy-blue hover:bg-blue-accent hover:text-white rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <main id="main-content">

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden flex items-center justify-center">
        <Image src="/images/agscpics.jpg" alt="Adamjee Government Science College Campus" fill className="object-cover absolute inset-0" priority />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#003319]/50"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
            Adamjee Government Science College
          </h1>
          <p className="text-xl md:text-2xl mb-8">Excellence in Science Education Since 1961</p>
          <div className="mb-8">
            <span
              className="inline-block px-6 py-2 rounded-full text-lg font-semibold bg-blue-accent text-white"
            >
              Highest Merit Science College in Karachi
            </span>
          </div>
          {/* Removed SECCAP button */}
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-white border-t-4 border-blue-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="counter-card hover-lift">
              <div className="text-3xl md:text-4xl font-bold text-blue-accent">
                <AnimatedCounter end={1500} />+
              </div>
              <div className="text-gray-600 mt-2">Students Enrolled</div>
            </div>
            <div className="counter-card hover-lift">
              <div className="text-3xl md:text-4xl font-bold text-blue-accent">
                <AnimatedCounter end={62} />+
              </div>
              <div className="text-gray-600 mt-2">Years of Excellence</div>
            </div>
            <div className="counter-card hover-lift">
              <div className="text-3xl md:text-4xl font-bold text-blue-accent">
                <AnimatedCounter end={25000} />+
              </div>
              <div className="text-gray-600 mt-2">Alumni Worldwide</div>
            </div>
            <div className="counter-card hover-lift">
              <div className="text-3xl md:text-4xl font-bold text-blue-accent">
                <AnimatedCounter end={80} />+
              </div>
              <div className="text-gray-600 mt-2">Faculty Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl font-bold mb-4 font-playfair text-forest-green"
            >
              Academic Programs
            </h2>
            <p
              className="text-lg text-slate-600 mb-16 pb-4 border-b-2 border-blue-accent"
            >
              Excellence in Science Education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Pre-Engineering", subjects: "Physics, Chemistry, Mathematics", icon: "⚙️" },
              { title: "Pre-Medical", subjects: "Zoology, Botany, Chemistry", icon: "🔬" },
              { title: "Computer Science", subjects: "Computer Science, Mathematics, Physics", icon: "💻" },
            ].map((program, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-8 hover-lift border-l-4 border-blue-accent"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3
                  className="text-2xl font-bold mb-3 font-playfair text-forest-green"
                >
                  {program.title}
                </h3>
                <p className="text-slate-600 mb-6">{program.subjects}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* College Tour Section */}
      <section id="tour" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-center mb-4 font-playfair text-forest-green"
            >
              Virtual College Tour
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Experience the vibrant campus life and state-of-the-art facilities of Adamjee Government Science College through our virtual tour
            </p>
          </motion.div>

          <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl max-h-[600px]">
              <video
                controls
                className="w-full h-full object-contain"
                poster="/images/agscpics.jpg"
              >
                <source src="/videos/college-tour.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-6">
                Explore our modern classrooms, laboratories, library, and recreational facilities
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-blue-50 px-4 py-2 rounded-lg">
                  <span className="font-semibold text-blue-accent">Campus Facilities</span>
                </div>
                <div className="bg-green-50 px-4 py-2 rounded-lg">
                  <span className="font-semibold text-green-600">Laboratories</span>
                </div>
                <div className="bg-yellow-50 px-4 py-2 rounded-lg">
                  <span className="font-semibold text-yellow-600">Libraries</span>
                </div>
                <div className="bg-purple-50 px-4 py-2 rounded-lg">
                  <span className="font-semibold text-purple-600">Sports Complex</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCAP Admissions */}
      <section id="admissions" className="seccap-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-xl p-12 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="p-4 rounded-full bg-forest-green">
                <Shield className="text-blue-accent" size={36} />
              </div>
              <div>
                <h2
                  className="text-4xl font-bold mb-2 font-playfair text-forest-green"
                >
                  Official SECCAP Admissions
                </h2>
                <p className="font-semibold text-blue-accent">
                  Merit-Based Selection Process
                </p>
              </div>
            </div>

            <p className="text-slate-700 mb-8 text-lg leading-relaxed">
              Admissions to First Year Pre-Engineering & Pre-Medical are conducted exclusively through the
              <strong className="text-forest-green">
                {" "}
                Sindh Electronic Centralized College Admission Program (SECCAP)
              </strong>
              .
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-10 rounded">
              <p className="text-blue-900 font-semibold flex items-start gap-3">
                <Zap size={24} className="flex-shrink-0 mt-1 text-blue-accent" />
                <span>
                  <strong>Education is 100% Free.</strong> All admissions are merit-based through SECCAP only. No direct
                  applications accepted.
                </span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Merit-Based Selection", desc: "Transparent, competitive entry process" },
                { title: "Government-Recognized", desc: "Certificates from Board of Intermediate Education" },
                { title: "100% Free Education", desc: "No tuition or hidden fees" },
                { title: "Quality Faculty", desc: "Experienced educators dedicated to excellence" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <Award className="flex-shrink-0 mt-1 text-blue-accent" size={24} />
                  <div>
                    <h4 className="font-bold text-lg text-forest-green">
                      {item.title}
                    </h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
                <p className="text-green-900 font-semibold">
                  <strong>DDO Code:</strong> KQ2172
                </p>
              </div>
              <a
                href="https://seccap.dgcs.gos.pk/#/about-us"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium"
              >
                View SECCAP Admission Policy
              </a>
            </div>

            <div className="mt-12">
              <h3
                className="text-2xl font-bold mb-6 font-playfair text-forest-green"
              >
                2025 SECCAP Cutoff Marks
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-accent">
                      <th className="px-6 py-4 text-left text-white font-bold">Program</th>
                      <th className="px-6 py-4 text-center text-white font-bold">Cutoff Marks</th>
                      <th className="px-6 py-4 text-center text-white font-bold">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { program: "Pre-Medical (PM)", marks: 485, percentage: "88.18%" },
                      { program: "Pre-Engineering (PE)", marks: 468, percentage: "85.09%" },
                      { program: "Computer Science (CS)", marks: 481, percentage: "87.45%" },
                    ].map((item, i) => (
                      <tr
                        key={i}
                        className={`border-b ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                      >
                        <td className="px-6 py-4 font-semibold text-forest-green">
                          {item.program}
                        </td>
                        <td className="px-6 py-4 text-center font-bold text-blue-accent text-lg">
                          {item.marks}
                        </td>
                        <td className="px-6 py-4 text-center font-semibold text-green-600">
                          {item.percentage}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 text-sm mt-4 italic">
                *Cutoff marks are based on SECCAP 2025 merit lists and may be subject to change based on official
                announcements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News & Social Section with Facebook Timeline */}
      <section id="news" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-forest-green"
          >
            Latest News & Updates
          </motion.h2>
          <p className="text-center text-gray-600 mb-12">
            Stay updated with the latest happenings at Adamjee Government Science College
          </p>

          {/* Facebook Timeline */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-forest-green">
              Facebook Timeline
            </h3>
            <FacebookFeed />
          </div>

        </div>
      </section>

      {/* Foundations Section */}
      <section id="history" className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-navy-blue">
            Foundations
          </h2>

          <div className="space-y-12">
            {[
              {
                year: "1961",
                headline: "Inaugurated by the President",
                desc: "Established by the All Pakistan Memon Educational & Welfare Society (APMEWS). Inaugurated on July 30, 1961, by Field Marshal Ayub Khan with 100 students.",
              },
              {
                year: "1965",
                headline: "Expansion to Degree College",
                desc: "Upgraded to a full-fledged Degree Science College, launching B.Sc. programs alongside Intermediate education.",
              },
              {
                year: "1972",
                headline: "Nationalization Era",
                desc: "On September 1, 1972, the college was nationalized by the Government of Pakistan. Enrollment tripled to 1,300+ students, cementing its status as a public asset.",
                isHighlight: true,
              },
            ].map((milestone, i) => (
              <motion.div
                key={i}
                className="flex gap-8 items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <div
                    className={`w-24 h-24 rounded-full text-white flex items-center justify-center font-bold text-lg border-4 ${
                      milestone.isHighlight
                        ? 'bg-gradient-to-br from-navy-blue to-blue-accent border-blue-accent'
                        : 'bg-gradient-to-br from-forest-green to-[#004d2e] border-yellow-500'
                    }`}
                  >
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 pt-4">
                  <h3
                    className="text-xl font-bold mb-3 font-playfair text-forest-green"
                  >
                    {milestone.headline}
                  </h3>
                  <p className="text-slate-600 text-lg">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Tabs */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-16 font-playfair text-forest-green"
          >
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Mail, title: "Email", content: "agsckarachi@gmail.com", link: "mailto:agsckarachi@gmail.com" },
              { icon: Phone, title: "Phone", content: "02199215689", link: "tel:02199215689" },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                content: "+92 333 2388124",
                link: "https://wa.me/923332388124",
              },
              {
                icon: MapPin,
                title: "Location",
                content: "V2JP+PGJ, Business Recorder Road, Soldier Bazaar, Garden East, Karachi",
              },
              { icon: Users, title: "Follow Us", content: "Connect on social media" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-forest-green to-[#004d2e] rounded-lg p-8 text-white hover-lift"
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="text-blue-accent mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                {item.link ? (
                  <a href={item.link} className="text-blue-accent hover:text-blue-400 font-semibold" target="_blank" rel="noopener noreferrer">
                    {item.content}
                  </a>
                ) : item.title === "Follow Us" ? (
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/agsckarachi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-accent hover:text-blue-400"
                      aria-label="Instagram"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="https://facebook.com/agsckarachii"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-accent hover:text-blue-400"
                      aria-label="Official Facebook Page"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="https://www.facebook.com/groups/1007924619869977/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-accent hover:text-blue-400"
                      aria-label="SECCAP Facebook Group"
                    >
                      <Users size={24} />
                    </a>
                  </div>
                ) : (
                  <p className="text-blue-accent">{item.content}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Tab buttons */}
            <div className="flex border-b border-blue-accent">
              <button
                onClick={() => setActiveTab("location")}
                className={`flex-1 py-4 font-bold transition ${
                  activeTab === "location"
                    ? "text-beige bg-forest-green border-b-4 border-blue-accent"
                    : "text-navy-blue"
                }`}
                role="tab"
                aria-selected={activeTab === "location"}
                tabIndex={0}
              >
                Location
              </button>
              <button
                onClick={() => setActiveTab("transport")}
                className={`flex-1 py-4 font-bold transition ${
                  activeTab === "transport"
                    ? "text-beige bg-forest-green border-b-4 border-blue-accent"
                    : "text-navy-blue"
                }`}
                role="tab"
                aria-selected={activeTab === "transport"}
                tabIndex={0}
              >
                Transport & Access
              </button>
              <button
                onClick={() => setActiveTab("timings")}
                className={`flex-1 py-4 font-bold transition ${
                  activeTab === "timings"
                    ? "text-beige bg-forest-green border-b-4 border-blue-accent"
                    : "text-navy-blue"
                }`}
                role="tab"
                aria-selected={activeTab === "timings"}
                tabIndex={0}
              >
                Timings
              </button>
            </div>

            {/* Tab content */}
            <div className="p-8">
              {activeTab === "location" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center"
                  role="tabpanel"
                  aria-labelledby="location-tab"
                >
                  <h3 className="text-2xl font-bold mb-6 text-forest-green">
                    Visit Our Campus
                  </h3>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2757.0202147398163!2d67.03369537393587!3d24.8818531444039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e5ae41c22e3%3A0x5dc5d346d9ff179b!2sAdamjee%20Govt.%20Science%20College-%20Karachi!5e1!3m2!1sen!2s!4v1768140767645!5m2!1sen!2s"
                    width="100%"
                    height="400"
                    className="border-0 rounded-lg"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="College Location Map"
                  ></iframe>
                  <p className="mt-6 text-slate-600 text-center">
                    <strong>Address:</strong> V2JP+PGJ, Business Recorder Road, Soldier Bazaar, Garden East, Karachi
                  </p>
                  <p className="mt-3 text-sm text-slate-500 text-center">DDO Code: KQ2172 | Boys College</p>
                </motion.div>
              )}

              {activeTab === "transport" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  role="tabpanel"
                  aria-labelledby="transport-tab"
                >
                  <h3 className="text-2xl font-bold mb-6 text-forest-green">
                    Easy Access & Transport
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
                      <p className="font-bold text-green-900 mb-2">BRT Station - Patel Para</p>
                      <p className="text-green-800">5 minutes walking distance from the college</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
                      <p className="font-bold text-green-900 mb-2">Gurumandir Bus Stop</p>
                      <p className="text-green-800">
                        5 minutes walking distance with access to local buses from across Karachi
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "timings" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  role="tabpanel"
                  aria-labelledby="timings-tab"
                >
                  <h3 className="text-2xl font-bold mb-6 text-forest-green">
                    College Timings
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                      <p className="font-bold text-blue-900 mb-2">Monday - Thursday</p>
                      <p className="text-blue-800 text-lg">8:00 AM - 1:30 PM</p>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                      <p className="font-bold text-blue-900 mb-2">Friday</p>
                      <p className="text-blue-800 text-lg">8:30 AM - 12:30 PM</p>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                      <p className="font-bold text-blue-900 mb-2">Saturday</p>
                      <p className="text-blue-800 text-lg">8:00 AM - 1:30 PM</p>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                      <p className="font-bold text-blue-900 mb-2">Sunday</p>
                      <p className="text-blue-800 text-lg">Closed</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-premium py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-blue-accent pb-12">
            <div>
              <h4 className="text-xl font-bold mb-4">AGSC Karachi</h4>
              <p className="text-sm leading-relaxed">Excellence in Science Education serving Karachi since 1961</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {["Academics", "Tour", "Admissions", "History", "Contact"].map((link) => (
                  <li key={link}>
                    <Link href={`#${link.toLowerCase()}`} className="hover:text-blue-300 transition">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Departments</h4>
              <ul className="space-y-2 text-sm">
                {["Pre-Engineering", "Pre-Medical", "Computer Science"].map((dept) => (
                  <li key={dept}>{dept}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <p className="text-sm mb-2">agsckarachi@gmail.com</p>
              <p className="text-sm mb-2">Phone: 02199215689</p>
              <p className="text-sm mb-2">WhatsApp: +92 333 2388124</p>
              <p className="text-sm">V2JP+PGJ, Business Recorder Road, Soldier Bazaar, Garden East, Karachi</p>
            </div>
          </div>
          <div className="text-center text-sm border-t border-blue-accent pt-8">
            <p>&copy; {new Date().getFullYear()} Adamjee Government Science College. All rights reserved.</p>
            <p className="mt-4">
              Designed & Developed by{" "}
              <a
                href="https://mansoor--ahmed.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 font-semibold"
              >
                Mansoor Ahmed
              </a>
            </p>
          </div>
        </div>
      </footer>
      </main>
    </div>
  )
}
