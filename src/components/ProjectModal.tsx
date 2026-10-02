/**
 * @file ProjectModal.tsx
 * Modal Rincian Studi Kasus Proyek - Bersih, Elegan & Terfokus pada Data & AI
 */

import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Calendar, User, FolderGit2 } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  accentColor: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  accentColor,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true"></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#101112] border border-[#26292b] rounded-3xl shadow-2xl z-10 my-8 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#26292b] bg-[#16181a]">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></span>
            <span className="font-bold text-white uppercase">{project.categoryLabel}</span>
            <span className="text-slate-500">·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Peran: <strong className="text-slate-200">{project.role}</strong>
              {project.metrics && (
                <> · <span style={{ color: accentColor }}>{project.metrics}</span></>
              )}
            </p>
          </div>

          {/* Image / Vector Container */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#16181a] border border-[#26292b] flex items-center justify-center">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            ) : null}

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#081816] via-[#101112] to-[#040908]">
              <div
                className="w-12 h-12 rounded-xl border flex items-center justify-center mb-2"
                style={{
                  borderColor: `${accentColor}40`,
                  backgroundColor: `${accentColor}10`,
                }}
              >
                <FolderGit2 className="w-6 h-6" style={{ color: accentColor }} />
              </div>
              <span className="text-base font-bold font-display text-white">
                {project.title}
              </span>
              <span className="text-xs text-slate-400 font-mono mt-1">
                Teknik Informatika ITS Surabaya
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              DESKRIPSI & LATAR BELAKANG
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {project.fullDescription}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              POIN TEMUAN & CAPAIAN
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: accentColor }} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Tech Stack */}
          <div className="space-y-2 pt-2 border-t border-[#26292b]">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              ALAT & METODOLOGI
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {(project.tools || []).map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-[#16181a] border border-[#26292b] text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#26292b]">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-mono font-bold rounded-xl text-black inline-flex items-center gap-1.5 transition-all hover:bg-white"
                style={{ backgroundColor: accentColor }}
              >
                <span>Buka Demo / Laporan</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-mono font-medium text-slate-200 bg-[#16181a] border border-[#26292b] hover:border-slate-500 rounded-xl inline-flex items-center gap-1.5 transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="ml-auto px-3 py-2 text-xs font-mono text-slate-400 hover:text-white cursor-pointer"
            >
              Tutup
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
