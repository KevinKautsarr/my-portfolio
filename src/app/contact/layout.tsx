import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Muhammad Kevin Kautsar',
  description:
    'Get in touch with Muhammad Kevin Kautsar for project collaboration, freelance work, or just to say hello.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
