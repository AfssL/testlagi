/**
 * @file ProjectsSection.tsx
 * Bagian Projects - Sesuai referensi kode asli Afsal & Lando Norris
 * Kartu modern dengan sorotan kursor (radial spotlight), aspect-ratio 16/10, dan tautan langsung.
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  accentColor: string;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  accentColor,
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'cloud' | 'ai' | 'iot'>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'cloud', label: 'Backend & Cloud' },
    { id: 'ai', label: 'AI & Vision' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 border-b border-[#26292b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono font-bold" style={{ color: accentColor }}>
              FEATURED CREATIONS
            </span>
            <h2 className="title-poster mt-1">
              Projects
            </h2>
            <p className="text-sm text-slate-400 max-w-md mt-2">
              Karya rekayasa perangkat lunak, sistem backend, dan aplikasi web yang telah dibangun selama perkuliahan di ITS.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-[#101112] border border-[#26292b] rounded-full overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id as any)}
                  className={`px-4 py-1.5 text-xs font-mono font-bold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-white text-black shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative bg-[#101112] border border-[#26292b] hover:border-[#00D2BE] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer"
              onClick={() => onSelectProject(project)}
            >
              <div>
                {/* Visual Image Header (aspect-ratio 16/10) */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#081816] via-[#101112] to-[#040908] border-b border-[#26292b]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  ) : null}

                  {/* Fallback Graphic */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div
                      className="w-12 h-12 rounded-xl border flex items-center justify-center mb-2"
                      style={{
                        borderColor: `${accentColor}40`,
                        backgroundColor: `${accentColor}10`,
                      }}
                    >
                      <FolderGit2 className="w-6 h-6" style={{ color: accentColor }} />
                    </div>
                    <span className="font-display font-bold text-white text-base">
                      {project.title}
                    </span>
                    <span className="text-xs text-slate-400 font-mono mt-1">
                      {(project.tools || []).slice(0, 3).join(' · ')}
                    </span>
                  </div>

                  {/* Year Tag Badge */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-white">
                    {project.year}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold" style={{ color: accentColor }}>
                      {project.categoryLabel}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-[#00D2BE] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              {/* Card Footer: Tech tags & quick link */}
              <div className="p-6 pt-0 mt-2 flex items-center justify-between border-t border-[#26292b]/60 pt-4 text-xs font-mono">
                <span className="text-slate-400">
                  {(project.tools || []).slice(0, 3).join(' / ')}
                </span>

                <span className="text-[#00D2BE] font-bold group-hover:underline">
                  Inspect Project →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
