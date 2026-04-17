'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '@/constants';
import * as Icons from 'lucide-react';

interface SkillItem {
  name: string;
  icon: string;
}

const SkillsPage = () => {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ size: number; className: string }>;
    return IconComponent ? <IconComponent size={20} className="text-blue-600" /> : null;
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-12 text-center px-4 md:px-0">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4">
              Tech <span className="text-blue-600">Stack</span> & Skills
            </h1>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-2 md:px-0">
              A collection of technologies and tools I use to build modern, scalable digital solutions.
            </p>
          </div>

          {/* First 3 categories in grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SKILLS.slice(0, 3).map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                className="p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-slate-100 transition-all group"
              >
                <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-blue-600 mb-6 md:mb-8">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {skillGroup.items.map((skill: SkillItem, skillIndex: number) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-slate-50 border border-slate-100 rounded-lg md:rounded-xl text-slate-700 text-xs md:text-sm font-medium hover:bg-white hover:border-blue-400 hover:text-blue-600 transition-all cursor-default flex items-center gap-1.5 md:gap-2"
                    >
                      {getIcon(skill.icon)}
                      <span className="whitespace-nowrap">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* DevOps & Tools centered in one row */}
          <div className="mt-8 md:mt-8 pt-8 md:pt-8 border-t border-slate-100 flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
            {SKILLS.slice(3).map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (3 + groupIndex) * 0.1 }}
                className="w-full md:w-auto md:max-w-xs p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-slate-100 transition-all group"
              >
                <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-blue-600 mb-6 md:mb-8">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {skillGroup.items.map((skill: SkillItem, skillIndex: number) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (3 + groupIndex) * 0.1 + skillIndex * 0.05 }}
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-slate-50 border border-slate-100 rounded-lg md:rounded-xl text-slate-700 text-xs md:text-sm font-medium hover:bg-white hover:border-blue-400 hover:text-blue-600 transition-all cursor-default flex items-center gap-1.5 md:gap-2"
                    >
                      {getIcon(skill.icon)}
                      <span className="whitespace-nowrap">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>


        </motion.div>
      </div>
    </main>
  );
};

export default SkillsPage;
