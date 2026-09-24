import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { personalConfig } from '../data/config';
import { ArrowUp, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';

export function Footer() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/5 bg-dark-950/90 relative overflow-hidden pt-16 pb-12 px-6 sm:px-12">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-accent-secondary p-[1px]">
                <div className="w-full h-full bg-dark-950 rounded-[7px] flex items-center justify-center text-cyan-300 font-mono font-bold text-xs">
                  SA
                </div>
              </div>
              <span className="font-display font-bold text-xl text-white">
                {personalConfig.name}
              </span>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm font-sans">
              Engineering autonomous AI systems, high-speed FastAPI backends, and spatial WebGL digital experiences.
            </p>
          </div>

          {/* Telemetry & Scroll to Top */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end font-mono text-xs text-neutral-400">
              <span className="text-cyan-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                SYSTEM LIVE
              </span>
              <span>{timeString}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3.5 rounded-2xl bg-dark-900 border border-white/10 text-neutral-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all group"
              title="Return to Top"
              aria-label="Return to Top"
            >
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 border-y border-white/5 font-mono text-xs">
          <div>
            <div className="text-neutral-500 mb-3 tracking-wider">// NAVIGATION</div>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-300 hover:text-cyan-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-neutral-300 hover:text-cyan-300 transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-neutral-300 hover:text-cyan-300 transition-colors">Projects</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-neutral-500 mb-3 tracking-wider">// DOMAINS</div>
            <ul className="space-y-2">
              <li><Link to="/skills" className="text-neutral-300 hover:text-cyan-300 transition-colors">Skills &amp; Tech</Link></li>
              <li><Link to="/experience" className="text-neutral-300 hover:text-cyan-300 transition-colors">Experience</Link></li>
              <li><Link to="/contact" className="text-neutral-300 hover:text-cyan-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-neutral-500 mb-3 tracking-wider">// SOCIAL NETWORKS</div>
            <ul className="space-y-2">
              <li><a href={personalConfig.github} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-cyan-300 transition-colors">GitHub ↗</a></li>
              <li><a href={personalConfig.linkedin} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-cyan-300 transition-colors">LinkedIn ↗</a></li>
              <li><a href={`mailto:${personalConfig.email}`} className="text-neutral-300 hover:text-cyan-300 transition-colors">Email ↗</a></li>
            </ul>
          </div>

          <div>
            <div className="text-neutral-500 mb-3 tracking-wider">// SPECS</div>
            <div className="text-neutral-400 space-y-1">
              <div>VITE + REACT 18</div>
              <div>THREE.JS / R3F</div>
              <div>GSAP + LENIS SCROLL</div>
              <div>TAILWIND CSS</div>
            </div>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} {personalConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Designed &amp; Developed with</span>
            <span className="text-cyan-400">⚡ Code + AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
