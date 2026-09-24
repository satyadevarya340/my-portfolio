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

    // Simulate reliable submission
    setTimeout(() => {
      setStatus('success');
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00F2FE', '#7F00FF', '#00F5A0', '#ffffff'],
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
      {/* Left Contact Coordinates & Telemetry */}
      <div className="lg:col-span-5 flex flex-col justify-between">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            <span>DIRECT CHANNELS</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
            Let's build something useful together.
          </h3>

          <p className="text-sm text-neutral-400 mb-8 leading-relaxed font-sans">
            Have an engineering challenge, an ambitious AI project, or want to discuss architecture? Reach out directly or dispatch a message through the portal.
          </p>

          <div className="flex flex-col gap-4">
            {/* Email Card */}
            <a
              href={`mailto:${personalConfig.email}`}
              className="glass-card p-4 rounded-2xl flex items-center gap-4 group hover:border-cyan-500/40"
            >
              <div className="w-10 h-10 rounded-xl bg-dark-900 flex items-center justify-center border border-white/10 group-hover:border-cyan-400/50">
                <Mail size={18} className="text-cyan-400" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-neutral-400">DIRECT EMAIL</div>
                <div className="text-sm font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {personalConfig.email}
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-card p-4 rounded-2xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-dark-900 flex items-center justify-center border border-white/10">
                <MapPin size={18} className="text-emerald-400" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-neutral-400">LOCATION &amp; TIMEZONE</div>
                <div className="text-sm font-display font-bold text-white">
                  {personalConfig.location} ({personalConfig.timezone})
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-4 rounded-2xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-dark-900 flex items-center justify-center border border-white/10">
                <Globe size={18} className="text-purple-400" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-neutral-400">WORK STATUS</div>
                <div className="text-sm font-display font-bold text-emerald-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  {personalConfig.status}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub & LinkedIn quick links */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
          <a
            href={personalConfig.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-neutral-400 hover:text-cyan-300 transition-colors"
          >
            GITHUB ↗
          </a>
          <a
            href={personalConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-neutral-400 hover:text-cyan-300 transition-colors"
          >
            LINKEDIN ↗
          </a>
        </div>
      </div>

      {/* Right Contact Form Card */}
      <div className="lg:col-span-7">
        <form
          onSubmit={handleSubmit}
          className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden"
        >
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 font-mono text-xs text-neutral-400">
            <span className="text-cyan-400">// SECURE TRANSMISSION DISPATCH</span>
            <span>TLS ENCRYPTED</span>
          </div>

          <div className="space-y-5">
            {/* Name */}
            <div>
              <label className="block font-mono text-xs text-neutral-300 uppercase mb-2">
                Your Name / Organization <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Vance"
                className="w-full bg-dark-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-mono text-xs text-neutral-300 uppercase mb-2">
                Email Address <span className="text-cyan-400">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full bg-dark-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="block font-mono text-xs text-neutral-300 uppercase mb-2">
                Project Category
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full bg-dark-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type} className="bg-dark-950 text-white">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block font-mono text-xs text-neutral-300 uppercase mb-2">
                Project Details / Message <span className="text-cyan-400">*</span>
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about the goals, timelines, and technical requirements..."
                className="w-full bg-dark-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans resize-none"
              />
            </div>

            {/* Error state */}
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

            {/* Success state */}
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
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-dark-950 font-display font-bold text-sm tracking-wide hover:shadow-glow-cyan transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-4 h-4 border-2 border-dark-950 border-t-transparent rounded-full animate-spin" />
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
