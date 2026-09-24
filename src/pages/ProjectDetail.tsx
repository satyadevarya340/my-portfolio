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
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-surface-bg">
        <h2 className="text-3xl font-display font-bold text-text-primary mb-4">Project Not Found</h2>
        <p className="text-text-secondary mb-6">The requested case study does not exist in the archives.</p>
        <Link to="/projects">
          <MagneticButton variant="primary">Return to Projects</MagneticButton>
        </Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="w-full pt-32 pb-24 px-6 sm:px-12 bg-surface-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-brand-primary transition-colors mb-8 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>

        {/* Hero Visual & Title */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-brand-soft text-brand-dark font-semibold border border-brand-accent/30">
              PROJECT {project.id}
            </span>
            <span className="font-mono text-xs text-text-secondary">{project.category}</span>
            <span className="font-mono text-xs text-text-muted">•</span>
            <span className="font-mono text-xs text-text-secondary">{project.year}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-text-primary tracking-tight leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary font-sans max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Large Visual Mockup */}
        <div className="w-full aspect-[21/9] min-h-[320px] rounded-3xl overflow-hidden mb-16 border border-surface-border shadow-saas relative">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky Meta Information */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="saas-card p-6 sm:p-8 space-y-6">
              <div>
                <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1">
                  ROLE &amp; FOCUS
                </div>
                <div className="text-sm font-display font-bold text-text-primary">
                  {project.role}
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                  TECHNOLOGY STACK
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-surface-subtle border border-surface-border text-xs font-mono text-brand-dark font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-surface-border space-y-3">
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
          <div className="lg:col-span-8 space-y-14">
            {/* Executive Summary */}
            <section className="saas-card p-8 sm:p-10">
              <div className="font-mono text-xs text-brand-primary font-bold uppercase tracking-widest mb-2">
                01 // EXECUTIVE SUMMARY
              </div>
              <h2 className="text-2xl font-display font-extrabold text-text-primary mb-4">
                Overview
              </h2>
              <p className="text-text-secondary text-base leading-relaxed font-sans">
                {project.caseStudy.overview}
              </p>
            </section>

            {/* Problem & Solution Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="saas-card p-6 sm:p-8 border-red-200 bg-red-50/20">
                <div className="flex items-center gap-2 text-accent-red font-mono text-xs font-bold uppercase tracking-wider mb-3">
                  <AlertCircle size={16} />
                  <span>THE PROBLEM</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed font-sans">
                  {project.caseStudy.problem}
                </p>
              </div>

              <div className="saas-card p-6 sm:p-8 border-emerald-200 bg-emerald-50/20">
                <div className="flex items-center gap-2 text-brand-primary font-mono text-xs font-bold uppercase tracking-wider mb-3">
                  <CheckCircle2 size={16} />
                  <span>THE SOLUTION</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed font-sans">
                  {project.caseStudy.solution}
                </p>
              </div>
            </section>

            {/* Key Features */}
            <section className="saas-card p-8 sm:p-10">
              <div className="font-mono text-xs text-brand-primary font-bold uppercase tracking-widest mb-2">
                02 // CAPABILITIES
              </div>
              <h2 className="text-2xl font-display font-extrabold text-text-primary mb-6">
                Key Features &amp; Implementation
              </h2>
              <div className="space-y-3">
                {project.caseStudy.keyFeatures.map((feat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-surface-subtle flex items-center gap-3 border border-surface-border">
                    <span className="w-2 h-2 rounded-full bg-brand-primary flex-shrink-0" />
                    <span className="text-sm text-text-primary font-sans">{feat}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Architecture Section */}
            <section className="saas-card p-8 sm:p-10 bg-brand-softest border-brand-accent/30">
              <div className="font-mono text-xs text-brand-primary font-bold uppercase tracking-widest mb-2">
                03 // ARCHITECTURE BLUEPRINT
              </div>
              <h2 className="text-2xl font-display font-extrabold text-text-primary mb-3">
                {project.caseStudy.architecture.title}
              </h2>
              <p className="text-sm text-text-secondary mb-6 font-sans leading-relaxed">
                {project.caseStudy.architecture.description}
              </p>
              <ul className="space-y-2.5">
                {project.caseStudy.architecture.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs font-mono text-text-primary">
                    <Cpu size={14} className="text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Engineering Hurdles */}
            <section className="saas-card p-8 sm:p-10">
              <div className="font-mono text-xs text-brand-primary font-bold uppercase tracking-widest mb-2">
                04 // ENGINEERING HURDLES
              </div>
              <h2 className="text-2xl font-display font-extrabold text-text-primary mb-6">
                Challenges Overcome
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.caseStudy.challenges.map((c, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-surface-subtle border border-surface-border">
                    <h4 className="font-display font-bold text-sm text-text-primary mb-2">
                      {c.title}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed font-sans">
                      {c.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Results Benchmarks */}
            <section>
              <div className="font-mono text-xs text-brand-primary font-bold uppercase tracking-widest mb-2">
                05 // QUANTITATIVE IMPACT
              </div>
              <h2 className="text-2xl font-display font-extrabold text-text-primary mb-6">
                Results &amp; Metrics
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.caseStudy.results.map((res, i) => (
                  <div key={i} className="saas-card p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-display font-extrabold text-brand-primary mb-1">
                      {res.metric}
                    </div>
                    <div className="text-xs font-mono text-text-muted">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Bottom Next Project Link */}
        <div className="mt-20 pt-10 border-t border-surface-border flex items-center justify-between">
          <Link
            to="/projects"
            className="text-xs font-mono text-text-secondary hover:text-text-primary transition-colors"
          >
            ← ALL ARCHIVES
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="flex items-center gap-3 text-right group"
          >
            <div>
              <div className="text-[10px] font-mono text-brand-primary uppercase font-bold">NEXT CASE STUDY</div>
              <div className="text-lg font-display font-bold text-text-primary group-hover:text-brand-primary transition-colors">
                {nextProject.title}
              </div>
            </div>
            <ArrowUpRight size={20} className="text-brand-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
