/**
 * @file TestimonialsSection.tsx
 * Bagian Testimoni (Kata Mereka)
 * Sesuai kode referensi asli Afsal dengan navigasi tombol "Sebelumnya" & "Berikutnya".
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

interface TestimonialsSectionProps {
  accentColor: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ accentColor }) => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIdx) => (prevIdx - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const next = () => {
    setIndex((prevIdx) => (prevIdx + 1) % testimonialsData.length);
  };

  const current = testimonialsData[index];

  return (
    <section className="py-24 border-b border-[#26292b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        <div className="mb-10">
          <span className="text-xs uppercase tracking-widest font-mono font-bold" style={{ color: accentColor }}>
            ENDORSEMENTS
          </span>
          <h2 className="title-poster mt-1">
            Kata Mereka
          </h2>
        </div>

        {/* Kotak Testimoni */}
        <div className="bg-[#101112] border border-[#26292b] rounded-2xl p-8 sm:p-14 relative overflow-hidden">
          
          <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-white/5 border border-white/10">
            <Quote className="w-6 h-6" style={{ color: accentColor }} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 min-h-[140px]"
            >
              <blockquote className="font-display font-bold text-white leading-tight text-2xl sm:text-3xl lg:text-4xl max-w-3xl">
                “{current.quote}”
              </blockquote>

              <p className="text-sm sm:text-base font-mono pt-2" style={{ color: accentColor }}>
                <span className="font-bold text-white">{current.name}</span>
                <span className="text-slate-500 mx-2">—</span>
                <span className="text-slate-300">{current.role}</span>
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Tombol Kontrol Navigasi */}
          <div className="flex items-center gap-3 pt-8 border-t border-[#26292b]/60 mt-8">
            <button
              onClick={prev}
              className="px-5 py-2.5 rounded-full border border-[#26292b] hover:border-[#00D2BE] text-slate-300 hover:text-white text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            <button
              onClick={next}
              className="px-5 py-2.5 rounded-full border border-[#26292b] hover:border-[#00D2BE] text-slate-300 hover:text-white text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Berikutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <span className="ml-auto text-xs font-mono text-slate-500">
              0{index + 1} / 0{testimonialsData.length}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
