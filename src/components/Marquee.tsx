/**
 * @file Marquee.tsx
 * Pita Teks Berjalan Khas Lando Norris & Charles Leclerc
 * Latar belakang hijau Petronas (#00D2BE) dengan teks hitam condong tebal.
 */

import React from 'react';

export const Marquee: React.FC<{ accentColor?: string }> = ({ accentColor = "#00d2be" }) => {
  const items = [
    "Developer",
    "Designer",
    "ITS Surabaya",
    "Informatics 2024",
    "Semester 5",
    "Full-Stack",
    "Racing Precision",
    "Learner",
  ];

  return (
    <div
      className="overflow-hidden py-3 sm:py-3.5 select-none relative z-20"
      style={{ backgroundColor: accentColor }}
      aria-hidden="true"
    >
      <div className="animate-marquee flex items-center">
        {/* Render 2x untuk loop mulus tanpa jeda */}
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <span
            key={idx}
            className="pr-12 text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-black whitespace-nowrap flex items-center gap-12"
          >
            <span>{text}</span>
            <span className="w-2 h-2 rounded-full bg-black/40"></span>
          </span>
        ))}
      </div>
    </div>
  );
};
