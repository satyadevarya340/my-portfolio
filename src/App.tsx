import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useLenis } from './hooks/useLenis';
import { Background3D } from './components/Background3D';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SystemHUD } from './components/SystemHUD';
import { LoadingScreen } from './components/LoadingScreen';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Experience } from './pages/Experience';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function PageWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <motion.main
      initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="flex-grow"
    >
      {children}
    </motion.main>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/projects/:slug" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
        <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
        <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export function App() {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis Smooth Scrolling
  useLenis();

  return (
    <Router>
      <div className="relative min-h-screen flex flex-col bg-dark-950 text-neutral-100 font-sans overflow-x-hidden select-none sm:select-auto">
        {/* Cinematic Initial Boot Loader */}
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

        {/* Global Three.js Particle Background */}
        <Background3D intensity={0.8} />

        {/* Noise overlay texture */}
        <div className="noise-overlay" />

        {/* Desktop Magnetic Custom Cursor */}
        <CustomCursor />

        {/* Desktop System HUD Telemetry */}
        <SystemHUD />

        {/* Floating Glassmorphic Navbar */}
        <Navbar />

        {/* Main Routed Content */}
        <AppRoutes />

        {/* Futuristic Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
