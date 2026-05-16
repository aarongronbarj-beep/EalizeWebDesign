import { Banknote, Eye, Radar } from 'lucide-react';

const pillars = [
  {
    icon: Banknote,
    eyebrow: 'Revenue clarity',
    title: 'Messy revenue flows (fixed)',
    body:
      'Stripe, invoicing, refunds, subscriptions — all stitched into one clean view. No more reconciling spreadsheets at the end of the month or guessing where the gap came from. See exactly what came in, what churned, and what is recurring next.',
    accent: 'from-brand-tint via-white to-brand/10',
  },
  {
    icon: Eye,
    eyebrow: 'Forward visibility',
    title: 'Run your business with a clear vision of the future',
    body:
      'Forecasts that actually use your data — not generic templates. Ealize projects cash flow, customer growth, and pipeline outcomes weeks ahead, so the decision you make today is already informed by the consequences you would have seen next month.',
    accent: 'from-cream via-white to-sky',
  },
  {
    icon: Radar,
    eyebrow: 'Market intelligence',
    title: 'Predict your and your competitors’ market openings',
    body:
      'Track where demand is moving, where competitors are pulling back, and where a window is about to open. Ealize watches the signals your team would never have time to read, and surfaces the ones you can act on first.',
    accent: 'from-emerald-50 via-white to-emerald-100',
  },
];

export default function Pillars() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What Ealize fixes</span>
          <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Three things every growing business gets wrong.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            And the three things Ealize quietly handles for you in the
            background.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-16 md:gap-24">
          {pillars.map((pillar, index) => {
            const reverse = index % 2 === 1;
            return (
              <div
                key={pillar.title}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                <div
                  className={`relative ${
                    reverse ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <div
                    className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-line bg-gradient-to-br ${pillar.accent} shadow-card`}
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/40 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/30 blur-3xl" />
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-white shadow-hero">
                      <pillar.icon className="h-12 w-12 text-brand" />
                    </div>
                    <div className="absolute bottom-5 right-5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                      0{index + 1} / 03
                    </div>
                  </div>
                </div>

                <div className={reverse ? 'md:order-1' : 'md:order-2'}>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
                    {pillar.eyebrow}
                  </span>
                  <h3 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[44px]">
                    {pillar.title}
                  </h3>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                    {pillar.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
