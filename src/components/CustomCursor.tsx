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
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      width: 10,
      height: 10,
      backgroundColor: '#8E6BFF',
      boxShadow: '0 0 12px rgba(142, 107, 255, 0.6)',
      transition: { type: 'spring', stiffness: 500, damping: 28, mass: 0.2 },
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: 40,
      height: 40,
      backgroundColor: 'rgba(142, 107, 255, 0.12)',
      border: '1px solid rgba(142, 107, 255, 0.4)',
      boxShadow: '0 0 20px rgba(142, 107, 255, 0.2)',
      transition: { type: 'spring', stiffness: 450, damping: 25, mass: 0.2 },
    },
    view: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      width: 64,
      height: 64,
      backgroundColor: 'rgba(17, 20, 43, 0.92)',
      border: '1px solid rgba(142, 107, 255, 0.4)',
      boxShadow: '0 10px 30px rgba(17, 20, 43, 0.25)',
      color: '#FFFFFF',
      transition: { type: 'spring', stiffness: 400, damping: 24 },
    },
    drag: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      width: 64,
      height: 64,
      backgroundColor: 'rgba(142, 107, 255, 0.9)',
      border: '1px solid #ffffff',
      boxShadow: '0 10px 30px rgba(142, 107, 255, 0.35)',
      color: '#FFFFFF',
      transition: { type: 'spring', stiffness: 400, damping: 24 },
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center font-mono font-bold text-[10px] tracking-wider"
        variants={variants}
        animate={cursorType}
      >
        {cursorText}
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-lavender-400/30"
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          width: 36,
          height: 36,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 22, mass: 0.4 }}
      />
    </>
  );
}
