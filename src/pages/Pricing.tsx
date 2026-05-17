import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

const EMAIL = 'ealizesolutions@gmail.com';

export default function Pricing() {
  return (
    <section className="bg-hero-gradient pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-content text-center">
        <span className="eyebrow">Pricing</span>
        <h1 className="mx-auto mt-6 max-w-3xl font-heading text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
          Pricing is scoped per project.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          Every business runs on a different stack and a different problem, so
          we quote each engagement individually. Tell us what you need and
          we&apos;ll come back with a clear, honest number.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link to="/contact" className="btn-primary">
            Contact sales
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-pill border border-line bg-white px-5 py-3 font-mono text-sm font-medium text-ink shadow-pill transition hover:border-brand hover:text-brand"
          >
            <Mail className="h-4 w-4" />
            {EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
