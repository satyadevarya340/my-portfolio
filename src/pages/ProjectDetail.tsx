import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { MagneticButton } from '../components/MagneticButton';
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  Layers,
  Server,
  ShieldCheck,
  Zap,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Cpu
} from 'lucide-react';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-display font-bold text-white mb-4">Project Not Found</h2>
        <p className="text-neutral-400 mb-6">The requested case study does not exist in the archives.</p>
        <Link to="/projects">
          <MagneticButton variant="primary">Return to Projects</MagneticButton>
        </Link>
      </div>
    );
  }

  // Find next project in sequence
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="w-full pt-32 pb-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-cyan-300 transition-colors mb-8 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>

        {/* Hero Visual & Title */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              PROJECT {project.id}
            </span>
            <span className="font-mono text-xs text-neutral-400">{project.category}</span>
            <span className="font-mono text-xs text-neutral-500">•</span>
            <span className="font-mono text-xs text-neutral-400">{project.year}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-sans max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Large Visual Cover */}
        <div className="w-full aspect-[21/9] min-h-[320px] rounded-3xl overflow-hidden mb-16 border border-white/10 relative">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />
        </div>

        {/* Main Content Layout: Grid with Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky Meta Information */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
                  ROLE &amp; FOCUS
                </div>
                <div className="text-sm font-display font-bold text-white">
                  {project.role}
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                  TECHNOLOGY STACK
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-dark-900 border border-white/5 text-[11px] font-mono text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="block w-full">
                    <MagneticButton variant="primary" className="w-full">
                      <span>LIVE APPLICATION</span>
                      <ArrowUpRight size={14} />
                    </MagneticButton>
                  </a>
                )}

                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="block w-full">
                    <MagneticButton variant="secondary" className="w-full">
                      <Github size={14} />
                      <span>VIEW SOURCE CODE</span>
                    </MagneticButton>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Case Study Deep Dive Narrative */}
          <div className="lg:col-span-8 space-y-16">
            {/* Overview */}
            <section>
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">
                01 // EXECUTIVE SUMMARY
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                Overview
              </h2>
              <p className="text-neutral-300 text-base leading-relaxed font-sans">
                {project.caseStudy.overview}
              </p>
            </section>

            {/* Problem & Solution Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-red-500/20 bg-red-950/5">
                <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase tracking-wider mb-3">
                  <AlertCircle size={16} />
                  <span>THE PROBLEM</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                  {project.caseStudy.problem}
                </p>
              </div>

              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/20 bg-emerald-950/5">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">
                  <CheckCircle2 size={16} />
                  <span>THE SOLUTION</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                  {project.caseStudy.solution}
                </p>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">
                02 // CAPABILITIES
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
                Key Features &amp; Implementation
              </h2>
              <div className="space-y-3">
                {project.caseStudy.keyFeatures.map((feat, i) => (
                  <div key={i} className="glass-panel p-4 rounded-2xl flex items-center gap-3 border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span className="text-sm text-neutral-200 font-sans">{feat}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Architecture Section */}
            <section className="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/20 relative overflow-hidden">
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">
                03 // ARCHITECTURE BLUEPRINT
              </div>
              <h2 className="text-2xl font-display font-bold text-white mb-3">
                {project.caseStudy.architecture.title}
              </h2>
              <p className="text-sm text-neutral-300 mb-6 font-sans leading-relaxed">
                {project.caseStudy.architecture.description}
              </p>
              <ul className="space-y-2.5">
                {project.caseStudy.architecture.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs font-mono text-neutral-300">
                    <Cpu size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges */}
            <section>
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">
                04 // ENGINEERING HURDLES
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
                Challenges Overcome
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.caseStudy.challenges.map((c, i) => (
                  <div key={i} className="glass-card p-6 rounded-2xl border border-white/5">
                    <h4 className="font-display font-bold text-sm text-white mb-2">
                      {c.title}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                      {c.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Quantitative Results */}
            <section>
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">
                05 // IMPACT
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
                Quantitative Results &amp; Benchmarks
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.caseStudy.results.map((res, i) => (
                  <div key={i} className="glass-panel p-6 rounded-2xl border border-white/5 text-center">
                    <div className="text-3xl sm:text-4xl font-display font-extrabold text-gradient-cyan mb-1">
                      {res.metric}
                    </div>
                    <div className="text-xs font-mono text-neutral-400">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Bottom Next Project Link */}
        <div className="mt-24 pt-12 border-t border-white/10 flex items-center justify-between">
          <Link
            to="/projects"
            className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            ← ALL ARCHIVES
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="flex items-center gap-3 text-right group"
          >
            <div>
              <div className="text-[10px] font-mono text-cyan-400 uppercase">NEXT CASE STUDY</div>
              <div className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                {nextProject.title}
              </div>
            </div>
            <ArrowUpRight size={20} className="text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
