import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '../data/projects';
import { SectionHeading } from '../components/SectionHeading';
import { Project3DModal } from '../components/Project3DModal';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Box, Search } from 'lucide-react';

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
    <div className="w-full pt-32 pb-24 px-6 sm:px-12">
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
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'bg-white text-muted-text hover:text-navy-900 border border-lavender-200 shadow-card'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-subtle" />
            <input
              type="text"
              placeholder="Search tech or project..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-lavender-200 rounded-full pl-10 pr-4 py-2 text-xs text-navy-900 placeholder-muted-subtle focus:outline-none focus:border-accent-violet font-mono shadow-card"
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
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="pearl-card p-6 sm:p-8 rounded-3xl border border-lavender-200 hover:border-accent-violet/40 transition-all group flex flex-col justify-between shadow-card"
                data-cursor="view"
              >
                <div>
                  {/* Image Container */}
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative bg-lavender-100 border border-lavender-200">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent opacity-60" />

                    {/* 3D Inspect Button */}
                    <button
                      onClick={() => setSelected3DProject(project)}
                      className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-navy-900 text-navy-900 hover:text-white backdrop-blur-md border border-lavender-300 text-xs font-mono font-semibold transition-all shadow-sm"
                    >
                      <Box size={13} className="text-accent-violet" />
                      <span>3D Space</span>
                    </button>

                    <div className="absolute bottom-3 left-3">
                      <span className="font-mono text-[11px] text-navy-900 bg-white/95 px-2.5 py-1 rounded-full border border-lavender-200 shadow-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Header & Meta */}
                  <div className="flex items-center justify-between font-mono text-xs text-muted-subtle mb-2">
                    <span className="text-accent-violet font-bold">// {project.id}</span>
                    <span>{project.year}</span>
                  </div>

                  <Link to={`/projects/${project.slug}`}>
                    <h3 className="text-2xl font-display font-bold text-navy-900 group-hover:text-accent-violet transition-colors mb-2">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-muted-text mb-6 leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-lavender-50 text-[11px] font-mono text-navy-800 border border-lavender-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-lavender-100">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-navy-900 hover:text-accent-violet transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight size={14} className="text-accent-violet" />
                  </Link>

                  <span className="text-xs font-mono text-muted-subtle">
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
