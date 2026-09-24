import React from 'react';
import { Sparkles } from 'lucide-react';

const marqueeItems = [
  'AGENTIC AI WORKFLOWS',
  'HIGH-PERFORMANCE FASTAPI',
  'LANGGRAPH MULTI-AGENTS',
  'SPATIAL 3D WEBGL',
  'POSTGRESQL & POSTGIS',
  'RAG VECTOR SEARCH',
  'DISTRIBUTED MICROSERVICES',
  'DOCKER & CLOUD ARCHITECTURES'
];

export function Marquee() {
  return (
    <div className="w-full py-6 border-y border-lavender-200/60 bg-white/40 backdrop-blur-sm overflow-hidden relative select-none group">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-main to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-main to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 mx-6 font-display font-bold text-xs tracking-widest text-muted-text group-hover:text-navy-900 transition-colors"
          >
            <span>{item}</span>
            <Sparkles size={12} className="text-accent-violet opacity-70" />
          </div>
        ))}
      </div>
    </div>
  );
}
