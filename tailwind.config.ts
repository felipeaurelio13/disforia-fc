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
          primary: '#BD2B71',
          secondary: '#835CA3',
          bg: '#FFFFFF',
          surface: '#FFFFFF',
          text: '#000000',
          accent: '#89C2E3',
          sky: '#89C2E3',
          magenta: '#BD2B71',
          lavender: '#835CA3',
          charcoal: '#000000',
          softWhite: '#FFFFFF',
          softGray: '#D9D9D9',
        },
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Archivo Variable', 'Archivo', 'Inter Variable', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1220px',
        narrow: '860px',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(17, 17, 17, 0.08)',
        lift: '0 16px 32px rgba(17, 17, 17, 0.12)',
      },
      transitionTimingFunction: {
        smooth: 'ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
