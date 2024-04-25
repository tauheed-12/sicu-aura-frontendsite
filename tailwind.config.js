/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '2' : '2 2 0%'
      },
      fontWeight: {
        'desired' : 600
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        'button' : '#261E3B',
        'navbar' : '#201A31',
        'table' : '#0DF5E3'
      },
      colors: {
        'bluish' : '#261E3B',
        'ptext' : '#BCBCBC',
        'capture': '#909090'
      }
    },
  },
  plugins: [],
}

