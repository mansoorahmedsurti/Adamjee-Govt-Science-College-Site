'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Award } from 'lucide-react';

export default function SECCAPAdmissions() {
  const yearlyCutoffMarks = [
    {
      year: 2025,
      data: [
        { program: 'Pre-Medical (PM)', marks: 485, percentage: '88.18%' },
        { program: 'Pre-Engineering (PE)', marks: 468, percentage: '85.09%' },
        { program: 'Computer Science (CS)', marks: 481, percentage: '87.45%' },
      ],
    },
    {
      year: 2024,
      data: [
        { program: 'Pre-Medical (PM)', marks: 461, percentage: '83.82%' },
        { program: 'Pre-Engineering (PE)', marks: 469, percentage: '85.27%' },
        { program: 'Computer Science (CS)', marks: 469, percentage: '85.27%' },
      ],
    },
    {
      year: 2023,
      data: [
        { program: 'Pre-Medical (PM)', marks: 497, percentage: '90.36%' },
        { program: 'Pre-Engineering (PE)', marks: 485, percentage: '88.18%' },
        { program: 'Computer Science (CS)', marks: 496, percentage: '90.18%' },
      ],
    },
    {
      year: 2022,
      data: [
        { program: 'Pre-Medical (PM)', marks: 527, percentage: '95.82%' },
        { program: 'Pre-Engineering (PE)', marks: 520, percentage: '94.55%' },
        { program: 'Computer Science (CS)', marks: 522, percentage: '94.91%' },
      ],
    },
  ];

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
            Admissions to First Year Pre-Engineering & Pre-Medical are conducted exclusively through the
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
            <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded h-13.5 flex items-center">
              <p className="text-green-900 font-semibold">
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
              SECCAP Cutoff Marks (2022–2025)
            </h3>
            <div className="space-y-8">
              {yearlyCutoffMarks.map(({ year, data }) => (
                <div key={year}>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 text-forest-green">{year} Cutoff Marks</h4>
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
                        {data.map((item, i) => (
                          <tr key={`${year}-${item.program}`} className={`border-b ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                            <td className="px-6 py-4 font-semibold text-forest-green">{item.program}</td>
                            <td className="px-6 py-4 text-center font-bold text-blue-accent text-lg">{item.marks}</td>
                            <td className="px-6 py-4 text-center font-semibold text-green-600">{item.percentage}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm mt-4 italic">
              *Cutoff marks are based on SECCAP merit lists for 2022–2025 and may be subject to change based on official
              announcements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
