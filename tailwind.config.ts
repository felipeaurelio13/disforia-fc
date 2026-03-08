import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#D4005A',
          secondary: '#003366',
          bg: '#F8F9FA',
          surface: '#FFFFFF',
          text: '#1A1A1A',
          accent: '#00B4D8',
          sky: '#00B4D8',
          magenta: '#D4005A',
          lavender: '#4A5F88',
          charcoal: '#1A1A1A',
          softWhite: '#1A1A1A',
          softGray: '#D9E0E8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
        narrow: '860px',
      },
      boxShadow: {
        soft: '0 12px 26px rgba(0, 51, 102, 0.1)',
        lift: '0 18px 36px rgba(0, 51, 102, 0.16)',
      },
      transitionTimingFunction: {
        smooth: 'ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
