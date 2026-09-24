import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { personalConfig } from '../data/config';
import { Menu, X, ArrowUpRight, Volume2, VolumeX, Sparkles, Terminal } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu upon navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        } px-4 sm:px-8`}
      >
        <div
          className={`w-full max-w-7xl flex items-center justify-between transition-all duration-500 rounded-2xl px-5 py-3 ${
            scrolled
              ? 'glass-panel shadow-2xl border-white/10 scale-[0.98]'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group relative z-10"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-accent-secondary flex items-center justify-center p-[1px] shadow-glow-cyan transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-dark-950 rounded-[11px] flex items-center justify-center text-cyan-300 font-mono font-bold text-sm">
                SA
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                {personalConfig.name}
              </span>
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider">
                AI &amp; BACKEND ARCHITECT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-dark-900/60 backdrop-blur-md p-1.5 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-cyan-400/40 rounded-full -z-10 shadow-glow-cyan"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3">
            {/* Status indicator */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-900/80 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalConfig.status}</span>
            </div>

            {/* Sound Toggle button */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-full bg-dark-900/80 hover:bg-dark-800 border border-white/5 hover:border-cyan-500/30 text-neutral-400 hover:text-cyan-300 transition-all text-xs"
              title={soundEnabled ? "Mute Audio" : "Enable Ambient Sound"}
              aria-label="Toggle Sound"
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Get in Touch CTA */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-dark-950 font-medium text-xs hover:shadow-glow-cyan transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-dark-900/90 border border-white/10 text-neutral-200 hover:text-cyan-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-950/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
                // System Navigation
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx }}
                    >
                      <Link
                        to={link.path}
                        className={`text-3xl font-display font-bold flex items-center justify-between ${
                          isActive ? 'text-cyan-400' : 'text-neutral-300 hover:text-white'
                        }`}
                      >
                        <span>{link.name}</span>
                        <span className="font-mono text-xs text-neutral-500">0{idx + 1}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{personalConfig.status}</span>
              </div>
              <div className="text-xs text-neutral-400">
                {personalConfig.email}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
