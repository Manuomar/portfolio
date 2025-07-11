/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backdropBlur: {
      sm: '4px',
      DEFAULT: '12px',
      md: '20px',
    },
    },
  },
  plugins: [],
};
