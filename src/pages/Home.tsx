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
  ArrowDown,
  Sparkles,
  Bot,
  Server,
  Workflow,
  Cloud,
  Database,
  Terminal,
  Cpu,
  Layers,
  CheckCircle2
} from 'lucide-react';

const serviceIcons: Record<string, React.ElementType> = {
  Bot,
  Server,
  Workflow,
  Sparkles,
  Cloud,
  Database
};

// Colorful badge/icon style accents for SaaS service cards
const serviceCardAccents: Record<string, { iconBg: string; iconColor: string; borderHover: string }> = {
  'ai-systems': { iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600', borderHover: 'hover:border-emerald-300' },
  'backend-architecture': { iconBg: 'bg-blue-50', iconColor: 'text-blue-600', borderHover: 'hover:border-blue-300' },
  'sales-automation': { iconBg: 'bg-purple-50', iconColor: 'text-purple-600', borderHover: 'hover:border-purple-300' },
  '3d-web': { iconBg: 'bg-teal-50', iconColor: 'text-teal-600', borderHover: 'hover:border-teal-300' },
  'devops-cloud': { iconBg: 'bg-amber-50', iconColor: 'text-amber-600', borderHover: 'hover:border-amber-300' },
  'data-solutions': { iconBg: 'bg-indigo-50', iconColor: 'text-indigo-600', borderHover: 'hover:border-indigo-300' },
};

export function Home() {
  return (
    <div className="w-full relative">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (DARK FUTURISTIC 3D WITH CENTERED 3D OBJECT)              */}
      {/* ========================================================================= */}
      <section className="relative min-h-screen flex flex-col items-center justify-between pt-28 pb-16 px-6 sm:px-12 bg-brand-darker text-white overflow-hidden">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 bg-hero-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />

        {/* Ambient Top Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center z-10 my-auto">
          {/* Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-darkest/90 border border-brand-accent/30 text-brand-light font-mono text-xs mb-6 shadow-glow-green"
          >
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span>{personalConfig.status}</span>
          </motion.div>

          {/* Bold Centered Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl"
          >
            BUILDING DIGITAL <br />
            <span className="text-gradient-cyan-blue">EXPERIENCES</span> WITH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400">
              CODE + AI
            </span>
          </motion.h1>

          {/* ===================================================================== */}
          {/* CENTRAL 3D CORE (POSITIONED IN CENTER AS REQUESTED IN DOC.MD)         */}
          {/* ===================================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="w-full h-[360px] sm:h-[460px] lg:h-[520px] relative my-[-20px] sm:my-[-30px] z-0"
          >
            <Hero3D />
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm sm:text-base lg:text-lg text-brand-soft/90 max-w-2xl mx-auto leading-relaxed font-sans mb-8 z-10"
          >
            Hi, I'm <span className="text-white font-semibold">{personalConfig.name}</span>. {personalConfig.role}. Specializing in high-throughput FastAPI backends, LangGraph multi-agent architectures, and spatial 3D WebGL interfaces.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10 z-10"
          >
            <Link to="/projects">
              <MagneticButton variant="primary">
                <span>EXPLORE MY WORK</span>
                <ArrowRight size={16} />
              </MagneticButton>
            </Link>

            <Link to="/contact">
              <MagneticButton variant="secondary">
                <span>LET'S CONNECT</span>
              </MagneticButton>
            </Link>
          </motion.div>

          {/* Technical Metadata HUD */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/10 font-mono text-xs text-brand-soft/70 z-10"
          >
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-brand-accent" />
              <span>FASTAPI &amp; PYTHON</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu size={14} className="text-accent-blue" />
              <span>LANGGRAPH MULTI-AGENTS</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-accent-purple" />
              <span>THREE.JS / WEBGL</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:flex flex-col items-center gap-1.5 font-mono text-[11px] text-brand-soft/60 mt-4">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={14} className="text-brand-accent animate-bounce" />
        </div>
      </section>

      {/* 2. INFINITE MARQUEE */}
      <Marquee />

      {/* ========================================================================= */}
      {/* 3. INTRO / STORY & STATS SECTION (LIGHT PREMIUM SAAS SURFACES)            */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 bg-surface-bg border-b border-surface-border relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft border border-brand-accent/25 text-brand-dark font-mono text-xs uppercase tracking-widest mb-4 font-semibold">
                // SYSTEM PHILOSOPHY
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-tight leading-tight">
                TURNING IDEAS INTO DIGITAL SYSTEMS.
              </h2>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-5 text-text-secondary text-base sm:text-lg leading-relaxed">
              <p>
                I build backend systems, AI-powered applications, and interactive digital experiences. Modern software engineering demands more than boilerplate code—it requires rock-solid data integrity, sub-millisecond execution, and intuitive interfaces.
              </p>
              <p>
                From architecting enterprise Sales Force Automation systems (Pharma SFA) with real-time geo-fenced doctor visit verification to coordinating autonomous AI agent teams with LangGraph and vector search (Qdrant), I build production systems engineered for scale and human impact.
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
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="saas-card p-6 flex flex-col justify-between group"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-brand-primary mb-2 group-hover:scale-105 transition-transform duration-200 origin-left">
                  {stat.value}
                </div>
                <div>
                  <div className="text-sm font-bold text-text-primary mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-text-muted font-mono">
                    {stat.subtext}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SERVICES / WHAT I BUILD (CLEAN SAAS CARDS WITH COLORFUL ACCENTS)        */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 bg-white border-b border-surface-border relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="CAPABILITIES"
            title="WHAT I BUILD"
            subtitle="From high-throughput FastAPI backend architectures to autonomous AI agents and interactive 3D web portals."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = serviceIcons[service.icon] || Sparkles;
              const accent = serviceCardAccents[service.id] || {
                iconBg: 'bg-brand-softest',
                iconColor: 'text-brand-primary',
                borderHover: 'hover:border-brand-accent',
              };

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`saas-card p-8 flex flex-col justify-between group ${accent.borderHover}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-text-muted font-bold group-hover:text-brand-primary transition-colors">
                        // {service.number}
                      </span>
                      <div className={`w-12 h-12 rounded-xl ${accent.iconBg} flex items-center justify-center border border-surface-border group-hover:scale-105 transition-all`}>
                        <Icon size={22} className={accent.iconColor} />
                      </div>
                    </div>

                    <h3 className="text-xl font-display font-bold text-text-primary mb-3 group-hover:text-brand-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6 font-sans">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2 border-t border-surface-border pt-4">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs font-mono text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
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

      {/* ========================================================================= */}
      {/* 5. FEATURED PROJECTS SHOWCASE (SAAS BROWSER MOCKUPS & 3D INSPECT)          */}
      {/* ========================================================================= */}
      <section className="py-28 px-6 sm:px-12 bg-surface-bg border-b border-surface-border relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              badge="SHOWCASE"
              title="SELECTED PROJECTS"
              subtitle="Production systems, autonomous AI workspaces, and experimental WebGL visualizations."
              className="mb-0"
            />
            <Link to="/projects">
              <MagneticButton variant="secondary">
                <span>VIEW ALL ARCHIVES</span>
                <ArrowRight size={14} />
              </MagneticButton>
            </Link>
          </div>

          <ProjectShowcase />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SKILLS & TECHNICAL RADAR (SAAS DASHBOARD METRICS)                      */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 bg-white border-b border-surface-border relative">
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

      {/* ========================================================================= */}
      {/* 7. METHODOLOGY / 5-STAGE PROCESS WORKFLOW                                 */}
      {/* ========================================================================= */}
      <section className="py-28 px-6 sm:px-12 bg-surface-bg border-b border-surface-border relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="METHODOLOGY"
            title="HOW I DELIVER"
            subtitle="An intentional, phased engineering methodology built for reliability, performance, and long-term maintainability."
          />

          <ProcessSection />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CONTACT SECTION (DARK / DEEP GREEN TRANSMISSION HUB)                   */}
      {/* ========================================================================= */}
      <section className="py-28 px-6 sm:px-12 bg-brand-darker text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading
            badge="COMMUNICATION"
            title="START A CONVERSATION"
            subtitle="Available for select enterprise backend contracts, AI agent architecture, and creative tech consultation."
            theme="dark"
          />

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
