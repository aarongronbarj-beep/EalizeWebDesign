import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import HlsVideo from './HlsVideo';
import BlurText from './BlurText';

const VIDEO_SRC =
  'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8';

const FADE = (dir: 'top' | 'bottom') => ({
  position: 'absolute' as const,
  left: 0,
  right: 0,
  height: 200,
  pointerEvents: 'none' as const,
  zIndex: 1,
  ...(dir === 'top'
    ? { top: 0, background: 'linear-gradient(to bottom, black, transparent)' }
    : { bottom: 0, background: 'linear-gradient(to top, black, transparent)' }),
});

export default function CtaFooter() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <HlsVideo
        src={VIDEO_SRC}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div style={FADE('top')} />
      <div style={FADE('bottom')} />

      <div className="relative z-10 flex flex-col items-center text-center px-8 lg:px-16 pt-40 pb-16 gap-8">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] max-w-2xl">
          <BlurText text="Ready to build something great?" delay={100} />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-white/70 font-body font-light text-sm md:text-base max-w-md leading-relaxed"
        >
          Tell us about your project. We typically respond within 24 hours.
        </motion.p>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="w-full max-w-md"
        >
          {sent ? (
            <div className="liquid-glass rounded-2xl p-10 flex flex-col items-center gap-3">
              <span className="text-2xl font-heading italic text-white">Message received.</span>
              <span className="text-white/60 font-body font-light text-sm">We'll be in touch within 24 hours.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="liquid-glass rounded-2xl p-7 flex flex-col gap-4 text-left">
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 font-body text-sm outline-none focus:border-white/30 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 font-body text-sm outline-none focus:border-white/30 transition-colors"
              />
              <textarea
                placeholder="Tell us about your project..."
                required
                rows={4}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 font-body text-sm outline-none focus:border-white/30 transition-colors resize-none"
              />
              <button
                type="submit"
                className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                Send Message
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>

        {/* Footer bar */}
        <div className="mt-24 pt-8 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-body">
            © 2026 Ealize. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/40 text-xs font-body hover:text-white/70 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
