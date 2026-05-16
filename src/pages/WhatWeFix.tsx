import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Pillars from '@/components/sections/Pillars';

export default function WhatWeFix() {
  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-content text-center">
          <span className="eyebrow">What we fix</span>
          <h1 className="mx-auto mt-6 max-w-3xl font-heading text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
            The three things every growing business gets wrong.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Ealize quietly handles them in the background so you can run on
            clarity instead of guesswork.
          </p>
        </div>
      </section>

      <Pillars />

      <section className="bg-white pb-24 pt-4 md:pb-32">
        <div className="container-content text-center">
          <Link to="/contact" className="btn-primary">
            Book a free call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
