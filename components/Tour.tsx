'use client';

import { motion } from 'framer-motion';

export default function Tour() {
  return (
    <section id="tour" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 font-inter text-forest-green">
            Virtual College Tour
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Experience the vibrant campus life and state-of-the-art facilities of Adamjee Government Science College
            through our virtual tour
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl max-h-[600px]">
            <video controls className="w-full h-full object-contain" poster="/images/agscpics.jpg" preload="metadata">
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
  );
}