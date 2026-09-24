import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { SectionHeading } from '../components/SectionHeading';
import { MagneticButton } from '../components/MagneticButton';
import { personalConfig } from '../data/config';
import { Briefcase, Calendar, MapPin, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Experience() {
  return (
    <div className="w-full pt-32 pb-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="CAREER MILESTONES"
          title="PROFESSIONAL EXPERIENCE &amp; IMPACT"
          subtitle="A detailed breakdown of engineering roles, backend microservice contributions, and technology deliverables."
        />

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all relative overflow-hidden"
            >
              {exp.current && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-500/20 to-transparent px-6 py-2 rounded-bl-2xl font-mono text-[11px] text-emerald-400 font-bold flex items-center gap-1.5 border-b border-l border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>PRESENT POSITION</span>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center gap-1.5">
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  <span>{exp.location}</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-dark-900 border border-white/5 text-neutral-300">
                  {exp.type}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
                {exp.role}
              </h2>

              <div className="text-base font-semibold text-cyan-400 mb-4">
                {exp.company}
              </div>

              <p className="text-sm sm:text-base text-neutral-300 mb-6 font-sans leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                  Key Deliverables &amp; Impact
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies used */}
              <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-dark-900 text-xs font-mono text-neutral-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.metrics && (
                  <div className="text-xs font-mono text-cyan-300 font-semibold">
                    ★ {exp.metrics}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-20 glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/20 text-center flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
            Interested in collaborating on your next technology stack?
          </h3>
          <p className="text-sm text-neutral-400 max-w-xl mb-6 font-sans">
            Whether you need a robust FastAPI backend microservice, agentic AI architecture, or full-stack delivery.
          </p>
          <Link to="/contact">
            <MagneticButton variant="primary">
              <span>GET IN TOUCH</span>
              <ArrowRight size={14} />
            </MagneticButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
