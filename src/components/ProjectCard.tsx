/**
 * @file ProjectCard.tsx
 * Kartu project gaya Lando Norris: tanpa kotak/border, gambar sebagai bintang utama.
 *  - Muncul dengan efek "unmask" (bingkai membuka) + gambar zoom-out saat di-scroll.
 *  - Hover: gambar sedikit lebih terang, judul berubah hijau, panah berputar.
 * Ukuran kartu diatur oleh kolom grid di CuratedWorkSection / ProjectsPage (3 kolom di desktop).
 * Ubah rasio gambar: ganti aspect-[4/5] di bawah (contoh: aspect-square atau aspect-[3/4]).
 */
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  accentColor: string;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Gambar bergerak & mengecil perlahan seiring scroll (parallax zoom-out)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.25, 1.1, 1.0]);
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <div ref={ref} className="group cursor-pointer" onClick={() => onSelect(project)}>
      <motion.div
        initial={{ clipPath: 'inset(12% 12% 12% 12%)', opacity: 0 }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gradient-to-br from-[#0c1f1c] via-[#101214] to-[#040908]"
      >
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            style={{ scale: imgScale, y: imgY }}
            className="absolute inset-0 h-full w-full object-cover transition-[filter] duration-500 group-hover:brightness-110"
          />
        ) : (
          <span className="hero-outline absolute inset-0 grid place-items-center font-display text-[clamp(56px,8vw,100px)] font-black">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </motion.div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="mb-1.5 text-[11px] text-slate-500">
            {project.year} · {project.categoryLabel}
          </p>
          <h3 className="font-display text-[clamp(20px,2vw,28px)] font-black uppercase leading-[0.98] text-white transition-colors duration-300 group-hover:text-[#00D2BE]">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-[13px] text-slate-400">{project.shortDescription}</p>
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-slate-500 transition-all duration-300 group-hover:rotate-12 group-hover:text-[#00D2BE]" />
      </div>
    </div>
  );
};
