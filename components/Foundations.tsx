'use client';

import { motion } from 'framer-motion';

export default function Foundations() {
  return (
    <section className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-navy-blue">Foundations</h2>

        <div className="space-y-12">
          {[
            {
              year: '1961',
              headline: 'Inaugurated by the President',
              desc: 'Established by the All Pakistan Memon Educational & Welfare Society (APMEWS). Inaugurated on July 30, 1961, by Field Marshal Ayub Khan with 100 students.',
            },
            {
              year: '1965',
              headline: 'Expansion to Degree College',
              desc: 'Upgraded to a full-fledged Degree Science College, launching B.Sc. programs alongside Intermediate education.',
            },
            {
              year: '1972',
              headline: 'Nationalization Era',
              desc: 'On September 1, 1972, the college was nationalized by the Government of Pakistan. Enrollment tripled to 1,300+ students, cementing its status as a public asset.',
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
                      : 'bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] border-yellow-500'
                  }`}
                >
                  {milestone.year}
                </div>
              </div>
              <div className="flex-1 pt-4">
                <h3 className="text-lg sm:text-xl font-bold mb-3 font-inter text-forest-green">{milestone.headline}</h3>
                <p className="text-slate-600 text-lg">{milestone.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-16" aria-label="College history video">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-forest-green text-center">Watch Our History</h3>
          <div className="w-full max-w-5xl mx-auto aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-blue-200">
            <iframe
              src="https://www.youtube.com/embed/MaKr5cbXrOY"
              title="Adamjee Government Science College history video"
              className="w-full h-full"
              loading="lazy"
              allow="encrypted-media; picture-in-picture; web-share"
              sandbox="allow-scripts allow-presentation"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </section>
  );
}
