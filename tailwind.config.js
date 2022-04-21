module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        champagnePink: "#EFD9CE",
        vaporBlue: "#111122",
        vaporViolet: "#2c2c54",
        strongOrange: "#f4583a",
        strongRed: "#cd1e38",
        sutilBlack: "#1C1B20",
        whiteCream: "#EBD8C3",
      },
      fontFamily: {
        Comfortaa: ["Comfortaa", "serif"],
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
      keyframes: {
        wave: {
          "0%": {
            transform: "translateY(0) scaleY(1)",
          },
          "100%": {
            transform: "translateY(-24vw) scaleY(0)",
          },
        },
        scroll: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-200px * 7))",
          },
        },
      },
      screens: {
        mxsm: { max: "639px" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
