/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1c4595',
        secondary: '#e76a24',
        dark: '#01080a',
        light: '#e7e5e8',
        accent: '#fbbc42',
      },
      fontFamily: {
        name: ['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1c4595',
          secondary: '#e76a24',
          accent: '#fbbc42',
          neutral: '#01080a',
          'base-100': '#e7e5e8',
        },
      },
    ],
  },
};

export default config;
