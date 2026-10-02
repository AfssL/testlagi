/**
 * @file StatementSection.tsx
 * Bagian Pernyataan (Statement) - Teks besar yang menyala per kata saat di-scroll.
 * Transisi warna telah dipercepat agar menyala lebih responsif saat mendekati viewport
 * tanpa jeda/keterlambatan, persis seperti efek teks di situs Lando Norris.
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface StatementSectionProps {
  statement: string;
  accentWords: string[];
  accentColor: string;
}

export const StatementSection: React.FC<StatementSectionProps> = ({
  statement,
  accentWords,
  accentColor,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0.15);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Mulai menyala bertahap dan tenang saat mendekati viewport
      // dan selesai menyala penuh secara bertahap seiring scroll alami (tidak tergesa-gesa)
      const triggerStart = windowHeight * 0.82;
      const triggerEnd = windowHeight * 0.10;
      const rawProgress = (triggerStart - rect.top) / (triggerStart - triggerEnd);
      const progress = Math.min(1, Math.max(0, rawProgress));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const words = statement.split(' ');
  // Hitung jumlah kata yang menyala secara responsif
  const litCount = Math.floor(scrollProgress * (words.length + 1));

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-36 px-4 sm:px-8 max-w-6xl mx-auto flex items-center justify-center min-h-[45vh]"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display font-extrabold tracking-tight leading-[1.14] text-left sm:text-center text-3xl sm:text-5xl lg:text-6xl max-w-4xl select-none"
      >
        {words.map((word, idx) => {
          const isLit = idx <= litCount;
          const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
          const isAccent = accentWords.some((aw) => cleanWord.startsWith(aw.toLowerCase()));

          return (
            <span
              key={idx}
              className="inline-block mr-2.5 sm:mr-3.5 transition-colors duration-150"
              style={{
                color: isLit
                  ? isAccent
                    ? accentColor
                    : '#ffffff'
                  : '#2a2d31',
                textShadow: isLit && isAccent ? `0 0 24px ${accentColor}60` : 'none',
              }}
            >
              {word}
            </span>
          );
        })}
      </motion.p>
    </section>
  );
};
