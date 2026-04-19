import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Muhammad Kevin Kautsar',
  description:
    'A curated collection of web development projects by Muhammad Kevin Kautsar — showcasing expertise in Next.js, Laravel, and modern UI design.',
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
