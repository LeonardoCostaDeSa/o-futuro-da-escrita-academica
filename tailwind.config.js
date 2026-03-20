/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './*.{tsx,ts}',
    './components/**/*.{tsx,ts}',
    './hooks/**/*.{tsx,ts}',
  ],
  theme: {
    extend: {
      colors: {
        master: {
          deep: '#04182b',
          slate: '#132741',
          offwhite: '#f8f8f8',
          light: '#f2f3f5',
          accent: '#2b9cd4',
          primary: '#0066a6',
          green: '#01dea9',
          gold: '#d4af37',
        }
      },
      fontFamily: {
        sans: ['Questrial', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'valuable-glow': 'valuable-glow 3s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
      },
      keyframes: {
        'valuable-glow': {
          '0%, 100%': {
            'box-shadow': '0 0 8px rgba(43, 156, 212, 0.15)',
            'border-color': 'rgba(43, 156, 212, 0.2)',
            transform: 'scale(1)',
          },
          '50%': {
            'box-shadow': '0 0 20px rgba(43, 156, 212, 0.45)',
            'border-color': 'rgba(43, 156, 212, 0.6)',
            transform: 'scale(1.02)',
          },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
}
