/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.fade-in': {
          opacity: '1',
          transform: 'translateY(0)',
          transition: 'opacity 500ms ease-out, transform 500ms ease-out',
        },
        '.fade-out': {
          opacity: '0',
          transform: 'translateY(16px)', // or any value you prefer
          transition: 'opacity 500ms ease-out, transform 500ms ease-out',
        },
      }, ['responsive', 'hover']);
    },
  ],
}