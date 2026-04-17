import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { NAV_LINKS, USER_INFO } from '@/constants';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center flex-shrink-0 mb-4">
              <img 
                src="/logo.png" 
                alt="Muhammad Kevin Kautsar" 
                className="h-6 md:h-8 w-auto object-contain object-left" 
              />
            </Link>
            <p className="mt-4 text-slate-600 max-w-sm leading-relaxed">
              {USER_INFO.bio}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={USER_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-900 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={USER_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={USER_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Kontak
            </h3>
            <p className="text-sm text-slate-600 mb-2">{USER_INFO.location}</p>
            <a
              href={`mailto:${USER_INFO.email}`}
              className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
            >
              {USER_INFO.email}
            </a>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {USER_INFO.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Built with Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
