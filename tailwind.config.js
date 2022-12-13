/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      fugaz: ['Fugaz One', 'cursive'],
    },
    extend: {
      colors: {
        'ipam-s-green': '#476930',
        'ipam-l-green': '#86B049',
        'ipam-l-brown': '#C8B88A',
        'ipam-cream': '#F1DDDF',
      },
    },
  },
  plugins: [],
};
