import { motion } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import BlurText from './BlurText';

const PLANS = [
  {
    name: 'Starter',
    price: '€1,499',
    period: 'one-time',
    desc: 'Perfect for landing pages, simple apps, or validating an MVP idea.',
    features: [
      'Up to 5 pages or screens',
      'Custom UI design',
      'Mobile responsive',
      '2 weeks delivery',
      '1 revision round',
      '2 weeks post-launch support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '€3,999',
    period: 'one-time',
    desc: 'For businesses ready to build a full product with real functionality.',
    features: [
      'Full-stack web application',
      'Database & API design',
      'User auth & dashboard',
      'AI feature integration',
      '4–6 weeks delivery',
      '3 months support',
    ],
    cta: 'Most Popular',
    highlight: true,
  },
  {
    name: 'Partner',
    price: '€1,200',
    period: 'per month',
    desc: 'Ongoing development partnership — your dev team, on demand.',
    features: [
      'Weekly sprints',
      'Dedicated Slack channel',
      'Unlimited revisions',
      'Priority support',
      'Monthly strategy call',
      'Scale up or down anytime',
    ],
    cta: "Let's Talk",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-8 lg:px-16 py-24 flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
          Pricing
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          <BlurText text="Honest prices. No agency markup." delay={100} />
        </h2>
        <p className="text-white/50 font-body font-light text-sm max-w-sm">
          Fixed prices, clear scope. You know what you're getting before we write a line of code.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto w-full">
        {PLANS.map(({ name, price, period, desc, features, cta, highlight }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            className={`${highlight ? 'liquid-glass-strong' : 'liquid-glass'} rounded-2xl p-7 flex flex-col gap-6 relative`}
          >
            {highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body whitespace-nowrap">
                  Most Popular
                </span>
              </div>
            )}

            <div className="flex flex-col gap-1">
              <span className="text-white/50 font-body text-xs font-medium tracking-widest uppercase">{name}</span>
              <div className="flex items-end gap-1.5 mt-1">
                <span className="text-4xl font-heading italic text-white">{price}</span>
                <span className="text-white/40 font-body text-sm mb-1">{period}</span>
              </div>
              <p className="text-white/60 font-body font-light text-sm leading-relaxed mt-2">{desc}</p>
            </div>

            <ul className="flex flex-col gap-2.5 flex-1">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="w-3.5 h-3.5 text-white/50 mt-0.5 shrink-0" />
                  <span className="text-white/70 font-body font-light text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`rounded-full px-5 py-2.5 font-body font-medium text-sm flex items-center justify-center gap-2 transition-colors ${
                highlight
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'liquid-glass text-white hover:bg-white/10'
              }`}
            >
              {cta}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-white/40 font-body text-sm">
        Need something custom?{' '}
        <a href="#contact" className="text-white/70 hover:text-white transition-colors underline underline-offset-2">
          Let's talk →
        </a>
      </p>
    </section>
  );
}
