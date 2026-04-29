import { motion } from 'motion/react';
import HlsVideo from './HlsVideo';
import BlurText from './BlurText';

const VIDEO_SRC =
  'https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8';

const STEPS = [
  { num: '01', title: 'Discovery Call', desc: 'We learn your goals, stack, and timeline. No fluff — just the essentials to scope your project accurately.' },
  { num: '02', title: 'Proposal & Plan', desc: 'Clear scope, fixed price, realistic timeline. You know exactly what you\'re getting before we write a single line of code.' },
  { num: '03', title: 'Build & Iterate', desc: 'We ship in sprints. You see real progress weekly, give feedback, and we adapt. No black boxes.' },
  { num: '04', title: 'Launch & Support', desc: 'We deploy your product and stay on hand for fixes, features, and scaling. You grow — we grow with you.' },
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

export default function StartSection() {
  return (
    <section id="how-it-works" className="relative overflow-hidden" style={{ minHeight: 800 }}>
      <HlsVideo
        src={VIDEO_SRC}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div style={FADE('top')} />
      <div style={FADE('bottom')} />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-24 gap-12">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
          Process
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl">
          <BlurText text="From idea to launch, without the chaos." delay={100} />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl w-full mt-4">
          {STEPS.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="liquid-glass rounded-2xl p-7 flex flex-col items-start gap-3 text-left"
            >
              <span className="text-xs font-body font-semibold text-white/30 tracking-widest">{num}</span>
              <h3 className="text-white font-body font-semibold text-base">{title}</h3>
              <p className="text-white/60 font-body font-light text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
