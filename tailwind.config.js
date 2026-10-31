/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#F0F7F4',
          100: '#DDF3E8', // secondary mint
          200: '#BDE7D3',
          300: '#8CD3B3',
          400: '#4DAF87',
          500: '#2A8F68',
          600: '#1F7554',
          700: '#175C42',
          800: '#124C3A', // primary forest green
          900: '#0D382B',
          950: '#062018',
        },
        mint: {
          50: '#F4FBF7',
          100: '#DDF3E8', // Secondary
          200: '#C2E8D7',
          300: '#99D7BE',
          400: '#64BE9C',
          500: '#3CA37E',
        },
        charcoal: {
          DEFAULT: '#26352E',
          soft: '#3A4D44',
          muted: '#627A6E',
          light: '#8FA49A'
        },
        surface: {
          light: '#F7FAF8',
          subtle: '#EEF5F1',
          pure: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(18, 76, 58, 0.08)',
        'elevated': '0 12px 32px -4px rgba(18, 76, 58, 0.12)',
        'glow': '0 0 25px rgba(221, 243, 232, 0.6)',
      }
    },
  },
  plugins: [],
}
