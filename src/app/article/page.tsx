'use client';

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ARTICLES } from '@/constants';
import Image from 'next/image';

const ArticlePage = () => {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Blog & <span className="text-blue-600">Articles</span>
            </h1>
            <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
              Sharing thoughts, tutorials, and development notes on software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article, index) => (
              <motion.a
                key={article.id}
                href={article.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 p-8 flex flex-col h-full"
              >
              <div className="relative w-full h-48 -mx-8 -mt-8 mb-6 bg-slate-100 rounded-t-3xl overflow-hidden">
                {article.image ? (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-300 font-bold">
                    No Image
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-grow">
                {article.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                Read More
                <ArrowRight size={16} />
              </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ArticlePage;
