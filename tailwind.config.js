/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        ping: {
          "10%, 100%": {
            transform: "scale(2)",
            opacity: 0,
          },
        },
      },
      animation: {
        waving: "wave 10s linear infinite",
        ping: "ping 4s cubic-bezier(0, 0, 0.2, 1) infinite;",
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
