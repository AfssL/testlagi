/**
 * @file JourneyPage.tsx
 * Halaman Linimasa Perjalanan & Rekam Jejak (Journey Page)
 * Menggabungkan kategori ala najibbahrudin.com (Asistensi Lab, Organisasi, Sertifikasi & Prestasi)
 * dengan estetika border precision ala Lando Norris.
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap, CheckCircle2, ExternalLink } from 'lucide-react';
import { MomentsSection } from '../components/MomentsSection';
import { JourneySection } from '../components/JourneySection';
import { TechStackSection } from '../components/TechStackSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { momentsData, experiencesData, achievementsData } from '../data/portfolioData';

interface JourneyPageProps {
  accentColor: string;
}

export const JourneyPage: React.FC<JourneyPageProps> = ({ accentColor }) => {
  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Header Halaman */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-8 space-y-3"
      >
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
          <span style={{ color: accentColor }}>// CHRONICLES & TRACK RECORD</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400">AM-24 // ITS SURABAYA</span>
        </div>
        <h1 className="title-poster">
          Perjalanan & Milestone.
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl font-mono">
          Rekam jejak pengalaman asistensi laboratorium, organisasi kampus (HMTI ITS), sertifikasi profesional, dan linimasa perkuliahan.
        </p>
      </motion.div>

      {/* 1. SEKSI PENGALAMAN ASISTENSI & ORGANISASI (Kategori ala Najib Bahrudin) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-widest font-mono font-bold" style={{ color: accentColor }}>
            EXPERIENCE & LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white mt-1 uppercase">
            Asistensi & Organisasi
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
            Pengalaman berkontribusi nyata di lingkungan akademik Departemen Teknik Informatika ITS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {experiencesData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#101112] border border-[#26292b] hover:border-[#00D2BE] transition-all relative group"
            >
              <span className="absolute top-2 right-2 text-[9px] font-mono text-slate-600 group-hover:text-[#00D2BE]">+</span>

              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span className="px-2 py-0.5 rounded bg-[#16181a] border border-[#26292b] text-slate-300 font-bold">
                  {exp.type}
                </span>
                <span style={{ color: accentColor }}>{exp.period}</span>
              </div>

              <h3 className="text-xl font-bold font-display text-white group-hover:text-[#00D2BE] transition-colors">
                {exp.role}
              </h3>

              <p className="text-xs font-mono text-slate-400 mt-1">
                {exp.organization}
              </p>

              <p className="text-xs text-slate-300 mt-3 leading-relaxed font-sans">
                {exp.description}
              </p>

              <div className="mt-4 pt-4 border-t border-[#26292b]/60 space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                  Kontribusi Utama:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                  {exp.contributions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#00D2BE] font-mono text-xs">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. SEKSI SERTIFIKASI & PRESTASI (Kategori ala Najib Bahrudin) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-widest font-mono font-bold" style={{ color: accentColor }}>
            CREDENTIALS & HONORS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white mt-1 uppercase">
            Sertifikasi & Prestasi
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
            Validasi keahlian analitik data, kompetisi inovasi teknologi, dan capaian akademik.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievementsData.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-5 rounded-2xl bg-[#101112] border border-[#26292b] hover:border-white transition-all flex flex-col justify-between group relative"
            >
              <span className="absolute top-2 right-2 text-[9px] font-mono text-slate-600">+</span>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400 uppercase">{ach.category}</span>
                  <span style={{ color: accentColor }} className="font-bold">{ach.year}</span>
                </div>

                <h3 className="text-base font-bold font-display text-white group-hover:text-[#00D2BE] transition-colors leading-snug">
                  {ach.title}
                </h3>

                <p className="text-xs font-mono text-slate-400">
                  {ach.issuer}
                </p>

                <p className="text-xs text-slate-300 font-sans leading-relaxed pt-1">
                  {ach.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#26292b]/60 mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-slate-500">TERVERIFIKASI</span>
                <span className="text-[#00D2BE] font-bold">RESMI ✓</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Strip Foto Moments */}
      <MomentsSection
        moments={momentsData}
        accentColor={accentColor}
      />

      {/* 4. Timeline Perjalanan */}
      <JourneySection accentColor={accentColor} />

      {/* 5. Tech Stack */}
      <TechStackSection accentColor={accentColor} />

      {/* 6. Testimoni */}
      <TestimonialsSection accentColor={accentColor} />

    </div>
  );
};
