import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { personalConfig } from '../data/config';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Globe, Sparkles } from 'lucide-react';

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
        colors: ['#8E6BFF', '#B8A7FF', '#E66BFF', '#F4B7EA', '#F5B83D'],
      });
      setFormData({
        name: '',
        email: '',
        projectType: 'AI Application & Agents',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
      {/* Left Contact Coordinates */}
      <div className="lg:col-span-5 flex flex-col justify-between">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender-100 border border-lavender-300 text-accent-violet font-mono text-[11px] font-semibold uppercase tracking-widest mb-4">
            <Sparkles size={13} />
            <span>DIRECT CHANNELS</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-navy-900 tracking-tight mb-4">
            Let's build something useful together.
          </h3>

          <p className="text-sm text-muted-text mb-8 leading-relaxed font-sans">
            Have an engineering challenge, an ambitious AI project, or want to discuss architecture? Reach out directly or dispatch a transmission through the portal.
          </p>

          <div className="flex flex-col gap-3.5">
            {/* Email Card */}
            <a
              href={`mailto:${personalConfig.email}`}
              className="pearl-card p-4 rounded-2xl flex items-center gap-4 group hover:border-accent-violet shadow-card"
            >
              <div className="w-10 h-10 rounded-xl bg-lavender-100 flex items-center justify-center border border-lavender-200 group-hover:bg-white group-hover:border-accent-violet/40 transition-all">
                <Mail size={18} className="text-accent-violet" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-muted-subtle uppercase">DIRECT EMAIL</div>
                <div className="text-sm font-display font-bold text-navy-900 group-hover:text-accent-violet transition-colors">
                  {personalConfig.email}
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="pearl-card p-4 rounded-2xl flex items-center gap-4 shadow-card">
              <div className="w-10 h-10 rounded-xl bg-lavender-100 flex items-center justify-center border border-lavender-200">
                <MapPin size={18} className="text-emerald-600" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-muted-subtle uppercase">LOCATION &amp; TIMEZONE</div>
                <div className="text-sm font-display font-bold text-navy-900">
                  {personalConfig.location} ({personalConfig.timezone})
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="pearl-card p-4 rounded-2xl flex items-center gap-4 shadow-card">
              <div className="w-10 h-10 rounded-xl bg-lavender-100 flex items-center justify-center border border-lavender-200">
                <Globe size={18} className="text-accent-violet" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-muted-subtle uppercase">WORK STATUS</div>
                <div className="text-sm font-display font-bold text-emerald-700 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  {personalConfig.status}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub & LinkedIn links */}
        <div className="mt-8 pt-6 border-t border-lavender-200 flex items-center gap-4">
          <a
            href={personalConfig.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono font-semibold text-navy-900 hover:text-accent-violet transition-colors"
          >
            GITHUB ↗
          </a>
          <a
            href={personalConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono font-semibold text-navy-900 hover:text-accent-violet transition-colors"
          >
            LINKEDIN ↗
          </a>
        </div>
      </div>

      {/* Right Contact Form */}
      <div className="lg:col-span-7">
        <form
          onSubmit={handleSubmit}
          className="pearl-card p-6 sm:p-10 rounded-3xl border border-lavender-300 relative overflow-hidden shadow-pearl"
        >
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-lavender-200 font-mono text-xs text-muted-subtle">
            <span className="text-accent-violet font-semibold">// DIRECT MESSAGE DISPATCH</span>
            <span>ENCRYPTED</span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block font-mono text-xs text-navy-900 uppercase font-semibold mb-1.5">
                Your Name / Organization <span className="text-accent-violet">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Vance"
                className="w-full bg-lavender-50/60 border border-lavender-200 rounded-xl px-4 py-3 text-sm text-navy-900 placeholder-muted-subtle focus:outline-none focus:border-accent-violet focus:ring-2 focus:ring-accent-violet/20 transition-all font-sans"
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-navy-900 uppercase font-semibold mb-1.5">
                Email Address <span className="text-accent-violet">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full bg-lavender-50/60 border border-lavender-200 rounded-xl px-4 py-3 text-sm text-navy-900 placeholder-muted-subtle focus:outline-none focus:border-accent-violet focus:ring-2 focus:ring-accent-violet/20 transition-all font-sans"
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-navy-900 uppercase font-semibold mb-1.5">
                Project Category
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full bg-lavender-50/60 border border-lavender-200 rounded-xl px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-accent-violet focus:ring-2 focus:ring-accent-violet/20 transition-all font-sans"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type} className="bg-white text-navy-900">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-mono text-xs text-navy-900 uppercase font-semibold mb-1.5">
                Project Details / Message <span className="text-accent-violet">*</span>
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about the goals, timelines, and technical requirements..."
                className="w-full bg-lavender-50/60 border border-lavender-200 rounded-xl px-4 py-3 text-sm text-navy-900 placeholder-muted-subtle focus:outline-none focus:border-accent-violet focus:ring-2 focus:ring-accent-violet/20 transition-all font-sans resize-none"
              />
            </div>

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono flex items-center gap-2"
              >
                <AlertCircle size={15} />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono flex items-center gap-2"
              >
                <CheckCircle2 size={15} />
                <span>Message transmitted successfully! I will respond within 24 hours.</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3.5 rounded-xl bg-navy-900 text-white font-display font-bold text-xs tracking-wider uppercase hover:bg-navy-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>DISPATCHING...</span>
                </>
              ) : (
                <>
                  <span>DISPATCH MESSAGE</span>
                  <Send size={14} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
