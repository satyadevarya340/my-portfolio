import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personalConfig } from '../data/config';
import { services } from '../data/services';
import { Hero3D } from '../components/Hero3D';
import { MagneticButton } from '../components/MagneticButton';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { SkillCloud } from '../components/SkillCloud';
import { ProcessSection } from '../components/ProcessSection';
import { Marquee } from '../components/Marquee';
import { ContactForm } from '../components/ContactForm';
import {
  ArrowRight,
  Bot,
  Server,
  Workflow,
  Cloud,
  Database,
  Terminal,
  Sparkles,
  Cpu,
  Layers,
  Container,
} from 'lucide-react';

const serviceIcons: Record<string, React.ElementType> = {
  Bot,
  Server,
  Workflow,
  Sparkles,
  Cloud,
  Database
};

const techStackRow = [
  { name: 'Python', icon: Terminal },
  { name: 'FastAPI', icon: Server },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Docker', icon: Container },
  { name: 'AWS', icon: Cloud },
  { name: 'LLM / RAG', icon: Cpu },
];

export function Home() {
  return (
    <div className="w-full relative">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-36 pb-12 px-6 sm:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto">
          {/* Left Hero Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-lavender-300 text-accent-violet font-mono text-[11px] font-semibold tracking-wider uppercase mb-6 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
              <span>AI &amp; BACKEND DEVELOPER</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-[62px] font-display font-extrabold tracking-tight text-navy-900 leading-[1.08] mb-6"
            >
              BUILDING DIGITAL <br />
              <span className="text-gradient-violet">EXPERIENCES</span> <br />
              WITH CODE + AI
            </motion.h1>

            {/* Short & Clean Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-text max-w-lg mb-9 leading-relaxed font-sans"
            >
              Hi, I'm <span className="text-navy-900 font-semibold">{personalConfig.name}</span>. I build scalable backend systems, AI-powered applications and modern digital experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link to="/projects">
                <MagneticButton variant="primary">
                  <span>Explore My Work</span>
                  <ArrowRight size={14} />
                </MagneticButton>
              </Link>

              <Link to="/contact">
                <MagneticButton variant="secondary">
                  <span>Let's Connect</span>
                </MagneticButton>
              </Link>
            </motion.div>
          </div>

          {/* Right 3D Abstract Geometric Sculpture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-6 h-[380px] sm:h-[480px] lg:h-[540px] relative w-full"
          >
            <Hero3D />
          </motion.div>
        </div>

        {/* Minimal Bottom Technology Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-7xl mx-auto w-full pt-10 mt-6 border-t border-lavender-200/70 flex flex-wrap items-center justify-between gap-6"
        >
          <div className="text-[11px] font-mono text-muted-subtle tracking-wider uppercase font-semibold">
            CORE TECHNOLOGIES
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {techStackRow.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 text-xs font-mono text-muted-text hover:text-navy-900 transition-colors group cursor-default"
                >
                  <Icon size={14} className="text-muted-subtle group-hover:text-accent-violet transition-colors" />
                  <span className="font-medium">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* 2. INFINITE MARQUEE */}
      <Marquee />

      {/* 3. INTRO / STORY & STATS SECTION */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender-100 border border-lavender-300 text-accent-violet font-mono text-[11px] font-semibold uppercase tracking-widest mb-4">
                // SYSTEM PHILOSOPHY
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-navy-900 tracking-tight leading-tight">
                Turning complex architectures into high-impact digital systems.
              </h2>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-5 text-muted-text text-base sm:text-lg leading-relaxed">
              <p>
                Modern technology demands more than basic code—it requires thoughtful architecture, sub-millisecond execution, and memorable visual craftsmanship.
              </p>
              <p>
                From building enterprise Sales Force Automation engines (Pharma SFA) with real-time geo-fencing to orchestrating cyclic multi-agent AI teams with LangGraph, I build systems engineered for scale, reliability, and human intuition.
              </p>
            </div>
          </div>

          {/* Stats Metrics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {personalConfig.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="pearl-card p-6 rounded-2xl border border-lavender-200 relative overflow-hidden group hover:-translate-y-1"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-navy-900 mb-1.5 text-gradient-violet group-hover:scale-105 transition-transform duration-300 origin-left">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-navy-900 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-subtle font-mono">
                  {stat.subtext}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES / WHAT I BUILD */}
      <section className="py-20 px-6 sm:px-12 bg-lavender-100/40 border-y border-lavender-200/60 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="CAPABILITIES"
            title="WHAT I BUILD"
            subtitle="From distributed backend microservices to autonomous agentic intelligence and creative 3D spatial interfaces."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = serviceIcons[service.icon] || Sparkles;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="pearl-card p-8 rounded-3xl border border-lavender-200 relative overflow-hidden group hover:border-accent-violet/50 hover:-translate-y-1 shadow-card"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-muted-subtle font-bold group-hover:text-accent-violet transition-colors">
                      // {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-lavender-50 flex items-center justify-center border border-lavender-200 group-hover:border-accent-violet/40 group-hover:bg-white transition-all shadow-sm">
                      <Icon size={20} className="text-accent-violet group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-navy-900 mb-2.5 group-hover:text-accent-violet transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-muted-text leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>

                  <ul className="space-y-2 border-t border-lavender-100 pt-4">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs font-mono text-navy-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS SHOWCASE */}
      <section className="py-24 px-6 sm:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              badge="SHOWCASE"
              title="SELECTED PROJECTS"
              subtitle="Production systems, autonomous agent workspaces, and experimental WebGL visualizations."
              className="mb-0"
            />
            <Link to="/projects">
              <MagneticButton variant="outline">
                <span>VIEW ALL ARCHIVES</span>
                <ArrowRight size={13} />
              </MagneticButton>
            </Link>
          </div>

          <ProjectShowcase />
        </div>
      </section>

      {/* 6. SKILLS & TECHNICAL STACK */}
      <section className="py-20 px-6 sm:px-12 bg-lavender-100/40 border-y border-lavender-200/60 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="TECH RADAR"
            title="CORE TECHNOLOGIES"
            subtitle="Explore technologies categorized across backend infrastructure, agentic AI, and interactive frontend."
            align="center"
          />

          <SkillCloud />
        </div>
      </section>

      {/* 7. PROCESS WORKFLOW */}
      <section className="py-24 px-6 sm:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="METHODOLOGY"
            title="HOW I DELIVER"
            subtitle="An intentional, phased engineering methodology built for reliability, performance, and long-term maintainability."
          />

          <ProcessSection />
        </div>
      </section>

      {/* 8. CONTACT CTA */}
      <section className="py-24 px-6 sm:px-12 bg-lavender-100/40 border-t border-lavender-200/60 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="COMMUNICATION"
            title="START A PROJECT"
            subtitle="Available for select enterprise backend contracts, AI agent architecture, and creative tech consultation."
          />

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
