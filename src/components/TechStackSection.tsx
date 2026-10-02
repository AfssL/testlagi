/**
 * @file TechStackSection.tsx
 * Bagian Tech Stack - Ikon & Teknologi
 * Sesuai referensi kode asli Afsal dengan layout kartu kotak rapi dan hover efek naik.
 */

import React from 'react';
import { motion } from 'motion/react';
import { techStackData } from '../data/portfolioData';

interface TechStackSectionProps {
  accentColor: string;
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({ accentColor }) => {
  return (
    <section id="stack" className="py-24 border-b border-[#26292b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest font-mono font-bold" style={{ color: accentColor }}>
            TOOLS & LANGUAGES
          </span>
          <h2 className="title-poster mt-1">
            Tech Stack
          </h2>
          <p className="text-sm text-slate-400 max-w-md mt-2">
            Teknologi, framework, dan peralatan yang biasa aku gunakan untuk membangun aplikasi web dan perangkat lunak.
          </p>
        </div>

        {/* Grid Ikon Teknologi */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {techStackData.map((item, idx) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              whileHover={{ y: -6, borderColor: accentColor }}
              className="bg-[#101112] border border-[#26292b] rounded-xl p-5 text-center flex flex-col items-center justify-center transition-all duration-200 cursor-default group"
            >
              <div className="w-11 h-11 mb-2.5 flex items-center justify-center">
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.slug}/${item.slug}-original.svg`}
                  alt={item.name}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-200"
                  onError={(e) => {
                    // Fallback jika icon slug berbeda (misal Next.js atau C++)
                    const target = e.target as HTMLImageElement;
                    if (item.slug === 'nextjs') {
                      target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg';
                    } else {
                      target.style.display = 'none';
                    }
                  }}
                />
              </div>

              <span className="text-xs font-bold text-white font-mono tracking-tight group-hover:text-[#00D2BE] transition-colors">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
