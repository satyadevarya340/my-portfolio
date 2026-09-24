import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '../data/projects';
import { SectionHeading } from '../components/SectionHeading';
import { Project3DModal } from '../components/Project3DModal';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Box, Search, Sparkles } from 'lucide-react';

const categories = ['All', 'Backend Systems', 'AI & GenAI', 'Full Stack & 3D', 'Cloud & Automation'];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selected3DProject, setSelected3DProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full pt-32 pb-24 px-6 sm:px-12 bg-surface-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="PORTFOLIO ARCHIVES"
          title="SELECTED WORKS &amp; SYSTEMS"
          subtitle="A curated selection of backend platforms, autonomous AI workflows, and high-performance WebGL digital experiences."
        />

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-primary text-white font-semibold shadow-sm'
                      : 'bg-white text-text-secondary hover:text-text-primary border border-surface-border shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72 relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search tech or project..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-surface-border rounded-full pl-10 pr-4 py-2 text-xs text-text-primary placeholder-text-muted focus:outline-none focus:border-brand-accent font-mono shadow-sm"
            />
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="saas-card p-6 sm:p-8 flex flex-col justify-between group"
                data-cursor="view"
              >
                <div>
                  {/* Browser Mockup Image Frame */}
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative bg-brand-darkest border border-surface-border shadow-sm">
                    {/* Browser window top bar */}
                    <div className="bg-brand-darker px-3 py-2 flex items-center justify-between border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-accent-red opacity-80" />
                        <span className="w-2 h-2 rounded-full bg-accent-amber opacity-80" />
                        <span className="w-2 h-2 rounded-full bg-brand-accent opacity-80" />
                      </div>
                      <div className="text-[10px] font-mono text-neutral-400">
                        {project.slug}.sys
                      </div>
                      <div className="w-6" />
                    </div>

                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />

                    {/* 3D Inspect Button */}
                    <button
                      onClick={() => setSelected3DProject(project)}
                      className="absolute top-10 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-darkest/90 hover:bg-brand-primary text-white backdrop-blur-md border border-brand-accent/40 text-xs font-mono font-semibold transition-all shadow-sm"
                    >
                      <Box size={13} className="text-brand-accent" />
                      <span>3D Space</span>
                    </button>

                    <div className="absolute bottom-3 left-3">
                      <span className="font-mono text-[11px] text-white bg-brand-darker/90 px-2.5 py-1 rounded-full border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Header & Meta */}
                  <div className="flex items-center justify-between font-mono text-xs text-text-muted mb-2">
                    <span className="text-brand-primary font-bold">// {project.id}</span>
                    <span>{project.year}</span>
                  </div>

                  <Link to={`/projects/${project.slug}`}>
                    <h3 className="text-2xl font-display font-bold text-text-primary group-hover:text-brand-primary transition-colors mb-2">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-text-secondary mb-6 leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-surface-subtle border border-surface-border text-xs font-mono text-text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-surface-border">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-primary hover:text-brand-dark transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight size={15} />
                  </Link>

                  <span className="text-xs font-mono text-text-muted">
                    {project.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 3D Inspect Modal */}
        <Project3DModal
          project={selected3DProject}
          onClose={() => setSelected3DProject(null)}
        />
      </div>
    </div>
  );
}
