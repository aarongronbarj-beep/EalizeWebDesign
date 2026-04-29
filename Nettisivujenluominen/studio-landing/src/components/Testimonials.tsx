import { motion } from 'motion/react';
import BlurText from './BlurText';

const TESTIMONIALS = [
  {
    quote:
      'They delivered a full web app in three weeks. The quality was better than what we spent six months building with our previous agency.',
    name: 'Mikael S.',
    role: 'Founder, NordicOps',
  },
  {
    quote:
      'The AI integration alone doubled our user engagement in the first month. Ealize thinks in terms of outcomes, not just deliverables.',
    name: 'Laura K.',
    role: 'Head of Product, Velox',
  },
  {
    quote:
      "Fixed price, zero surprises, shipped on time. That's rare. We're now on a retainer and couldn't imagine working any other way.",
    name: 'James T.',
    role: 'CTO, Beacon Labs',
  },
];

export default function Testimonials() {
  return (
    <section className="px-8 lg:px-16 py-24 flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
          What Clients Say
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          <BlurText text="Don't take our word for it." delay={100} />
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map(({ quote, name, role }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            className="liquid-glass rounded-2xl p-8 flex flex-col gap-6"
          >
            <p className="text-white/80 font-body font-light text-sm italic leading-relaxed flex-1">
              &ldquo;{quote}&rdquo;
            </p>
            <div className="flex flex-col gap-0.5">
              <span className="text-white font-body font-medium text-sm">{name}</span>
              <span className="text-white/50 font-body font-light text-xs">{role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
