/**
 * @file HomePage.tsx
 * Halaman Utama (Home Page) - Edisi Poles Menyeluruh Sesuai Permintaan
 * 1. Tulisan pembuka diganti menjadi HELLO ! I'M.
 * 2. Teks AFSAL MURTAZA menggunakan efek rolling wave kiri ke kanan khas Lando Norris.
 * 3. Ikon sosial media di hero dan footer memiliki efek pop up ke atas khas MacOS Dock.
 * 4. Sekat-sekat kaku (garis potongan) dihapus diganti transisi warna & gradasi yang menyatu.
 * 5. Responsivitas mobile diperhalus agar nyaman di seluruh ukuran layar.
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowDown,
  ArrowUpRight,
  Database,
  Brain,
  Layout,
  Github,
  Linkedin,
  Instagram,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { HeroCanvasBackground } from '../components/HeroCanvasBackground';
import { Marquee } from '../components/Marquee';
import { StudentSpecsSection } from '../components/StudentSpecsSection';
import { MotionPillarsSection } from '../components/MotionPillarsSection';
import { StatementSection } from '../components/StatementSection';
import { CuratedWorkSection } from '../components/CuratedWorkSection';
import { SocialFanOutStack } from '../components/SocialFanOutStack';
import { ContactFooter } from '../components/ContactFooter';
import { MagneticButton } from '../components/MagneticButton';
import { RollingText } from '../components/RollingText';
import { ZoomSection } from '../components/ZoomSection';
import { PersonalProfile, PageView, ProjectItem } from '../types';
import { momentsData } from '../data/portfolioData';

interface HomePageProps {
  profile: PersonalProfile;
  accentColor: string;
  onNavigate: (page: PageView) => void;
  featuredProjects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  profile,
  accentColor,
  onNavigate,
  featuredProjects,
  onSelectProject,
}) => {
  const heroSocials = [
    { name: 'GitHub', url: profile.github, icon: Github },
    { name: 'LinkedIn', url: profile.linkedin, icon: Linkedin },
    { name: 'Instagram', url: profile.instagram, icon: Instagram },
    { name: 'Email', url: `mailto:${profile.email}`, icon: Mail },
  ];

  return (
    <div className="space-y-0 overflow-x-hidden bg-black text-[#c8ccce]">
      
      {/* 1. HERO UTAMA: Format Sinematik Bersih Tanpa Header Kicker Atas */}
      <section className="relative min-h-screen flex flex-col justify-between items-center overflow-hidden pt-24 sm:pt-28 pb-8 select-none">
        
        {/* Background Canvas Animasi Bergerak Halus */}
        <HeroCanvasBackground accentColor={accentColor} />

        {/* NAMA RAKSASA TEBAL DENGAN EFEK ROLL WAVE KIRI KE KANAN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4 w-full max-w-5xl mx-auto"
        >
          {/* Label Pembuka Sesuai Permintaan: HELLO ! I'M */}
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-400 mb-3 font-semibold">
            HELLO ! I'M
          </span>

          <h1
            className="font-display font-black leading-[0.92] uppercase tracking-tighter flex flex-col items-center cursor-pointer w-full -space-y-1 sm:-space-y-3"
            style={{ fontSize: 'clamp(38px, 13vw, 220px)' }}
          >
            {/* Baris 1: AFSAL dengan Efek Roll Wave Kiri ke Kanan */}
            <RollingText
              text={profile.firstName}
              isOutline={true}
              accentColor={accentColor}
              className="block transition-all duration-500"
            />
            {/* Baris 2: MURTAZA dengan Efek Roll Wave Kiri ke Kanan */}
            <RollingText
              text={profile.lastName}
              isOutline={false}
              accentColor={accentColor}
              className="block text-white transition-all duration-500"
            />
          </h1>

          {/* Subtitle / Bio Rinci */}
          <p className="text-xs sm:text-base font-mono text-slate-300 mt-5 sm:mt-6 tracking-wide max-w-2xl px-2 sm:px-4 leading-relaxed">
            Exploring patterns from complex datasets, building practical AI models, and designing intuitive enterprise digital experiences.
          </p>

          {/* Tombol Aksi Utama dengan Efek Magnetik Halus (Fluid Stack di Mobile) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-7 sm:mt-8 w-full max-w-md mx-auto px-4">
            <MagneticButton
              strength={0.12}
              onClick={() => onNavigate('projects')}
              className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full text-black font-mono font-bold text-xs uppercase tracking-wider transition-all hover:bg-white flex items-center justify-center gap-2 shadow-xl"
              style={{ backgroundColor: accentColor }}
            >
              <span>Jelajahi Karya Data & AI</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton
              strength={0.12}
              onClick={() => onNavigate('about')}
              className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full border border-[#26292b] bg-[#101112] hover:border-white text-slate-200 hover:text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <span>Tentang Afsal</span>
              <span>→</span>
            </MagneticButton>
          </div>

          {/* Baris Follow Me dengan Efek Pop-Up MacOS Dock */}
          <div className="flex items-center gap-3 sm:gap-4 mt-7 text-xs font-mono text-slate-400">
            <span className="uppercase text-[10px] sm:text-[11px] tracking-widest text-slate-500">
              FOLLOW ME:
            </span>

            <div className="flex items-center gap-2.5">
              {heroSocials.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      y: -6,
                      scale: 1.25,
                      boxShadow: '0 8px 18px -4px rgba(0,0,0,0.8)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 360, damping: 20 }}
                    className="w-8 h-8 rounded-full border border-[#26292b] bg-[#121417]/80 hover:border-white/40 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title={social.name}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Pojok Bawah: Widget Teknis Responsif Tanpa Garis Sekat Kaku */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10 w-full max-w-7xl px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400 pt-4"
        >
          {/* Widget Kiri: Fokus Semester 5 */}
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: accentColor }} />
            <div>
              <span className="text-[10px] text-slate-500 uppercase block tracking-wider">
                CURRENT FOCUS // SEMESTER 5
              </span>
              <span className="text-white font-bold text-[11px] sm:text-xs">
                Data Mining · Machine Learning · Enterprise Systems
              </span>
            </div>
          </div>

          {/* Widget Kanan: Student Specs */}
          <div className="text-center sm:text-right hidden sm:block">
            <span className="text-[10px] text-slate-500 uppercase block tracking-wider">
              STUDENT NUMBER // #24
            </span>
            <span className="text-white font-bold text-[11px] sm:text-xs">
              Informatics ITS Surabaya · GPA 3.84
            </span>
          </div>
        </motion.div>

      </section>

      {/* 2. PITA TEKS BERJALAN (MARQUEE TICKER) */}
      <Marquee accentColor={accentColor} />

      {/* 3. STUDENT SPECS / BIODATA GRID (Menyatu Mulus Tanpa Sekat Kaku) */}
      <StudentSpecsSection
        profile={profile}
        accentColor={accentColor}
        onNavigate={onNavigate}
      />

      {/* 4. MOTION DRIVEN PILLARS (Gradasi Halus) */}
      <MotionPillarsSection
        accentColor={accentColor}
        onNavigate={onNavigate}
      />

      {/* 5. STATEMENT INTERAKTIF (Teks Besar Menyala Responsif) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <StatementSection
          statement={profile.statement}
          accentWords={profile.accentWords}
          accentColor={accentColor}
        />
      </motion.div>

      {/* 6. CURATED WORK / CASE STUDIES (Gradasi Menyatu) */}
      <ZoomSection className="bg-[#07090b]">
      <CuratedWorkSection
        projects={featuredProjects}
        accentColor={accentColor}
        onSelectProject={onSelectProject}
        onNavigate={onNavigate}
      />

      </ZoomSection>
      {/* 7. SOCIAL FAN-OUT STACK (Komposisi Foto Luas, Auto-Return, dan Mobile-Ready) */}
      <ZoomSection className="bg-[#07090b]">
      <SocialFanOutStack
        moments={momentsData}
        accentColor={accentColor}
      />

      </ZoomSection>
      {/* 8. DUA PINTU BESAR (BUILD vs BRAND - Flat, Minimalis & Elegan) */}
      <ZoomSection className="bg-[#07090b]">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="doors flex flex-col md:flex-row min-h-[50vh] md:min-h-[62vh] overflow-hidden select-none bg-gradient-to-b from-transparent via-[#090b0d] to-transparent"
      >
        {/* Pintu 1: Karya Data & AI */}
        <div
          onClick={() => onNavigate('projects')}
          className="door-card flex-1 flex flex-col justify-end p-8 sm:p-14 relative group bg-[#0e1012] hover:bg-[#131618] transition-all duration-500 cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-[#26292b]/30"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase font-mono tracking-widest text-slate-400 group-hover:text-white transition-colors">
              01 / ANALYTICS & AI
            </span>
            <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-white flex items-center justify-center text-slate-300 group-hover:text-white transition-all">
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <h2 className="text-6xl sm:text-8xl lg:text-9xl font-black font-display uppercase tracking-tight text-white group-hover:text-[#00D2BE] transition-colors leading-[0.85]">
            <RollingText text="BUILD" accentColor={accentColor} />
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-200 mt-4 max-w-sm transition-colors">
            Karya analisis data, eksperimen machine learning, sistem enterprise, dan UI/UX design.
          </p>
        </div>

        {/* Pintu 2: Profil & Perjalanan */}
        <div
          onClick={() => onNavigate('about')}
          className="door-card flex-1 flex flex-col justify-end p-8 sm:p-14 relative group bg-[#0e1012] hover:bg-[#141518] transition-all duration-500 cursor-pointer overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase font-mono tracking-widest text-slate-400 group-hover:text-white transition-colors">
              02 / IDENTITY & ABOUT
            </span>
            <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-white flex items-center justify-center text-slate-300 group-hover:text-white transition-all">
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <h2 className="text-6xl sm:text-8xl lg:text-9xl font-black font-display uppercase tracking-tight text-white group-hover:text-slate-200 transition-colors leading-[0.85]">
            <RollingText text="BRAND" accentColor={accentColor} />
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-200 mt-4 max-w-sm transition-colors">
            Tentang Afsal Murtaza, pendidikan di ITS Surabaya, dan target masa depan.
          </p>
        </div>
      </motion.div>

      </ZoomSection>
      {/* 9. MEGA EDITORIAL FOOTER DENGAN DOCK MACOS (Menyatu Mulus) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-t from-black via-[#08090b] to-transparent"
      >
        <ContactFooter
          profile={profile}
          socials={[
            { platform: "LinkedIn", url: profile.linkedin, handle: "afsalmurtaza" },
            { platform: "GitHub", url: profile.github, handle: "afsalmurtaza" },
            { platform: "Instagram", url: profile.instagram, handle: "@afsalmurtaza" },
          ]}
          accentColor={accentColor}
        />
      </motion.div>

    </div>
  );
};
