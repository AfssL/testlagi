/**
 * @file ProjectsPage.tsx
 * Halaman Khusus Portofolio Proyek (Data Analytics, AI, Enterprise Systems, UI/UX)
 * Terinspirasi dari landonorris.com & charlesleclerc.com
 */

import { ProjectCard } from '../components/ProjectCard';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, FolderGit2, Database, Brain, Layout, Building2 } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import { ProjectItem } from '../types';

interface ProjectsPageProps {
  projects: ProjectItem[];
  accentColor: string;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  projects,
  accentColor,
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'data' | 'ai' | 'enterprise' | 'uiux'>('all');

  const categories = [
    { id: 'all', label: 'Semua Karya', icon: FolderGit2 },
    { id: 'data', label: 'Data Analytics & Mining', icon: Database },
    { id: 'ai', label: 'AI & Vision', icon: Brain },
    { id: 'enterprise', label: 'Enterprise Systems', icon: Building2 },
    { id: 'uiux', label: 'UI / UX Design', icon: Layout },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-28 pb-24 max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
      
      {/* Header Halaman Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-3"
      >
        <span className="text-xs uppercase tracking-widest font-mono font-bold" style={{ color: accentColor }}>
          WORKS & EXPERIMENTS
        </span>
        <h1 className="title-poster">
          Karya & Proyek.
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl font-mono">
          Eksplorasi analisis data bisnis, implementasi model kecerdasan buatan, arsitektur sistem enterprise, dan rancangan antarmuka pengguna di ITS.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeFilter === cat.id;

          return (
            <MagneticButton
              key={cat.id}
              strength={0.25}
              onClick={() => setActiveFilter(cat.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-white text-black shadow-md'
                  : 'bg-[#101112] text-slate-400 hover:text-white border border-[#26292b]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" style={{ color: isActive ? '#000' : accentColor }} />
              <span>{cat.label}</span>
            </MagneticButton>
          );
        })}
      </div>

      {/* Grid Proyek */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, idx) => (
          <div key={project.id} className={idx % 3 === 1 ? 'lg:mt-14' : ''}>
            <ProjectCard project={project} index={idx} accentColor={accentColor} onSelect={onSelectProject} />
          </div>
        ))}
      </div>

    </div>
  );
};
