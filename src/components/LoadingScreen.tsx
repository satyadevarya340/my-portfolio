import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalConfig } from '../data/config';
import { Sparkles, Terminal } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const bootSteps = [
  'INITIALIZING QUANTUM RUNTIME...',
  'CONNECTING TO ASYNC FASTAPI NODES...',
  'CALIBRATING 3D WEBGL SHADERS...',
  'COMPOSING AGENTIC GRAPHS...',
  'SYSTEM READY.',
];

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        const jump = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + jump, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const currentStep = Math.min(
      Math.floor((progress / 100) * bootSteps.length),
      bootSteps.length - 1
    );
    setStepIndex(currentStep);
  }, [progress]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] bg-dark-950 flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Subtle Cyber Grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          <div className="w-full max-w-md flex flex-col items-center gap-8 relative z-10">
            {/* Logo Emblem */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-accent-secondary p-[1px] shadow-glow-cyan">
              <div className="w-full h-full bg-dark-950 rounded-[15px] flex items-center justify-center text-cyan-300 font-mono font-extrabold text-xl">
                SA
              </div>
            </div>

            {/* Profile Title */}
            <div className="text-center">
              <h1 className="font-display font-bold text-xl text-white tracking-wider">
                {personalConfig.name}
              </h1>
              <p className="font-mono text-xs text-neutral-400 mt-1 uppercase tracking-widest">
                AI &amp; Backend Developer
              </p>
            </div>

            {/* Progress Bar & Numeric Counter */}
            <div className="w-full">
              <div className="flex justify-between items-center font-mono text-xs text-neutral-400 mb-2">
                <span className="text-cyan-400">{bootSteps[stepIndex]}</span>
                <span className="font-bold text-white">{progress}%</span>
              </div>

              <div className="w-full h-1.5 bg-dark-900 rounded-full overflow-hidden border border-white/10 p-[1px]">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Micro Telemetry */}
            <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-500">
              <Terminal size={12} className="text-cyan-400" />
              <span>KERNEL: 2026.04 // SECURE INITIALIZATION</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
