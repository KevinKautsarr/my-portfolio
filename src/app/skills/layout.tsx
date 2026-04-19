import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech Stack & Skills | Muhammad Kevin Kautsar',
  description:
    'A comprehensive overview of the technologies, frameworks, and tools used by Muhammad Kevin Kautsar to build modern web applications.',
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
