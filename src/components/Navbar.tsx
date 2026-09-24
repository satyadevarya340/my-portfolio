import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { personalConfig } from '../data/config';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        } px-4 sm:px-8`}
      >
        <div
          className={`w-full max-w-7xl flex items-center justify-between transition-all duration-500 rounded-full px-5 py-2.5 ${
            scrolled
              ? 'pearl-glass shadow-pearl scale-[0.99]'
              : 'bg-white/60 backdrop-blur-md border border-lavender-300/40'
          }`}
        >
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group relative z-10"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent-violet via-accent-magenta to-accent-softPink flex items-center justify-center p-[1px] shadow-sm transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-accent-violet font-display font-bold text-xs">
                SA
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-navy-900 group-hover:text-accent-violet transition-colors">
                {personalConfig.name}
              </span>
              <span className="font-mono text-[9.5px] text-muted-subtle tracking-wider uppercase">
                AI &amp; Backend Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-lavender-100/70 p-1 rounded-full border border-lavender-300/30">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-navy-900 font-semibold'
                      : 'text-muted-text hover:text-navy-900 hover:bg-white/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm border border-lavender-300/50"
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
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-emerald-500/20 text-[11px] font-mono text-emerald-700 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personalConfig.status}</span>
            </div>

            {/* Get in Touch CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-navy-900 text-white font-medium text-xs hover:bg-navy-800 transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={13} />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white border border-lavender-300/40 text-navy-900 hover:text-accent-violet"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg-main/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-24 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <div className="font-mono text-xs text-accent-violet tracking-widest uppercase">
                // System Navigation
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * idx }}
                    >
                      <Link
                        to={link.path}
                        className={`text-2xl font-display font-bold flex items-center justify-between py-1 ${
                          isActive ? 'text-accent-violet' : 'text-navy-900 hover:text-accent-violet'
                        }`}
                      >
                        <span>{link.name}</span>
                        <span className="font-mono text-xs text-muted-subtle">0{idx + 1}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-lavender-300/40">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{personalConfig.status}</span>
              </div>
              <div className="text-xs text-muted-text">
                {personalConfig.email}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
