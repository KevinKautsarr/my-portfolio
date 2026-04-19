'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, MapPin, Send } from 'lucide-react';
import { USER_INFO } from '@/constants';
import { ContactForm } from '@/components/ui/ContactForm';
import { FADE_IN_UP, TRANSITIONS } from '@/lib/animations';

const ContactPage = () => {
  return (
    <main className="min-h-screen pt-12 pb-20 bg-white flex items-center">
      <div className="container mx-auto px-6">
        <motion.div
          {...FADE_IN_UP}
          transition={TRANSITIONS.default}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left Column: Title + Info */}
            <div className="space-y-12">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  Contact <span className="text-blue-600">Me</span>
                </h1>
                <p className="text-base text-slate-600 max-w-xl leading-relaxed">
                  Have a project idea, want to collaborate, or just say hello? I&apos;m ready to hear from you.
                </p>
              </div>

              <div className="space-y-8 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-blue-100 rounded-2xl text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">Email</h3>
                    <a
                      href={`mailto:${USER_INFO.email}`}
                      className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      {USER_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-4 bg-slate-100 rounded-2xl text-slate-900">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">Location</h3>
                    <a
                      href={USER_INFO.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      {USER_INFO.location}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Social Media</h3>
                <div className="flex gap-4">
                  <a
                    href={USER_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white border border-slate-100 rounded-2xl text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:shadow-lg transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={USER_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white border border-slate-100 rounded-2xl text-slate-600 hover:text-blue-600 hover:border-blue-100 hover:shadow-lg transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href={USER_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white border border-slate-100 rounded-2xl text-slate-600 hover:text-pink-600 hover:border-pink-100 hover:shadow-lg transition-all"
                    aria-label="Instagram"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-slate-50/50 rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-sm">
              <ContactForm rows={6} />
            </div>

          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ContactPage;
