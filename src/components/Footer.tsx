import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { personalConfig } from '../data/config';
import { ArrowUp, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

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
    <footer className="w-full border-t border-lavender-200 bg-white/70 backdrop-blur-md relative overflow-hidden pt-16 pb-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent-violet to-accent-magenta p-[1px]">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-accent-violet font-display font-bold text-xs">
                  SA
                </div>
              </div>
              <span className="font-display font-bold text-lg text-navy-900">
                {personalConfig.name}
              </span>
            </div>
            <p className="text-xs text-muted-text max-w-sm font-sans">
              Engineering autonomous AI systems, high-speed FastAPI backends, and spatial 3D web interfaces.
            </p>
          </div>

          {/* Telemetry & Scroll to Top */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end font-mono text-xs text-muted-text">
              <span className="text-accent-violet font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
                SYSTEM ONLINE
              </span>
              <span>{timeString}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-white border border-lavender-200 text-navy-900 hover:border-accent-violet hover:bg-lavender-50 transition-all shadow-sm group"
              title="Return to Top"
              aria-label="Return to Top"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 border-y border-lavender-200/80 font-mono text-xs">
          <div>
            <div className="text-muted-subtle mb-3 tracking-wider font-semibold">// NAVIGATION</div>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-text hover:text-accent-violet transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-text hover:text-accent-violet transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-muted-text hover:text-accent-violet transition-colors">Projects</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-muted-subtle mb-3 tracking-wider font-semibold">// DOMAINS</div>
            <ul className="space-y-2">
              <li><Link to="/skills" className="text-muted-text hover:text-accent-violet transition-colors">Skills &amp; Tech</Link></li>
              <li><Link to="/experience" className="text-muted-text hover:text-accent-violet transition-colors">Experience</Link></li>
              <li><Link to="/contact" className="text-muted-text hover:text-accent-violet transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-muted-subtle mb-3 tracking-wider font-semibold">// NETWORKS</div>
            <ul className="space-y-2">
              <li><a href={personalConfig.github} target="_blank" rel="noreferrer" className="text-muted-text hover:text-accent-violet transition-colors">GitHub ↗</a></li>
              <li><a href={personalConfig.linkedin} target="_blank" rel="noreferrer" className="text-muted-text hover:text-accent-violet transition-colors">LinkedIn ↗</a></li>
              <li><a href={`mailto:${personalConfig.email}`} className="text-muted-text hover:text-accent-violet transition-colors">Email ↗</a></li>
            </ul>
          </div>

          <div>
            <div className="text-muted-subtle mb-3 tracking-wider font-semibold">// ARCHITECTURE</div>
            <div className="text-muted-text space-y-1">
              <div>VITE + REACT 18</div>
              <div>THREE.JS / R3F</div>
              <div>LENIS + GSAP</div>
              <div>TAILWIND CSS</div>
            </div>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-subtle">
          <div>
            © {new Date().getFullYear()} {personalConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <span className="text-accent-violet font-semibold">✨ Code + AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
