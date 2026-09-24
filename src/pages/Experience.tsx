import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { SectionHeading } from '../components/SectionHeading';
import { MagneticButton } from '../components/MagneticButton';
import { Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
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

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="pearl-card p-8 sm:p-10 rounded-3xl border border-lavender-200 hover:border-accent-violet/40 transition-all relative overflow-hidden shadow-card"
            >
              {exp.current && (
                <div className="absolute top-0 right-0 bg-emerald-50 text-emerald-800 px-5 py-1.5 rounded-bl-2xl font-mono text-[11px] font-bold flex items-center gap-1.5 border-b border-l border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>PRESENT POSITION</span>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-subtle mb-4">
                <span className="px-3 py-1 rounded-full bg-lavender-100 text-accent-violet font-semibold border border-lavender-200 flex items-center gap-1.5">
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </span>
                <span className="flex items-center gap-1.5 text-navy-800">
                  <MapPin size={13} />
                  <span>{exp.location}</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-lavender-50 border border-lavender-200 text-navy-800 font-semibold">
                  {exp.type}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mb-1">
                {exp.role}
              </h2>

              <div className="text-base font-semibold text-accent-violet mb-4">
                {exp.company}
              </div>

              <p className="text-sm sm:text-base text-muted-text mb-6 font-sans leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <div className="text-xs font-mono text-muted-subtle uppercase tracking-wider mb-3 font-semibold">
                  Key Deliverables &amp; Impact
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-800">
                      <CheckCircle2 size={15} className="text-accent-violet mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies used */}
              <div className="pt-5 border-t border-lavender-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-lavender-50 text-xs font-mono text-navy-900 border border-lavender-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.metrics && (
                  <div className="text-xs font-mono text-accent-violet font-bold">
                    ★ {exp.metrics}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 pearl-card p-8 sm:p-12 rounded-3xl border border-lavender-300 text-center flex flex-col items-center shadow-pearl">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mb-3">
            Interested in collaborating on your next technology stack?
          </h3>
          <p className="text-sm text-muted-text max-w-xl mb-6 font-sans">
            Whether you need a robust FastAPI backend microservice, agentic AI architecture, or spatial 3D web application.
          </p>
          <Link to="/contact">
            <MagneticButton variant="primary">
              <span>GET IN TOUCH</span>
              <ArrowRight size={13} />
            </MagneticButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
