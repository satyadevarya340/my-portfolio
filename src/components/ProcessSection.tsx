import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../data/services';
import { Search, Compass, Cpu, CheckCircle2, Rocket, ArrowRight } from 'lucide-react';

const stepIcons = [Search, Compass, Cpu, CheckCircle2, Rocket];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full">
      {/* Step Indicators Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
        {processSteps.map((step, idx) => {
          const Icon = stepIcons[idx] || Search;
          const isActive = activeStep === idx;
          return (
            <button
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl text-left transition-all duration-300 relative overflow-hidden ${
                isActive
                  ? 'glass-panel-glow border-cyan-400/50 bg-cyan-950/20'
                  : 'glass-card border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`font-mono text-xs font-bold ${isActive ? 'text-cyan-400' : 'text-neutral-500'}`}>
                  {step.step}
                </span>
                <Icon size={18} className={isActive ? 'text-cyan-300' : 'text-neutral-500'} />
              </div>
              <div className={`font-display font-bold text-sm tracking-tight ${isActive ? 'text-white' : 'text-neutral-400'}`}>
                {step.phase}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Detailed Card */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/20 relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                PHASE // {processSteps[activeStep].phase}
              </span>
              <span className="font-mono text-xs text-neutral-500">
                STEP {processSteps[activeStep].step} OF 05
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4">
              {processSteps[activeStep].title}
            </h3>

            <p className="text-base text-neutral-300 leading-relaxed font-sans">
              {processSteps[activeStep].description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : processSteps.length - 1))}
              className="px-4 py-2 rounded-xl bg-dark-900 border border-white/10 text-xs font-mono text-neutral-400 hover:text-white transition-all"
            >
              Prev
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev < processSteps.length - 1 ? prev + 1 : 0))}
              className="px-4 py-2 rounded-xl bg-cyan-500 text-dark-950 font-bold text-xs font-mono hover:shadow-glow-cyan transition-all flex items-center gap-1.5"
            >
              <span>Next</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
