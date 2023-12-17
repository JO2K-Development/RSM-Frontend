/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xs: 'clamp(0.6rem, 0.5013rem + 0.4156vw, 1rem)',
        sm: 'clamp(0.8rem, 0.7013rem + 0.4156vw, 1.2rem)',
        base: 'clamp(1rem, 0.8519rem + 0.6234vw, 1.2rem)',
        lg: 'clamp(1.4rem, 1.2273rem + 0.7273vw, 2.1rem)',
        xl: 'clamp(1.3rem, 0.8805rem + 1.7662vw, 3rem)'
      }
    }
  },
  plugins: []
};
