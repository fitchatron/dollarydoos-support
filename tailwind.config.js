/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#AE8DBA',
        'brand-secondary': '#47B8D4',
        'brand-tertiary': '#F8D939',
        'brand-red': '#DA3D52',
        'brand-gray': '#858585',
        'brand-green': '#40FC9E',
      }
    },
  },
  plugins: [],
}

