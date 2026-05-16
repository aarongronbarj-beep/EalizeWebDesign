import { ArrowUpRight, BarChart3, LineChart, Users } from 'lucide-react';

const sidebarItems = [
  'Dashboard',
  'Clients',
  'Campaigns',
  'Analytics',
  'Reports',
  'Forms',
  'Integrations',
  'Settings',
];

const stats = [
  {
    label: 'Total Revenue',
    value: '$248,512',
    delta: '+34%',
    icon: BarChart3,
  },
  {
    label: 'New Clients',
    value: '1,284',
    delta: '+18%',
    icon: Users,
  },
];

const bars = [42, 68, 55, 78, 92, 71, 84];

export default function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[1080px]">
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-hero">
        <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#FF6259]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="ml-4 text-xs text-muted">
            ealize.app / dashboard
          </span>
        </div>

        <div className="grid grid-cols-[200px_1fr]">
          <aside className="border-r border-line bg-white p-4">
            <div className="flex items-center gap-2 px-2 pb-4">
              <span className="inline-block h-5 w-5 rounded-full bg-gradient-to-br from-brand to-ink" />
              <span className="font-heading text-sm font-bold">Ealize BI</span>
            </div>
            <p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
              Menu
            </p>
            <ul className="space-y-1">
              {sidebarItems.map((item, i) => (
                <li
                  key={item}
                  className={`rounded-lg px-2 py-1.5 text-xs ${
                    i === 0
                      ? 'bg-brand-tint font-semibold text-brand'
                      : 'text-muted hover:bg-surface hover:text-ink'
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          <main className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted">Good afternoon,</p>
                <h3 className="font-heading text-lg font-bold">Ealize Team</h3>
              </div>
              <button className="inline-flex items-center gap-1 rounded-pill bg-ink px-3 py-1.5 text-xs font-semibold text-white">
                Add Client
                <ArrowUpRight className="h-3 w-3" />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-line bg-surface p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] text-muted">{stat.label}</p>
                    <stat.icon className="h-3.5 w-3.5 text-muted" />
                  </div>
                  <p className="mt-2 font-heading text-xl font-bold">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-emerald-600">
                    {stat.delta} vs last month
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-xl border border-line bg-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LineChart className="h-3.5 w-3.5 text-muted" />
                  <p className="text-xs font-semibold">Weekly performance</p>
                </div>
                <p className="text-[11px] text-muted">Last 7 days</p>
              </div>
              <div className="mt-4 flex h-24 items-end gap-2">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-brand/15 to-brand"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="pointer-events-none absolute -left-12 -top-8 hidden h-32 w-32 rounded-full bg-cream blur-3xl md:block" />
      <div className="pointer-events-none absolute -bottom-10 -right-12 hidden h-40 w-40 rounded-full bg-sky blur-3xl md:block" />
    </div>
  );
}
