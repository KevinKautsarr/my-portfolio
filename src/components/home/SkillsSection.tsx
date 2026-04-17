'use client';

import { SKILLS } from '@/constants';
import * as Icons from 'lucide-react';

interface SkillItem {
  name: string;
  icon: string;
}

interface SkillGroup {
  category: string;
  items: SkillItem[];
}

const SkillsSection = () => {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ size: number; className: string }>;
    return IconComponent ? <IconComponent size={20} className="text-blue-600" /> : null;
  };

  return (
    <section id="skills" className="border-t border-slate-100 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Skills</p>
          <h2 className="mt-2 text-xl font-bold text-slate-900 md:text-2xl">Tech Stack & Tools</h2>
        </div>

        {/* First 3 categories in grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {SKILLS.slice(0, 3).map((group: SkillGroup) => (
            <div key={group.category} className="rounded-xl md:rounded-2xl border border-slate-200 bg-white p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-slate-900">{group.category}</h3>
              <div className="mt-3 md:mt-4 flex flex-wrap gap-2 md:gap-3">
                {group.items.map((item: SkillItem) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-1.5 md:gap-2 rounded-lg md:rounded-full bg-slate-50 px-2.5 md:px-3 py-1.5 md:py-2 text-xs md:text-xs font-medium text-slate-700 border border-slate-200 hover:bg-blue-50 hover:border-blue-200 transition-all"
                  >
                    {getIcon(item.icon)}
                    <span className="whitespace-nowrap">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* DevOps & Tools centered in one row */}
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-slate-100 flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
          {SKILLS.slice(3).map((group: SkillGroup) => (
            <div key={group.category} className="w-full md:w-auto md:max-w-xs rounded-xl md:rounded-2xl border border-slate-200 bg-white p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-slate-900">{group.category}</h3>
              <div className="mt-3 md:mt-4 flex flex-wrap gap-2 md:gap-3">
                {group.items.map((item: SkillItem) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-1.5 md:gap-2 rounded-lg md:rounded-full bg-slate-50 px-2.5 md:px-3 py-1.5 md:py-2 text-xs md:text-xs font-medium text-slate-700 border border-slate-200 hover:bg-blue-50 hover:border-blue-200 transition-all"
                  >
                    {getIcon(item.icon)}
                    <span className="whitespace-nowrap">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
