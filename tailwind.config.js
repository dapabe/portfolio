module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        vaporBlue: "#111122",
        pastelBlue: "#43457f",
        pastelViolet: "#685489",
        pastelMagenta: "#976393",
        pastelOrange: "#ff9b83",
        pastelYellow: "#f3da84",
        pastelRed: "#ab3428",
        lightRed: "#ff5851",
        sutilBlack: "#1C1B20",
      },
      fontFamily: {
        Comfortaa: ["Comfortaa", "serif"],
      },
      transitionTimingFunction: {
        abrupt: "cubic-bezier(1, 0, 0, 1)",
      },
      animation: {
        colorRotation: "hueRotate 60s ease-in-out infinite 5s",
        scroll: "scroll 30s linear infinite",
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
            transform: "translateX(calc(-200px * 9))",
          },
        },
      },
      screens: {
        mxsm: { max: "639px" },
      },
    },
  },
  plugins: [],
};
