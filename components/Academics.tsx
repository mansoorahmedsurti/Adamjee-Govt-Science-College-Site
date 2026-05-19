'use client';

import { motion } from 'framer-motion';
import { Atom, Microscope, MonitorCog } from 'lucide-react';

const programs = [
  {
    title: 'Pre-Engineering',
    subjects: 'Physics, Chemistry, Mathematics',
    icon: Atom,
  },
  {
    title: 'Pre-Medical',
    subjects: 'Zoology, Botany, Chemistry',
    icon: Microscope,
  },
  {
    title: 'Computer Science',
    subjects: 'Computer Science, Mathematics, Physics',
    icon: MonitorCog,
  },
];

export default function Academics() {
  return (
    <section id="academics" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-inter text-forest-green">Academic Programs</h2>
          <p className="text-lg text-slate-600 mb-14 max-w-3xl mx-auto">
            Focused pathways for science, medicine, and technology with a merit-driven academic culture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 hover-lift border border-blue-100 shadow-sm"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-accent flex items-center justify-center mb-5">
                <program.icon size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 font-inter text-forest-green">{program.title}</h3>
              <p className="text-slate-600 mb-6">{program.subjects}</p>
              <span className="inline-flex text-xs font-semibold uppercase tracking-[0.12em] text-blue-accent bg-blue-50 px-3 py-1 rounded-full">
                Intermediate Science Group
              </span>
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
            className="btn-premium font-semibold px-8 py-4 whitespace-nowrap"
          >
            <span className="hidden sm:inline">Access Preliminary Examinations Papers 2026</span>
            <span className="sm:hidden">Prelim Papers 2026</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
