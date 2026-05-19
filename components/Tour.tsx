'use client';

import { motion } from 'framer-motion';

export default function Tour() {
  return (
    <section id="tour" className="py-20 bg-white/70 border-y border-blue-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-inter text-forest-green">Virtual College Tour</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Explore our campus environment, labs, and learning spaces through a guided digital walkthrough.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-5xl aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-blue-200">
            <video controls className="w-full h-full object-contain" poster="/images/agscpics.jpg" preload="metadata">
              <source src="/videos/college-tour.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600 mb-6">Experience classrooms, laboratories, libraries, and student spaces.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Campus Facilities', 'Laboratories', 'Libraries', 'Sports Complex'].map((feature) => (
                <div key={feature} className="bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
                  <span className="font-semibold text-blue-accent text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
