import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const tags = ['AI optimization', 'Business growth'];

const stats = [
  { value: '4 products', sub: 'AI tools in development' },
  { value: '17 yrs', sub: 'Founders behind the build' },
  { value: '2–3 wk', sub: 'Average delivery time' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-16 md:pt-36 md:pb-24">
      <div className="container-content">
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_1fr] md:gap-10 lg:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 rounded-pill border border-line/80 bg-white/80 px-3 py-1 text-xs font-medium text-ink backdrop-blur"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-[68px]">
              Start your path{' '}
              <span className="relative inline-block whitespace-nowrap text-brand">
                <span className="relative z-10">to smarter*</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-brand/60" />
              </span>
              <br />
              business growth now!
            </h1>

            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand to-ink" />
                <div className="absolute inset-1 rounded-full bg-white" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cream via-sky to-brand/30" />
                <div className="absolute inset-0 flex items-center justify-center font-heading text-xs font-bold text-ink">
                  AI
                </div>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted">
                Automate the busywork, integrate every tool you use, and grow
                faster with AI built for real businesses.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-primary">
                Book a free call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/#products" className="btn-secondary">
                See our products
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-line/60 pt-8">
              {stats.map((stat) => (
                <div key={stat.value}>
                  <p className="font-heading text-3xl font-bold tracking-tight text-ink md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted md:text-sm">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-start justify-center md:-mt-16 lg:-mt-24">
            <div className="pointer-events-none absolute -left-10 top-10 h-48 w-48 rounded-full bg-cream/80 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-sky/80 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,91,255,0.08),_transparent_60%)]" />

            <img
              src="/hero.png"
              alt="Ealize AI products — business intelligence dashboard and automation"
              className="relative z-10 w-full max-w-[520px] rounded-3xl drop-shadow-[0_30px_60px_rgba(15,15,15,0.18)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
