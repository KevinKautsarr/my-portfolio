'use client';

import { USER_INFO } from '@/constants';
import { Linkedin, Instagram } from 'lucide-react';
import { ContactForm } from '@/components/ui/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="border-t border-slate-100 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-5xl gap-8 rounded-3xl border border-slate-200 bg-white p-8 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Contact</p>
            <h2 className="mt-2 text-xl font-bold text-slate-900 md:text-2xl">Connect With Me</h2>
            <p className="mt-3 text-slate-600">
              Some places to connect with me
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <a
                href={USER_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
                LinkedIn: {USER_INFO.socialHandles.linkedin}
              </a>
              <a
                href={USER_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
                Instagram: {USER_INFO.socialHandles.instagram}
              </a>
            </div>
          </div>

          <ContactForm rows={4} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
