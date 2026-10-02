/**
 * @file types.ts
 * Definisi Type & Interface Portofolio Afsal Murtaza
 * Menggabungkan kategori lengkap ala najibbahrudin.com
 * dan estetika border/specs Lando Norris & Charles Leclerc.
 */

export type PageView = 'home' | 'about' | 'projects' | 'journey' | 'contact';

export interface MomentItem {
  id: string;
  img?: string;
  place: string;
  year: string;
  caption?: string;
}

export interface BucketItem {
  id: string;
  title: string;
  category: string;
  completed: boolean;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface JourneyItem {
  year: string;
  title: string;
  desc: string;
  tag?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'data' | 'ai' | 'uiux' | 'enterprise';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  tools: string[];
  role: string;
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  metrics?: string;
  highlights: string[];
  image?: string;
  badge?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'Sertifikasi' | 'Kompetisi' | 'Penghargaan';
  description: string;
  credentialUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Laboratorium' | 'Organisasi' | 'Riset';
  description: string;
  contributions: string[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
}

export interface PersonalProfile {
  name: string;
  firstName: string;
  lastName: string;
  driverNumber: string; // e.g. "24" (Class of 2024)
  roleTitle: string;
  tagline: string;
  batch: string;
  semester: string;
  university: string;
  department: string;
  faculty: string;
  location: string;
  nationality: string;
  bornYear: string;
  email: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  instagram: string;
  availability: string;
  bioP1: string;
  bioP2: string;
  statement: string;
  accentWords: string[];
  specs: {
    code: string;
    label: string;
    value: string;
    detail: string;
  }[];
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  profileImage: string;
}
