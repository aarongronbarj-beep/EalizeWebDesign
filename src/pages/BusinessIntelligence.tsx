import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Plug,
  Sparkles,
  Zap,
  TrendingUp,
  Users,
  Mail,
  Megaphone,
  BarChart3,
  RefreshCw,
} from 'lucide-react';

const integrations = [
  {
    name: 'Gmail',
    shortLabel: 'G',
    color: '#EA4335',
    textOnColor: 'white' as const,
    status: 'Live',
    pulls: 'Inbox triage, AI-extracted deadlines, action items, and vendor mentions — synced automatically.',
  },
  {
    name: 'Stripe',
    shortLabel: 'S',
    color: '#635BFF',
    textOnColor: 'white' as const,
    status: 'Live',
    pulls: 'Payments, subscriptions, refunds and disputes — synced in real time.',
  },
  {
    name: 'HubSpot',
    shortLabel: 'H',
    color: '#FF7A59',
    textOnColor: 'white' as const,
    status: 'Live',
    pulls: 'Contacts, open deals, pipeline stages, and customer segments — always current.',
  },
  {
    name: 'QuickBooks',
    shortLabel: 'Qb',
    color: '#2CA01C',
    textOnColor: 'white' as const,
    status: 'Live',
    pulls: 'Invoices, expenses, and tax-categorized line items pulled into your ledger.',
  },
  {
    name: 'Google Ads',
    shortLabel: 'GA',
    color: '#4285F4',
    textOnColor: 'white' as const,
    status: 'Soon',
    pulls: 'Ad spend, conversions, ROAS, and keyword performance — all in one place.',
  },
  {
    name: 'Meta Ads',
    shortLabel: 'M',
    color: '#0866FF',
    textOnColor: 'white' as const,
    status: 'Soon',
    pulls: 'Facebook and Instagram metrics, audience insights, and cost-per-result tracking.',
  },
];

