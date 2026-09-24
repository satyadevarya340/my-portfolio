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
  ExternalLink,
  Code2,
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

export function Home() {
  return (
    <div className="w-full relative">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 sm:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-6 shadow-glow-cyan"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{personalConfig.status}</span>
            </motion.div>

            {/* Main Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08] mb-6"
            >
              BUILDING DIGITAL <br />
              <span className="text-gradient-cyan">EXPERIENCES</span> WITH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400">
                CODE + AI
              </span>
            </motion.h1>

            {/* Personal Intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-300 max-w-xl mb-8 leading-relaxed font-sans"
            >
              Hi, I'm <span className="text-white font-semibold">{personalConfig.name}</span>. {personalConfig.role}. Engineering high-throughput FastAPI microservices, agentic workflows (LangGraph), and immersive 3D spatial interfaces.
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-12"
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

            {/* Micro Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 font-mono text-xs text-neutral-400"
            >
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-cyan-400" />
                <span>FASTAPI &amp; PYTHON</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu size={14} className="text-purple-400" />
                <span>LANGGRAPH AGENTS</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-emerald-400" />
                <span>THREE.JS / WEBGL</span>
              </div>
            </motion.div>
          </div>

          {/* Right 3D Interactive Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-5 h-[450px] sm:h-[550px] lg:h-[620px] relative w-full"
          >
            <Hero3D />
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 font-mono text-[11px] text-neutral-400">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={14} className="text-cyan-400 animate-bounce" />
        </div>
      </section>

      {/* 2. INFINITE MARQUEE */}
      <Marquee />

      {/* 3. INTRO / STORY & STATS SECTION */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs uppercase tracking-widest mb-4">
                // SYSTEM PHILOSOPHY
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                TURNING COMPLEX ARCHITECTURES INTO HIGH-IMPACT DIGITAL SYSTEMS.
              </h2>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 text-neutral-300 text-base sm:text-lg leading-relaxed">
              <p>
                Modern technology demands more than basic code—it requires thoughtful architecture, sub-millisecond execution, and memorable visual experiences.
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
                className="glass-card p-6 rounded-2xl border border-white/5 relative overflow-hidden group"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-2 text-gradient-cyan group-hover:scale-105 transition-transform duration-300 origin-left">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-neutral-400 font-mono">
                  {stat.subtext}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES / WHAT I BUILD */}
      <section className="py-24 px-6 sm:px-12 bg-dark-900/30 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="CAPABILITIES"
            title="WHAT I BUILD"
            subtitle="From distributed backend microservices to autonomous agentic intelligence and creative 3D web interfaces."
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
                  className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-cyan-500/40"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-neutral-500 font-bold group-hover:text-cyan-400 transition-colors">
                      // {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-dark-900 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/40 group-hover:shadow-glow-cyan transition-all">
                      <Icon size={20} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>

                  <ul className="space-y-2 border-t border-white/5 pt-4">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
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
      <section className="py-28 px-6 sm:px-12 relative">
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
                <ArrowRight size={14} />
              </MagneticButton>
            </Link>
          </div>

          <ProjectShowcase />
        </div>
      </section>

      {/* 6. SKILLS & TECHNICAL STACK */}
      <section className="py-24 px-6 sm:px-12 bg-dark-900/40 border-y border-white/5 relative">
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
      <section className="py-28 px-6 sm:px-12 relative">
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
      <section className="py-28 px-6 sm:px-12 bg-dark-900/30 border-t border-white/5 relative">
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
