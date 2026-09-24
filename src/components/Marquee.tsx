import React from 'react';
import { Sparkles } from 'lucide-react';

const marqueeItems = [
  'AGENTIC AI WORKFLOWS',
  'HIGH-PERFORMANCE FASTAPI',
  'LANGGRAPH MULTI-AGENTS',
  '3D WEBGL EXPERIENCES',
  'POSTGRESQL & POSTGIS',
  'RAG VECTOR SEARCH',
  'DISTRIBUTED MICROSERVICES',
  'DOCKER & CLOUD ARCHITECTURE'
];

export function Marquee() {
  return (
    <div className="w-full py-6 bg-brand-darker border-y border-brand-accent/20 overflow-hidden relative select-none group">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-darkest to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-darkest to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 mx-6 font-display font-bold text-xs sm:text-sm tracking-widest text-brand-soft/90 group-hover:text-white transition-colors"
          >
            <span>{item}</span>
            <Sparkles size={14} className="text-brand-accent opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );
}
