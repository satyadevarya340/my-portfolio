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
      <div className="flex flex-col gap-12 sm:gap-16">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative"
              data-cursor="view"
            >
              {/* Outer ambient glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-3xl pointer-events-none -z-10 bg-lavender-300/30" />

              <div className="pearl-card p-6 sm:p-10 rounded-3xl border border-lavender-200 hover:border-lavender-400 transition-all duration-500 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                {/* Visual Image / Mockup */}
                <div className={`w-full lg:w-7/12 relative overflow-hidden rounded-2xl bg-lavender-100 border border-lavender-200/60 shadow-sm ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent opacity-60" />

                    {/* Floating 3D Launch Action */}
                    <button
                      onClick={() => setSelected3DProject(project)}
                      className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 hover:bg-navy-900 text-navy-900 hover:text-white backdrop-blur-md border border-lavender-300 text-xs font-mono font-semibold transition-all duration-300 shadow-md group/btn"
                    >
                      <Box size={13} className="text-accent-violet group-hover/btn:text-white group-hover/btn:rotate-45 transition-transform" />
                      <span>3D Space View</span>
                    </button>

                    {/* Category pill */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <span className="font-mono text-xs text-navy-900 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-lavender-200 shadow-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Metadata & Narrative */}
                <div className={`w-full lg:w-5/12 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    {/* Index & Year */}
                    <div className="flex items-center justify-between font-mono text-xs text-muted-subtle mb-4">
                      <span className="text-accent-violet font-bold tracking-widest">// PROJECT {project.id}</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Title */}
                    <Link to={`/projects/${project.slug}`} className="group/link block">
                      <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-900 group-hover:text-accent-violet transition-colors mb-3 leading-tight">
                        {project.title}
                      </h3>
                    </Link>

                    {/* Tagline */}
                    <div className="text-xs font-mono text-muted-text mb-4 uppercase tracking-wider font-semibold">
                      {project.tagline}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-text mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-lavender-100/70 border border-lavender-200 text-[11px] font-mono text-navy-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-4 border-t border-lavender-100">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-navy-900 hover:text-accent-violet transition-colors group/cta"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight size={15} className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform text-accent-violet" />
                    </Link>

                    <button
                      onClick={() => setSelected3DProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-text hover:text-accent-violet transition-colors"
                    >
                      <Layers size={13} />
                      <span>Quick Inspect</span>
                    </button>
                  </div>
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
