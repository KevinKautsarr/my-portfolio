import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Articles | Muhammad Kevin Kautsar',
  description:
    'Thoughts, tutorials, and development notes on web development, software engineering, and technology trends.',
};

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
