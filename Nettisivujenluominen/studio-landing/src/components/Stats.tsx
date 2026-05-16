import { motion } from 'motion/react';
import HlsVideo from './HlsVideo';

const VIDEO_SRC =
  'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8';

const STATS = [
  { value: '100%', label: 'AI-Augmented Dev' },
  { value: '2–4 wk', label: 'Avg. First Delivery' },
  { value: '3×', label: 'Faster Than Agencies' },
  { value: '24 h', label: 'Response Time' },
];

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

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-32 px-8 lg:px-16">
      <HlsVideo
        src={VIDEO_SRC}
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'saturate(0)' }}
      />
      <div style={FADE('top')} />
      <div style={FADE('bottom')} />

      <motion.div
        initial={{ opacity: 0, y: 32, filter: 'blur(12px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="relative z-10 liquid-glass rounded-3xl p-12 md:p-16 max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <span className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">
                {value}
              </span>
              <span className="text-white/60 font-body font-light text-sm">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
