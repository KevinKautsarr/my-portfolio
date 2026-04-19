import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Muhammad Kevin Kautsar',
  description:
    'Learn more about Muhammad Kevin Kautsar — a Full-stack Developer from Indonesia passionate about crafting high-performance web applications.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
