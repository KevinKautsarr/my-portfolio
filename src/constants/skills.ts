import type { SkillGroup } from '@/types';

export const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', icon: 'Code' },
      { name: 'CSS', icon: 'Palette' },
      { name: 'JavaScript', icon: 'FileJson' },
      { name: 'TypeScript', icon: 'FileCode' },
      { name: 'React', icon: 'Zap' },
      { name: 'Next.js', icon: 'Rocket' },
      { name: 'Tailwind CSS', icon: 'Wind' },
      { name: 'Bootstrap 5', icon: 'Layout' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'PHP', icon: 'Code' },
      { name: 'Laravel', icon: 'Leaf' },
      { name: 'CodeIgniter 4', icon: 'Flame' },
      { name: 'Node.js', icon: 'Server' },
      { name: 'Python', icon: 'Snake' },
      { name: 'REST API', icon: 'Network' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MySQL', icon: 'Database' },
      { name: 'PostgreSQL', icon: 'Database' },
      { name: 'MongoDB', icon: 'HardDrive' },
    ],
  },
  {
    category: 'DevOps',
    items: [
      { name: 'Git', icon: 'GitBranch' },
      { name: 'GitHub Actions', icon: 'GitBranch' },
      { name: 'Vercel', icon: 'Cloud' },
      { name: 'Docker', icon: 'Box' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'VS Code', icon: 'Code' },
      { name: 'Cursor', icon: 'MousePointer2' },
      { name: 'Figma', icon: 'Palette' },
      { name: 'Laragon', icon: 'Server' },
      { name: 'Postman', icon: 'Send' },
      { name: 'Antigravity', icon: 'Sparkles' },
    ],
  },
];
