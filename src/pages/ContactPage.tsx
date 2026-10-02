/**
 * @file ContactPage.tsx
 * Halaman Kontak & Kolaborasi Langsung (Direct Channels Only)
 * - Tanpa form database / "Tinggalkan Pesan" sehingga 100% murni website statis tanpa backend/database.
 * - Menyediakan saluran komunikasi langsung berkecepatan tinggi: Email ITS, WhatsApp, GitHub, LinkedIn, Instagram.
 * - Desain presisi, flat, minimalis & elegan ala Lando Norris.
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, Mail, MessageCircle, ExternalLink, MapPin, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { MagneticButton, MagneticWrapper } from '../components/MagneticButton';
import { PersonalProfile } from '../types';
import { RollingText } from '../components/RollingText';

interface ContactPageProps {
  profile: PersonalProfile;
  accentColor: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ profile, accentColor }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWa, setCopiedWa] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyWa = () => {
    navigator.clipboard.writeText(profile.whatsapp);
    setCopiedWa(true);
    setTimeout(() => setCopiedWa(false), 2500);
  };

  const directChannels = [
    {
      title: "EMAIL UTAMA",
      subtitle: "Mahasiswa Teknik Informatika ITS",
      value: profile.email,
      actionText: "Buka Email Client",
      actionUrl: `mailto:${profile.email}?subject=${encodeURIComponent('[Portofolio Inquiry] Diskusi Kolaborasi Data & AI')}`,
      icon: Mail,
      isPrimary: true,
      onCopy: handleCopyEmail,
      isCopied: copiedEmail,
    },
    {
      title: "WHATSAPP LANGSUNG",
      subtitle: "Diskusi & Diskusi Cepat",
      value: profile.whatsapp,
      actionText: "Chat di WhatsApp",
      actionUrl: `https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Halo Afsal Murtaza! Saya tertarik dengan karya portofolio Anda dan ingin berdiskusi mengenai kolaborasi / proyek.')}`,
      icon: MessageCircle,
      isPrimary: false,
      onCopy: handleCopyWa,
      isCopied: copiedWa,
    },
  ];

  const socialProfiles = [
    {
      platform: "GitHub",
      handle: "AfssL",
      url: "https://github.com/AfssL",
      desc: "Repositories, Source Code & Eksperimen AI",
    },
    {
      platform: "LinkedIn",
      handle: "Afsal Murtaza",
      url: profile.linkedin,
      desc: "Profil Profesional, Pendidikan & Jejak Karier",
    },
    {
      platform: "Instagram",
      handle: "@afssll",
      url: profile.instagram,
      desc: "Dokumentasi Kampus, Visual & Kehidupan Mahasiswa",
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-24 sm:pb-32 max-w-6xl mx-auto px-4 sm:px-8 space-y-12 sm:space-y-16 select-none">
      
      {/* Header Halaman Khas Editorial Lando Norris */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-3"
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
          <span style={{ color: accentColor }}>// DIRECT COMMUNICATION CHANNELS</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400">AM-24 PORTAL</span>
        </div>

        <h1
          className="font-display font-black uppercase text-white leading-[0.88] tracking-tighter"
          style={{ fontSize: 'clamp(44px, 8.5vw, 120px)' }}
        >
          Let's build<br />
          <span style={{ color: accentColor }}>together.</span>
        </h1>

        <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-mono pt-2 leading-relaxed">
          Terbuka untuk peluang internship Data Analyst, riset kecerdasan buatan terapan, perancangan sistem enterprise, atau diskusi kolaborasi teknis.
        </p>
      </motion.div>

      {/* Grid 2 Saluran Utama: Email & WhatsApp */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {directChannels.map((channel, idx) => {
          const Icon = channel.icon;

          return (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#101112] hover:bg-[#131518] border border-[#26292b] hover:border-white/30 transition-all flex flex-col justify-between space-y-6 shadow-xl relative group"
            >
              {/* Corner Plus Accents ala Lando Norris */}
              <span className="absolute top-2 left-2 text-[9px] font-mono text-slate-600 select-none">+</span>
              <span className="absolute top-2 right-2 text-[9px] font-mono text-slate-600 select-none">+</span>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                    {channel.title}
                  </span>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center border border-[#26292b]"
                    style={{ backgroundColor: `${accentColor}12` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: accentColor }} />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                    {channel.subtitle}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-slate-300 mt-1 truncate">
                    {channel.value}
                  </p>
                </div>
              </div>

              {/* Tombol Aksi Langsung + Tombol Salin */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={channel.actionUrl}
                  target={channel.actionUrl.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl font-mono font-bold text-xs text-center transition-all flex items-center justify-center gap-2 cursor-pointer text-black hover:bg-white"
                  style={{ backgroundColor: accentColor }}
                >
                  <span>{channel.actionText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={channel.onCopy}
                  className="px-3.5 py-3 rounded-xl bg-[#16181b] hover:bg-white/10 border border-[#26292b] hover:border-white/30 text-slate-300 hover:text-white flex items-center justify-center gap-1.5 text-xs font-mono transition-colors cursor-pointer shrink-0"
                  title="Salin ke Clipboard"
                >
                  {channel.isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00D2BE]" />
                      <span className="text-[#00D2BE]">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Grid Profil Profesional & Media Sosial */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#101112] border border-[#26292b] space-y-5 shadow-xl relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#26292b]/60 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block">
              PROFESSIONAL CHANNELS & PROFILES
            </span>
            <h3 className="text-xl font-bold font-display text-white mt-1">
              Jejak Digital & Portofolio
            </h3>
          </div>
          <span className="text-[11px] font-mono text-slate-500">
            CONNECT // VERIFIED
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {socialProfiles.map((item) => (
            <a
              key={item.platform}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-[#141619] hover:bg-[#181b1e] border border-[#26292b] hover:border-white/40 transition-all flex flex-col justify-between group space-y-3 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-white group-hover:text-[#00D2BE] transition-colors">
                  {item.platform}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
              </div>

              <div>
                <p className="text-xs font-mono text-slate-400 truncate">
                  {item.handle}
                </p>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Spesifikasi Akademis & Lokasi Markas Kampus */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="p-5 rounded-2xl bg-[#101112] border border-[#26292b] space-y-1.5">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
            <MapPin className="w-3.5 h-3.5" style={{ color: accentColor }} />
            <span>BASE HEADQUARTERS</span>
          </div>
          <p className="text-xs font-bold text-white">
            Teknik Informatika ITS, Sukolilo, Surabaya
          </p>
          <p className="text-[11px] text-slate-500 font-mono">
            FTEIC - Institut Teknologi Sepuluh Nopember
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#101112] border border-[#26292b] space-y-1.5">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
            <Clock className="w-3.5 h-3.5" style={{ color: accentColor }} />
            <span>RESPONSE ESTIMATE</span>
          </div>
          <p className="text-xs font-bold text-white">
            Respon dalam &lt; 24 Jam
          </p>
          <p className="text-[11px] text-slate-500 font-mono">
            WIB (UTC+7) · Hari Kerja & Akademik
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#101112] border border-[#26292b] space-y-1.5">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" style={{ color: accentColor }} />
            <span>STATUS OPERASIONAL</span>
          </div>
          <p className="text-xs font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
            Ready for Internship & Projects
          </p>
          <p className="text-[11px] text-slate-500 font-mono">
            Semester 5 · Data Analysis & AI Roles
          </p>
        </div>
      </div>

    </div>
  );
};
