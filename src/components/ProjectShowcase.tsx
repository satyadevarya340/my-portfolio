import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, Project } from '../data/projects';
import { Project3DModal } from './Project3DModal';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Box, Layers, Sparkles } from 'lucide-react';

export function ProjectShowcase() {
  const [selected3DProject, setSelected3DProject] = useState<Project | null>(null);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-14 sm:gap-20">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="saas-card p-6 sm:p-10 rounded-3xl border border-surface-border flex flex-col lg:flex-row gap-8 lg:gap-12 items-center group"
              data-cursor="view"
            >
              {/* Visual 3D Browser Mockup Frame */}
              <div className={`w-full lg:w-7/12 relative rounded-2xl overflow-hidden bg-brand-darkest border border-surface-border shadow-saas-lg ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                {/* Browser window titlebar */}
                <div className="bg-brand-darker px-4 py-2.5 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-red opacity-80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-amber opacity-80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-accent opacity-80" />
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400">
                    https://{project.slug}.ai/engine
                  </div>
                  <div className="w-8" />
                </div>

                {/* Cover Image with subtle overlay */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkest/70 via-transparent to-transparent" />

                  {/* 3D Inspect Action Button */}
                  <button
                    onClick={() => setSelected3DProject(project)}
                    className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-darkest/90 hover:bg-brand-primary text-white backdrop-blur-md border border-brand-accent/40 text-xs font-mono font-semibold transition-all shadow-sm group/btn"
                  >
                    <Box size={13} className="text-brand-accent group-hover/btn:text-white group-hover/btn:rotate-45 transition-transform" />
                    <span>3D Inspect</span>
                  </button>

                  {/* Category Pill */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="font-mono text-xs text-white bg-brand-darker/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Meta and Story */}
              <div className={`w-full lg:w-5/12 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-text-muted mb-3">
                    <span className="text-brand-primary font-bold tracking-widest">// PROJECT {project.id}</span>
                    <span>{project.year}</span>
                  </div>

                  <Link to={`/projects/${project.slug}`} className="group/link block">
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-text-primary group-hover/link:text-brand-primary transition-colors mb-2 leading-tight">
                      {project.title}
                    </h3>
                  </Link>

                  <div className="text-xs font-mono text-brand-medium font-semibold mb-4 uppercase tracking-wider">
                    {project.tagline}
                  </div>

                  <p className="text-sm text-text-secondary mb-6 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-surface-subtle border border-surface-border text-xs font-mono text-text-primary group-hover:border-brand-accent/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-surface-border">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-primary hover:text-brand-dark transition-colors group/cta"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight size={16} className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                  </Link>

                  <button
                    onClick={() => setSelected3DProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-brand-primary transition-colors"
                  >
                    <Layers size={14} />
                    <span>Quick 3D View</span>
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 3D Viewer Modal */}
      <Project3DModal
        project={selected3DProject}
        onClose={() => setSelected3DProject(null)}
      />
    </div>
  );
}
