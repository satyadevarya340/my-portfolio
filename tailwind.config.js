/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: '#F7F5FF',
          alt: '#F3F1FA',
          pure: '#FAF9FF',
          card: '#FFFFFF',
          cardAlt: '#FAF8FF',
        },
        navy: {
          950: '#0C0E1E',
          900: '#11142B',
          800: '#17152E',
          700: '#262447',
        },
        muted: {
          text: '#55546A',
          subtle: '#7E7C94',
          border: 'rgba(142, 107, 255, 0.12)',
        },
        lavender: {
          50: '#FAF9FF',
          100: '#F3F1FA',
          200: '#EBE7F7',
          300: '#D8CEFF',
          400: '#B8A7FF',
          500: '#8E6BFF',
          600: '#7344FF',
        },
        accent: {
          violet: '#8E6BFF',
          softPurple: '#B8A7FF',
          magenta: '#E66BFF',
          softPink: '#F4B7EA',
          lightPink: '#F9E8F7',
          subtleBlue: '#A9C9FF',
          emerald: '#10B981',
          gold: '#F5B83D',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'pearl': '0 20px 40px -15px rgba(142, 107, 255, 0.08), 0 0 1px 1px rgba(142, 107, 255, 0.06)',
        'pearl-hover': '0 30px 60px -15px rgba(142, 107, 255, 0.16), 0 0 1px 1px rgba(142, 107, 255, 0.12)',
        'glow-lavender': '0 0 30px rgba(184, 167, 255, 0.35)',
        'glow-violet': '0 0 30px rgba(142, 107, 255, 0.3)',
        'glow-pink': '0 0 30px rgba(244, 183, 234, 0.35)',
        'card': '0 10px 30px -5px rgba(17, 20, 43, 0.04)',
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.03)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
