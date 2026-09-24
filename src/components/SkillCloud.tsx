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
  Cloud
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

// Colorful badge accent mappings inspired by SaaS dashboards
const categoryBadges: Record<string, { bg: string; text: string; border: string }> = {
  'Backend': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  'AI / GenAI': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  'Frontend': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  'Tools & Cloud': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
};

export function SkillCloud() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {skillCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-brand-primary text-white font-semibold shadow-sm'
                  : 'bg-white text-text-secondary hover:text-text-primary border border-surface-border hover:border-brand-accent/40 shadow-sm'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Clean SaaS Skill Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            const badgeStyle = categoryBadges[skill.category] || {
              bg: 'bg-brand-soft',
              text: 'text-brand-dark',
              border: 'border-brand-accent/30',
            };

            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="saas-card p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-softest flex items-center justify-center border border-brand-accent/20 group-hover:bg-brand-primary group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      <IconComponent size={20} className="text-brand-primary group-hover:text-white transition-colors" />
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${badgeStyle.bg} ${badgeStyle.text} ${badgeStyle.border}`}>
                        {skill.level}
                      </span>
                      <span className="text-[10px] font-mono text-text-muted">
                        {skill.years}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-display font-bold text-base sm:text-lg text-text-primary group-hover:text-brand-primary transition-colors">
                      {skill.name}
                    </h4>
                    {skill.highlight && (
                      <span className="w-2 h-2 rounded-full bg-brand-accent" title="Core Specialization" />
                    )}
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed font-sans mb-4">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-surface-border flex items-center justify-between text-[11px] font-mono text-text-muted">
                  <span>CATEGORY</span>
                  <span className={`font-semibold ${badgeStyle.text}`}>{skill.category}</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
