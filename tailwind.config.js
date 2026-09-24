/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Deep Green SaaS Brand Palette
        brand: {
          darkest: '#050D0A',
          darker: '#07110E',
          dark: '#075C46',
          primary: '#0B6B50',
          medium: '#087A5A',
          accent: '#159B70',
          light: '#18A979',
          soft: '#E9F7F1',
          softest: '#F1FAF6',
        },
        surface: {
          light: '#FFFFFF',
          bg: '#F8FAF8',
          subtle: '#F2F6F3',
          border: '#E2ECE6',
          borderHover: '#B9DEC9',
        },
        text: {
          primary: '#172033',
          secondary: '#667085',
          muted: '#94A3B8',
        },
        accent: {
          blue: '#4F7CFF',
          purple: '#7C5CFF',
          amber: '#F5B83D',
          red: '#EF5B63',
          cyan: '#00F2FE',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'saas': '0 2px 8px -2px rgba(16, 24, 40, 0.06), 0 4px 16px -4px rgba(16, 24, 40, 0.08)',
        'saas-lg': '0 12px 32px -8px rgba(7, 92, 70, 0.12), 0 4px 12px -2px rgba(16, 24, 40, 0.04)',
        'glow-green': '0 0 25px rgba(21, 155, 112, 0.35)',
        'glow-hero': '0 0 50px rgba(11, 107, 80, 0.45)',
      },
    },
  },
  plugins: [],
}
