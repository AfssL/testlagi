/**
 * @file FadeInSection.tsx
 * Wrapper animasi fade-in halus saat elemen di-scroll ke dalam viewport (Framer Motion).
 * Memberikan nuansa sleek, elegan, dan smooth ala website Lando Norris & Najib Bahrudin.
 */

import React from 'react';
import { motion } from 'motion/react';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const getInitialY = () => {
    if (direction === 'up') return 24;
    if (direction === 'down') return -24;
    return 0;
  };

  const getInitialX = () => {
    if (direction === 'left') return 24;
    if (direction === 'right') return -24;
    return 0;
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: getInitialY(),
        x: getInitialX(),
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth settling curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
