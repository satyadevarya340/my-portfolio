import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { personalConfig } from '../data/config';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Globe, Sparkles, Terminal } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'AI Application & Agents',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'AI Application & Agents',
    'High-Throughput Backend (FastAPI)',
    'Enterprise SFA / Business Automation',
    '3D WebGL & Interactive Website',
    'Consultation / Full-time Role',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    setTimeout(() => {
      setStatus('success');
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#18A979', '#0B6B50', '#4F7CFF', '#F5B83D'],
      });
      setFormData({
        name: '',
        email: '',
        projectType: 'AI Application & Agents',
        message: '',
      });
    }, 1200);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
      {/* Left Contact Details & Telemetry */}
      <div className="lg:col-span-5 flex flex-col justify-between">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft/80 border border-brand-accent/30 text-brand-dark font-mono text-xs uppercase tracking-widest mb-4 font-semibold">
            <Sparkles size={14} className="text-brand-accent" />
            <span>DIRECT CHANNELS</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
            LET'S BUILD SOMETHING USEFUL.
          </h3>

          <p className="text-sm text-brand-soft/80 mb-8 leading-relaxed font-sans">
            Have an engineering challenge, an ambitious AI project, or want to discuss backend architecture? Reach out directly or dispatch a message through the portal.
          </p>

          <div className="flex flex-col gap-3.5">
            {/* Email */}
            <a
              href={`mailto:${personalConfig.email}`}
              className="bg-brand-darker/90 hover:bg-brand-dark/40 border border-brand-accent/20 p-4 rounded-2xl flex items-center gap-4 group transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-darkest flex items-center justify-center border border-brand-accent/30 group-hover:border-brand-accent">
                <Mail size={18} className="text-brand-light" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-brand-soft/60">DIRECT EMAIL</div>
                <div className="text-sm font-display font-bold text-white group-hover:text-brand-light transition-colors">
                  {personalConfig.email}
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="bg-brand-darker/90 border border-brand-accent/20 p-4 rounded-2xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-darkest flex items-center justify-center border border-brand-accent/30">
                <MapPin size={18} className="text-brand-light" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-brand-soft/60">LOCATION &amp; TIMEZONE</div>
                <div className="text-sm font-display font-bold text-white">
                  {personalConfig.location} ({personalConfig.timezone})
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-brand-darker/90 border border-brand-accent/20 p-4 rounded-2xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-darkest flex items-center justify-center border border-brand-accent/30">
                <Globe size={18} className="text-brand-light" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-brand-soft/60">WORK STATUS</div>
                <div className="text-sm font-display font-bold text-brand-light flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
                  {personalConfig.status}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub & LinkedIn Links */}
        <div className="mt-8 pt-6 border-t border-brand-accent/20 flex items-center gap-4">
          <a
            href={personalConfig.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-brand-soft/80 hover:text-white transition-colors"
          >
            GITHUB ↗
          </a>
          <a
            href={personalConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-brand-soft/80 hover:text-white transition-colors"
          >
            LINKEDIN ↗
          </a>
        </div>
      </div>

      {/* Right Contact Form Card */}
      <div className="lg:col-span-7">
        <form
          onSubmit={handleSubmit}
          className="bg-brand-darker/90 p-6 sm:p-8 rounded-3xl border border-brand-accent/30 relative shadow-2xl"
        >
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-brand-accent/20 font-mono text-xs text-brand-soft/70">
            <span className="text-brand-light font-semibold">// SECURE TRANSMISSION DISPATCH</span>
            <span>TLS ENCRYPTED</span>
          </div>

          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block font-mono text-xs text-brand-soft/80 uppercase mb-1.5">
                Your Name / Organization <span className="text-brand-accent">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Vance"
                className="w-full bg-brand-darkest/90 border border-brand-accent/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent font-sans"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-mono text-xs text-brand-soft/80 uppercase mb-1.5">
                Email Address <span className="text-brand-accent">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full bg-brand-darkest/90 border border-brand-accent/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent font-sans"
              />
            </div>

            {/* Project Category */}
            <div>
              <label className="block font-mono text-xs text-brand-soft/80 uppercase mb-1.5">
                Project Category
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full bg-brand-darkest/90 border border-brand-accent/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent font-sans"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type} className="bg-brand-darkest text-white">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block font-mono text-xs text-brand-soft/80 uppercase mb-1.5">
                Project Details / Message <span className="text-brand-accent">*</span>
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about the goals, timelines, and technical requirements..."
                className="w-full bg-brand-darkest/90 border border-brand-accent/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent font-sans resize-none"
              />
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-mono flex items-center gap-2"
              >
                <AlertCircle size={16} />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            {/* Success Message */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2"
              >
                <CheckCircle2 size={16} />
                <span>Message transmitted successfully! I will respond within 24 hours.</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3.5 rounded-xl bg-brand-primary hover:bg-brand-dark text-white font-display font-bold text-sm tracking-wide shadow-sm hover:shadow-glow-green transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>TRANSMITTING...</span>
                </>
              ) : (
                <>
                  <span>TRANSMIT MESSAGE</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
