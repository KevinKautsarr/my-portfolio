'use client';

import { Send, CheckCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

interface ContactFormProps {
  rows?: number;
}

export const ContactForm = ({ rows = 6 }: ContactFormProps) => {
  const [state, handleSubmit] = useForm('mojyddeq');

  if (state.succeeded) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
        <p className="text-slate-600 mb-6 text-sm">
          Thank you for reaching out. I will get back to you soon via email.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors text-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label
          htmlFor="contact-name"
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 ml-1"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="John Doe"
          required
          className="w-full bg-white rounded-2xl border border-slate-200 px-6 py-4 text-sm font-medium outline-none focus:border-blue-400 transition-all shadow-sm"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="text-[10px] text-red-500 ml-1"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="contact-email"
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 ml-1"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          className="w-full bg-white rounded-2xl border border-slate-200 px-6 py-4 text-sm font-medium outline-none focus:border-blue-400 transition-all shadow-sm"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-[10px] text-red-500 ml-1"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 ml-1"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Write your message here..."
          rows={rows}
          required
          className="w-full bg-white resize-none rounded-2xl border border-slate-200 px-6 py-4 text-sm font-medium outline-none focus:border-blue-400 transition-all shadow-sm"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-[10px] text-red-500 ml-1"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-slate-900 text-white rounded-3xl py-5 font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};
