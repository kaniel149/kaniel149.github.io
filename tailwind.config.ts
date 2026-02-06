import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0A0A0A',
          card: '#1A1A1A',
          text: '#FFFFFF',
          muted: '#A0A0A0',
          accent: '#0066FF',
          'accent-hover': '#0052CC',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        heebo: ['Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
