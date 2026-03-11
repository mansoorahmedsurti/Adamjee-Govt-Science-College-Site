'use client';

import { motion } from 'framer-motion';

export default function Academics() {
  return (
    <section id="academics" className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-inter text-forest-green">
            Academic Programs
          </h2>
          <p className="text-lg text-slate-600 mb-16 pb-4 border-b-2 border-blue-accent">
            Excellence in Science Education
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Pre-Engineering', subjects: 'Physics, Chemistry, Mathematics', icon: '⚙️' },
            { title: 'Pre-Medical', subjects: 'Zoology, Botany, Chemistry', icon: '🔬' },
            { title: 'Computer Science', subjects: 'Computer Science, Mathematics, Physics', icon: '💻' },
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3 font-inter text-forest-green">{program.title}</h3>
              <p className="text-slate-600 mb-6">{program.subjects}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://drive.google.com/drive/folders/1JbR11sv3I1avlLajkJXFzMqgum21snNE"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-base transition-colors duration-200 text-white bg-blue-accent hover:bg-navy-dark px-8 py-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-accent focus:ring-offset-2 whitespace-nowrap"
          >
            <span className="hidden sm:inline">Access Preliminary Examinations Papers 2026</span>
            <span className="sm:hidden">Prelim Papers 2026</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}