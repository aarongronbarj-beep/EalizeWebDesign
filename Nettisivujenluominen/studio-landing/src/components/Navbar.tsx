import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

function EalizeLogo() {
  return (
    <svg width="110" height="32" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="16" r="3.5" fill="white" opacity="0.9" />
      <circle cx="23" cy="7" r="2.5" fill="white" opacity="0.6" />
      <circle cx="23" cy="25" r="2.5" fill="white" opacity="0.6" />
      <circle cx="37" cy="16" r="3.5" fill="white" opacity="0.9" />
      <line x1="12.1" y1="14.1" x2="20.9" y2="8.9" stroke="white" strokeWidth="1.2" opacity="0.4" />
      <line x1="12.1" y1="17.9" x2="20.9" y2="23.1" stroke="white" strokeWidth="1.2" opacity="0.4" />
      <line x1="25.5" y1="7.5" x2="33.5" y2="13.5" stroke="white" strokeWidth="1.2" opacity="0.4" />
      <line x1="25.5" y1="24.5" x2="33.5" y2="18.5" stroke="white" strokeWidth="1.2" opacity="0.4" />
      <text x="48" y="21" fontFamily="'Instrument Serif', serif" fontSize="17" fontStyle="italic" fill="white" letterSpacing="-0.3">ealize</text>
    </svg>
  );
}

export default function Navbar() {
  const [lang, setLang] = useState<'EN' | 'FI'>('EN');

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between">
      <EalizeLogo />

      <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1 gap-1">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}

        <div className="flex items-center gap-0.5 mx-1">
          {(['EN', 'FI'] as const).map((code) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              className={`px-2.5 py-1 text-xs font-semibold font-body rounded-full transition-colors ${
                lang === code ? 'bg-white/15 text-white' : 'text-white/50 hover:text-white/80'
              }`}
            >
              {code}
            </button>
          ))}
        </div>

        <a
          href="#contact"
          className="flex items-center gap-1 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-body font-medium hover:bg-white/90 transition-colors"
        >
          Get Started
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <a
        href="#contact"
        className="md:hidden flex items-center gap-1 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-body font-medium"
      >
        Get Started
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </nav>
  );
}
