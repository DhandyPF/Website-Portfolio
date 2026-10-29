/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        "3/4": "3 / 4",
        "4/3": "4 / 3",
        "16/9": "16 / 9",
      },
      colors: {
        bgPrimary: '#121316',
        cardSurface: '#1C1E22',
        textMain: '#E8E8ED',
        accentHighlight: '#D4A373',
        borderSubtle: '#2A2D34',
      },
      fontFamily: {
        editorial: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
