/**
 * @file JourneySection.tsx
 * Bagian Journey / Perjalanan Akademik & Karir
 * Sesuai referensi kode asli Afsal: daftar linimasa berurutan tahun dengan deskripsi singkat.
 */

import React from 'react';
import { motion } from 'motion/react';
import { journeyData } from '../data/portfolioData';

interface JourneySectionProps {
  accentColor: string;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ accentColor }) => {
  return (
    <section id="journey" className="py-24 border-b border-[#26292b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        <div className="mb-14">
          <span className="text-xs uppercase tracking-widest font-mono font-bold" style={{ color: accentColor }}>
            TIMELINE & MILESTONES
          </span>
          <h2 className="title-poster mt-1">
            Journey
          </h2>
          <p className="text-sm text-slate-400 max-w-md mt-2">
            Langkah-langkah penting dalam perjalanan akademik di Teknik Informatika ITS Surabaya dan pengalaman kepemimpinan.
          </p>
        </div>

        {/* Linimasa Vertikal Bersih */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#26292b] space-y-12 max-w-3xl">
          {journeyData.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Dot pada garis linimasa */}
              <div
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-black transition-transform group-hover:scale-125"
                style={{ backgroundColor: accentColor }}
              />

              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold" style={{ color: accentColor }}>
                    {item.year}
                  </span>
                  {item.tag && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#16181a] border border-[#26292b] text-slate-300">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-[#00D2BE] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed max-w-2xl pt-0.5">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
