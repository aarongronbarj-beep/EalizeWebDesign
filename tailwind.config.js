/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Plus Jakarta Sans'", 'system-ui', 'sans-serif'],
        body: ["'Inter'", 'system-ui', 'sans-serif'],
        mono: ["'Geist Mono'", 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0F0F0F',
          soft: '#1F1F1F',
        },
        muted: {
          DEFAULT: '#6B7280',
          soft: '#9CA3AF',
        },
        line: '#E5E7EB',
        surface: '#F9FAFB',
        cream: '#FFF4E8',
        sky: '#E8F0FF',
        brand: {
          DEFAULT: '#635BFF',
          dark: '#4F46E5',
          tint: '#EEF2FF',
        },
      },
      boxShadow: {
        pill: '0 4px 16px rgba(15,15,15,0.06), 0 1px 2px rgba(15,15,15,0.04)',
        card: '0 1px 3px rgba(15,15,15,0.06), 0 8px 24px rgba(15,15,15,0.04)',
        hero: '0 20px 60px rgba(15,15,15,0.08), 0 4px 16px rgba(15,15,15,0.04)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(120deg, #FFF4E8 0%, #FBF3EE 30%, #F0F1FA 65%, #E8F0FF 100%)',
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        pill: '999px',
      },
    },
  },
  plugins: [],
};
