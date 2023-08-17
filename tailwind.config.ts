import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      boxShadow: {
        'custom': '0px 4px 16px 0px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
export default config
