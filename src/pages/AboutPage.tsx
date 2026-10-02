/**
 * @file AboutPage.tsx
 * Halaman Detail Tentang Diri (About Page)
 * Berisi biodata lengkap, kartu foto profil interaktif, riwayat akademik di Teknik Informatika ITS,
 * minat khusus pada Data Analysis, AI, UI/UX & Enterprise Systems, serta Bucket List.
 */

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Upload, MapPin, Database, Brain, Layout, Award, CheckCircle2 } from 'lucide-react';
import { BucketListSection } from '../components/BucketListSection';
import { MagneticButton } from '../components/MagneticButton';
import { PersonalProfile } from '../types';

interface AboutPageProps {
  profile: PersonalProfile;
  accentColor: string;
  onUpdateProfileImage: (image: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  profile,
  accentColor,
  onUpdateProfileImage,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdateProfileImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-8 space-y-20">
      
      {/* 1. HEADER HALAMAN ABOUT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-3"
      >
        <span className="text-xs uppercase tracking-widest font-mono font-bold" style={{ color: accentColor }}>
          IDENTITY & STORY
        </span>
        <h1 className="title-poster">
          About Afsal.
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-mono">
          Mahasiswa Teknik Informatika ITS angkatan 2024 (Semester 5) dengan fokus pada Analisis Data, Data Mining, AI, dan Desain UI/UX.
        </p>
      </motion.div>

      {/* 2. GRID FOTO PROFIL + BIODATA DIRI */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Kolom Kiri: Kartu Foto Profil (Tempat pasang foto sendiri) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="lg:col-span-5"
        >
          <div className="bg-[#101112] border border-[#26292b] rounded-3xl p-5 space-y-4 shadow-xl">
            
            {/* Foto / Stylized Visual Container */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#16181a] border border-[#26292b] flex items-center justify-center group">
              {profile.profileImage ? (
                <img
                  src={profile.profileImage}
                  alt={profile.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <div
                    className="w-20 h-20 rounded-2xl border flex items-center justify-center mb-3"
                    style={{
                      borderColor: `${accentColor}50`,
                      backgroundColor: `${accentColor}12`,
                    }}
                  >
                    <span className="font-display font-black text-3xl text-white">AM</span>
                  </div>
                  <span className="font-bold text-white text-lg font-display">Afsal Murtaza</span>
                  <span className="text-xs text-slate-400 font-mono mt-0.5">Teknik Informatika ITS</span>
                </div>
              )}

              {/* Upload Input & Button Overlay */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                className="hidden"
              />
            </div>

            {/* Tombol Pasang / Ganti Foto dengan Efek Magnetik */}
            <div className="flex items-center gap-2 pt-1">
              <MagneticButton
                strength={0.3}
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 py-2.5 px-4 text-xs font-mono font-bold rounded-xl text-black transition-all hover:bg-white"
                style={{ backgroundColor: accentColor }}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Pilih Foto dari Komputer</span>
              </MagneticButton>

              {profile.profileImage && (
                <MagneticButton
                  strength={0.3}
                  onClick={() => onUpdateProfileImage('')}
                  className="py-2.5 px-3 text-xs font-mono text-slate-400 hover:text-red-400 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors cursor-pointer"
                >
                  <span>Reset</span>
                </MagneticButton>
              )}
            </div>

            {/* Info Ringkas */}
            <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
              <div className="flex justify-between">
                <span>Institusi:</span>
                <span className="text-white font-bold">ITS Surabaya</span>
              </div>
              <div className="flex justify-between">
                <span>Departemen:</span>
                <span className="text-white">Teknik Informatika</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span style={{ color: accentColor }}>Semester 5 (Aktif)</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Kolom Kanan: Narasi Diri & Minat Spesifik */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Cerita Diri */}
          <div className="p-8 rounded-3xl bg-[#101112] border border-[#26292b] space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            <h2 className="text-2xl font-bold font-display text-white tracking-tight">
              Menghubungkan Data, AI & Pengalaman Manusia.
            </h2>
            <p>
              {profile.bioP1}
            </p>
            <p className="text-slate-400">
              {profile.bioP2}
            </p>
            <div className="pt-3 border-t border-[#26292b]">
              <p className="text-xs text-slate-400 font-mono italic">
                "{profile.statement}"
              </p>
            </div>
          </div>

          {/* Pendidikan Formal ITS */}
          <div className="p-7 rounded-3xl bg-[#101112] border border-[#26292b] space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" style={{ color: accentColor }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Institut Teknologi Sepuluh Nopember (ITS)
                  </h3>
                  <p className="text-xs text-slate-300 font-mono mt-0.5">
                    S1 Teknik Informatika · FTEIC
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Angkatan 2024 · Sedang Menempuh Semester 5
                  </p>
                </div>
              </div>

              <div className="px-3 py-1 rounded-lg bg-black/60 border border-[#26292b] text-right font-mono">
                <span className="text-[10px] text-slate-500 block">IPK</span>
                <span className="text-base font-bold" style={{ color: accentColor }}>
                  3.84
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#26292b]/60 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Fokus Mata Kuliah & Praktikum Utama:
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {["Data Mining", "Sistem Basis Data", "Statistika Terapan", "Kecerdasan Buatan", "Sistem Enterprise", "Interaksi Manusia & Komputer (HCI)"].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 rounded-lg bg-[#16181a] border border-[#26292b] text-slate-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </motion.div>

      </div>

      {/* 3. BUCKET LIST & ASPIRASI (Interaktif) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <BucketListSection accentColor={accentColor} />
      </motion.div>

    </div>
  );
};
