'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { USER_INFO } from '@/constants';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 lg:order-2"
          >
            <div className="space-y-2">
              <p className="text-lg font-medium text-blue-600">
                Halo 👋, I&apos;am
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                {USER_INFO.name}
              </h1>
            </div>

            <div className="space-y-3">
              <p className="max-w-xl text-base text-gray-600 md:text-lg leading-relaxed">
                A Web Developer dedicated to crafting high-performance applications that deliver impactful user experiences.
              </p>
              <p className="text-gray-600 font-medium">
                Technology Enthusiast
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
              >
                Contact Me
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-auto order-1 lg:order-1 flex items-center justify-center"
          >
            {/* Portrait Image */}
            <div className="relative w-full h-auto max-w-sm md:max-w-md lg:max-w-lg">
              <Image
                src="/profile.png"
                alt="Muhammad Kevin Kautsar - Web Developer"
                width={600}
                height={800}
                priority
                className="w-full h-auto object-contain"
                quality={95}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
