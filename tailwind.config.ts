import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C1410',
        secondary: '#B8956B',
        accent: '#C45C3E',
        background: '#F7F3EE',
        text: '#1C1410',
        muted: '#6B635C',
      },
    },
  },
  plugins: [],
}
export default config
