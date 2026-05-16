import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="bg-hero-gradient pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-content">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">Who we are</span>
          <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
            About Ealize
          </h1>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted md:text-lg">
            <p>
              We built Ealize because we were tired of watching smart founders
              make slow decisions.
            </p>
            <p>
              Not because they lacked data, but because their data lived in five
              different tools, none of which talked to each other. Revenue in
              Stripe. Customers in HubSpot. Costs somewhere in a spreadsheet.
              Inbox chaos in Gmail.
            </p>
            <p>
              Ealize brings it all together. One dashboard. One source of truth.
              AI that surfaces what actually matters, before you think to ask.
            </p>
            <p>
              We&apos;re 17-year-old entrepreneurs from Finland who wanted to
              learn by doing, so we built the tool we wished existed. No data
              team. No enterprise budget. Just a clear picture of your business,
              from day one.
            </p>
            <p>
              We believe business intelligence shouldn&apos;t be reserved for
              companies that can afford it. It should just work, for any founder
              ready to grow with clarity.
            </p>
          </div>

          <p className="mt-12 font-heading text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Your entire business, intelligenced.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn-primary">
              Book a free call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/#products" className="btn-secondary">
              See our products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
