/**
 * @file TwoDoorsSection.tsx
 * Bagian Dua Pintu (Build vs Brand)
 * Mengadaptasi konsep dari kode asli Afsal: kartu yang melebar saat kursor melayang (hover flex expand).
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface TwoDoorsSectionProps {
  accentColor: string;
}

export const TwoDoorsSection: React.FC<TwoDoorsSectionProps> = ({ accentColor }) => {
  return (
    <section className="doors flex flex-col md:flex-row min-h-[60vh] md:min-h-[75vh] border-y border-[#26292b] overflow-hidden">
      
      {/* Pintu 1: BUILD */}
      <a
        href="#projects"
        className="door-card flex-1 flex flex-col justify-end p-8 sm:p-14 relative group border-b md:border-b-0 md:border-r border-[#26292b] bg-[#101112] hover:bg-[#14181a] transition-all duration-500 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(180deg, transparent 40%, rgba(0, 210, 190, 0.12))',
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs uppercase font-mono tracking-widest text-slate-400 group-hover:text-white transition-colors">
            01 / ENGINEERING & PROJECTS
          </span>
          <div className="w-10 h-10 rounded-full border border-[#26292b] group-hover:border-white flex items-center justify-center text-slate-300 group-hover:text-white transition-all">
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        <h2 className="text-6xl sm:text-8xl lg:text-9xl font-black font-display uppercase tracking-tight text-white group-hover:text-[#00D2BE] transition-colors leading-[0.85]">
          Build
        </h2>
        
        <p className="text-sm sm:text-base text-slate-400 group-hover:text-slate-200 mt-4 max-w-sm transition-colors">
          Karya, aplikasi web, dan sistem perangkat lunak yang sudah dibangun.
        </p>
      </a>

      {/* Pintu 2: BRAND */}
      <a
        href="#journey"
        className="door-card flex-1 flex flex-col justify-end p-8 sm:p-14 relative group bg-[#101112] hover:bg-[#151619] transition-all duration-500 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(180deg, transparent 40%, rgba(200, 204, 206, 0.1))',
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs uppercase font-mono tracking-widest text-slate-400 group-hover:text-white transition-colors">
            02 / EXPERIENCE & RESUME
          </span>
          <div className="w-10 h-10 rounded-full border border-[#26292b] group-hover:border-white flex items-center justify-center text-slate-300 group-hover:text-white transition-all">
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        <h2 className="text-6xl sm:text-8xl lg:text-9xl font-black font-display uppercase tracking-tight text-white group-hover:text-slate-200 transition-colors leading-[0.85]">
          Brand
        </h2>

        <p className="text-sm sm:text-base text-slate-400 group-hover:text-slate-200 mt-4 max-w-sm transition-colors">
          Perjalanan perkuliahan di ITS, asistensi lab, pengalaman, dan CV lengkap.
        </p>
      </a>

    </section>
  );
};
