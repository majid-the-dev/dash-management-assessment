/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-primary-text' : '#FBFAFC',
        'dark-primary-text' : '#1E1E1E',
        'primary-blue' : '#3366FF'
      }
    },
  },
  plugins: [],
};
