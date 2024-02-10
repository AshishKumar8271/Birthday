/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        }
      },
      bounce: {
        '0%,100%': {transform: 'translateY(-5px)'},
        '50%': {transform: 'translateY(5px)'},
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
        bounce: 'bounce 3s linear infinite',
      }
    },
  },
  plugins: [],
}
