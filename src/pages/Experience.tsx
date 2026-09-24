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
    <div className="w-full pt-32 pb-24 px-6 sm:px-12 bg-surface-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="CAREER MILESTONES"
          title="PROFESSIONAL EXPERIENCE &amp; IMPACT"
          subtitle="A detailed breakdown of engineering roles, backend microservice contributions, and technology deliverables."
        />

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="saas-card p-8 sm:p-10 relative overflow-hidden group"
            >
              {exp.current && (
                <div className="absolute top-0 right-0 bg-brand-soft px-5 py-1.5 rounded-bl-2xl font-mono text-[11px] text-brand-dark font-bold flex items-center gap-1.5 border-b border-l border-brand-accent/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                  <span>PRESENT POSITION</span>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-text-muted mb-4">
                <span className="px-3 py-1 rounded-full bg-brand-soft text-brand-dark font-semibold border border-brand-accent/30 flex items-center gap-1.5">
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </span>
                <span className="flex items-center gap-1.5 text-text-secondary">
                  <MapPin size={13} />
                  <span>{exp.location}</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-surface-subtle border border-surface-border text-text-primary font-medium">
                  {exp.type}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-bold text-text-primary mb-1">
                {exp.role}
              </h2>

              <div className="text-base font-semibold text-brand-primary mb-4">
                {exp.company}
              </div>

              <p className="text-sm sm:text-base text-text-secondary mb-6 font-sans leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">
                  Key Deliverables &amp; Impact
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                      <CheckCircle2 size={16} className="text-brand-primary mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-6 border-t border-surface-border flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-surface-subtle border border-surface-border text-xs font-mono text-text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.metrics && (
                  <div className="text-xs font-mono text-brand-dark font-bold bg-brand-soft px-3 py-1 rounded-full border border-brand-accent/20">
                    ★ {exp.metrics}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 saas-card p-8 sm:p-12 text-center flex flex-col items-center bg-brand-softest border-brand-accent/30">
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-text-primary mb-3">
            Interested in collaborating on your next technology stack?
          </h3>
          <p className="text-sm text-text-secondary max-w-xl mb-6 font-sans">
            Whether you need a robust FastAPI backend microservice, autonomous AI agents, or full-stack web platforms.
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
