import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';
import BlurText from './BlurText';

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4';

const STATS = [
  { val: '100%', label: 'AI-Augmented Dev' },
  { val: '2–4 wk', label: 'Avg. First Delivery' },
  { val: '3×', label: 'Faster Than Agencies' },
];

const blurIn = {
  hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
  show: { filter: 'blur(0px)', opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative overflow-visible" style={{ height: 1000 }}>
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
        className="absolute left-0 w-full h-auto object-contain z-0"
        style={{ top: '20%' }}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />

      <div
        className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
        style={{ height: 300, background: 'linear-gradient(to bottom, transparent, black)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6" style={{ paddingTop: 150 }}>
        {/* Badge */}
        <div className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2 mb-8">
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
            New
          </span>
          <span className="text-white/80 text-sm font-body pr-2">
            Now taking new clients.
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.85] max-w-3xl tracking-[-4px] mb-8">
          <BlurText
            text="Software Built Smarter."
            delay={100}
            splitBy="words"
            direction="bottom"
          />
        </h1>

        {/* Subtext */}
        <motion.p
          variants={blurIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-sm md:text-base text-white font-body font-light leading-tight max-w-md mb-8"
        >
          We build custom web apps, platforms, and digital tools — fast, precise,
          and AI-native — for businesses that can't afford to wait.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={blurIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <a
            href="#contact"
            className="liquid-glass-strong rounded-full px-5 py-2.5 text-white font-body font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
          >
            Start Your Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 text-white font-body font-light text-sm hover:text-white/70 transition-colors"
          >
            <Play className="w-4 h-4 fill-white" />
            See How It Works
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={blurIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-20 flex flex-col items-center gap-6"
        >
          <div className="liquid-glass rounded-full px-4 py-2 text-xs text-white/60 font-body">
            Why teams choose Ealize
          </div>
          <div className="flex items-center gap-12 md:gap-20 flex-wrap justify-center">
            {STATS.map(({ val, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="text-3xl md:text-4xl font-heading italic text-white">{val}</span>
                <span className="text-white/50 font-body font-light text-xs">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
