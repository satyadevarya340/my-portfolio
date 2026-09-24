import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalConfig } from '../data/config';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const bootSteps = [
  'INITIALIZING SPATIAL RUNTIME...',
  'CONNECTING ASYNC AI NODES...',
  'CALIBRATING 3D STUDIO LIGHTING...',
  'COMPOSING ARCHITECTURAL GRAPH...',
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
            setTimeout(onComplete, 500);
          }, 200);
          return 100;
        }
        const jump = Math.floor(Math.random() * 18) + 10;
        return Math.min(prev + jump, 100);
      });
    }, 100);

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
          exit={{ opacity: 0, scale: 1.03, filter: 'blur(8px)' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] bg-bg-main flex flex-col items-center justify-center p-6 select-none"
        >
          <div className="absolute inset-0 bg-minimal-grid opacity-60 pointer-events-none" />
          <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

          <div className="w-full max-w-sm flex flex-col items-center gap-7 relative z-10">
            {/* Logo Emblem */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-accent-violet via-accent-magenta to-accent-softPink p-[1px] shadow-glow-violet">
              <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center text-accent-violet font-display font-extrabold text-lg">
                SA
              </div>
            </div>

            {/* Profile Title */}
            <div className="text-center">
              <h1 className="font-display font-bold text-lg text-navy-900 tracking-tight">
                {personalConfig.name}
              </h1>
              <p className="font-mono text-[11px] text-muted-subtle mt-0.5 uppercase tracking-widest">
                AI &amp; Backend Engineer
              </p>
            </div>

            {/* Progress Bar & Numeric Counter */}
            <div className="w-full">
              <div className="flex justify-between items-center font-mono text-[11px] text-muted-text mb-2">
                <span className="text-accent-violet font-semibold">{bootSteps[stepIndex]}</span>
                <span className="font-bold text-navy-900">{progress}%</span>
              </div>

              <div className="w-full h-1.5 bg-lavender-200 rounded-full overflow-hidden p-[0.5px]">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent-violet via-accent-magenta to-accent-softPink rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
