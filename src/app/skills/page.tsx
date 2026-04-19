'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '@/constants';
import { SkillCard } from '@/components/ui/SkillCard';
import { FADE_IN_UP, TRANSITIONS } from '@/lib/animations';

const SkillsPage = () => {
  return (
    <main className="min-h-screen pt-12 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          {...FADE_IN_UP}
          transition={TRANSITIONS.default}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-12 text-center px-4 md:px-0">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4">
              Tech <span className="text-blue-600">Stack</span> &amp; Skills
            </h1>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-2 md:px-0">
              A collection of technologies and tools I use to build modern, scalable digital solutions.
            </p>
          </div>

          {/* First 3 categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SKILLS.slice(0, 3).map((skillGroup, groupIndex) => (
              <SkillCard
                key={skillGroup.category}
                skillGroup={skillGroup}
                groupIndex={groupIndex}
              />
            ))}
          </div>

          {/* DevOps & Tools */}
          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
            {SKILLS.slice(3).map((skillGroup, groupIndex) => (
              <SkillCard
                key={skillGroup.category}
                skillGroup={skillGroup}
                groupIndex={3 + groupIndex}
                className="w-full md:w-auto md:max-w-xs"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default SkillsPage;
