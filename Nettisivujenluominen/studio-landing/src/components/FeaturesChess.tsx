import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import BlurText from './BlurText';
import feature1 from '../assets/feature-1.gif';
import feature2 from '../assets/feature-2.gif';

const blurInUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

interface RowProps {
  reverse?: boolean;
  tag: string;
  title: string;
  body: string;
  cta: string;
  gif: string;
}

function ChessRow({ reverse, tag, title, body, cta, gif }: RowProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ staggerChildren: 0.12 }}
      className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} items-center gap-12 lg:gap-20`}
    >
      {/* Text */}
      <div className="flex-1 flex flex-col items-start gap-6">
        <motion.div
          variants={blurInUp}
          transition={{ duration: 0.5 }}
          className="liquid-glass rounded-full px-3 py-1 text-xs font-medium text-white font-body"
        >
          {tag}
        </motion.div>
        <motion.h3
          variants={blurInUp}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-heading italic text-white leading-tight"
        >
          {title}
        </motion.h3>
        <motion.p
          variants={blurInUp}
          transition={{ duration: 0.6 }}
          className="text-white/60 font-body font-light text-sm md:text-base leading-relaxed"
        >
          {body}
        </motion.p>
        <motion.a
          href="#contact"
          variants={blurInUp}
          transition={{ duration: 0.6 }}
          className="liquid-glass-strong rounded-full px-5 py-2.5 text-white font-body font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
        >
          {cta}
          <ArrowUpRight className="w-4 h-4" />
        </motion.a>
      </div>

      {/* Visual */}
      <motion.div
        variants={blurInUp}
        transition={{ duration: 0.7 }}
        className="flex-1 w-full liquid-glass rounded-2xl overflow-hidden"
      >
        <img src={gif} alt={title} className="w-full h-auto object-cover" />
      </motion.div>
    </motion.div>
  );
}

export default function FeaturesChess() {
  return (
    <section id="services" className="px-8 lg:px-16 py-24 flex flex-col gap-20">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
          Services
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          <BlurText text="Everything you need to ship great software." delay={80} />
        </h2>
      </div>

      <ChessRow
        tag="Most Popular"
        title="Website design for businesses."
        body="Stunning, conversion-focused websites with smooth animations and a premium feel — at a price that makes sense for your business."
        cta="Start Your Project"
        gif={feature1}
      />

      <ChessRow
        reverse
        tag="AI"
        title="Intelligence built right in."
        body="We embed AI into your product — smart search, predictive features, automated workflows. Your competitors won't know what hit them."
        cta="Learn more"
        gif={feature2}
      />
    </section>
  );
}
