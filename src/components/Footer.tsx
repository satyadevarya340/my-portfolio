import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { personalConfig } from '../data/config';
import { ArrowUp } from 'lucide-react';

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
    <footer className="w-full bg-brand-darkest border-t border-brand-accent/20 text-white relative overflow-hidden pt-16 pb-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-accent to-brand-primary p-[1px]">
                <div className="w-full h-full bg-brand-darkest rounded-[7px] flex items-center justify-center text-brand-light font-mono font-bold text-xs">
                  SA
                </div>
              </div>
              <span className="font-display font-bold text-xl text-white">
                {personalConfig.name}
              </span>
            </div>
            <p className="text-xs text-brand-soft/70 max-w-sm font-sans">
              Engineering autonomous AI systems, high-speed FastAPI backends, and spatial 3D WebGL experiences.
            </p>
          </div>

          {/* Telemetry & Scroll to Top */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end font-mono text-xs text-brand-soft/70">
              <span className="text-brand-light flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
                SYSTEM LIVE
              </span>
              <span>{timeString}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl bg-brand-darker border border-brand-accent/30 text-brand-light hover:bg-brand-primary hover:text-white transition-all group shadow-sm"
              title="Return to Top"
              aria-label="Return to Top"
            >
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 border-y border-brand-accent/15 font-mono text-xs">
          <div>
            <div className="text-brand-soft/50 mb-3 tracking-wider">// NAVIGATION</div>
            <ul className="space-y-2">
              <li><Link to="/" className="text-brand-soft/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-brand-soft/80 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-brand-soft/80 hover:text-white transition-colors">Projects</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-brand-soft/50 mb-3 tracking-wider">// DOMAINS</div>
            <ul className="space-y-2">
              <li><Link to="/skills" className="text-brand-soft/80 hover:text-white transition-colors">Skills &amp; Tech</Link></li>
              <li><Link to="/experience" className="text-brand-soft/80 hover:text-white transition-colors">Experience</Link></li>
              <li><Link to="/contact" className="text-brand-soft/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-brand-soft/50 mb-3 tracking-wider">// SOCIALS</div>
            <ul className="space-y-2">
              <li><a href={personalConfig.github} target="_blank" rel="noreferrer" className="text-brand-soft/80 hover:text-white transition-colors">GitHub ↗</a></li>
              <li><a href={personalConfig.linkedin} target="_blank" rel="noreferrer" className="text-brand-soft/80 hover:text-white transition-colors">LinkedIn ↗</a></li>
              <li><a href={`mailto:${personalConfig.email}`} className="text-brand-soft/80 hover:text-white transition-colors">Email ↗</a></li>
            </ul>
          </div>

          <div>
            <div className="text-brand-soft/50 mb-3 tracking-wider">// SYSTEM SPECS</div>
            <div className="text-brand-soft/70 space-y-1">
              <div>VITE + REACT 18</div>
              <div>THREE.JS / R3F</div>
              <div>GSAP + LENIS SCROLL</div>
              <div>GREEN SAAS PALETTE</div>
            </div>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-brand-soft/60">
          <div>
            © {new Date().getFullYear()} {personalConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <span className="text-brand-light font-semibold">⚡ Code + AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
