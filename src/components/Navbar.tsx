import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { personalConfig } from '../data/config';
import { Menu, X, ArrowUpRight, Volume2, VolumeX, Sparkles } from 'lucide-react';

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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHeroRoute = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        } px-4 sm:px-8`}
      >
        <div
          className={`w-full max-w-7xl flex items-center justify-between transition-all duration-300 rounded-2xl px-5 py-2.5 ${
            scrolled
              ? 'bg-white/90 backdrop-blur-md border border-surface-border shadow-saas'
              : isHeroRoute
              ? 'bg-brand-darker/70 backdrop-blur-md border border-white/10 text-white'
              : 'bg-white/80 backdrop-blur-md border border-surface-border shadow-saas'
          }`}
        >
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group relative z-10"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-accent to-brand-dark flex items-center justify-center p-[1px] shadow-sm transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-brand-darkest rounded-[11px] flex items-center justify-center text-brand-light font-mono font-bold text-xs">
                SA
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-sm tracking-tight transition-colors ${
                !scrolled && isHeroRoute ? 'text-white' : 'text-text-primary'
              }`}>
                {personalConfig.name}
              </span>
              <span className="font-mono text-[10px] text-brand-accent font-semibold tracking-wider">
                AI &amp; BACKEND ARCHITECT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center gap-1 p-1 rounded-full border ${
            !scrolled && isHeroRoute
              ? 'bg-brand-darkest/60 border-white/10'
              : 'bg-surface-subtle border-surface-border'
          }`}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : !scrolled && isHeroRoute
                      ? 'text-neutral-300 hover:text-white'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-brand-primary rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
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
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft/80 border border-brand-accent/30 text-[11px] font-mono text-brand-dark font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span>{personalConfig.status}</span>
            </div>

            {/* Let's Talk CTA */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-primary text-white font-medium text-xs shadow-sm hover:bg-brand-dark transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} />
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-surface-subtle border border-surface-border text-text-primary hover:text-brand-primary"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <div className="font-mono text-xs text-brand-primary font-bold tracking-widest uppercase">
                // System Navigation
              </div>

              <div className="flex flex-col gap-3">
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`text-2xl font-display font-bold py-2 flex items-center justify-between border-b border-surface-border ${
                        isActive ? 'text-brand-primary' : 'text-text-primary'
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className="font-mono text-xs text-text-muted">0{idx + 1}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-surface-border">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-dark">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                <span>{personalConfig.status}</span>
              </div>
              <div className="text-xs text-text-secondary">
                {personalConfig.email}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
