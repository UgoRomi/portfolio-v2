/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
			cursor: {
        'fancy': 'url(./pointer.png), pointer',
      },
      fontFamily: {
        sans: ['var(--font-cal-sans)'],
        josefin: ['var(--font-josefin)'],
      },
    },
  },
  plugins: [],
};
