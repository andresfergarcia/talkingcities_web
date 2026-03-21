import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4a7c59',
          dark: '#3a6347',
          light: '#5e9a70',
        },
        accent: {
          DEFAULT: '#c0392b',
          light: '#e74c3c',
        },
        gold: '#d4a843',
        text: {
          DEFAULT: '#2c3e50',
          light: '#64748b',
        },
        bg: {
          DEFAULT: '#fafaf8',
          alt: '#f0ece4',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
