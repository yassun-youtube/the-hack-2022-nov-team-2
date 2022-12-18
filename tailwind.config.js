/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        waving: {
          "0%": { transform: "rotate(45deg)" },
          "10%": { transform: "rotate(90deg)" },
          "20%": { transform: "rotate(0deg)" },
          "30%": { transform: "rotate(45deg)" },
          "40%": { transform: "rotate(45deg)" },
          "50%": { transform: "rotate(90deg)" },
          "60%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(45deg)" },
          "100%": { transform: "rotate(45deg)" },
        },
      },
      animation: {
        spin: "spin 10s linear infinite",
        waving: "waving 5s linear infinite",
      },
    },
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
