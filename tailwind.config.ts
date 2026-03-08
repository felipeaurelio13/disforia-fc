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
          primary: '#B34173',
          secondary: '#84719D',
          bg: '#F5F5F5',
          surface: '#FFFFFF',
          text: '#111111',
          accent: '#87C2E3',
          sky: '#87C2E3',
          magenta: '#B34173',
          lavender: '#84719D',
          charcoal: '#111111',
          softWhite: '#F5F5F5',
          softGray: '#DAD6D9',
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
