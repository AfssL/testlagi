/**
 * @file Footer.tsx
 * Footer Sederhana & Elegan
 */

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PersonalProfile } from '../types';

interface FooterProps {
  profile: PersonalProfile;
  accentColor: string;
}

export const Footer: React.FC<FooterProps> = ({ profile, accentColor }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1F2633] bg-[#07080A] py-10 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-[#1F2633]/60">
          
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></span>
            <span className="font-bold text-white tracking-tight">
              {profile.name}
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400">Teknik Informatika ITS</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">Tentang</a>
            <a href="#projects" className="hover:text-white transition-colors">Proyek</a>
            <a href="#experience" className="hover:text-white transition-colors">Pengalaman</a>
            <a href="#skills" className="hover:text-white transition-colors">Keahlian</a>
            <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#11141B] border border-[#1F2633] hover:border-slate-500 text-slate-300 hover:text-white transition-all cursor-pointer text-xs"
          >
            <span>Ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" style={{ color: accentColor }} />
          </button>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} {profile.name}. Institut Teknologi Sepuluh Nopember Surabaya.</p>
          <p>Warna terinspirasi dari Mercedes-AMG Petronas F1 Team</p>
        </div>

      </div>
    </footer>
  );
};
