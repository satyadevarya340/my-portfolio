import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, skillCategories } from '../data/skills';
import {
  Code2,
  Zap,
  Database,
  Layers,
  Radio,
  ShieldCheck,
  Cpu,
  Sparkles,
  Binary,
  Bot,
  Flame,
  Atom,
  FileCode,
  Box,
  Palette,
  Move,
  Container,
  GitBranch,
  Terminal,
  Cloud,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Zap,
  Database,
  Layers,
  Radio,
  ShieldCheck,
  Cpu,
  Sparkles,
  Binary,
  Bot,
  Flame,
  Atom,
  FileCode,
  Box,
  Palette,
  Move,
  Container,
  GitBranch,
  Terminal,
  Cloud
};

export function SkillCloud() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {skillCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                isActive
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-white/80 hover:bg-white text-muted-text hover:text-navy-900 border border-lavender-200 shadow-card'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Interactive Skill Nodes */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className={`pearl-card p-6 rounded-2xl relative overflow-hidden group hover:-translate-y-1 ${
                  skill.highlight ? 'border-lavender-400/50' : 'border-lavender-200/60'
                }`}
              >
                {/* Background ambient corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-lavender-300/15 rounded-full blur-2xl group-hover:bg-accent-magenta/10 transition-all duration-500 pointer-events-none" />

                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-lavender-50 flex items-center justify-center border border-lavender-200 group-hover:border-accent-violet/40 group-hover:bg-white transition-all shadow-sm">
                    <IconComponent size={20} className="text-accent-violet group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-lavender-100/80 text-accent-violet font-semibold border border-lavender-200">
                      {skill.level}
                    </span>
                    <span className="text-[10px] font-mono text-muted-subtle">
                      {skill.years}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-display font-bold text-base text-navy-900 group-hover:text-accent-violet transition-colors">
                    {skill.name}
                  </h4>
                  {skill.highlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" title="Core Strength" />
                  )}
                </div>

                <p className="text-xs text-muted-text leading-relaxed font-sans">
                  {skill.description}
                </p>

                <div className="mt-4 pt-3 border-t border-lavender-100 flex items-center justify-between text-[11px] font-mono text-muted-subtle">
                  <span>DOMAIN</span>
                  <span className="text-navy-900 font-semibold">{skill.category}</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
