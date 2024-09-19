/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',    // Vibrant Blue
        secondary: '#50E3C2',  // Soft Turquoise
        accent: '#F5A623',     // Warm Orange
        background: '#F5F7FA', // Light Gray
        textcolor: '#4A4A4A',  // Dark Gray
      },
    },
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