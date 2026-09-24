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
  'DOCKER & CLOUD'
];

export function Marquee() {
  return (
    <div className="w-full py-8 border-y border-white/5 bg-dark-900/40 backdrop-blur-md overflow-hidden relative select-none group">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 mx-6 font-display font-bold text-sm tracking-widest text-neutral-400 group-hover:text-neutral-200 transition-colors"
          >
            <span>{item}</span>
            <Sparkles size={14} className="text-cyan-400 opacity-60" />
          </div>
        ))}
      </div>
    </div>
  );
}
