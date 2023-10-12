/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pizza-slice": "url('/src/images/pizza-slice.png')",
      },
    },
  },
  plugins: [],
};
