import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E94E4E',
          hover: '#d43d3d',
        },
        accent: {
          DEFAULT: '#2A9D8F',
          hover: '#238477',
        },
        brown: {
          DEFAULT: '#8B4513',
          light: '#a25518',
        },
        cream: '#FAF9F6',
        text: {
          DEFAULT: '#2C3E50',
          light: '#34495e',
        },
      },
      boxShadow: {
        'neumorph': '20px 20px 60px #d4d3d1, -20px -20px 60px #ffffff',
        'neumorph-inset': 'inset 20px 20px 60px #d4d3d1, inset -20px -20px 60px #ffffff',
        'brutal': '4px 4px 0px #000000',
      },
      backdropBlur: {
        'glass': 'blur(10px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;