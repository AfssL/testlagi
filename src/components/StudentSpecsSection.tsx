/**
 * @file StudentSpecsSection.tsx
 * Bagian Biodata Diri & Driver Specs Khas Lando Norris (landonorris.com)
 * Menampilkan grid informasi teknis mahasiswa Informatika ITS dengan border precision,
 * corner plus tags (+), dan status operasional bergaya motorsport.
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, UserCheck, Cpu, Terminal } from 'lucide-react';
import { PersonalProfile, PageView } from '../types';
import { MagneticButton } from './MagneticButton';
import { RollingText } from './RollingText';

interface StudentSpecsSectionProps {
  profile: PersonalProfile;
  accentColor: string;
  onNavigate: (page: PageView) => void;
}

export const StudentSpecsSection: React.FC<StudentSpecsSectionProps> = ({
  profile,
  accentColor,
  onNavigate,
}) => {
  return (
    <section className="py-24 relative overflow-hidden select-none bg-gradient-to-b from-transparent via-[#0b0c0e] to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Header Seksi Specs ala Lando Norris */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
              <span style={{ color: accentColor }}>// SPEC SHEET 2024</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">AM-24 // INFORMATICS-ITS</span>
            </div>
            <h2 className="title-poster">
              <RollingText text="STUDENT SPECS." accentColor={accentColor} />
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-slate-500 hidden md:inline">
              SYS VER: 5.0 (SEMESTER 5)
            </span>
            <MagneticButton
              strength={0.3}
              onClick={() => onNavigate('about')}
              className="px-4 py-1.5 rounded-full border border-[#26292b] bg-[#101112] hover:border-white text-xs font-mono font-bold text-white transition-colors"
            >
              <span>Profil Lengkap & Bio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>
        </div>

        {/* Technical Specs Grid (Lando Norris Precision Border Information) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {profile.specs.map((item, idx) => (
            <motion.div
              key={item.code}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative p-6 rounded-xl bg-[#101112] border border-[#26292b] hover:border-[#00D2BE] transition-all duration-300 group"
            >
              {/* Corner Plus Accents ala Lando Norris Tech Specs */}
              <span className="absolute top-1.5 left-2 text-[9px] font-mono text-slate-600 group-hover:text-[#00D2BE] transition-colors select-none">
                +
              </span>
              <span className="absolute top-1.5 right-2 text-[9px] font-mono text-slate-600 group-hover:text-[#00D2BE] transition-colors select-none">
                +
              </span>

              {/* Code & Label */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-3 pt-1">
                <span className="tracking-widest">{item.code}</span>
                <span className="uppercase text-slate-400">{item.label}</span>
              </div>

              {/* Value Raksasa / Jelas */}
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-[#00D2BE] transition-colors tracking-tight leading-snug">
                {item.value}
              </h3>

              {/* Detail Keterangan */}
              <p className="text-xs font-mono text-slate-400 mt-2">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Box Catatan Biodata Cepat di Bawah Specs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 p-6 sm:p-8 rounded-2xl bg-[#0d0e10] border border-[#26292b] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 mt-1"
              style={{
                borderColor: `${accentColor}40`,
                backgroundColor: `${accentColor}10`,
              }}
            >
              <Terminal className="w-5 h-5" style={{ color: accentColor }} />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block">
                BIOGRAPHICAL SUMMARY
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-w-3xl">
                Afsal Murtaza adalah mahasiswa Teknik Informatika ITS angkatan 2024 yang memadukan ketajaman analisis data kuantitatif, eksplorasi kecerdasan buatan, dan estetika desain antarmuka pengguna yang terstruktur.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right font-mono">
              <span className="text-[10px] text-slate-500 block">CAMPUS INDEX</span>
              <span className="text-lg font-bold" style={{ color: accentColor }}>
                FTEIC // 3.84
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
