/**
 * @file Hero.tsx
 * Hero Section Poster Raksasa - Terinspirasi langsung dari kode referensi Afsal
 * serta website Lando Norris & Charles Leclerc.
 * Teks nama besar di belakang foto dengan efek outline baris 1 dan solid baris 2.
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, Sliders, ArrowDown, Upload, FileText, Sparkles } from 'lucide-react';
import { PersonalProfile } from '../types';

interface HeroProps {
  profile: PersonalProfile;
  accentColor: string;
  onOpenCustomizer: () => void;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  accentColor,
  onOpenCustomizer,
  onOpenResumeModal,
}) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center overflow-hidden pt-24 pb-8 sm:pb-12"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 55%, ${accentColor}35, transparent 55%)`,
      }}
    >
      {/* 1. TEKS NAMA RAKSASA DI BELAKANG (POSTER EFFECT) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none z-0">
        <h1
          className="flex flex-col items-center justify-center font-display font-black leading-[0.78] uppercase tracking-tighter"
          style={{ fontSize: 'clamp(95px, 23vw, 360px)' }}
        >
          {/* Baris 1: Outline Transparan */}
          <span className="hero-outline text-center transition-all duration-700">
            {profile.firstName}
          </span>
          {/* Baris 2: Solid Putih */}
          <span className="text-white text-center transition-all duration-700">
            {profile.lastName}
          </span>
        </h1>
      </div>

      {/* Top subtle badge */}
      <div className="relative z-10 text-center pt-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#26292b] text-xs font-mono text-slate-300">
          <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: accentColor }}></span>
          <span className="font-bold text-white tracking-wider">ITS INFORMATICS</span>
          <span className="text-slate-500">·</span>
          <span>CLASS OF 2024</span>
          <span className="text-slate-500">·</span>
          <span style={{ color: accentColor }}>SEMESTER 5</span>
        </div>
      </div>

      {/* 2. AREA FOTO SUBJEK DI TENGAH */}
      <div
        className="relative z-10 flex-1 flex items-end justify-center w-full max-w-2xl px-4 transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
        }}
      >
        {profile.profileImage ? (
          <div className="relative max-h-[65vh] flex items-end">
            <img
              src={profile.profileImage}
              alt={profile.name}
              className="max-h-[62vh] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
        ) : (
          /* Stylized Portrait Card Fallback jika belum memasang foto */
          <div className="my-auto py-8">
            <div className="relative bg-[#101112]/90 backdrop-blur-md border border-[#26292b] hover:border-slate-500 rounded-3xl p-6 sm:p-8 max-w-sm mx-auto shadow-2xl text-center group transition-all">
              
              <div
                className="w-24 h-24 rounded-2xl mx-auto mb-4 border flex items-center justify-center transition-transform group-hover:scale-105"
                style={{
                  borderColor: `${accentColor}50`,
                  backgroundColor: `${accentColor}12`,
                }}
              >
                <span className="font-display font-black text-3xl tracking-tight text-white">
                  AM
                </span>
              </div>

              <h2 className="text-xl font-bold font-display text-white tracking-tight">
                {profile.name}
              </h2>

              <p className="text-xs text-slate-300 font-mono mt-1">
                Teknik Informatika · ITS Surabaya
              </p>

              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                {profile.tagline}
              </p>

              <button
                onClick={onOpenCustomizer}
                className="mt-5 inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" style={{ color: accentColor }} />
                <span>Pasang Foto Sendiri</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 3. HERO META DI PALING BAWAH (ROLE & ACTION PILLS) */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
        
        {/* Role & Kampus */}
        <p className="font-mono text-slate-300 text-center sm:text-left">
          <span className="font-bold text-white">{profile.department}</span>
          <span className="text-slate-500 mx-2">·</span>
          <span>{profile.university}</span>
          <span className="text-slate-500 mx-2">·</span>
          <span style={{ color: accentColor }}>Angkatan 2024 ({profile.semester})</span>
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenResumeModal}
            className="px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider text-black transition-all hover:bg-white cursor-pointer"
            style={{ backgroundColor: accentColor }}
          >
            Download CV
          </button>

          <a
            href="#projects"
            className="px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider text-slate-300 hover:text-white border border-[#26292b] hover:border-slate-400 transition-colors"
          >
            Lihat Karya ↓
          </a>
        </div>

      </div>
    </section>
  );
};
