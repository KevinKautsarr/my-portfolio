import Hero from '@/components/home/Hero';
import PortfolioSection from '@/components/home/PortfolioSection';
import ArticleSection from '@/components/home/ArticleSection';
import ContactSection from '@/components/home/ContactSection';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Hero />

      <section className="relative py-20">
        <PortfolioSection />
        <div className="container mx-auto px-6 pb-20 mt-[-40px] flex justify-center">
          <Link 
            href="/portfolio" 
            className="group flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View All Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="relative py-20">
        <ArticleSection />
        <div className="container mx-auto px-6 pb-20 mt-[-40px] flex justify-center">
          <Link 
            href="/article" 
            className="group flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Read All Articles
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="relative py-20">
        <ContactSection />
      </section>
    </main>
  );
}
