import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/constants';
import type { Project } from '@/types';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Layout,
  ShoppingCart,
  PlusCircle,
  LayoutDashboard,
} from 'lucide-react';
import { TechIcon } from '@/components/TechIcon';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string }>;
};

const MOCK_FEATURES = [
  { icon: <Layout size={18} />, text: 'Beautiful Design' },
  { icon: <LayoutDashboard size={18} />, text: 'Carousel Gallery' },
  { icon: <ShoppingCart size={18} />, text: 'Add to Cart System' },
  { icon: <PlusCircle size={18} />, text: 'Plus Minus Item on Cart' },
  { icon: <CheckCircle2 size={18} />, text: 'Fully Responsive' },
];

export default async function ProjectDetailPage(props: Props) {
  const [params, searchParams] = await Promise.all([props.params, props.searchParams]);
  const slug = params.slug;
  const from = searchParams.from;
  const project: Project | undefined = PROJECTS.find((p) => p.id === slug);

  const backLink = from === 'home' ? '/#portfolio' : '/portfolio';

  if (!project) {
    notFound();
  }

  const hasTechDetails = project.techDetails && project.techDetails.length > 0;
  const hasFeatures = project.features && project.features.length > 0;

  return (
    <main className="min-h-screen pt-12 pb-20 bg-slate-50/50">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center justify-between text-sm">
          <Link
            href={backLink}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {project.title}
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl font-medium">
            {project.tagline || project.description}
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* LEFT: Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-8">

            {/* Preview Image */}
            <div className="bg-white p-2 rounded-[2rem] border border-slate-100 shadow-sm">
              <div className="aspect-[16/10] relative rounded-[1.5rem] overflow-hidden bg-slate-100 border border-slate-100">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-blue-50 to-slate-100 text-slate-400">
                    <span className="font-medium text-lg">Project Preview Not Available</span>
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-4 mt-4 px-2 pb-2 overflow-x-auto no-scrollbar">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="flex-shrink-0 w-24 h-16 rounded-xl relative overflow-hidden ring-1 ring-slate-200 opacity-70 hover:opacity-100 transition-opacity cursor-pointer bg-slate-100"
                  >
                    {project.image && (
                      <Image src={project.image} alt="Thumbnail preview" fill className="object-cover" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">About Project</h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                <p>{project.fullDescription || project.description}</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Tech Stack</h3>
                  <div className="space-y-4">
                    {hasTechDetails ? (
                      project.techDetails.map((item) => (
                        <div key={item.name} className="flex gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <TechIcon name={item.name} size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">{item.name}</p>
                            <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-700 text-sm font-medium rounded-xl"
                          >
                            <TechIcon name={tech} size={14} />
                            {tech}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8 border-t border-slate-100 pt-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Great Features</h3>
                  <ul className="space-y-4">
                    {hasFeatures ? (
                      project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="text-blue-600 bg-blue-50 p-1.5 rounded-lg mt-0.5">
                            <CheckCircle2 size={14} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">{feature.title}</p>
                            <p className="text-xs text-slate-500 leading-relaxed">{feature.detail}</p>
                          </div>
                        </li>
                      ))
                    ) : (
                      MOCK_FEATURES.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                          <div className="text-blue-600 bg-blue-50 p-1.5 rounded-lg">
                            {feature.icon}
                          </div>
                          {feature.text}
                        </li>
                      ))
                    )}
                  </ul>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 transition-all active:scale-[0.98]"
                >
                  Visit Site
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      ` }} />
    </main>
  );
}
