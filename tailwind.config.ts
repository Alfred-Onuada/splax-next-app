import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme';

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
      },
      fontFamily: {
        'sora': ['Sora', ...defaultTheme.fontFamily.sans],
        'nunito': ['Nunito', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
export default config
