import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#061A34',
        steel: '#566173',
        ash: '#D9DEE6',
        signal: '#C1272D',
        ink: '#0A0F18',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 20px 35px -20px rgba(4, 16, 34, 0.4)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(120deg, rgba(6,26,52,0.95) 0%, rgba(6,26,52,0.72) 48%, rgba(10,15,24,0.85) 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
