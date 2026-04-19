'use client';

import { motion } from 'framer-motion';
import { TechIcon } from '@/components/TechIcon';
import type { SkillGroup } from '@/types';
import { SCALE_IN, staggeredTransition } from '@/lib/animations';

interface SkillCardProps {
  skillGroup: SkillGroup;
  groupIndex: number;
  className?: string;
}

export const SkillCard = ({ skillGroup, groupIndex, className = '' }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={staggeredTransition(groupIndex)}
      className={`p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-slate-100 transition-all ${className}`}
    >
      <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-blue-600 mb-6 md:mb-8">
        {skillGroup.category}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {skillGroup.items.map((skill, skillIndex) => (
          <motion.div
            key={skill.name}
            {...SCALE_IN}
            transition={{ duration: 0.3, delay: groupIndex * 0.1 + skillIndex * 0.05 }}
            className="group/icon px-3 py-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-700 text-sm font-medium hover:bg-white hover:border-slate-200 transition-all cursor-default flex items-center gap-2"
          >
            <TechIcon name={skill.name} size={18} />
            <span className="whitespace-nowrap transition-colors group-hover/icon:text-slate-900">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
