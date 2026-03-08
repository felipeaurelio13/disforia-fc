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
          sky: '#87C2E3',
          magenta: '#B34173',
          lavender: '#84719D',
          charcoal: '#111111',
          softWhite: '#F5F5F5',
          softGray: '#DAD6D9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Iowan Old Style', 'Baskerville', 'Times New Roman', 'serif'],
      },
      maxWidth: {
        container: '1280px',
        narrow: '820px',
      },
      boxShadow: {
        surface: '0 10px 30px rgba(0, 0, 0, 0.14)',
        soft: '0 6px 20px rgba(0, 0, 0, 0.12)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
