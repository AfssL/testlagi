/**
 * @file SocialFanOutStack.tsx
 * "LIFE ON & OFF CAMPUS": deretan kartu FOTO PENUH berbentuk lonjong ke atas (rasio 9:16 seperti
 * Instagram Story), tanpa teks di bawahnya, seperti di landonorris.com.
 * - Desktop: 5 kartu berjajar sedikit tumpang-tindih dan miring tipis (statis, TIDAK maju saat di-hover).
 * - Mobile/tablet: kartu bisa digeser ke samping.
 * Ubah ukuran kartu: cari "lg:w-[210px]" (lebar kartu di desktop). Tinggi otomatis mengikuti rasio 9:16.
 * Ubah kemiringan: angka 4 pada `off * 4` (derajat per kartu). Ubah tumpang-tindih: lg:-ml-8.
 * Ganti foto: edit momentsData di data/portfolioData.ts (field img).
 */
import React from 'react';
import { motion } from 'motion/react';
import { MomentItem } from '../types';
import { RollingText } from './RollingText';

interface SocialFanOutStackProps {
  moments: MomentItem[];
  accentColor: string;
}

export const SocialFanOutStack: React.FC<SocialFanOutStackProps> = ({ moments, accentColor }) => {
  const cards = moments.slice(0, 5);

  return (
    <section className="relative w-full select-none overflow-hidden py-16 sm:py-24 lg:py-28">
      <div className="mx-auto mb-10 max-w-6xl px-4 text-center sm:mb-14 sm:px-8">
        <h2
          className="font-display font-black uppercase leading-none tracking-tight text-white"
          style={{ fontSize: 'clamp(28px, 5.5vw, 68px)' }}
        >
          <RollingText text="LIFE ON & OFF CAMPUS." accentColor={accentColor} />
        </h2>
      </div>

      {/* Baris kartu: geser di mobile, berjajar rapi di desktop */}
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 lg:justify-center lg:gap-0 lg:overflow-visible lg:px-4"
        style={{ scrollbarWidth: 'none' }}>
        {cards.map((m, i) => {
          const off = i - (cards.length - 1) / 2; // -2 ... +2
          return (
            <div
              key={m.id}
              className="w-[58vw] shrink-0 snap-center sm:w-[34vw] lg:w-[210px] lg:-ml-8 first:lg:ml-0 xl:w-[225px] lg:[rotate:var(--r)] lg:[translate:0_var(--y)]"
              style={{ '--r': `${off * 4}deg`, '--y': `${Math.abs(off) * 14}px` } as React.CSSProperties}
            >
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#10201d] via-[#0b0e10] to-[#050707] shadow-[0_18px_40px_-14px_rgba(0,0,0,0.9)]"
              >
                {m.img && (
                  <img
                    src={m.img}
                    alt={m.place}
                    draggable={false}
                    onError={(e) => ((e.target as HTMLElement).style.display = 'none')}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
