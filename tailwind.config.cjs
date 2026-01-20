/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        helios: {
          gold: '#FACC15',
          'gold-soft': '#FDE68A',
          'gold-deep': '#EAB308',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-lg': '0 24px 60px rgba(15,23,42,0.7)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top left, rgba(250,204,21,0.15), transparent 55%), radial-gradient(circle at bottom right, rgba(250,204,21,0.08), transparent 55%)',
      },
    },
  },
  plugins: [],
};

