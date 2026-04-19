import React from 'react';
import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap,
  SiPhp, SiLaravel, SiCodeigniter, SiNodedotjs, SiPython,
  SiMysql, SiPostgresql, SiMongodb,
  SiGit, SiGithub, SiVercel, SiDocker,
  SiFigma, SiPostman
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { IconType } from 'react-icons';
import { Network, Server, Code, Send, Wind, Database, Sparkles, MousePointer2 } from 'lucide-react'; // For fallbacks

const iconConfigs: Record<string, { icon: IconType | any, color: string }> = {
  // Frontend
  'HTML': { icon: SiHtml5, color: '#E34F26' },
  'CSS': { icon: SiCss, color: '#1572B6' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'React': { icon: SiReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#000000' }, 
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'Bootstrap 5': { icon: SiBootstrap, color: '#7952B3' },
  
  // Backend
  'PHP': { icon: SiPhp, color: '#777BB4' },
  'Laravel': { icon: SiLaravel, color: '#FF2D20' },
  'CodeIgniter 4': { icon: SiCodeigniter, color: '#EF4223' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  'Python': { icon: SiPython, color: '#3776AB' },
  'REST API': { icon: Network, color: '#339933' },
  
  // Database
  'MySQL': { icon: SiMysql, color: '#4479A1' },
  'PostgreSQL': { icon: SiPostgresql, color: '#336791' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  
  // DevOps
  'Git': { icon: SiGit, color: '#F05032' },
  'GitHub Actions': { icon: SiGithub, color: '#181717' },
  'Vercel': { icon: SiVercel, color: '#000000' },
  'Docker': { icon: SiDocker, color: '#2496ED' },
  
  // Tools
  'VS Code': { icon: VscVscode, color: '#007ACC' },
  'Cursor': { icon: MousePointer2, color: '#000000' },
  'Figma': { icon: SiFigma, color: '#F24E1E' },
  'Laragon': { icon: Database, color: '#339933' },
  'Postman': { icon: SiPostman, color: '#FF6C37' },
  'Antigravity': { icon: Sparkles, color: '#7952B3' },
};

export const TechIcon = ({ name, size = 24 }: { name: string, size?: number }) => {
  const config = iconConfigs[name];
  
  if (!config) {
     return <Code size={size} className="text-slate-400 group-hover/icon:text-slate-600 transition-colors" />;
  }
  
  const Icon = config.icon;
  // Neutral icons depending on dark/light mode context, but we will force the brand color if specified.
  const isNeutral = name === 'Next.js' || name === 'Vercel' || name === 'GitHub Actions' || name === 'Cursor';
  
  return (
    <Icon 
      className="transition-transform duration-300 group-hover/icon:scale-110 drop-shadow-sm group-hover/icon:drop-shadow-md" 
      size={size} 
      style={{ color: isNeutral ? '#334155' : config.color }} 
    />
  );
};
