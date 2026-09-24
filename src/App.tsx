import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useLenis } from './hooks/useLenis';
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
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="flex-grow w-full"
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
      <div className="relative min-h-screen flex flex-col bg-[#07110E] font-sans overflow-x-hidden">
        {/* Cinematic Boot Loader */}
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

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
