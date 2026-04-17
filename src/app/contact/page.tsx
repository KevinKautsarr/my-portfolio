'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { USER_INFO } from '@/constants';
import { useForm, ValidationError } from '@formspree/react';

const ContactPage = () => {
  const [state, handleSubmit] = useForm("mojyddeq");

  if (state.succeeded) {
    return (
      <main className="min-h-screen pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto p-12 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-100"
          >
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Pesan Terkirim!</h2>
            <p className="text-slate-600 mb-8">
              Terima kasih telah menghubungi saya. Saya akan segera membalas pesan Anda melalui email.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all"
            >
              Kirim Pesan Lain
            </button>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white flex items-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
                    <a href={`mailto:${USER_INFO.email}`} className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
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
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={USER_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white border border-slate-100 rounded-2xl text-slate-600 hover:text-blue-600 hover:border-blue-100 hover:shadow-lg transition-all"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href={USER_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white border border-slate-100 rounded-2xl text-slate-600 hover:text-pink-600 hover:border-pink-100 hover:shadow-lg transition-all"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Form (Aligned perfectly) */}
            <div className="bg-slate-50/50 rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="full-name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 ml-1">Nama</label>
                  <input
                    id="full-name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full bg-white rounded-2xl border border-slate-200 px-6 py-4 text-sm font-medium outline-none focus:border-blue-400 transition-all shadow-sm"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-[10px] text-red-500 ml-1" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email-address" className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 ml-1">Email</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-white rounded-2xl border border-slate-200 px-6 py-4 text-sm font-medium outline-none focus:border-blue-400 transition-all shadow-sm"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-[10px] text-red-500 ml-1" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 ml-1">Pesan</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tulis pesan Anda di sini..."
                    rows={6}
                    required
                    className="w-full bg-white resize-none rounded-2xl border border-slate-200 px-6 py-4 text-sm font-medium outline-none focus:border-blue-400 transition-all shadow-sm"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-[10px] text-red-500 ml-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-slate-900 text-white rounded-3xl py-5 font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 group disabled:opacity-50"
                >
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  {state.submitting ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ContactPage;
