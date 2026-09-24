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
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                    isActive
                      ? 'bg-cyan-500 text-dark-950 font-bold shadow-glow-cyan'
                      : 'glass-panel text-neutral-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search tech or project..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-900/80 border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 font-mono"
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
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all group flex flex-col justify-between"
                data-cursor="view"
              >
                <div>
                  {/* Image Container */}
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative bg-dark-900 border border-white/5">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />

                    {/* 3D Inspect Button */}
                    <button
                      onClick={() => setSelected3DProject(project)}
                      className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-950/80 hover:bg-cyan-500 text-neutral-200 hover:text-dark-950 backdrop-blur-md border border-cyan-500/30 text-xs font-mono font-semibold transition-all"
                    >
                      <Box size={13} className="text-cyan-400" />
                      <span>3D Space</span>
                    </button>

                    <div className="absolute bottom-3 left-3">
                      <span className="font-mono text-[11px] text-white bg-dark-950/80 px-2.5 py-1 rounded-full border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Header & Meta */}
                  <div className="flex items-center justify-between font-mono text-xs text-neutral-500 mb-2">
                    <span className="text-cyan-400 font-bold">// {project.id}</span>
                    <span>{project.year}</span>
                  </div>

                  <Link to={`/projects/${project.slug}`}>
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-dark-900 text-[11px] font-mono text-neutral-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 hover:text-white transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight size={15} />
                  </Link>

                  <span className="text-xs font-mono text-neutral-500">
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
