/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'custom-gradient': 'linear-gradient(to bottom, #0066ff 69%, #ccccff 100%)',
    },},
  },
  plugins: [],
}