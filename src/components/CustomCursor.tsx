import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

export function CustomCursor() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'view' | 'drag'>('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isMobile) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select, .interactive');
      const projectCard = target.closest('[data-cursor="view"]');
      const draggable = target.closest('[data-cursor="drag"]');

      if (projectCard) {
        setCursorType('view');
        setCursorText('VIEW');
      } else if (draggable) {
        setCursorType('drag');
        setCursorText('DRAG');
      } else if (interactive) {
        setCursorType('hover');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onElementHover);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onElementHover);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isMobile, isVisible]);

  if (isMobile || !isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      width: 12,
      height: 12,
      backgroundColor: '#00F2FE',
      boxShadow: '0 0 15px rgba(0, 242, 254, 0.8)',
      transition: { type: 'spring', stiffness: 500, damping: 28, mass: 0.2 },
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      width: 48,
      height: 48,
      backgroundColor: 'rgba(0, 242, 254, 0.15)',
      border: '1px solid rgba(0, 242, 254, 0.6)',
      boxShadow: '0 0 25px rgba(0, 242, 254, 0.4)',
      transition: { type: 'spring', stiffness: 450, damping: 25, mass: 0.2 },
    },
    view: {
      x: mousePosition.x - 36,
      y: mousePosition.y - 36,
      width: 72,
      height: 72,
      backgroundColor: 'rgba(0, 242, 254, 0.9)',
      border: '2px solid #ffffff',
      boxShadow: '0 0 35px rgba(0, 242, 254, 0.7)',
      transition: { type: 'spring', stiffness: 400, damping: 24 },
    },
    drag: {
      x: mousePosition.x - 36,
      y: mousePosition.y - 36,
      width: 72,
      height: 72,
      backgroundColor: 'rgba(127, 0, 255, 0.85)',
      border: '2px solid #ffffff',
      boxShadow: '0 0 35px rgba(127, 0, 255, 0.7)',
      transition: { type: 'spring', stiffness: 400, damping: 24 },
    },
  };

  return (
    <>
      {/* Primary Floating Cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center font-mono font-bold text-xs text-dark-950 tracking-wider"
        variants={variants}
        animate={cursorType}
      >
        {cursorText}
      </motion.div>

      {/* Trailing Soft Aura */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-cyan-400/20"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          width: 40,
          height: 40,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.5 }}
      />
    </>
  );
}
