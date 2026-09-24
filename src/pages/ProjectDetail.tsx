import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { MagneticButton } from '../components/MagneticButton';
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  CheckCircle2,
  AlertCircle,
  Cpu
} from 'lucide-react';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-display font-bold text-navy-900 mb-4">Project Not Found</h2>
        <p className="text-muted-text mb-6">The requested case study does not exist in the archives.</p>
        <Link to="/projects">
          <MagneticButton variant="primary">Return to Projects</MagneticButton>
        </Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="w-full pt-32 pb-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-subtle hover:text-accent-violet transition-colors mb-8 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>

        {/* Hero Visual & Title */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-lavender-100 text-accent-violet font-semibold border border-lavender-200">
              PROJECT {project.id}
            </span>
            <span className="font-mono text-xs text-muted-text font-semibold">{project.category}</span>
            <span className="font-mono text-xs text-muted-subtle">•</span>
            <span className="font-mono text-xs text-muted-subtle">{project.year}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-text font-sans max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Large Visual Cover */}
        <div className="w-full aspect-[21/9] min-h-[320px] rounded-3xl overflow-hidden mb-16 border border-lavender-200 relative shadow-pearl">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent opacity-60" />
        </div>

        {/* Main Content Layout: Grid with Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky Meta Information */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="pearl-card p-6 sm:p-8 rounded-3xl border border-lavender-300 space-y-6 shadow-pearl">
              <div>
                <div className="text-xs font-mono text-muted-subtle uppercase tracking-wider mb-1">
                  ROLE &amp; FOCUS
                </div>
                <div className="text-sm font-display font-bold text-navy-900">
                  {project.role}
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-muted-subtle uppercase tracking-wider mb-2">
                  TECHNOLOGY STACK
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-lavender-50 border border-lavender-200 text-[11px] font-mono text-navy-900"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-lavender-100 space-y-3">
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

          {/* Right Case Study Deep Dive */}
          <div className="lg:col-span-8 space-y-14">
            {/* Overview */}
            <section>
              <div className="font-mono text-xs text-accent-violet uppercase tracking-widest font-semibold mb-2">
                01 // EXECUTIVE SUMMARY
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mb-4">
                Overview
              </h2>
              <p className="text-muted-text text-base leading-relaxed font-sans">
                {project.caseStudy.overview}
              </p>
            </section>

            {/* Problem & Solution Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="pearl-card p-6 sm:p-8 rounded-3xl border border-red-200 bg-red-50/40">
                <div className="flex items-center gap-2 text-red-600 font-mono text-xs uppercase tracking-wider font-semibold mb-3">
                  <AlertCircle size={15} />
                  <span>THE PROBLEM</span>
                </div>
                <p className="text-sm text-navy-900 leading-relaxed font-sans">
                  {project.caseStudy.problem}
                </p>
              </div>

              <div className="pearl-card p-6 sm:p-8 rounded-3xl border border-emerald-200 bg-emerald-50/40">
                <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs uppercase tracking-wider font-semibold mb-3">
                  <CheckCircle2 size={15} />
                  <span>THE SOLUTION</span>
                </div>
                <p className="text-sm text-navy-900 leading-relaxed font-sans">
                  {project.caseStudy.solution}
                </p>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <div className="font-mono text-xs text-accent-violet uppercase tracking-widest font-semibold mb-2">
                02 // CAPABILITIES
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mb-6">
                Key Features &amp; Implementation
              </h2>
              <div className="space-y-3">
                {project.caseStudy.keyFeatures.map((feat, i) => (
                  <div key={i} className="pearl-card p-4 rounded-2xl flex items-center gap-3 border border-lavender-200">
                    <span className="w-2 h-2 rounded-full bg-accent-violet flex-shrink-0" />
                    <span className="text-sm text-navy-900 font-sans">{feat}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Architecture Section */}
            <section className="pearl-card p-8 sm:p-10 rounded-3xl border border-lavender-300 relative overflow-hidden shadow-pearl">
              <div className="font-mono text-xs text-accent-violet uppercase tracking-widest font-semibold mb-2">
                03 // ARCHITECTURE BLUEPRINT
              </div>
              <h2 className="text-2xl font-display font-bold text-navy-900 mb-3">
                {project.caseStudy.architecture.title}
              </h2>
              <p className="text-sm text-muted-text mb-6 font-sans leading-relaxed">
                {project.caseStudy.architecture.description}
              </p>
              <ul className="space-y-2.5">
                {project.caseStudy.architecture.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs font-mono text-navy-800">
                    <Cpu size={14} className="text-accent-violet mt-0.5 flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges */}
            <section>
              <div className="font-mono text-xs text-accent-violet uppercase tracking-widest font-semibold mb-2">
                04 // ENGINEERING HURDLES
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mb-6">
                Challenges Overcome
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.caseStudy.challenges.map((c, i) => (
                  <div key={i} className="pearl-card p-6 rounded-2xl border border-lavender-200">
                    <h4 className="font-display font-bold text-sm text-navy-900 mb-2">
                      {c.title}
                    </h4>
                    <p className="text-xs text-muted-text leading-relaxed font-sans">
                      {c.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Quantitative Results */}
            <section>
              <div className="font-mono text-xs text-accent-violet uppercase tracking-widest font-semibold mb-2">
                05 // IMPACT
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mb-6">
                Quantitative Results &amp; Benchmarks
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.caseStudy.results.map((res, i) => (
                  <div key={i} className="pearl-card p-6 rounded-2xl border border-lavender-200 text-center">
                    <div className="text-3xl sm:text-4xl font-display font-extrabold text-gradient-violet mb-1">
                      {res.metric}
                    </div>
                    <div className="text-xs font-mono text-muted-text">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Bottom Next Project Link */}
        <div className="mt-20 pt-10 border-t border-lavender-200 flex items-center justify-between">
          <Link
            to="/projects"
            className="text-xs font-mono text-muted-subtle hover:text-navy-900 transition-colors"
          >
            ← ALL ARCHIVES
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="flex items-center gap-3 text-right group"
          >
            <div>
              <div className="text-[10px] font-mono text-accent-violet uppercase font-semibold">NEXT CASE STUDY</div>
              <div className="text-base sm:text-lg font-display font-bold text-navy-900 group-hover:text-accent-violet transition-colors">
                {nextProject.title}
              </div>
            </div>
            <ArrowUpRight size={18} className="text-accent-violet group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
