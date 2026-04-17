import { USER_INFO } from '@/constants';

const AboutSection = () => {
  return (
    <section id="about" className="border-t border-slate-100 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 md:p-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">About</p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{USER_INFO.name}</h2>
          <p className="mt-3 text-base text-slate-600 md:text-lg">{USER_INFO.role}</p>

          <div className="mt-8 grid gap-8 md:grid-cols-[2fr_1fr]">
            <p className="leading-relaxed text-slate-600">{USER_INFO.about}</p>
            <div className="space-y-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-900">Quick Info</p>
              <p className="text-sm text-slate-600">{USER_INFO.university}</p>
              <p className="text-sm text-slate-600">{USER_INFO.location}</p>
              <a className="inline-block text-sm font-medium text-blue-600 hover:text-blue-700" href={`mailto:${USER_INFO.email}`}>
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
