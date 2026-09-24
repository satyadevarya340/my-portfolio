import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { SkillCloud } from '../components/SkillCloud';
import { Cpu, Server, Sparkles } from 'lucide-react';

export function Skills() {
  return (
    <div className="w-full pt-32 pb-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="TECHNICAL MATRIX"
          title="ENGINEERING CAPABILITIES &amp; STACK"
          subtitle="Explore the technologies, frameworks, and architecture paradigms utilized across backend services, AI agents, and 3D web applications."
        />

        {/* Deep Domain Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="pearl-card p-6 sm:p-8 rounded-3xl border border-lavender-200 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-lavender-100 flex items-center justify-center border border-lavender-200 mb-4 text-accent-violet">
              <Server size={22} />
            </div>
            <h3 className="font-display font-bold text-xl text-navy-900 mb-2">
              Distributed Backend Core
            </h3>
            <p className="text-xs text-muted-text leading-relaxed font-sans mb-4">
              High-concurrency Python &amp; FastAPI systems, Pydantic v2 data validation, connection pooling with AsyncPG, and PostGIS spatial queries.
            </p>
            <div className="text-[11px] font-mono text-accent-violet font-semibold">
              FOCUS: &lt;2ms Latency &amp; Zero Downtime
            </div>
          </div>

          <div className="pearl-card p-6 sm:p-8 rounded-3xl border border-lavender-200 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-lavender-100 flex items-center justify-center border border-lavender-200 mb-4 text-accent-magenta">
              <Cpu size={22} />
            </div>
            <h3 className="font-display font-bold text-xl text-navy-900 mb-2">
              Autonomous AI &amp; LangGraph
            </h3>
            <p className="text-xs text-muted-text leading-relaxed font-sans mb-4">
              Multi-agent stateful graph execution, self-correcting reasoning loops, RAG vector store indexing (Qdrant), and custom tool execution sandboxes.
            </p>
            <div className="text-[11px] font-mono text-accent-magenta font-semibold">
              FOCUS: Deterministic Reasoning &amp; Cost-efficiency
            </div>
          </div>

          <div className="pearl-card p-6 sm:p-8 rounded-3xl border border-lavender-200 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-lavender-100 flex items-center justify-center border border-lavender-200 mb-4 text-emerald-600">
              <Sparkles size={22} />
            </div>
            <h3 className="font-display font-bold text-xl text-navy-900 mb-2">
              Spatial 3D &amp; Creative Frontend
            </h3>
            <p className="text-xs text-muted-text leading-relaxed font-sans mb-4">
              WebGL rendering with Three.js / React Three Fiber, GLSL GPU shaders, Lenis cinematic smooth scrolling, and dynamic micro-interactions.
            </p>
            <div className="text-[11px] font-mono text-emerald-700 font-semibold">
              FOCUS: 60 FPS Fluidity &amp; Polish
            </div>
          </div>
        </div>

        {/* Interactive Full Skills Cloud */}
        <SkillCloud />
      </div>
    </div>
  );
}
