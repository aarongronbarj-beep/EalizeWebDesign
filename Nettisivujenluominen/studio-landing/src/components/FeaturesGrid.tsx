import { Globe, Smartphone, Bot, Megaphone, Server, Handshake } from 'lucide-react';
import { motion } from 'motion/react';
import BlurText from './BlurText';

const CARDS = [
  {
    icon: Globe,
    title: 'Website Design',
    body: 'Premium, conversion-focused sites with smooth animations. Looks expensive. Is accessible.',
    tag: 'Most Popular',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    body: 'Full-stack apps shipped straight to the App Store. Fast, scalable, tailored to your workflow.',
    tag: 'Mobile',
  },
  {
    icon: Bot,
    title: 'AI Integration',
    body: 'Smart search, predictive features, automated workflows embedded directly into your product.',
    tag: 'AI',
  },
  {
    icon: Megaphone,
    title: 'Animated Ads & Social',
    body: 'Eye-catching animated ads and automated social campaigns that drive engagement without draining budget.',
    tag: 'Marketing',
  },
  {
    icon: Server,
    title: 'API & Backend',
    body: 'Robust REST or GraphQL APIs, database design, auth, and all the infrastructure to scale.',
    tag: 'Backend',
  },
  {
    icon: Handshake,
    title: 'Ongoing Partnership',
    body: 'Retainer plans for continuous development, bug fixes, and strategic input. We grow with you.',
    tag: 'Support',
  },
];

export default function FeaturesGrid() {
  return (
    <section className="px-8 lg:px-16 py-16 flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
          Full Stack
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          <BlurText text="The full stack, covered." delay={100} />
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CARDS.map(({ icon: Icon, title, body, tag }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="liquid-glass rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-white/30 font-body text-xs font-medium">{tag}</span>
            </div>
            <h3 className="text-white font-body font-semibold text-base">{title}</h3>
            <p className="text-white/60 font-body font-light text-sm leading-relaxed">{body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
