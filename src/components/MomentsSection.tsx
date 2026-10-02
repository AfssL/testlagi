/**
 * @file MomentsSection.tsx
 * Bagian Moments - Strip Foto Geser Horizontal (Drag & Scroll)
 * Sesuai referensi kode asli Afsal dengan rasio selang-seling (3/4 dan 4/5).
 */

import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, MapPin, Camera } from 'lucide-react';
import { MomentItem } from '../types';

interface MomentsSectionProps {
  moments: MomentItem[];
  accentColor: string;
}

export const MomentsSection: React.FC<MomentsSectionProps> = ({ moments, accentColor }) => {
  const stripRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!stripRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - stripRef.current.offsetLeft);
    setScrollLeft(stripRef.current.scrollLeft);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !stripRef.current) return;
    e.preventDefault();
    const x = e.pageX - stripRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    stripRef.current.scrollLeft = scrollLeft - walk;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (stripRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      stripRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="moments" className="py-20 border-b border-[#26292b] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-8 flex items-end justify-between">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono font-bold" style={{ color: accentColor }}>
            CAMPUS & LIFE
          </span>
          <h2 className="title-poster mt-1">
            Moments
          </h2>
        </div>

        {/* Scroll Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-[#26292b] hover:border-white text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-[#26292b] hover:border-white text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Strip */}
      <div
        ref={stripRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="flex gap-5 overflow-x-auto px-4 sm:px-8 pb-6 cursor-grab active:cursor-grabbing select-none scrollbar-none scroll-smooth items-end"
        style={{ scrollbarWidth: 'none' }}
      >
        {moments.map((m, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <motion.figure
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex-none group"
              style={{ width: 'clamp(260px, 28vw, 380px)' }}
            >
              {/* Photo Box with alternating aspect ratio (3/4 or 4/5) */}
              <div
                className={`w-full rounded-xl overflow-hidden border border-[#26292b] group-hover:border-slate-400 transition-all duration-300 relative bg-gradient-to-br from-[#101112] via-[#081210] to-[#040e0c] ${
                  isEven ? 'aspect-[4/5]' : 'aspect-[3/4]'
                }`}
              >
                {m.img ? (
                  <img
                    src={m.img}
                    alt={m.place}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : null}

                {/* Minimalist Aesthetic Card Visual Fallback */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div
                    className="w-12 h-12 rounded-xl border flex items-center justify-center mb-3"
                    style={{
                      borderColor: `${accentColor}40`,
                      backgroundColor: `${accentColor}10`,
                    }}
                  >
                    <Camera className="w-5 h-5" style={{ color: accentColor }} />
                  </div>
                  <span className="font-display font-bold text-white text-lg tracking-tight">
                    {m.place}
                  </span>
                  {m.caption && (
                    <span className="text-xs text-slate-300 font-mono mt-1 max-w-[24ch]">
                      {m.caption}
                    </span>
                  )}
                </div>
              </div>

              {/* Caption Under Card */}
              <p className="mt-3 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="text-slate-300 font-semibold">{m.place}</span>
                <span style={{ color: accentColor }}>{m.year}</span>
              </p>
            </motion.figure>
          );
        })}
      </div>
    </section>
  );
};
