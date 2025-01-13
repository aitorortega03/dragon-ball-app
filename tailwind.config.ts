import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1c4595',  // Deep Blue
        secondary: '#e76a24', // Orange
        dark: '#01080a', // Near Black
        light: '#e7e5e8', // Light Gray
        accent: '#fbbc42', // Bright Yellow
      },
      fontFamily: {
        name: ['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
