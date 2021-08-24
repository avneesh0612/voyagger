module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(300px, -50px) scale(1.3)",
          },
          "66%": {
            transform: "translate(-200px, 200px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        lobster: ["Lobster", "cursive"],
      },
      colors: {
        bgmain: "#fad8d2",
        text: "#431B16",
        prussianblue: "#023047",
        redmarker: "#F24A51",
        peachmedium: "#FEC5BB",
        peachdark: "#ffb1a3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
