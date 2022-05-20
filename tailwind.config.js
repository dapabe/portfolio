module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        champagnePink: "#EFD9CE",
        vaporBlue: "#111122",
        vaporViolet: "#2c2c54",
        sutilBlack: "#1C1B20",
      },
      fontFamily: {
        Comfortaa: ["Comfortaa", "Raleway", "Open-sans", "sans-serif"],
        Raleway: ["Raleway", "Comfortaa", "Open-sans", "sans-serif"],
      },
      animation: {
        slide: "slide 22s linear infinite",
        xBounce: "xBounce 1s infinite",
      },

      keyframes: {
        slide: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-160px * 9))",
          },
        },
        xBounce: {
          "0%": {
            transform: "translateY(-25%) rotate(-90deg)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50% ": {
            transform: "rotate(-90deg)",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
          "100%": {
            transform: "translateY(-25%) rotate(-90deg)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
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
