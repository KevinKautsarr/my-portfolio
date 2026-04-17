'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '@/constants';
import Image from 'next/image';

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = PROJECTS.length;
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive items count
  useEffect(() => {
    const handleResize = () => {
      let items = 3;
      if (window.innerWidth < 640) items = 1;
      else if (window.innerWidth < 1024) items = 2;
      setItemsPerPage(items);

      // Keep currentIndex within bounds when itemsPerPage changes
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, totalProjects - items)));
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [totalProjects]);

  const maxIndex = Math.max(0, totalProjects - itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="portfolio" className="border-t border-slate-100 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Portfolio</p>
          <h2 className="mt-2 text-xl font-bold text-slate-900 md:text-2xl">Selected Projects</h2>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="flex"
          >
            {PROJECTS.map((project) => (
              <div 
                key={project.id} 
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
              >
                <div className="group rounded-3xl border border-slate-100 bg-white overflow-hidden hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 flex flex-col h-full">
                  <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-slate-300 font-bold">
                        No Image
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons - Only show if there are more projects than visibility */}
          {totalProjects > itemsPerPage && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 transition-all"
                aria-label="Previous projects"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalProjects - itemsPerPage + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-blue-600 w-6' : 'bg-slate-300'
                    }`}
                    aria-label={`Go to project page ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 transition-all"
                aria-label="Next projects"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};


export default PortfolioSection;
