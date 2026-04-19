'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, ArrowRight, ArrowUpRight } from 'lucide-react';
import { USER_INFO, NAV_LINKS } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <main className="relative bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text Content (Matches Home layout style) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-2 lg:order-1 text-left"
          >
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight tracking-tight">
                About <span className="text-blue-600">Me</span>
              </h1>
              <p className="text-lg md:text-xl font-bold text-slate-900 leading-tight">
                {USER_INFO.name} {USER_INFO.role}
              </p>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                {USER_INFO.bio}
              </p>
            </div>

            {/* Email Contact (Contact Page Style - Scaled Down) */}
            <div className="bg-slate-50/50 rounded-xl p-4 md:p-5 border border-slate-100 transition-all hover:bg-blue-50/50 hover:border-blue-100 w-full max-w-[320px] flex items-center gap-4 group">
              <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-white group-hover:shadow-sm transition-all">
                <Mail size={20} />
              </div>
              <div className="text-left overflow-hidden">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-0.5">Email</p>
                <a 
                  href={`mailto:${USER_INFO.email}`}
                  className="text-sm md:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors block truncate"
                >
                  {USER_INFO.email}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 w-full max-w-[320px]">
              {NAV_LINKS.filter(l => l.name !== 'Home' && l.name !== 'About').map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between px-3 py-2 bg-white border border-slate-100 rounded-lg text-[10px] font-bold text-slate-900 hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm hover:translate-y-[-1px]"
                >
                  {link.name}
                  <ArrowUpRight size={10} />
                </Link>
              ))}
            </div>

            {/* Social Connection */}
            <div className="space-y-2 w-full max-w-[320px]">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Follow me on</p>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={USER_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 bg-white border border-slate-100 rounded-lg text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-all shadow-sm hover:translate-y-[-1px]"
                  title="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={USER_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 bg-white border border-slate-100 rounded-lg text-slate-600 hover:text-blue-600 hover:border-blue-400 transition-all shadow-sm hover:translate-y-[-1px]"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={USER_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 bg-white border border-slate-100 rounded-lg text-slate-600 hover:text-pink-600 hover:border-pink-400 transition-all shadow-sm hover:translate-y-[-1px]"
                  title="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Photo (Matches Home Sizing but on the Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-auto order-1 lg:order-2 flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full h-auto max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="/profile.png"
                alt="About Muhammad Kevin Kautsar"
                width={700}
                height={900}
                priority
                className="w-full h-auto object-contain"
                quality={95}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
};

export default AboutPage;
