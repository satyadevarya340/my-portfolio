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
      <div className="flex flex-col gap-16 sm:gap-24">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative"
              data-cursor="view"
            >
              {/* Outer ambient glow based on project accent color */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-700 blur-3xl pointer-events-none -z-10"
                style={{ backgroundColor: project.accentColor }}
              />

              <div className="glass-panel p-6 sm:p-10 lg:p-12 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-500 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                {/* Visual Image / 3D Canvas Box */}
                <div className={`w-full lg:w-7/12 relative overflow-hidden rounded-2xl bg-dark-900 border border-white/10 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent" />

                    {/* Floating 3D Launch Action */}
                    <button
                      onClick={() => setSelected3DProject(project)}
                      className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3.5 py-2 rounded-full bg-dark-950/80 hover:bg-cyan-500 text-neutral-200 hover:text-dark-950 backdrop-blur-md border border-cyan-500/30 text-xs font-mono font-semibold transition-all duration-300 shadow-glass group/btn"
                    >
                      <Box size={14} className="text-cyan-400 group-hover/btn:text-dark-950 group-hover/btn:rotate-45 transition-transform" />
                      <span>3D Space View</span>
                    </button>

                    {/* Category pill */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <span className="font-mono text-xs text-white bg-dark-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Metadata & Narrative */}
                <div className={`w-full lg:w-5/12 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    {/* Index & Year */}
                    <div className="flex items-center justify-between font-mono text-xs text-neutral-500 mb-4">
                      <span className="text-cyan-400 font-bold tracking-widest">// PROJECT {project.id}</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Title */}
                    <Link to={`/projects/${project.slug}`} className="group/link block">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white group-hover/link:text-cyan-300 transition-colors mb-3 leading-tight">
                        {project.title}
                      </h3>
                    </Link>

                    {/* Tagline */}
                    <div className="text-xs font-mono text-cyan-300/90 mb-4 uppercase tracking-wider">
                      {project.tagline}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-dark-900/90 border border-white/5 text-[11px] font-mono text-neutral-300 group-hover:border-cyan-500/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 hover:text-white transition-colors group/cta"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight size={16} className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                    </Link>

                    <button
                      onClick={() => setSelected3DProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-cyan-300 transition-colors"
                    >
                      <Layers size={14} />
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
