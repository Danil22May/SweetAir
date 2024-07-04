/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx,js}',
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans-main)', 'Poppins', 'sans-serif'],
        serif: ['var(--font-sans-secondary)', 'Noto sans', 'sans-serif'],
      },
      backgroundImage: {
        'green-gradient': 'linear-gradient(to top, #91D949, #BAEB49)',
        'yellow-gradient': 'linear-gradient(to top, #F7D93C, #FFE455)',
        'orange-gradient': 'linear-gradient(to top, #EE844B, #FD9A65)',
        'pink-gradient': 'linear-gradient(to top, #E7466E, #F66488',
        'red-gradient': 'linear-gradient(to top, #76262B, #9F3A40)',
        'violet-gradient': 'linear-gradient(to top, #C03BC3, #C95ECC)',
        'white-gradient': 'linear-gradient(to top, #FBFBFB, #E9E9E9)',
      },
      colors: {
        white: "rgb(246, 246, 246)",
        darkGrey: "rgb(53, 12, 53)",
      
      }
    },
  },
  plugins: [],
}

