/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#b8953a',
          light: '#d4af60',
          glow: 'rgba(184,149,58,.18)',
        },
        ink: {
          DEFAULT: '#0b0b0b',
          2: '#111111',
        },
        cream: {
          DEFAULT: '#f4efe6',
          dim: 'rgba(244,239,230,.55)',
          faint: 'rgba(244,239,230,.08)',
        },
        navy: {
          DEFAULT: '#151e35',
          light: '#1e2a47',
        },
        mid: 'rgba(244,239,230,.38)',
        border: 'rgba(244,239,230,.07)',
        whatsapp: '#25D366',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      spacing: {
        section: '116px',
        'section-sm': '80px',
      },
      borderRadius: {
        btn: '4px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
