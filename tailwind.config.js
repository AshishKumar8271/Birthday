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
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
        bounce: 'bounce 3s linear infinite',
      },

      boxShadow: {
        'xl': '0px 0px 12px -2px gray',
      }
    },
  },
  plugins: [],
}
