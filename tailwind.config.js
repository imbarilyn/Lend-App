/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins Regular', 'Ubuntu', 'sans-serif'],
        'poppins-light': ['Poppins Light', 'Ubuntu', 'san-serif', 'serif'],
        'poppins-medium': ['Poppins Medium', 'Ubuntu', 'san-serif', 'serif'],
        'poppins-bold': ['Poppins Bold', 'Ubuntu', 'san-serif', 'serif'],
        'poppins-extra-light': ['Poppins Extralight', 'Ubuntu', 'san-serif', 'serif'],
        'poppins-thin': ['Poppins Thin', 'Ubuntu', 'san-serif', 'serif'],
        'poppins-semi-bold': ['Poppins Semibold', 'Ubuntu', 'san-serif', 'serif'],
        'poppins-extra-bold': ['Poppins Extrabold', 'Ubuntu', 'san-serif', 'serif']
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

