import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secondary: '#B8935A',
        accent: '#B8935A',
        gold: {
          light: '#D9BF8C',
          DEFAULT: '#B8935A',
          dark: '#8C6A3C',
        },
        background: '#F6EFE6',
        cream: '#FBF7F1',
        text: '#111111',
        muted: '#6B6259',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
