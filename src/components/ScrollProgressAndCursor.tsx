/**
 * @file ScrollProgressAndCursor.tsx
 * Progress bar scroll di paling atas layar.
 * Lingkaran kustom mouse telah dihapus sepenuhnya sesuai permintaan agar kursor default OS nyaman digunakan.
 */

import React, { useEffect, useState } from 'react';

interface ScrollProgressAndCursorProps {
  accentColor: string;
}

export const ScrollProgressAndCursor: React.FC<ScrollProgressAndCursorProps> = ({ accentColor }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2.5px] z-50 transition-all duration-75 pointer-events-none"
      style={{
        width: `${scrollProgress}%`,
        backgroundColor: accentColor,
      }}
    />
  );
};
