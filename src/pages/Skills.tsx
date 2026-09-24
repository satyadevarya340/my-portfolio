import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { SkillCloud } from '../components/SkillCloud';
import { personalConfig } from '../data/config';
import { Cpu, Server, Layers, ShieldCheck, Sparkles, Database, Terminal } from 'lucide-react';

export function Skills() {
  return (
    <div className="w-full pt-32 pb-24 px-6 sm:px-12 bg-surface-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="TECHNICAL MATRIX"
          title="ENGINEERING CAPABILITIES &amp; STACK"
          subtitle="Explore the technologies, frameworks, and architecture paradigms utilized across backend services, AI agents, and 3D web applications."
        />

        {/* Deep Domain Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="saas-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-200 mb-4 text-emerald-600">
                <Server size={22} />
              </div>
              <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                Distributed Backend Core
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed font-sans mb-4">
                High-concurrency Python &amp; FastAPI systems, Pydantic v2 data validation, connection pooling with AsyncPG, and PostGIS spatial queries.
              </p>
            </div>
            <div className="text-[11px] font-mono text-emerald-700 font-semibold bg-emerald-50 p-2 rounded-lg border border-emerald-200">
              FOCUS: &lt;2ms Latency &amp; Zero Downtime
            </div>
          </div>

          <div className="saas-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-200 mb-4 text-purple-600">
                <Cpu size={22} />
              </div>
              <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                Autonomous AI &amp; LangGraph
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed font-sans mb-4">
                Multi-agent stateful graph execution, self-correcting reasoning loops, RAG vector store indexing (Qdrant), and custom tool sandboxes.
              </p>
            </div>
            <div className="text-[11px] font-mono text-purple-700 font-semibold bg-purple-50 p-2 rounded-lg border border-purple-200">
              FOCUS: Deterministic Reasoning &amp; Cost-efficiency
            </div>
          </div>

          <div className="saas-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-200 mb-4 text-blue-600">
                <Sparkles size={22} />
              </div>
              <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                Spatial 3D &amp; Creative Frontend
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed font-sans mb-4">
                WebGL rendering with Three.js / React Three Fiber, GLSL GPU shaders, Lenis cinematic smooth scrolling, and dynamic micro-interactions.
              </p>
            </div>
            <div className="text-[11px] font-mono text-blue-700 font-semibold bg-blue-50 p-2 rounded-lg border border-blue-200">
              FOCUS: 60 FPS Fluidity &amp; Polish
            </div>
          </div>
        </div>

        {/* Interactive Full Skills Dashboard */}
        <SkillCloud />
      </div>
    </div>
  );
}
