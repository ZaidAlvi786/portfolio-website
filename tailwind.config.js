/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'], // For headings
        body: ['"Quicksand"', 'Arial', 'sans-serif'],  // For body text
      },
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUpFromDown: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        slideInLeft: 'slideInFromLeft 3s ease-in-out',
        slideInRight: 'slideInFromRight 3s ease-in-out',
        slideUp: 'slideUpFromDown 3s ease-in-out',
      },
    },
  },
  plugins: [],
}

