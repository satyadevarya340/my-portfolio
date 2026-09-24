import React from 'react';
import { motion } from 'framer-motion';
import { personalConfig } from '../data/config';
import { experiences } from '../data/experience';
import { SectionHeading } from '../components/SectionHeading';
import { MagneticButton } from '../components/MagneticButton';
import {
  FileText,
  Download,
  Terminal,
  Cpu,
  Sparkles,
  Award,
  CheckCircle2,
  ArrowRight,
  Code2,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="w-full pt-32 pb-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Hero Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs uppercase tracking-widest mb-6">
              // PROFILE &amp; PHILOSOPHY
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
              Engineering with discipline, innovating with <span className="text-gradient-cyan">AI + 3D</span>.
            </h1>

            <div className="space-y-4 text-base text-neutral-300 leading-relaxed font-sans mb-8">
              {personalConfig.extendedBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Resume CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a href={personalConfig.resumeUrl} target="_blank" rel="noreferrer">
                <MagneticButton variant="primary">
                  <FileText size={16} />
                  <span>VIEW RESUME</span>
                </MagneticButton>
              </a>

              <a href={personalConfig.resumeUrl} download>
                <MagneticButton variant="secondary">
                  <Download size={16} />
                  <span>DOWNLOAD PDF</span>
                </MagneticButton>
              </a>
            </div>
          </div>

          {/* Right Visual Bio Card */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/20 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 font-mono text-xs text-neutral-400">
                <span className="text-cyan-400">// CORE IDENTITY MATRIX</span>
                <span>STATUS: ONLINE</span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">Primary Focus</div>
                  <div className="text-lg font-display font-bold text-white mt-1">
                    {personalConfig.role}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">Location &amp; Work Model</div>
                  <div className="text-sm font-semibold text-neutral-200 mt-1">
                    {personalConfig.location} — Open to Remote &amp; Selected Hybrid Contracts
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase mb-3">Core Focus Vectors</div>
                  <ul className="space-y-2">
                    {personalConfig.focusAreas.map((area) => (
                      <li key={area} className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Philosophy */}
        <div className="mb-28">
          <SectionHeading
            badge="PRINCIPLES"
            title="ENGINEERING PRINCIPLES"
            subtitle="The fundamental laws that shape every backend microservice and interactive application I construct."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalConfig.philosophy.map((item, idx) => (
              <div
                key={item.title}
                className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-cyan-500/30"
              >
                <div className="text-xs font-mono text-cyan-400 font-bold mb-4">
                  RULE // 0{idx + 1}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Career & Education Journey Timeline */}
        <div>
          <SectionHeading
            badge="JOURNEY"
            title="EXPERIENCE &amp; EDUCATION"
            subtitle="Chronological milestones tracking development experience, education, and current projects."
          />

          <div className="relative border-l border-white/10 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-dark-950 border-2 border-cyan-400 flex items-center justify-center shadow-glow-cyan">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 group-hover:border-cyan-500/30">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {exp.period}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-cyan-400/90 mb-4">
                    {exp.company}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 mb-6">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-xs text-neutral-400 flex items-start gap-2">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-dark-900 text-[11px] font-mono text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
