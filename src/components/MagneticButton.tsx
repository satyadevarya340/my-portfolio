import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
}

export function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  variant = 'primary',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) * 0.35;
    const deltaY = (clientY - centerY) * 0.35;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-cyan-400 to-blue-500 text-dark-950 font-semibold shadow-glow-cyan hover:shadow-cyan-400/50',
    secondary:
      'bg-dark-900/80 hover:bg-dark-800 text-neutral-200 border border-white/10 hover:border-cyan-500/40 hover:text-white',
    outline:
      'bg-transparent text-cyan-400 border border-cyan-400/40 hover:bg-cyan-500/10 hover:border-cyan-400',
    glass:
      'glass-panel text-neutral-200 hover:text-white hover:border-cyan-400/40',
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 20, mass: 0.1 }}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer select-none ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
