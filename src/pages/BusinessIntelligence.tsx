import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Plug,
  Sparkles,
  Zap,
} from 'lucide-react';

type Integration = {
  name: string;
  shortLabel: string;
  color: string;
  textOnColor: 'white' | 'ink';
  pulls: string;
};

const integrations: Integration[] = [
  {
    name: 'Stripe',
    shortLabel: 'S',
    color: '#635BFF',
    textOnColor: 'white',
    pulls:
      'Payments, subscriptions, refunds and disputes — synced in real time.',
  },
  {
    name: 'QuickBooks',
    shortLabel: 'Qb',
    color: '#2CA01C',
    textOnColor: 'white',
    pulls:
      'Invoices, expenses, and tax-categorized line items pulled into your ledger.',
  },
  {
    name: 'Xero',
    shortLabel: 'X',
    color: '#13B5EA',
    textOnColor: 'white',
    pulls:
      'GL accounts, bank reconciliation, and financial reports — always reconciled.',
  },
  {
    name: 'PayPal',
    shortLabel: 'P',
    color: '#003087',
    textOnColor: 'white',
    pulls:
      'Transactions, disputes and payout history merged with the rest of your revenue.',
  },
  {
    name: 'Square',
    shortLabel: 'Sq',
    color: '#0F0F0F',
    textOnColor: 'white',
    pulls:
      'In-person sales, terminal payments and refunds — unified with online revenue.',
  },
  {
    name: 'Chargebee',
    shortLabel: 'Cb',
    color: '#FF7846',
    textOnColor: 'white',
    pulls:
      'Recurring billing, dunning workflows, and plan changes tracked end-to-end.',
  },
];

const trustPoints = [
  {
    icon: Zap,
    title: '2-minute setup',
    body: 'Connect any source in a couple of clicks. No engineering required.',
  },
  {
    icon: Lock,
    title: 'Read-only by default',
    body: 'Ealize never moves money or modifies your records. We only ever read.',
  },
  {
    icon: CheckCircle2,
    title: 'Encrypted end-to-end',
    body: 'Tokens are scoped, rotated, and encrypted at rest. SOC 2 in progress.',
  },
];

export default function BusinessIntelligence() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-16 md:pt-36 md:pb-24">
        <div className="container-content">
          <div className="grid items-center gap-12 md:grid-cols-[1.05fr_1fr] md:gap-10 lg:gap-16">
            <div>
              <span className="eyebrow">01 · Product</span>
              <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-[64px]">
                Business{' '}
                <span className="relative inline-block whitespace-nowrap text-brand">
                  <span className="relative z-10">Intelligence</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-brand/60" />
                </span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                One dashboard for everything you bill, charge, and refund. Stop
                reconciling six different tools — Ealize stitches your payments
                stack into a single source of truth.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/contact" className="btn-primary">
                  Book a demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="#integrations" className="btn-secondary">
                  See connected sources
                </a>
              </div>
            </div>

            <div className="relative flex items-start justify-center md:-mt-16 lg:-mt-24">
              <div className="pointer-events-none absolute -left-10 top-10 h-48 w-48 rounded-full bg-cream/80 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-sky/80 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,91,255,0.08),_transparent_60%)]" />

              <img
                src="/dashboardpage.png"
                alt="Ealize Business Intelligence dashboard preview"
                className="relative z-10 w-full max-w-[520px] rounded-3xl drop-shadow-[0_30px_60px_rgba(15,15,15,0.18)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="integrations" className="bg-surface py-24 md:py-32">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">
              <Plug className="h-3.5 w-3.5" />
              Connected sources
            </span>
            <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight md:text-5xl">
              All your billing tools, one view.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Plug in once. Ealize handles the rest — pulling, normalizing and
              reconciling your revenue every few minutes.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration) => (
              <article
                key={integration.name}
                className="group relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-hero"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-heading text-base font-bold shadow-sm"
                    style={{
                      backgroundColor: integration.color,
                      color:
                        integration.textOnColor === 'white' ? '#FFFFFF' : '#0F0F0F',
                    }}
                  >
                    {integration.shortLabel}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading text-lg font-bold tracking-tight text-ink">
                      {integration.name}
                    </h3>
                    <span className="mt-0.5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-emerald-600">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Live
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  {integration.pulls}
                </p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted">
            More sources land monthly. Need something specific?{' '}
            <Link to="/contact" className="font-semibold text-ink underline-offset-4 hover:underline">
              Tell us
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-white py-24 md:py-28">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              How sync works
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Set it up once. Forget it forever.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand shadow-sm">
                  <point.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold tracking-tight text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-hero-gradient py-20 md:py-24">
        <div className="container-content text-center">
          <h2 className="mx-auto max-w-2xl font-heading text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            Ready to see your real numbers?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg">
            Book a 20-minute call. We&apos;ll connect a sandbox to your stack
            and show you what your data looks like, unified.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Book a free call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/#products" className="btn-secondary">
              Browse all products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
