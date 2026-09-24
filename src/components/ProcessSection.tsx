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
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
        {processSteps.map((step, idx) => {
          const Icon = stepIcons[idx] || Search;
          const isActive = activeStep === idx;
          return (
            <button
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl text-left transition-all duration-300 relative overflow-hidden ${
                isActive
                  ? 'bg-white border border-accent-violet shadow-pearl'
                  : 'bg-white/60 border border-lavender-200 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-xs font-bold ${isActive ? 'text-accent-violet' : 'text-muted-subtle'}`}>
                  {step.step}
                </span>
                <Icon size={16} className={isActive ? 'text-accent-violet' : 'text-muted-subtle'} />
              </div>
              <div className={`font-display font-bold text-xs tracking-tight ${isActive ? 'text-navy-900' : 'text-muted-text'}`}>
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
        transition={{ duration: 0.35 }}
        className="pearl-card p-8 sm:p-12 rounded-3xl border border-lavender-300 relative overflow-hidden shadow-pearl"
      >
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-lavender-100 text-accent-violet font-semibold border border-lavender-200">
                PHASE // {processSteps[activeStep].phase}
              </span>
              <span className="font-mono text-xs text-muted-subtle">
                STEP {processSteps[activeStep].step} OF 05
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-900 mb-4">
              {processSteps[activeStep].title}
            </h3>

            <p className="text-sm sm:text-base text-muted-text leading-relaxed font-sans">
              {processSteps[activeStep].description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : processSteps.length - 1))}
              className="px-4 py-2 rounded-xl bg-lavender-100 text-xs font-mono font-semibold text-navy-900 hover:bg-lavender-200 transition-all"
            >
              Prev
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev < processSteps.length - 1 ? prev + 1 : 0))}
              className="px-4 py-2 rounded-xl bg-navy-900 text-white font-bold text-xs font-mono hover:bg-navy-800 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span>Next</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
