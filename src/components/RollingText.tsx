/**
 * @file RollingText.tsx
 * Efek Text Roll Beruntun dari Kiri ke Kanan Khas Lando Norris (landonorris.com)
 * Memecah teks per karakter sehingga saat kursor diarahkan, huruf bergulir
 * secara bergelombang (staggered cascade wave) dari kiri ke kanan.
 * 
 * Perbaikan penting:
 * - Ketinggian dan line-height dibuat leluasa (h-[1.08em] & leading-[1.04])
 *   dengan padding mikro horizontal dan vertikal agar outline stroke serta
 *   ujung huruf (seperti ujung huruf A, M, L) TIDAK TERPOTONG sama sekali.
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';

interface RollingTextProps {
  text: string;
  className?: string;
  accentColor?: string;
  activeColor?: string;
  isOutline?: boolean;
  style?: React.CSSProperties;
}

export const RollingText: React.FC<RollingTextProps> = ({
  text,
  className = '',
  accentColor = '#00D2BE',
  activeColor,
  isOutline = false,
  style,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Pisahkan teks menjadi array karakter agar animasi roll berjalan satu per satu dari kiri ke kanan
  const characters = text.split('');

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex items-center justify-center flex-nowrap whitespace-nowrap cursor-pointer select-none py-0.5 px-0.5 max-w-full ${className}`}
      style={style}
    >
      {characters.map((char, index) => {
        // Jika karakter spasi, pertahankan ruang spasi tanpa memutus animasi
        if (char === ' ') {
          return (
            <span key={index} className="inline-block w-[0.28em]">
              &nbsp;
            </span>
          );
        }

        // Delay bertingkat dari kiri ke kanan (efek gelombang mekanis Lando Norris)
        const delay = index * 0.022;

        return (
          <span
            key={index}
            className="relative inline-block overflow-hidden leading-[1.04] h-[1.08em] px-[0.03em] align-baseline"
          >
            {/* Karakter Baris Atas (Bergulir naik ke atas) */}
            <motion.span
              animate={{ y: isHovered ? '-100%' : '0%' }}
              transition={{
                duration: 0.36,
                delay: isHovered ? delay : (characters.length - index) * 0.012,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`block uppercase ${isOutline ? 'hero-outline' : ''} leading-[1.04] py-[0.02em]`}
            >
              {char}
            </motion.span>

            {/* Karakter Baris Bawah (Muncul dari bawah dengan warna aksen) */}
            <motion.span
              animate={{ y: isHovered ? '0%' : '100%' }}
              transition={{
                duration: 0.36,
                delay: isHovered ? delay : (characters.length - index) * 0.012,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute inset-0 block uppercase leading-[1.04] py-[0.02em]"
              style={{
                color: activeColor || accentColor,
                WebkitTextStroke: isOutline ? '0px transparent' : undefined,
              }}
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
};
