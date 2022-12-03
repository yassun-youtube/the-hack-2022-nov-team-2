/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      pokeBlend1: "#EEB2BF",
      pokeBlend2: "#D41E45",
      pokeBlend3: "#1E1848",
      pokeBlend4: "#E2FCEF",
      pokeBlend5: "#9DC0BC",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald"],
  },
};
