import React from 'react';
import { motion } from 'framer-motion';
import { personalConfig } from '../data/config';
import { experiences } from '../data/experience';
import { SectionHeading } from '../components/SectionHeading';
import { MagneticButton } from '../components/MagneticButton';
import {
  FileText,
  Download,
  Calendar,
  MapPin,
  CheckCircle2,
  Cpu,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="w-full pt-32 pb-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Hero Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lavender-100 border border-lavender-300 text-accent-violet font-mono text-[11px] font-semibold uppercase tracking-widest mb-6">
              // PROFILE &amp; PHILOSOPHY
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
              Engineering with discipline, innovating with <span className="text-gradient-violet">AI + 3D</span>.
            </h1>

            <div className="space-y-4 text-base text-muted-text leading-relaxed font-sans mb-8">
              {personalConfig.extendedBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Resume CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a href={personalConfig.resumeUrl} target="_blank" rel="noreferrer">
                <MagneticButton variant="primary">
                  <FileText size={15} />
                  <span>VIEW RESUME</span>
                </MagneticButton>
              </a>

              <a href={personalConfig.resumeUrl} download>
                <MagneticButton variant="secondary">
                  <Download size={15} />
                  <span>DOWNLOAD PDF</span>
                </MagneticButton>
              </a>
            </div>
          </div>

          {/* Right Visual Bio Card */}
          <div className="lg:col-span-6">
            <div className="pearl-card p-8 sm:p-10 rounded-3xl border border-lavender-300 relative overflow-hidden shadow-pearl">
              <div className="flex items-center justify-between border-b border-lavender-200 pb-4 mb-6 font-mono text-xs text-muted-subtle">
                <span className="text-accent-violet font-semibold">// CORE IDENTITY MATRIX</span>
                <span className="text-emerald-700 font-semibold">STATUS: ONLINE</span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono text-muted-subtle uppercase">Primary Focus</div>
                  <div className="text-lg font-display font-bold text-navy-900 mt-1">
                    {personalConfig.role}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-muted-subtle uppercase">Location &amp; Work Model</div>
                  <div className="text-sm font-semibold text-navy-800 mt-1">
                    {personalConfig.location} — Open to Remote &amp; Selected Hybrid Contracts
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-muted-subtle uppercase mb-3">Core Focus Vectors</div>
                  <ul className="space-y-2">
                    {personalConfig.focusAreas.map((area) => (
                      <li key={area} className="flex items-center gap-2 text-xs font-mono text-navy-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
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
        <div className="mb-24">
          <SectionHeading
            badge="PRINCIPLES"
            title="ENGINEERING PRINCIPLES"
            subtitle="The fundamental laws that shape every backend microservice and interactive application I construct."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalConfig.philosophy.map((item, idx) => (
              <div
                key={item.title}
                className="pearl-card p-8 rounded-3xl border border-lavender-200 relative overflow-hidden group hover:border-accent-violet/40 hover:-translate-y-1 shadow-card"
              >
                <div className="text-xs font-mono text-accent-violet font-bold mb-4">
                  RULE // 0{idx + 1}
                </div>
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2.5 group-hover:text-accent-violet transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-sans">
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

          <div className="relative border-l border-lavender-300 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12">
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
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-accent-violet flex items-center justify-center shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-accent-violet" />
                </div>

                <div className="pearl-card p-6 sm:p-8 rounded-2xl border border-lavender-200 group-hover:border-accent-violet/40 shadow-card">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-lavender-100 text-accent-violet font-semibold border border-lavender-200">
                      {exp.period}
                    </span>
                    <span className="text-xs font-mono text-muted-subtle">
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-navy-900 mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-accent-violet mb-4">
                    {exp.company}
                  </div>

                  <p className="text-xs sm:text-sm text-muted-text mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 mb-6">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-xs text-muted-text flex items-start gap-2">
                        <span className="text-accent-violet mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-lavender-100">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-lavender-50 text-[11px] font-mono text-navy-800 border border-lavender-200"
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
