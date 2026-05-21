'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden flex items-center justify-center pt-24 pb-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/agscpics.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
          loading="eager"
          width="1920"
          height="1080"
        />
      </div>

      <Image
        src="/images/agscpics.jpg"
        alt="Adamjee Government Science College Campus"
        fill
        className="object-cover absolute inset-0"
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAADAAQDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/AKqL//Z"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/50" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 text-center text-white max-w-5xl mx-auto px-4"
      >
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] bg-white/15 border border-white/20">
            Premier Public Science College • Karachi
          </span>
        </div>

        <h1 className="text-blue-200 drop-shadow-[0_4px_18px_rgba(0,0,0,0.7)] text-4xl sm:text-5xl md:text-7xl font-bold mb-5 font-inter leading-tight">
          Adamjee Government Science College
        </h1>

        <p className="text-base sm:text-lg md:text-2xl mb-4 text-white/90">Modern Learning. Academic Excellence. Future Ready.</p>

        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/95 mb-9">
          Empowering students since 1961 with a high-merit academic culture across Pre-Engineering, Pre-Medical, and
          Computer Science.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/admissions" className="btn-premium px-7 py-3.5 min-w-0">
            View Admissions
          </Link>
          <Link href="/#tour" className="btn-glass px-7 py-3.5 min-w-0">
            Explore Campus
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
