/**
 * @file BucketListSection.tsx
 * Bagian Bucket List / Target & Milestone
 * Sesuai kode v3 Afsal: checklist interaktif dengan progress bar yang dinamis.
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Target } from 'lucide-react';
import { bucketListData } from '../data/portfolioData';
import { BucketItem } from '../types';

interface BucketListSectionProps {
  accentColor: string;
}

export const BucketListSection: React.FC<BucketListSectionProps> = ({ accentColor }) => {
  const [items, setItems] = useState<BucketItem[]>(bucketListData);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  };

  const completedCount = items.filter((i) => i.completed).length;
  const progressPercent = Math.round((completedCount / items.length) * 100);

  return (
    <section className="py-24 border-b border-[#26292b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        <div className="mb-10">
          <span className="text-xs uppercase tracking-widest font-mono font-bold" style={{ color: accentColor }}>
            GOALS & ASPIRATIONS
          </span>
          <h2 className="title-poster mt-1">
            Bucket List
          </h2>
          <p className="text-sm text-slate-400 max-w-md mt-2">
            Target dan mimpi yang ingin dicapai selama masa perkuliahan di ITS dan awal karir engineering.
          </p>
        </div>

        <div className="bg-[#101112] border border-[#26292b] rounded-2xl p-6 sm:p-10 space-y-6">
          
          {/* Header & Progress Bar */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300 font-bold uppercase tracking-wider">
                Progress Pencapaian
              </span>
              <span className="text-white font-bold" style={{ color: accentColor }}>
                {completedCount} dari {items.length} tercapai ({progressPercent}%)
              </span>
            </div>

            {/* Bar */}
            <div className="w-full h-2 rounded-full bg-[#1e2124] overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${progressPercent}%`,
                  backgroundColor: accentColor,
                }}
              />
            </div>
          </div>

          {/* List Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-4 rounded-xl border transition-all duration-200 flex items-start gap-3.5 cursor-pointer select-none ${
                  item.completed
                    ? 'bg-[#0b1413] border-[#00d2be]/40 text-slate-300'
                    : 'bg-[#16181a] border-[#26292b] hover:border-slate-500 text-white'
                }`}
              >
                {/* Custom Checkbox */}
                <div
                  className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    item.completed
                      ? 'border-[#00D2BE] bg-[#00D2BE] text-black font-bold'
                      : 'border-slate-500 bg-transparent'
                  }`}
                >
                  {item.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>

                <div className="space-y-0.5">
                  <span
                    className={`text-xs sm:text-sm font-medium transition-all ${
                      item.completed ? 'line-through text-slate-400' : 'text-white'
                    }`}
                  >
                    {item.title}
                  </span>
                  <span className="block text-[11px] font-mono text-slate-500">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
