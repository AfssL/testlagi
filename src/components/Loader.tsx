/**
 * @file Loader.tsx
 * Opening Loader Minimalis & Bersih
 * Angka persentase raksasa 99.99% di tengah layar yang awalnya berwarna putih bersih,
 * lalu seiring bertambahnya angka bertransisi mulus menjadi warna hijau aksen (#00D2BE)
 * dengan pendaran neon glow sinematik di akhir proses.
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
  accentColor: string;
  name?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  onComplete,
  accentColor = '#00D2BE',
}) => {
  const [count, setCount] = useState<number>(1.00);
  const [isDone, setIsDone] = useState<boolean>(false);

  useEffect(() => {
    let current = 1.00;
    
    // Ritme progres terukur yang deliberate dan mantap
    const interval = setInterval(() => {
      let increment = 0;
      if (current < 45) {
        increment = Math.random() * 3.2 + 1.6;
      } else if (current < 80) {
        increment = Math.random() * 2.6 + 1.2;
      } else {
        increment = Math.random() * 1.4 + 0.6;
      }

      current += increment;

      if (current >= 99.99) {
        current = 99.99;
        setCount(current);
        clearInterval(interval);
        
        // Jeda sejenak untuk mengapresiasi angka 99.99% yang menyala hijau penuh sebelum membuka
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            onComplete();
          }, 850);
        }, 500);
      } else {
        setCount(current);
      }
    }, 42);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Perhitungan transisi warna dari Putih (#FFFFFF) ke Hijau Aksen (#00D2BE) secara flat & elegan (tanpa glow)
  const colorProgress = Math.min(1, Math.max(0, (count - 30) / (99.99 - 30)));
  const r = Math.round(255 - colorProgress * 255); // 255 -> 0
  const g = Math.round(255 - colorProgress * (255 - 210)); // 255 -> 210
  const b = Math.round(255 - colorProgress * (255 - 190)); // 255 -> 190
  const dynamicColor = `rgb(${r}, ${g}, ${b})`;

  return (
    <AnimatePresence>
      {!isDone ? (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-[#000000] flex items-center justify-center text-center select-none"
        >
          {/* Angka Persentase Raksasa Murni (99.99%) Tanpa Efek Glow/Haze */}
          <span
            className="font-display font-black leading-none tracking-tighter transition-all duration-75 select-none"
            style={{
              fontSize: 'clamp(85px, 20vw, 240px)',
              color: dynamicColor,
            }}
          >
            {count.toFixed(2)}%
          </span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
