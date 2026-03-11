'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import FacebookFeed with no SSR to improve initial load
const FacebookFeed = dynamic(() => import('@/components/FacebookFeed'), {
  loading: () => (
    <div className="flex justify-center w-full h-96 bg-gray-100 rounded-lg items-center">
      <div className="text-gray-500">Loading Facebook feed...</div>
    </div>
  ),
  ssr: false,
});

export default function News() {
  return (
    <section id="news" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-forest-green"
        >
          Latest News & Updates
        </motion.h2>
        <p className="text-center text-gray-600 mb-12">
          Stay updated with the latest happenings at Adamjee Government Science College
        </p>

        {/* Facebook Timeline */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-forest-green">Facebook Timeline</h3>
          <FacebookFeed />
        </div>
      </div>
    </section>
  );
}