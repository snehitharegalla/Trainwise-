/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FAF8F4',
          100: '#F7F5EF', // Main background
          200: '#EFECE2',
          300: '#E5E1D7', // Borders
          400: '#D5D0C3',
        },
        forest: {
          50: '#F2F6F4',
          100: '#E1EBE7',
          200: '#C2D7CE',
          300: '#8FB8A7',
          500: '#3D7A65',
          600: '#346E5A',
          700: '#285747', // Primary forest green
          800: '#1E4336',
          900: '#153127',
        },
        sage: {
          50: '#F6F8F5',
          100: '#E7EDE5', // Secondary sage green
          200: '#D4E0D1',
          300: '#BDCEB9',
          500: '#7B9673',
          700: '#4D6446',
        },
        coral: {
          50: '#FDF7F5',
          100: '#F9ECE8',
          200: '#F4D5CC',
          300: '#EAB2A4',
          400: '#DF8E7B',
          500: '#D77D68', // Accent coral (critical, alert)
          600: '#C0604A',
          700: '#9B4430',
        },
        ochre: {
          50: '#FBF9F2',
          100: '#F7F1E1',
          200: '#EFE2C2',
          400: '#D6B778',
          500: '#C6A15B', // Supporting warm ochre (attention)
          600: '#A9843E',
          700: '#856429',
        },
        charcoal: {
          50: '#F7F8F7',
          100: '#EBECEB',
          200: '#D5D8D5',
          400: '#878F88',
          500: '#68716A', // Muted text
          700: '#3B423D',
          800: '#282D29', // Main text
          900: '#181C19',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(40, 45, 41, 0.04)',
        'card': '0 4px 16px rgba(40, 45, 41, 0.05), 0 1px 2px rgba(40, 45, 41, 0.03)',
        'elevated': '0 12px 30px rgba(40, 45, 41, 0.08), 0 2px 6px rgba(40, 45, 41, 0.04)',
      }
    },
  },
  plugins: [],
}
