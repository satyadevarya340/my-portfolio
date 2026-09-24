import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className = '',
}: SectionHeadingProps) {
  const alignmentClass =
    align === 'center'
      ? 'items-center text-center'
      : align === 'right'
      ? 'items-end text-right'
      : 'items-start text-left';

  const isDark = theme === 'dark';

  return (
    <div className={`flex flex-col ${alignmentClass} mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs uppercase tracking-widest mb-4 font-semibold ${
            isDark
              ? 'bg-brand-darkest/90 border border-brand-accent/30 text-brand-light'
              : 'bg-brand-soft border border-brand-accent/25 text-brand-dark'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight max-w-3xl ${
          isDark ? 'text-white' : 'text-text-primary'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-base sm:text-lg max-w-2xl mt-4 leading-relaxed font-normal ${
            isDark ? 'text-neutral-300' : 'text-text-secondary'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
