/**
 * @file ZoomSection.tsx
 * Pembungkus section bergaya Lando Norris: saat di-scroll MASUK layar, section
 * zoom-in dari kecil ke ukuran penuh (sudut membulat jadi lurus). Saat KELUAR layar,
 * section zoom-out halus dan memudar.
 * Cara pakai:  <ZoomSection className="bg-[#07090b]"> ...isi section... </ZoomSection>
 * Atur kekuatan zoom: prop `from` (0.88 = mulai dari 88% ukuran). Makin kecil = makin dramatis.
 */
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ZoomSectionProps {
  children: React.ReactNode;
  className?: string;
  from?: number;
}

export const ZoomSection: React.FC<ZoomSectionProps> = ({ children, className = '', from = 0.88 }) => {
  const ref = useRef<HTMLDivElement>(null);
  // Progres "masuk": 0 saat bagian atas section menyentuh dasar layar, 1 saat sudah di 25% atas layar
  const { scrollYProgress: enter } = useScroll({ target: ref, offset: ['start end', 'start 0.25'] });
  // Progres "keluar": 0 saat bagian bawah section di 75% layar, 1 saat sudah keluar lewat atas
  const { scrollYProgress: leave } = useScroll({ target: ref, offset: ['end 0.75', 'end start'] });

  const scaleIn = useTransform(enter, [0, 1], [from, 1]);
  const scaleOut = useTransform(leave, [0, 1], [1, 0.94]);
  const scale = useTransform([scaleIn, scaleOut], ([a, b]: number[]) => a * b);
  const radius = useTransform(enter, [0, 1], [56, 0]);
  const opacity = useTransform(leave, [0, 1], [1, 0.3]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, borderRadius: radius }}
      className={`origin-center overflow-hidden will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};
