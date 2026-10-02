/**
 * @file CuratedWorkSection.tsx
 * "Selected Work" bergaya Lando Norris: kartu besar tanpa kotak, tata letak zig-zag
 * (kartu genap turun ke bawah) supaya terasa editorial, bukan template grid kaku.
 * Mau tampilkan lebih banyak project? Ubah angka 3 pada projects.slice(0, 3).
 */
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem, PageView } from '../types';
import { ProjectCard } from './ProjectCard';
import { RollingText } from './RollingText';

interface CuratedWorkSectionProps {
  projects: ProjectItem[];
  accentColor: string;
  onSelectProject: (project: ProjectItem) => void;
  onNavigate: (page: PageView) => void;
}

export const CuratedWorkSection: React.FC<CuratedWorkSectionProps> = ({
  projects,
  accentColor,
  onSelectProject,
  onNavigate,
}) => {
  const allWork = (
    <button
      onClick={() => onNavigate('projects')}
      className="inline-flex items-center gap-2 border-b border-white/30 pb-1 text-sm text-white transition-colors hover:border-[#00D2BE] hover:text-[#00D2BE]"
    >
      Semua karya <ArrowUpRight className="h-4 w-4" />
    </button>
  );

  return (
    <section className="select-none px-4 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 flex items-end justify-between gap-6 sm:mb-20">
          <h2 className="title-poster">
            <RollingText text="SELECTED WORK" accentColor={accentColor} />
          </h2>
          <div className="hidden sm:block">{allWork}</div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, i) => (
            <div key={project.id} className={i % 3 === 1 ? 'lg:mt-14' : ''}>
              <ProjectCard project={project} index={i} accentColor={accentColor} onSelect={onSelectProject} />
            </div>
          ))}
        </div>

        <div className="mt-16 sm:hidden">{allWork}</div>
      </div>
    </section>
  );
};
