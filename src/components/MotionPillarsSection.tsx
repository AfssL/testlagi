/**
 * @file MotionPillarsSection.tsx
 * Seksi 3 Kartu Interaktif Beranimasi Halus
 * Terinspirasi langsung dari seksi "Motion Driven" pada situs najibbahrudin.com (Fluidity, Connectivity, Scalability)
 * yang dipadukan dengan spesialisasi Afsal: Data Mining, AI Vision, dan Enterprise Systems.
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Database, Brain, Cpu, ArrowUpRight, Workflow, Layers, LineChart } from 'lucide-react';
import { PageView } from '../types';
import { RollingText } from './RollingText';

interface MotionPillarsSectionProps {
  accentColor: string;
  onNavigate: (page: PageView) => void;
}

export const MotionPillarsSection: React.FC<MotionPillarsSectionProps> = ({
  accentColor,
  onNavigate,
}) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const pillars = [
    {
      id: 1,
      code: "01 // FLUIDITY",
      title: "Data Mining & EDA",
      subtitle: "Uncovering Deep Patterns",
      desc: "Menyaring sinyal berharga dari dataset bervolume besar, membersihkan noise statistik, dan menghasilkan segmentasi prediktif berbasis Python & SQL.",
      tags: ["Pandas", "Scikit-Learn", "EDA", "Clustering"],
      icon: LineChart,
      gradient: "from-white/5 to-transparent",
    },
    {
      id: 2,
      code: "02 // CONNECTIVITY",
      title: "AI & Computer Vision",
      subtitle: "Real-Time Machine Intelligence",
      desc: "Menerapkan model deep learning seperti YOLOv8 untuk deteksi moda transportasi real-time dan analisis kepadatan spasial berlatensi rendah.",
      tags: ["PyTorch", "YOLOv8", "OpenCV", "Inference"],
      icon: Brain,
      gradient: "from-white/5 to-transparent",
    },
    {
      id: 3,
      code: "03 // SCALABILITY",
      title: "Enterprise Systems",
      subtitle: "Structured Architecture",
      desc: "Merancang proses bisnis enterprise dengan notasi BPMN 2.0 dan arsitektur basis data relasional ternormalisasi 3NF untuk efisiensi alur organisasi.",
      tags: ["BPMN 2.0", "PostgreSQL", "ERD", "Systems Flow"],
      icon: Workflow,
      gradient: "from-white/5 to-transparent",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden select-none bg-gradient-to-b from-transparent via-[#08090a] to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Header Khas Najib Bahrudin: My Site · Motion Driven */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest font-mono font-bold" style={{ color: accentColor }}>
            CORE METHODOLOGY
          </span>

          <h2
            className="font-display font-black uppercase text-white tracking-tight leading-tight"
            style={{ fontSize: 'clamp(36px, 6vw, 76px)' }}
          >
            <RollingText text="DATA-DRIVEN PILLARS." accentColor={accentColor} />
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 font-mono max-w-xl mx-auto">
            Menghubungkan ketelitian matematika data mentah, kecerdasan buatan terapan, dan kejelasan alur proses sistem enterprise.
          </p>
        </div>

        {/* 3 Interactive Tilted Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isHovered = hoveredCard === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                onMouseEnter={() => setHoveredCard(pillar.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => onNavigate('projects')}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -12, scale: 1.03, transition: { type: 'spring', stiffness: 900, damping: 30 } }}
                className="relative p-8 rounded-3xl bg-[#101112] hover:bg-[#141619] border border-[#26292b] hover:border-white/30 transition-colors duration-150 cursor-pointer flex flex-col justify-between group overflow-hidden shadow-2xl"
              >
                {/* Background Ambient Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none`}
                />

                {/* Corner cross (+) */}
                <span className="absolute top-3 right-3 text-[10px] font-mono text-slate-600 group-hover:text-[#00D2BE] transition-colors select-none">
                  +
                </span>

                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-6">
                    <span className="tracking-widest font-bold" style={{ color: accentColor }}>
                      {pillar.code}
                    </span>

                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
                      <Icon className="w-4 h-4 text-slate-300 group-hover:text-white" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                    {pillar.subtitle}
                  </span>

                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-[#00D2BE] transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-4 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>

                {/* Tags & Action */}
                <div className="mt-8 pt-6 border-t border-[#26292b]/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#16181a] border border-[#26292b] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#00D2BE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
