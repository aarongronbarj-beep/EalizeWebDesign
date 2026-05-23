const stats = [
  {
    value: '4',
    label: 'AI products in development',
    sub: 'BI, ads, investing, and dev services',
  },
  {
    value: '17',
    label: 'Years old',
    sub: 'Fresh perspective. No agency overhead.',
  },
  {
    value: '2–3wk',
    label: 'Average delivery',
    sub: 'From first call to live in production',
  },
];

export default function WhyEalize() {
  return (
    <section className="border-y border-line bg-surface py-20 md:py-24">
      <div className="container-content">
        <div className="grid gap-10 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-heading text-5xl font-bold tracking-tight text-ink md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-base font-semibold text-ink">
                {stat.label}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
