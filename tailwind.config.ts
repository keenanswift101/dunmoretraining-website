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
          DEFAULT: '#1a2f5e',
          dark: '#111f3f',
          light: '#2a4a8e',
        },
        accent: {
          DEFAULT: '#c9a227',
          light: '#e8be45',
          dark: '#a8841f',
        },
        surface: {
          DEFAULT: '#ffffff',
          alt: '#f8f9fc',
          dark: '#0f1929',
        },
        dunmore: {
          border: '#e2e8f0',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, rgba(26,47,94,0.92) 0%, rgba(26,47,94,0.75) 60%, rgba(26,47,94,0.30) 100%)',
      },
    },
  },
  plugins: [],
}

export default config
