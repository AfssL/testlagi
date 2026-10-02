/**
 * @file HeroCanvasBackground.tsx
 * Background Minimalis & Elegan Terinspirasi landonorris.com
 * Tanpa pendaran neon hijau (no green haze/glow) dan tanpa partikel sci-fi mengambang.
 * Menghadirkan latar belakang hitam matte murni yang bersih, berkelas, dan elegan.
 */

import React from 'react';

interface HeroCanvasBackgroundProps {
  accentColor?: string;
}

export const HeroCanvasBackground: React.FC<HeroCanvasBackgroundProps> = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 w-full h-full bg-[#000000] overflow-hidden select-none">
      {/* Lapisan gradasi gelap halus untuk kedalaman arsitektural murni (tanpa pendaran warna hijau) */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 45%, #14171a 0%, #000000 70%)',
        }}
      />
    </div>
  );
};
