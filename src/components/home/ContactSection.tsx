'use client';

import { USER_INFO } from '@/constants';
import { Linkedin, Instagram, CheckCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mojyddeq");

  if (state.succeeded) {
    return (
      <section id="contact" className="border-t border-slate-100 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 md:p-16 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
              <CheckCircle size={32} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Pesan Terkirim!</h2>
            <p className="text-slate-600 mb-6">Terima kasih, saya akan segera menghubungi Anda kembali.</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
            >
              Kirim Lagi
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="border-t border-slate-100 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-5xl gap-8 rounded-3xl border border-slate-200 bg-white p-8 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Contact</p>
            <h2 className="mt-2 text-xl font-bold text-slate-900 md:text-2xl">Connect Me</h2>
            <p className="mt-3 text-slate-600">
              Some place to connect with me
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <a
                href={USER_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn: {USER_INFO.socialHandles.linkedin}
              </a>
              <a
                href={USER_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-600 transition-colors"
              >
                <Instagram size={18} />
                Instagram: {USER_INFO.socialHandles.instagram}
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-300"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1" />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-300"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                required
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-300"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 disabled:opacity-50"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