const modules = [
  {
    icon: TrendingUp,
    eyebrow: 'Revenue',
    title: 'Know your real numbers.',
    body: 'MRR, ARR, and churn rate tracked live from Stripe. Revenue broken down by product, customer segment, and stream — with sparklines on every metric so you see the trend at a glance.',
    stats: [
      { label: 'MRR', value: '$28,077', delta: '+3.2%', up: true },
      { label: 'ARR', value: '$336,924', delta: '+15.4%', up: true },
      { label: 'Churn Rate', value: '2.1%', delta: '−14.3%', up: true },
    ],
  },
  {
    icon: Users,
    eyebrow: 'Customers',
    title: 'Your full pipeline, one screen.',
    body: 'HubSpot contacts and deals pulled into a live kanban — Lead, Qualified, Proposal, Negotiation, Closed Won. See total pipeline value, days in stage, and which accounts are at risk.',
    stats: [
      { label: 'Contacts', value: '614', delta: '+7.4%', up: true },
      { label: 'Open Deals', value: '35', delta: '+12.9%', up: true },
      { label: 'Pipeline', value: '$326,500', delta: '+9.1%', up: true },
    ],
  },
  {
    icon: Mail,
    eyebrow: 'AI Inbox',
    title: 'Your inbox, already triaged.',
    body: 'Gmail syncs every few minutes. Ealize reads each message and extracts deadlines, action items, and vendor mentions — so your most important emails are never buried.',
    bullets: [
      'Deadlines pulled from email bodies, with one-click calendar add',
      'Action items surfaced as checkboxes — mark done without leaving Ealize',
      'Categories: Finance, Legal, Urgent, Deadlines, Customer',
    ],
  },
  {
    icon: Megaphone,
    eyebrow: 'Marketing',
    title: 'Ad spend meets revenue.',
    body: 'Google Ads and Meta Ads land soon. When they do, you will see spend, conversions, ROAS, and cost-per-result alongside your Stripe revenue — so attribution is never a guess.',
    comingSoon: true,
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
    icon: RefreshCw,
    title: 'Syncs every few minutes',
    body: 'Data refreshes automatically in the background. Your dashboard is always current.',
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
      {/* Hero */}
      <section className="relative flex h-screen min-h-[640px] flex-col overflow-hidden bg-hero-gradient">
        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-cream/60 blur-3xl xl:h-96 xl:w-96" />
        <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-sky/60 blur-3xl xl:h-[28rem] xl:w-[28rem]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center_top,_rgba(99,91,255,0.06),_transparent_60%)]" />

        <div className="container-content relative flex flex-1 flex-col pt-24 md:pt-28 xl:pt-32">
          <div className="mx-auto max-w-3xl text-center xl:max-w-4xl">
            <span className="eyebrow justify-center">01 · Product</span>
            <h1 className="mt-3 font-heading text-3xl font-bold leading-[1.05] tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[64px] 2xl:text-[72px]">
              Business{' '}
              <span className="relative inline-block whitespace-nowrap text-brand">
                <span className="relative z-10">Intelligence</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-brand/60" />
              </span>{' '}
              built for clarity.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base xl:text-lg">
              Revenue, customers, inbox, and marketing — one dashboard, always in sync.
            </p>

            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/contact" className="btn-primary">
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#integrations" className="btn-secondary">
                See connected sources
              </a>
            </div>
          </div>

          <div className="relative mx-auto mt-6 flex min-h-0 w-full max-w-6xl flex-1 items-end justify-center md:mt-8 xl:mt-10">
            <img
              src="/dashboardpage.png"
              alt="Ealize Business Intelligence dashboard"
              className="relative z-10 block max-h-full w-auto max-w-full rounded-t-2xl object-contain drop-shadow-[0_30px_60px_rgba(15,15,15,0.18)] xl:rounded-t-3xl"
            />
          </div>
        </div>
      </section>

      {/* Module showcase */}
      <section className="bg-white py-20 md:py-28 xl:py-36 2xl:py-44">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center xl:max-w-3xl">
            <span className="eyebrow">
              <BarChart3 className="h-3.5 w-3.5" />
              What's inside
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl">
              Four views. Everything covered.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg xl:text-xl">
              Each module pulls from a dedicated integration and stays in sync automatically.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16 xl:grid-cols-4 xl:gap-6 2xl:gap-8">
            {modules.map((mod) => (
              <div
                key={mod.eyebrow}
                className="relative rounded-2xl border border-line bg-surface p-6 xl:p-8 2xl:p-10"
              >
                {mod.comingSoon && (
                  <span className="absolute top-5 right-5 rounded-full bg-amber-100 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-amber-700">
                    Coming soon
                  </span>
                )}
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand shadow-sm xl:h-12 xl:w-12">
                  <mod.icon className="h-5 w-5 xl:h-6 xl:w-6" />
                </span>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-brand">
                  {mod.eyebrow}
                </p>
                <h3 className="mt-1 font-heading text-lg font-bold tracking-tight text-ink xl:text-xl">
                  {mod.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted xl:text-base">{mod.body}</p>

                {mod.stats && (
                  <div className="mt-5 grid grid-cols-3 gap-2 xl:gap-3">
                    {mod.stats.map((s) => (
                      <div key={s.label} className="min-w-0 rounded-xl border border-line bg-white p-2.5 xl:p-3">
                        <p className="truncate font-mono text-[9px] uppercase tracking-widest text-muted xl:text-[10px]">
                          {s.label}
                        </p>
                        <p className="mt-1 truncate font-heading text-sm font-bold text-ink xl:text-base">{s.value}</p>
                        <p className={`mt-0.5 text-xs font-medium ${s.up ? 'text-emerald-600' : 'text-red-500'}`}>
                          {s.delta}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {mod.bullets && (
                  <ul className="mt-5 space-y-2">
                    {mod.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted xl:text-base">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="bg-surface py-20 md:py-28 xl:py-36 2xl:py-44">
        <div className="container-content">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-24 2xl:gap-32">
            {/* Left */}
            <div className="flex-1">
              <span className="eyebrow">
                <Plug className="h-3.5 w-3.5" />
                Connected sources
              </span>
              <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl">
                All your tools, one view.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg xl:text-xl">
                Plug in once. Ealize handles the rest — pulling, normalizing and
                reconciling your data every few minutes.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:gap-4">
                {integrations.map((integration) => (
                  <article
                    key={integration.name}
                    className="group relative overflow-hidden rounded-2xl border border-line bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-hero xl:p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-heading text-sm font-bold shadow-sm xl:h-12 xl:w-12 xl:text-base"
                        style={{
                          backgroundColor: integration.color,
                          color: integration.textOnColor === 'white' ? '#FFFFFF' : '#0F0F0F',
                        }}
                      >
                        {integration.shortLabel}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-heading text-base font-bold tracking-tight text-ink xl:text-lg">
                          {integration.name}
                        </h3>
                        {integration.status === 'Live' ? (
                          <span className="mt-0.5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-emerald-600">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Live
                          </span>
                        ) : (
                          <span className="mt-0.5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-amber-600">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                            Coming soon
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted xl:text-sm">
                      {integration.pulls}
                    </p>
                  </article>
                ))}
              </div>

              <p className="mt-6 text-sm text-muted xl:mt-8 xl:text-base">
                More sources land monthly. Need something specific?{' '}
                <Link to="/contact" className="font-semibold text-ink underline-offset-4 hover:underline">
                  Tell us
                </Link>
                .
              </p>
            </div>

            {/* Right: dashboard screenshot */}
            <div className="relative flex flex-1 items-center justify-center">
              <div className="pointer-events-none absolute -left-10 top-10 h-48 w-48 rounded-full bg-cream/80 blur-3xl xl:h-72 xl:w-72" />
              <div className="pointer-events-none absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-sky/80 blur-3xl xl:h-80 xl:w-80" />
              <img
                src="/latest-dashboard.png"
                alt="Ealize integration dashboard"
                className="relative z-10 w-full rounded-2xl drop-shadow-[0_30px_60px_rgba(15,15,15,0.18)] xl:rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-white py-20 md:py-24 xl:py-32 2xl:py-40">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center xl:max-w-3xl">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              How sync works
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl">
              Set it up once. Forget it forever.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-14 md:grid-cols-4 xl:gap-6 2xl:gap-8">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-line bg-surface p-6 xl:p-8 2xl:p-10"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand shadow-sm xl:h-12 xl:w-12">
                  <point.icon className="h-5 w-5 xl:h-6 xl:w-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold tracking-tight text-ink xl:text-xl">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted xl:text-base">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient py-16 md:py-20 xl:py-28 2xl:py-36">
        <div className="container-content text-center">
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl xl:max-w-4xl xl:text-6xl 2xl:text-7xl">
            Ready to see your real numbers?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg xl:max-w-2xl xl:text-xl 2xl:text-2xl">
            Book a 20-minute call. We&apos;ll connect a sandbox to your stack
            and show you what your data looks like, unified.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center xl:mt-10 xl:gap-4">
            <Link to="/contact" className="btn-primary w-full sm:w-auto xl:px-8 xl:py-4 xl:text-base">
              Book a free call
              <ArrowRight className="h-4 w-4 xl:h-5 xl:w-5" />
            </Link>
            <Link to="/#products" className="btn-secondary w-full sm:w-auto xl:px-8 xl:py-4 xl:text-base">
              Browse all products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
