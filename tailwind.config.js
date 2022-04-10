module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        vaporBlue: "#111122",
        vaporViolet: "#2c2c54",
        pastelViolet: "#685489",
        strongOrange: "#f4583a",
        strongRed: "#cd1e38",
        sutilBlack: "#1C1B20",
      },
      fontFamily: {
        Comfortaa: ["Comfortaa", "serif"],
      },
      animation: {
        colorRotation: "hueRotate 60s ease-in-out infinite 5s",
        scroll: "scroll 30s linear infinite",
        skeleton: "skeleton-loading 1s linear infinite alternate",
      },
      keyframes: {
        hueRotate: {
          "0%": {
            filter: "hue-rotate(360deg)",
          },
          "100%": {
            filter: "hue-rotate(0deg)",
          },
        },
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
        "skeleton-loading": {
          "0%": {
            "background-color": "hsl(0, 0%, 25%)",
          },
          "100%": {
            "background-color": "hsl(0,0%,10%)",
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
