/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the antd's preflight instead (reset.css).
    preflight: false,
  },
  media: false, // or 'media' or 'class',
  important: '#app',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
    extend: {},
  },
};
