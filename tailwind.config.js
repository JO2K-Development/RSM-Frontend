/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        lg: 'clamp(1.3rem, 0.8805rem + 1.7662vw, 3rem)',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem'
      }
    }
  },
  plugins: []
};
