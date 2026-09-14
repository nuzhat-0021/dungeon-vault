/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cozy: {
          wood: "#8B5A2B",
          warm: "#FFF8F0",
          amber: "#D97706",
          darkWood: "#4A2E12",
          pastelGreen: "#A7F3D0",
          pastelPink: "#FBCFE8",
          pastelBlue: "#BAE6FD"
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        cozy: ['Quicksand', 'Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}
