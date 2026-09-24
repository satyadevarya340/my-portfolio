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
    <div className="w-full pt-32 pb-24 px-6 sm:px-12 bg-surface-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Top Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-soft border border-brand-accent/30 text-brand-dark font-mono text-xs uppercase tracking-widest mb-6 font-semibold">
              // PROFILE &amp; PHILOSOPHY
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-text-primary tracking-tight leading-tight mb-6">
              Engineering with discipline, innovating with <span className="text-gradient-green">Code + AI</span>.
            </h1>

            <div className="space-y-4 text-base text-text-secondary leading-relaxed font-sans mb-8">
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

          {/* Right SaaS Identity Matrix Card */}
          <div className="lg:col-span-5">
            <div className="saas-card p-8 sm:p-10 border border-surface-border">
              <div className="flex items-center justify-between border-b border-surface-border pb-4 mb-6 font-mono text-xs text-text-muted">
                <span className="text-brand-primary font-bold">// CORE IDENTITY MATRIX</span>
                <span className="text-brand-accent font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                  STATUS: ONLINE
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono text-text-muted uppercase">Primary Specialization</div>
                  <div className="text-lg font-display font-bold text-text-primary mt-1">
                    {personalConfig.role}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-text-muted uppercase">Location &amp; Work Model</div>
                  <div className="text-sm font-semibold text-text-secondary mt-1">
                    {personalConfig.location} — Open to Remote &amp; Selected Hybrid Contracts
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-text-muted uppercase mb-3">Core Engineering Vectors</div>
                  <ul className="space-y-2">
                    {personalConfig.focusAreas.map((area) => (
                      <li key={area} className="flex items-center gap-2 text-xs font-mono text-text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
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
            subtitle="The fundamental guidelines that shape every backend microservice and interactive application I construct."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalConfig.philosophy.map((item, idx) => (
              <div
                key={item.title}
                className="saas-card p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="text-xs font-mono text-brand-primary font-bold mb-4">
                    RULE // 0{idx + 1}
                  </div>
                  <h3 className="text-xl font-display font-bold text-text-primary mb-3 group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Career & Education Journey */}
        <div>
          <SectionHeading
            badge="JOURNEY"
            title="EXPERIENCE &amp; EDUCATION"
            subtitle="Chronological milestones tracking development experience, education, and current projects."
          />

          <div className="relative border-l border-brand-accent/30 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Green Timeline node */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-2 w-6 h-6 rounded-full bg-white border-2 border-brand-primary flex items-center justify-center shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-brand-primary" />
                </div>

                <div className="saas-card p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-brand-soft text-brand-dark font-semibold border border-brand-accent/30">
                      {exp.period}
                    </span>
                    <span className="text-xs font-mono text-text-muted">
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-text-primary mb-0.5">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-brand-primary mb-4">
                    {exp.company}
                  </div>

                  <p className="text-xs sm:text-sm text-text-secondary mb-4 leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 mb-6">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                        <span className="text-brand-accent font-bold mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-surface-border">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-surface-subtle border border-surface-border text-xs font-mono text-text-primary"
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
