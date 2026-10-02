/**
 * @file Navbar.tsx
 * Navigasi Minimalis Khas Lando Norris & Charles Leclerc
 * - Logo AM // 24 di pojok kiri atas telah dihapus sesuai permintaan.
 * - Header atas disesuaikan secara responsif untuk semua device (mobile, tablet, desktop).
 * - Ikon minimalis 2-garis di kanan atas tanpa lingkaran border.
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { PageView } from '../types';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  accentColor: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  accentColor,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Jam lokal Surabaya (WIB / UTC+7) real-time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('id-ID', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'Asia/Jakarta',
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const navMenuItems: { code: string; label: string; page: PageView; tag: string }[] = [
    { code: '01', label: 'Home', page: 'home', tag: 'Overview & Specs' },
    { code: '02', label: 'About', page: 'about', tag: 'Identity & Academics' },
    { code: '03', label: 'Projects', page: 'projects', tag: 'Data, AI & UI/UX' },
    { code: '04', label: 'Journey', page: 'journey', tag: 'Timeline & Achievements' },
    { code: '05', label: 'Contact', page: 'contact', tag: 'Collaboration Portal' },
  ];

  const handleSelectPage = (page: PageView) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-black/85 backdrop-blur-md border-b border-[#26292b]/50 py-3 shadow-xl'
            : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative flex items-center justify-center min-h-[44px]">
          
          {/* Indikator Posisinya Tepat di Tengah Layar (True Center di Mobile & Desktop) */}
          <div className="flex items-center gap-2 sm:gap-2.5 text-[9.5px] xs:text-[10px] sm:text-[11px] font-mono text-slate-400 border border-[#26292b] px-3 sm:px-4 py-1.5 rounded-full bg-[#101112]/95 backdrop-blur-md shadow-lg select-none">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0" style={{ backgroundColor: accentColor }} />
            {/* Di layar HP ringkas agar pas tanpa titik-titik (...), di desktop penuh */}
            <span className="text-slate-200 uppercase font-semibold sm:hidden">
              INFORMATICS ITS
            </span>
            <span className="text-slate-200 uppercase font-semibold hidden sm:inline">
              INFORMATICS ENGINEERING AT ITS
            </span>
            <span className="text-slate-600">/</span>
            <span className="shrink-0 font-medium" style={{ color: accentColor }}>
              WIB {currentTime || 'SURABAYA'}
            </span>
          </div>

          {/* KANAN ATAS: IKON MINIMALIS TANPA MENGGANGGU POSISI TENGAH INDIKATOR */}
          <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 flex items-center">
            <MagneticButton
              strength={0.12}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-white flex items-center justify-center transition-all cursor-pointer hover:opacity-80"
              title={menuOpen ? "Tutup Navigasi" : "Buka Navigasi"}
            >
              {/* Minimalist 2-line icon yang bertransformasi */}
              <div className="w-6 h-3.5 flex flex-col justify-between items-center relative">
                <span
                  className={`h-[2px] bg-white transition-all duration-300 ease-out ${
                    menuOpen
                      ? 'w-6 translate-y-[6px] rotate-45'
                      : 'w-6'
                  }`}
                  style={menuOpen ? { backgroundColor: accentColor } : {}}
                />
                <span
                  className={`h-[2px] bg-white transition-all duration-300 ease-out ${
                    menuOpen
                      ? 'w-6 -translate-y-[6px] -rotate-45'
                      : 'w-4 self-end'
                  }`}
                  style={menuOpen ? { backgroundColor: accentColor } : {}}
                />
              </div>
            </MagneticButton>
          </div>

        </div>
      </header>

      {/* OVERLAY MENU LAYAR PENUH (FULLSCREEN MINIMALIST DRAWER) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 select-none overflow-y-auto"
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between max-w-7xl w-full mx-auto pb-6 border-b border-[#26292b]/60">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  [ INFORMATICS AT ITS · NAVIGATION HUB ]
                </span>
              </div>

              {/* Close Button Magnetik Tanpa Lingkaran Kaku */}
              <MagneticButton
                strength={0.12}
                onClick={() => setMenuOpen(false)}
                className="p-2 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Tutup Menu"
              >
                <X className="w-6 h-6" style={{ color: accentColor }} />
              </MagneticButton>
            </div>

            {/* Menu Links Raksasa Khas Editorial Lando Norris & Charles Leclerc */}
            <div className="max-w-7xl w-full mx-auto my-auto py-10 sm:py-16">
              <nav className="flex flex-col space-y-3 sm:space-y-6">
                {navMenuItems.map((item, idx) => {
                  const isActive = currentPage === item.page;

                  return (
                    <motion.div
                      key={item.page}
                      initial={{ opacity: 0, x: -25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                    >
                      <button
                        onClick={() => handleSelectPage(item.page)}
                        className="group w-full flex items-baseline justify-between text-left py-2 border-b border-white/5 hover:border-white/20 transition-all cursor-pointer"
                      >
                        <div className="flex items-baseline gap-4 sm:gap-8">
                          <span
                            className="font-mono text-xs sm:text-sm font-bold tracking-widest"
                            style={{ color: isActive ? accentColor : '#64748b' }}
                          >
                            // {item.code}
                          </span>

                          <span
                            className={`font-display font-black uppercase text-3xl sm:text-6xl lg:text-7xl tracking-tight transition-all duration-200 group-hover:translate-x-3 ${
                              isActive
                                ? 'text-white'
                                : 'text-slate-400 group-hover:text-white'
                            }`}
                            style={isActive ? { color: accentColor } : {}}
                          >
                            {item.label}
                          </span>
                        </div>

                        <div className="hidden md:flex items-center gap-3">
                          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider group-hover:text-slate-300">
                            {item.tag}
                          </span>
                          <ArrowUpRight
                            className="w-5 h-5 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            style={isActive ? { color: accentColor } : {}}
                          />
                        </div>
                      </button>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Footer Bottom inside Overlay */}
            <div className="max-w-7xl w-full mx-auto pt-6 border-t border-[#26292b]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-white">
                  <MapPin className="w-3.5 h-3.5" style={{ color: accentColor }} />
                  <span>ITS Surabaya, Indonesia</span>
                </span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Clock className="w-3.5 h-3.5" />
                  <span>WIB: {currentTime}</span>
                </span>
              </div>

              <div className="flex items-center gap-6">
                <a
                  href="https://linkedin.com/in/afsalmurtaza"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://github.com/afsalmurtaza"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://instagram.com/afsalmurtaza"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram ↗
                </a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
