import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Products', href: '/#products' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/products/development#pricing' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="pointer-events-auto flex w-full max-w-[960px] items-center justify-between gap-4 rounded-pill border border-line/80 bg-white/85 px-3 py-2 shadow-pill backdrop-blur-md">
        <Link to="/" className="flex items-center gap-2 pl-3 pr-2">
          <span className="inline-block h-6 w-6 rounded-full bg-gradient-to-br from-brand to-ink" />
          <span className="font-heading text-base font-bold tracking-tight text-ink">
            Ealize
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.href}
                className="rounded-pill px-3 py-2 text-sm font-medium text-muted transition hover:bg-surface hover:text-ink"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="btn-primary px-5 py-2.5 text-sm">
          Get in touch
        </Link>
      </nav>
    </header>
  );
}
