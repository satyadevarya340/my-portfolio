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
  CheckCircle2
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
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                isActive
                  ? 'bg-cyan-500 text-dark-950 font-bold shadow-glow-cyan'
                  : 'bg-dark-900/60 hover:bg-dark-800 text-neutral-400 hover:text-white border border-white/5'
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`glass-card p-6 rounded-2xl relative overflow-hidden group hover:translate-y-[-4px] transition-transform ${
                  skill.highlight ? 'border-cyan-500/30' : 'border-white/5'
                }`}
              >
                {/* Background ambient corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all duration-500 pointer-events-none" />

                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-900 flex items-center justify-center border border-white/10 group-hover:border-cyan-400/50 group-hover:shadow-glow-cyan transition-all">
                    <IconComponent size={22} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-dark-900/90 text-cyan-300 border border-cyan-500/20">
                      {skill.level}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500">
                      {skill.years}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h4>
                  {skill.highlight && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400" title="Core Expertise" />
                  )}
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  {skill.description}
                </p>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>CATEGORY</span>
                  <span className="text-neutral-300">{skill.category}</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
