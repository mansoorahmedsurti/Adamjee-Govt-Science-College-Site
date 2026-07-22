'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Award } from 'lucide-react';

type CutoffValue = {
  marks: number;
  percentage: string;
};

type ProgramCutoff = {
  program: string;
  yearlyCutoffs: Record<string, CutoffValue>;
};

const cutoffMatrix: ProgramCutoff[] = [
  {
    program: 'Pre-Medical (PM)',
    yearlyCutoffs: {
      2026: { marks: 486, percentage: '88.36%' },
      2025: { marks: 485, percentage: '88.18%' },
      2024: { marks: 461, percentage: '83.82%' },
      2023: { marks: 497, percentage: '90.36%' },
      2022: { marks: 527, percentage: '95.82%' },
    },
  },
  {
    program: 'Pre-Engineering (PE)',
    yearlyCutoffs: {
      2026: { marks: 490, percentage: '89.09%' },
      2025: { marks: 468, percentage: '85.09%' },
      2024: { marks: 469, percentage: '85.27%' },
      2023: { marks: 485, percentage: '88.18%' },
      2022: { marks: 520, percentage: '94.55%' },
    },
  },
  {
    program: 'Computer Science (CS)',
    yearlyCutoffs: {
      2026: { marks: 490, percentage: '89.09%' },
      2025: { marks: 481, percentage: '87.45%' },
      2024: { marks: 469, percentage: '85.27%' },
      2023: { marks: 496, percentage: '90.18%' },
      2022: { marks: 522, percentage: '94.91%' },
    },
  },
];

const years = Array.from(new Set(cutoffMatrix.flatMap(({ yearlyCutoffs }) => Object.keys(yearlyCutoffs)))).sort(
  (yearA, yearB) => Number(yearB) - Number(yearA),
);

export default function SECCAPAdmissions() {
  return (
    <section className="seccap-section py-20">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 font-inter text-forest-green">
                Official SECCAP Admissions
              </h2>
              <p className="font-semibold text-blue-accent">Merit-Based Selection Process</p>
            </div>
          </div>

          <p className="text-slate-700 mb-8 text-lg leading-relaxed">
            Admissions to First Year streams are conducted exclusively through the
            <strong className="text-forest-green"> Sindh Electronic Centralized College Admission Program (SECCAP)</strong>.
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
              { title: 'Merit-Based Selection', desc: 'Transparent, competitive entry process' },
              { title: 'Government-Recognized', desc: 'Certificates from Board of Intermediate Education' },
              { title: '100% Free Education', desc: 'No tuition or hidden fees' },
              { title: 'Quality Faculty', desc: 'Experienced educators dedicated to excellence' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <Award className="flex-shrink-0 mt-1 text-blue-accent" size={24} />
                <div>
                  <h4 className="font-bold text-lg text-forest-green">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded h-13.5 flex items-center">
              <p className="text-blue-900 font-semibold">
                <strong>DDO Code:</strong> KQ2172
              </p>
            </div>
            <a
              href="https://seccap.dgcs.gos.pk/#/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium hover:bg-navy-dark font-semibold"
            >
              View SECCAP Admission Policy
            </a>
          </div>

          <div className="mt-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 font-inter text-forest-green">
              SECCAP Cutoff Marks (2022–2026)
            </h3>
            <div className="overflow-x-auto rounded-xl shadow-md ring-1 ring-slate-200">
              <table className="min-w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-blue-900">
                    <th className="px-4 py-4 text-left text-sm font-bold tracking-wide text-white uppercase sm:px-6">
                      Program
                    </th>
                    {years.map((year) => (
                      <th
                        key={year}
                        className="px-4 py-4 text-center text-sm font-bold tracking-wide text-white uppercase sm:px-6"
                      >
                        {year}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cutoffMatrix.map(({ program, yearlyCutoffs }) => (
                    <tr key={program} className="border-b border-slate-200 transition-colors hover:bg-slate-50">
                      <td className="px-4 py-4 font-semibold text-forest-green sm:px-6">{program}</td>
                      {years.map((year) => {
                        const cutoff = yearlyCutoffs[year];

                        return (
                          <td key={`${program}-${year}`} className="px-4 py-4 text-center font-semibold text-slate-700 sm:px-6">
                            {cutoff ? (
                              <span className="whitespace-nowrap text-sm sm:text-base">
                                <span className="font-bold text-blue-accent">{cutoff.marks}</span> ({cutoff.percentage})
                              </span>
                            ) : (
                              <span className="text-slate-400">—</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 text-sm mt-4 italic">
              *Cutoff marks are based on SECCAP merit lists for 2022–2026 and may be subject to change based on official
              announcements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
