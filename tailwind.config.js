/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#2a75bb',
        'blue': '#3b4cca',
        'dark-blue': '#3c5aa6',
        'poke-red': '#ff0000',
        'dark-red': 'cc0000',
        'mat-black': '#28282B',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#FFDE00',
        'yellow-shadow': '#bba125',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': 'rgba(0, 0, 0, 0.05)',
      },
      container: {
        center: true,
        padding: '2rem'
      },
      fontFamily: {
        sans: ['Helvetica', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '4rem'
      },
      maxWidth: {
        'max-w-2xl': '640px',

      },
      width: {
        '45': '45%',
      }
    },
  },
  plugins: [],
}
