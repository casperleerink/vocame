module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#FFFFFF",
      yellow: {
        100: "#FBFBF2",
        200: "#FFFFE8",
      },
      red: {
        900: "#1B0E14",
      },
      salmon: "#DB5461",
    },
    fontFamily: {
      nunito: "'Nunito', sans-serif",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
