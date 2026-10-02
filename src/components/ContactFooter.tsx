/**
 * @file ContactFooter.tsx
 * Footer Mega Editorial Khas Lando Norris & Charles Leclerc
 * - Sekat garis kaku dihilangkan diganti gradasi menyatu yang mulus.
 * - Judul LET'S BUILD SOMETHING dilengkapi efek RollingText gelombang kiri ke kanan.
 * - Ikon akun sosmed (LinkedIn, GitHub, Instagram, WhatsApp) dilengkapi efek pop-up ke atas khas MacOS Dock.
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Copy,
  Check,
  ArrowUp,
  Linkedin,
  Github,
  Instagram,
  MessageCircle,
} from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { RollingText } from './RollingText';
import { PersonalProfile, SocialLink } from '../types';

interface ContactFooterProps {
  profile: PersonalProfile;
  socials: SocialLink[];
  accentColor: string;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  profile,
  accentColor,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialDock = [
    {
      name: 'LinkedIn',
      url: profile.linkedin,
      icon: Linkedin,
      color: '#0A66C2',
    },
    {
      name: 'GitHub',
      url: profile.github,
      icon: Github,
      color: '#ffffff',
    },
    {
      name: 'Instagram',
      url: profile.instagram,
      icon: Instagram,
      color: '#E4405F',
    },
    {
      name: 'WhatsApp',
      url: `https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}`,
      icon: MessageCircle,
      color: '#25D366',
    },
  ];

  return (
    <footer id="contact" className="py-24 sm:py-36 px-4 sm:px-8 max-w-6xl mx-auto select-none">
      
      {/* 1. MEGA HEADLINE DENGAN EFEK ROLLINGTEXT GELOMBANG KIRI KE KANAN */}
      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest font-mono font-bold" style={{ color: accentColor }}>
          COLLABORATION & INQUIRIES
        </span>

        <h2
          className="font-display font-black uppercase text-white leading-[0.82] tracking-tighter"
          style={{ fontSize: 'clamp(52px, 11vw, 150px)' }}
        >
          <span className="block">
            <RollingText text="LET'S BUILD" accentColor={accentColor} />
          </span>
          <span className="block">
            <RollingText text="SOMETHING." accentColor={accentColor} activeColor="#ffffff" />
          </span>
        </h2>
      </div>

      {/* 2. EMAIL BESAR DENGAN GARIS TEAL & TOMBOL SALIN */}
      <div className="mt-12 flex flex-wrap items-center gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="text-xl sm:text-3xl lg:text-4xl font-display font-bold hover:text-white transition-colors pb-1 border-b-2"
          style={{
            color: accentColor,
            borderColor: accentColor,
          }}
        >
          {profile.email}
        </a>

        <MagneticButton
          strength={0.15}
          onClick={handleCopyEmail}
          className="px-3.5 py-1.5 rounded-full border border-[#26292b] hover:border-white text-xs font-mono text-slate-300 hover:text-white transition-colors"
          title="Salin email"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#00D2BE]" />
              <span className="text-[#00D2BE]">Tersalin!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Salin Email</span>
            </>
          )}
        </MagneticButton>
      </div>

      {/* 3. MACOS DOCK ICON ROW: LinkedIn, GitHub, Instagram, WhatsApp Pop-Up */}
      <div className="mt-14 space-y-3">
        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 block">
          CONNECT ON CHANNELS:
        </span>

        <div className="inline-flex items-center gap-3 p-2 rounded-2xl bg-[#101214]/80 border border-[#26292b]/80 backdrop-blur-md shadow-2xl">
          {socialDock.map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -8,
                  scale: 1.22,
                  boxShadow: '0 16px 24px -6px rgba(0,0,0,0.8)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#16181b] border border-white/10 hover:border-[#00D2BE] flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer relative group"
                title={item.name}
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />

                {/* macOS Tooltip Bubble */}
                <span className="absolute -top-8 px-2 py-0.5 rounded-md bg-black/90 border border-white/10 text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {item.name}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* 4. FOOTER BOTTOM: COPYRIGHT & BACK TO TOP */}
      <div className="mt-20 pt-8 border-t border-[#26292b]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} {profile.name}. Teknik Informatika Institut Teknologi Sepuluh Nopember Surabaya.
        </p>

        <MagneticButton
          strength={0.15}
          onClick={scrollToTop}
          className="text-slate-400 hover:text-white transition-colors px-2 py-1 rounded-lg"
        >
          <span>Kembali ke Paling Atas</span>
          <ArrowUp className="w-3.5 h-3.5" style={{ color: accentColor }} />
        </MagneticButton>
      </div>

    </footer>
  );
};
