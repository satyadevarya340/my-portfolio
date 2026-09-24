import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../data/services';
import { Search, Compass, Cpu, CheckCircle2, Rocket, ArrowRight } from 'lucide-react';

const stepIcons = [Search, Compass, Cpu, CheckCircle2, Rocket];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full">
      {/* 5-Stage Step Indicators */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
        {processSteps.map((step, idx) => {
          const Icon = stepIcons[idx] || Search;
          const isActive = activeStep === idx;
          return (
            <button
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl text-left transition-all duration-200 relative ${
                isActive
                  ? 'bg-brand-soft border-2 border-brand-primary shadow-sm'
                  : 'bg-white border border-surface-border hover:border-brand-accent/40 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`font-mono text-xs font-bold ${isActive ? 'text-brand-primary' : 'text-text-muted'}`}>
                  {step.step}
                </span>
                <Icon size={18} className={isActive ? 'text-brand-primary' : 'text-text-muted'} />
              </div>
              <div className={`font-display font-bold text-sm tracking-tight ${isActive ? 'text-brand-dark' : 'text-text-primary'}`}>
                {step.phase}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Detailed Card */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="saas-card p-8 sm:p-10 border border-surface-border"
      >
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-brand-soft text-brand-dark font-semibold border border-brand-accent/30">
                PHASE // {processSteps[activeStep].phase}
              </span>
              <span className="font-mono text-xs text-text-muted">
                STEP {processSteps[activeStep].step} OF 05
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-text-primary mb-3">
              {processSteps[activeStep].title}
            </h3>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
              {processSteps[activeStep].description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : processSteps.length - 1))}
              className="px-4 py-2 rounded-xl bg-surface-subtle border border-surface-border text-xs font-mono text-text-secondary hover:text-text-primary transition-all"
            >
              Prev
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev < processSteps.length - 1 ? prev + 1 : 0))}
              className="px-4 py-2 rounded-xl bg-brand-primary text-white font-bold text-xs font-mono hover:bg-brand-dark transition-all flex items-center gap-1.5 shadow-sm"
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
