'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/constants';
import Image from 'next/image';

const PortfolioPage = () => {
  return (
    <main className="min-h-screen pt-40 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Project <span className="text-blue-600">Portfolio</span>
            </h1>
            <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
              A collection of selected projects I've built with a focus on performance, design, and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 flex flex-col"
              >
                <div className="aspect-[16/10] bg-slate-50 relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="flex items-center justify-center h-full text-slate-200 font-bold text-2xl uppercase tracking-[0.2em]">
                        {project.title}
                      </div>
                    </>
                  )}
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-8 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span key={t} className="px-4 py-1.5 bg-slate-50 text-slate-500 text-[11px] font-bold uppercase tracking-wider rounded-full border border-slate-100">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all hover:translate-y-[-2px] shadow-lg shadow-blue-100"
                  >
                    View Project
                    <ExternalLink size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default PortfolioPage;
