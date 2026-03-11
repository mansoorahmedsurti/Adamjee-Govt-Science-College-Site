'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Preload critical image dimensions to avoid layout shift */}
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#003319]/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 font-inter">
          Adamjee Government Science College
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">Excellence in Science Education Since 1961</p>
        <div className="mb-8">
          <span className="inline-block px-6 py-2 rounded-full text-lg font-semibold bg-blue-accent text-white">
            Highest Merit Science College in Karachi
          </span>
        </div>
      </motion.div>
    </section>
  );
}