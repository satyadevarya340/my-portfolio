import React, { useState, useEffect } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Activity, Compass, Cpu } from 'lucide-react';

export function SystemHUD() {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const mouse = useMousePosition();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.round((window.scrollY / totalScroll) * 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isMobile) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 pointer-events-none flex flex-col gap-2 font-mono text-[10px] text-neutral-400">
      {/* Telemetry card */}
      <div className="glass-panel px-3.5 py-2.5 rounded-xl border border-white/5 flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-cyan-400">
          <Activity size={12} className="animate-pulse" />
          <span>SCROLL {scrollProgress}%</span>
        </div>

        <div className="h-3 w-[1px] bg-white/10" />

        <div className="flex items-center gap-1.5 text-neutral-400">
          <Compass size={12} className="text-purple-400" />
          <span>POS [{mouse.x}, {mouse.y}]</span>
        </div>

        <div className="h-3 w-[1px] bg-white/10" />

        <div className="flex items-center gap-1.5 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>FPS: 60</span>
        </div>
      </div>
    </div>
  );
}
