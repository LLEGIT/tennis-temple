/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        main: 'League Spartan Variable,Arial,Helvetica Neue,sans-serif',
      },
      colors: {
        yellowAtp: '#DDFF4F',
      },
    },
  },
  plugins: [],
};
